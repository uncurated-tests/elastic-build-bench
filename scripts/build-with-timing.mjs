#!/usr/bin/env node
/**
 * Build script with timing instrumentation
 * Logs timestamps to Vercel Blob storage for build performance tracking
 * 
 * Environment variables:
 *   BUILD_MINUTES - Target build time in minutes (e.g., "1", "2", "4")
 *   E2E_MULTIPLIER - E2E time multiplier (default: 2)
 */

import { put } from '@vercel/blob';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const configPath = join(projectRoot, 'build-config.json');

// Get build target from environment variable
const buildMinutes = parseInt(process.env.BUILD_MINUTES || '0', 10);
const e2eMultiplier = parseInt(process.env.E2E_MULTIPLIER || '2', 10);

// Component counts based on measured build rates
// ~28-35 components/second on Vercel Standard machine
const COMPONENT_TARGETS = {
  1: 1680,    // ~1min build time (28 comp/s)
  2: 3480,    // ~2min build time (29 comp/s)
  4: 8400,    // ~4min build time (35 comp/s)
  8: 16800,   // ~8min build time (35 comp/s)
  10: 21000,  // ~10min build time (35 comp/s)
};

// Generate synthetic load if BUILD_MINUTES is set
if (buildMinutes > 0) {
  console.log(`[LOAD] Generating synthetic load for ${buildMinutes}min build target...`);
  generateSyntheticLoad(buildMinutes, e2eMultiplier);
}

// Get git branch early to parse config from branch name
function getGitBranchEarly() {
  if (process.env.VERCEL_GIT_COMMIT_REF) {
    return process.env.VERCEL_GIT_COMMIT_REF;
  }
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: projectRoot, encoding: 'utf-8' }).trim();
    return branch === 'HEAD' ? 'main' : branch;
  } catch {
    return 'main';
  }
}

// Parse config from branch name (e.g., "build-8min-3xtotal" -> { buildMinutes: 8, multiplier: 3 })
function parseConfigFromBranch(branchName) {
  const match = branchName.match(/build-(\d+)min-(\d+)xtotal/);
  if (match) {
    return {
      buildMinutes: parseInt(match[1], 10),
      multiplier: parseInt(match[2], 10)
    };
  }
  return null;
}

const gitBranchForConfig = getGitBranchEarly();
const parsedConfig = parseConfigFromBranch(gitBranchForConfig);

console.log('[CONFIG] Git branch:', gitBranchForConfig);
console.log('[CONFIG] Parsed from branch:', parsedConfig);

// Load build config from file as fallback
console.log('[DEBUG] configPath:', configPath);
console.log('[DEBUG] configPath exists:', existsSync(configPath));
const configRaw = readFileSync(configPath, 'utf-8');
console.log('[DEBUG] Raw config content from file:');
console.log(configRaw);
const configFromFile = JSON.parse(configRaw);

// Build final config - prefer branch-parsed values, fallback to file
const config = {
  BuildTimeOnStandard: parsedConfig ? `${parsedConfig.buildMinutes}min` : configFromFile.BuildTimeOnStandard,
  FullTimeOnStandard: parsedConfig ? `${parsedConfig.buildMinutes * parsedConfig.multiplier}min` : configFromFile.FullTimeOnStandard,
  MachineType: configFromFile.MachineType || 'Standard',
  components: configFromFile.components,
};

console.log('[CONFIG] Final config:', JSON.stringify(config, null, 2));

// Log the directory contents for debugging
const srcGenerated = join(projectRoot, 'src', 'generated', 'components');
if (existsSync(srcGenerated)) {
  const files = readdirSync(srcGenerated);
  console.log(`[DEBUG] Component count in src/generated/components: ${files.length}`);
} else {
  console.log('[DEBUG] src/generated/components does not exist');
}

/**
 * Generate synthetic components for build load testing
 */
function generateSyntheticLoad(minutes, multiplier) {
  const numComponents = COMPONENT_TARGETS[minutes] || Math.floor(minutes * 1680);
  const numApiRoutes = Math.floor((multiplier - 1) * 100);
  const numStaticPages = Math.floor((multiplier - 1) * 80);
  
  console.log(`[LOAD] Will generate:`);
  console.log(`[LOAD]   - ${numComponents} React components`);
  console.log(`[LOAD]   - ${numApiRoutes} API routes`);
  console.log(`[LOAD]   - ${numStaticPages} static pages`);
  
  // Clean up and create directories
  const generatedDir = join(projectRoot, 'src', 'generated');
  if (existsSync(generatedDir)) {
    rmSync(generatedDir, { recursive: true });
  }
  mkdirSync(join(generatedDir, 'components'), { recursive: true });
  
  // Generate components
  console.log('[LOAD] Generating components...');
  const componentExports = [];
  for (let i = 0; i < numComponents; i++) {
    const componentPath = join(generatedDir, 'components', `Component${i}.tsx`);
    writeFileSync(componentPath, generateComponent(i));
    componentExports.push(`export { default as Component${i} } from './components/Component${i}';`);
    
    if ((i + 1) % 500 === 0) {
      console.log(`[LOAD]   Generated ${i + 1}/${numComponents} components`);
    }
  }
  
  // Write index file
  writeFileSync(join(generatedDir, 'index.ts'), componentExports.join('\n'));
  
  // Generate static pages that import components
  const pagesDir = join(projectRoot, 'src', 'app', 'bench');
  if (existsSync(pagesDir)) {
    rmSync(pagesDir, { recursive: true });
  }
  
  if (numStaticPages > 0) {
    console.log('[LOAD] Generating static pages...');
    for (let i = 0; i < numStaticPages; i++) {
      const pageDir = join(pagesDir, `page${i}`);
      mkdirSync(pageDir, { recursive: true });
      writeFileSync(join(pageDir, 'page.tsx'), generateStaticPage(i, numComponents, numStaticPages));
    }
  }
  
  // Update build config
  const newConfig = {
    BuildTimeOnStandard: `${minutes}min`,
    FullTimeOnStandard: `${minutes * multiplier}min`,
    MachineType: 'Standard',
    components: numComponents,
    apiRoutes: numApiRoutes,
    staticPages: numStaticPages
  };
  writeFileSync(configPath, JSON.stringify(newConfig, null, 2) + '\n');
  
  console.log(`[LOAD] Generation complete!`);
}

function generateComponent(index) {
  return `'use client';
import React, { useState, useEffect, useMemo, useCallback, useRef, memo } from 'react';

interface Props${index} {
  data: { id: string; name: string; values: number[]; nested: { level1: { level2: { level3: { value: string } } } } };
  onUpdate?: (data: Props${index}['data']) => void;
}

function useComputation${index}(input: number[]): number {
  return useMemo(() => {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < 10; j++) {
        result += Math.sin(input[i] + j) * Math.cos(input[i] - j) * Math.tan((input[i] + j) * 0.1 + 0.01);
      }
    }
    return result;
  }, [input]);
}

const Component${index} = memo(function Component${index}({ data, onUpdate }: Props${index}) {
  const [state, setState] = useState({ loading: false, computed: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const computation = useComputation${index}(data.values);
  
  const handleClick = useCallback(() => {
    if (onUpdate) onUpdate({ ...data, values: data.values.map(v => v * 2) });
  }, [data, onUpdate]);

  useEffect(() => {
    setState(prev => ({ ...prev, computed: computation }));
  }, [computation]);

  return (
    <div ref={ref} onClick={handleClick} className="p-4 border rounded-lg hover:shadow-md">
      <h3 className="font-semibold">Component ${index}</h3>
      <div className="mt-2 text-sm space-y-1">
        <p>Computation: {computation.toFixed(4)}</p>
        <p>ID: {data.id}</p>
        <p>Nested: {data.nested.level1.level2.level3.value}</p>
      </div>
    </div>
  );
});

Component${index}.displayName = 'Component${index}';
export default Component${index};
`;
}

function generateStaticPage(index, componentCount, totalPages) {
  const batchSize = Math.ceil(componentCount / Math.max(1, totalPages));
  const startComponent = index * batchSize;
  const endComponent = Math.min(startComponent + batchSize, componentCount);
  
  const imports = [];
  const components = [];
  
  for (let i = startComponent; i < endComponent; i++) {
    imports.push(`import Component${i} from '@/generated/components/Component${i}';`);
    components.push(`Component${i}`);
  }
  
  return `${imports.join('\n')}

const sampleData = {
  id: 'page-${index}',
  name: 'Benchmark Page ${index}',
  values: [1, 2, 3, 4, 5],
  nested: { level1: { level2: { level3: { value: 'deep-${index}' } } } },
};

export default function BenchPage${index}() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Benchmark Page ${index}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[${components.join(', ')}].map((Component, idx) => (
          <Component key={idx} data={sampleData} />
        ))}
      </div>
    </div>
  );
}
`;
}

/**
 * Multi-threaded CPU burn using worker threads
 * Each worker performs CPU-intensive calculations to consume real CPU time
 * 
 * @param {number} targetSeconds - Target duration in seconds
 * @param {number} numWorkers - Number of worker threads to spawn
 * @returns {Promise<void>}
 */
async function runMultiThreadedCpuBurn(targetSeconds, numWorkers) {
  const workerPath = join(__dirname, 'cpu-burn-worker.mjs');
  
  // Check if worker file exists
  if (!existsSync(workerPath)) {
    console.log(`[CPU-BURN] Worker file not found, using inline CPU burn`);
    // Fallback to inline single-threaded burn
    await runInlineCpuBurn(targetSeconds);
    return;
  }
  
  const workers = [];
  const promises = [];
  
  // Standard machine has 4 cores - this is our baseline for calibration
  const STANDARD_CORES = 4;
  
  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(workerPath, {
      workerData: {
        targetSeconds,
        workerId: i + 1,
        totalWorkers: numWorkers,
        standardCores: STANDARD_CORES
      }
    });
    
    workers.push(worker);
    
    promises.push(new Promise((resolve, reject) => {
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker ${i + 1} exited with code ${code}`));
        }
      });
    }));
  }
  
  // Wait for all workers to complete
  const results = await Promise.all(promises);
  
  // Log summary
  const totalIterations = results.reduce((sum, r) => sum + r.iterations, 0);
  const maxElapsed = Math.max(...results.map(r => r.elapsed));
  console.log(`[CPU-BURN] All ${numWorkers} workers complete`);
  console.log(`[CPU-BURN] Total iterations: ${totalIterations.toLocaleString()}`);
  console.log(`[CPU-BURN] Wall clock time: ${(maxElapsed / 1000).toFixed(2)}s`);
}

/**
 * Fallback inline CPU burn (single-threaded)
 * Used when worker file is not available
 */
async function runInlineCpuBurn(targetSeconds) {
  const ITERATIONS_PER_SECOND = 2_500_000;
  const totalIterations = targetSeconds * ITERATIONS_PER_SECOND;
  
  console.log(`[CPU-BURN] Running inline burn: ${totalIterations.toLocaleString()} iterations`);
  
  const startTime = Date.now();
  let result = 0;
  
  for (let i = 0; i < totalIterations; i++) {
    result += Math.sin(i * 0.001 + result * 0.0001) * Math.cos(i * 0.002 - result * 0.0001);
    result += Math.sqrt(Math.abs(result + i)) * 0.0001;
    result = Math.atan2(result, i + 1) + Math.log(Math.abs(result) + 1);
    result = result % 1000000;
    
    if (i > 0 && i % Math.floor(totalIterations / 10) === 0) {
      const progress = Math.floor((i / totalIterations) * 100);
      console.log(`[CPU-BURN] Progress: ${progress}%`);
    }
  }
  
  const elapsed = (Date.now() - startTime) / 1000;
  console.log(`[CPU-BURN] Inline burn complete: ${elapsed.toFixed(2)}s, result: ${result.toFixed(4)}`);
}

// Detect machine type from Vercel project name
function detectMachineType() {
  // VERCEL_PROJECT_PRODUCTION_URL contains the project name
  // e.g., "elastic-build-bench.vercel.app", "elastic-build-bench-enhanced.vercel.app"
  const projectUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || '';
  const projectName = process.env.VERCEL_PROJECT || '';
  
  console.log(`[TIMING] Detecting machine type from project: ${projectUrl || projectName}`);
  
  if (projectUrl.includes('-turbo') || projectName.includes('-turbo')) {
    return 'Turbo';
  } else if (projectUrl.includes('-enhanced') || projectName.includes('-enhanced')) {
    return 'Enhanced';
  } else {
    return 'Standard';
  }
}

// Override machine type based on Vercel project
const machineType = detectMachineType();
config.MachineType = machineType;

// Field ratios for calculating Target Trigger2Ready from Target Compilation
const FIELD_RATIOS = {
  1: 1.82,
  2: 1.38,
  4: 1.28,
  5: 1.23,
  8: 1.19,
  10: 1.14,
  15: 1.10,
  20: 1.09,
  30: 1.11,
};

function parseBuildMinutes(label) {
  if (!label) return null;
  const match = String(label).match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

function getFieldRatio(buildMin) {
  if (!buildMin) return null;
  if (FIELD_RATIOS[buildMin]) return FIELD_RATIOS[buildMin];
  // Approximate using formula: multiplier ≈ 1 + (0.82 / buildMinutes^0.6)
  return 1 + (0.82 / Math.pow(buildMin, 0.6));
}

function getTargetTrigger2ReadyMs(buildTimeLabel) {
  const buildMin = parseBuildMinutes(buildTimeLabel);
  if (!buildMin) return null;
  const ratio = getFieldRatio(buildMin);
  if (!ratio) return null;
  return Math.round(buildMin * ratio * 60 * 1000);
}

function getDeployBufferMs(type) {
  const override = process.env.TRIGGER2READY_DEPLOY_BUFFER_MS;
  if (override) {
    const parsed = parseInt(override, 10);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  // Buffer for post-build overhead: upload, edge propagation, DNS (~80-90s observed)
  // This is time AFTER our delay until deployment is truly ready
  const buffers = {
    Standard: 85000,
    Enhanced: 85000,
    Turbo: 85000,
  };
  return buffers[type] ?? 85000;
}

// Build run metadata
const runId = `build-${Date.now()}`;
const gitCommit = getGitCommit();
const gitBranch = getGitBranch();
const deploymentId = process.env.VERCEL_DEPLOYMENT_ID || null;

// Get Vercel project name for constructing inspection URLs
function getVercelProjectName() {
  // VERCEL_PROJECT_PRODUCTION_URL format: "project-name.vercel.app"
  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || '';
  if (productionUrl) {
    return productionUrl.replace('.vercel.app', '');
  }
  return null;
}

const vercelProjectName = getVercelProjectName();

// Timing data structure
const timingData = {
  runId,
  gitCommit,
  gitBranch,
  deploymentId,
  vercelProjectName,
  config: {
    BuildTimeOnStandard: config.BuildTimeOnStandard,
    FullTimeOnStandard: config.FullTimeOnStandard,
    MachineType: config.MachineType,
  },
  timestamps: {
    buildStarted: null,
    dependenciesReady: null,
    compilationFinished: null,
    deploymentComplete: null,
  },
  durations: {
    dependencyPhaseMs: null,
    compilationPhaseMs: null,
    deploymentPhaseMs: null,
    totalMs: null,
  },
};

function getGitCommit() {
  try {
    return execSync('git rev-parse HEAD', { cwd: projectRoot, encoding: 'utf-8' }).trim();
  } catch {
    return 'unknown';
  }
}

function getGitBranch() {
  // Prefer Vercel's environment variable (more reliable in CI)
  if (process.env.VERCEL_GIT_COMMIT_REF) {
    return process.env.VERCEL_GIT_COMMIT_REF;
  }
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: projectRoot, encoding: 'utf-8' }).trim();
    // In detached HEAD state, this returns "HEAD"
    if (branch === 'HEAD') {
      return 'unknown';
    }
    return branch;
  } catch {
    return 'unknown';
  }
}

function timestamp() {
  return new Date().toISOString();
}

async function uploadTimingData(phase) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  console.log(`[TIMING] Attempting blob upload for phase '${phase}'...`);
  console.log(`[TIMING] BLOB_READ_WRITE_TOKEN present: ${token ? 'yes (' + token.substring(0, 20) + '...)' : 'NO'}`);
  
  if (!token) {
    console.log(`[TIMING] Skipping blob upload - no BLOB_READ_WRITE_TOKEN (phase: ${phase})`);
    return;
  }

  try {
    // Use phase-specific filename to avoid overwrite issues
    // Final file will contain all data
    const filename = `timing/${runId}-${phase}.json`;
    console.log(`[TIMING] Uploading to: ${filename}`);
    console.log(`[TIMING] Data: ${JSON.stringify(timingData, null, 2).substring(0, 200)}...`);
    
    const blob = await put(filename, JSON.stringify(timingData, null, 2), {
      access: 'public',
      addRandomSuffix: false,
    });
    console.log(`[TIMING] SUCCESS! Uploaded timing data for phase '${phase}': ${blob.url}`);
  } catch (error) {
    console.error(`[TIMING] FAILED to upload timing data for phase '${phase}'`);
    console.error(`[TIMING] Error name: ${error.name}`);
    console.error(`[TIMING] Error message: ${error.message}`);
    console.error(`[TIMING] Error stack: ${error.stack}`);
  }
}

function runCommand(command, description) {
  console.log(`\n[BUILD] ${description}...`);
  console.log(`[BUILD] Running: ${command}`);
  try {
    execSync(command, { 
      cwd: projectRoot, 
      stdio: 'inherit',
      env: { ...process.env }
    });
  } catch (error) {
    console.error(`[BUILD] Command failed: ${command}`);
    throw error;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('[TIMING] Build with Timing Instrumentation');
  console.log('='.repeat(60));
  console.log(`[TIMING] Run ID: ${runId}`);
  console.log(`[TIMING] Git Commit: ${gitCommit}`);
  console.log(`[TIMING] Git Branch: ${gitBranch}`);
  console.log(`[TIMING] Deployment ID: ${deploymentId || 'not available'}`);
  console.log(`[TIMING] Project Name: ${vercelProjectName || 'not available'}`);
  console.log(`[TIMING] Config:`, JSON.stringify(config, null, 2));
  console.log('='.repeat(60));

  // Phase 1: Build Started
  timingData.timestamps.buildStarted = timestamp();
  console.log(`\n[TIMING] 1. BUILD STARTED: ${timingData.timestamps.buildStarted}`);
  await uploadTimingData('build_started');

  // Phase 2: Dependencies Ready (git clone + dep download + install already done by Vercel)
  // In Vercel's build process, dependencies are installed before this script runs
  // So we mark this immediately
  timingData.timestamps.dependenciesReady = timestamp();
  timingData.durations.dependencyPhaseMs = 
    new Date(timingData.timestamps.dependenciesReady).getTime() - 
    new Date(timingData.timestamps.buildStarted).getTime();
  console.log(`\n[TIMING] 2. DEPENDENCIES READY: ${timingData.timestamps.dependenciesReady}`);
  console.log(`[TIMING]    Dependency phase duration: ${timingData.durations.dependencyPhaseMs}ms`);
  await uploadTimingData('dependencies_ready');

  // Log PostCSS CPU burn config if present
  const postcssCpuBurnIterations = configFromFile.postcssCpuBurnIterations || 0;
  if (postcssCpuBurnIterations > 0) {
    console.log(`\n[TIMING] 2.5. POSTCSS CPU BURN ENABLED`);
    console.log(`[TIMING]    Iterations per CSS file: ${postcssCpuBurnIterations.toLocaleString()}`);
    console.log(`[TIMING]    This adds CPU work during PostCSS processing`);
  }

  // v17: Execute prebuild CPU burn if configured (multi-threaded, real work)
  const prebuildCpuBurnSeconds = configFromFile.prebuildCpuBurnSeconds || 0;
  if (prebuildCpuBurnSeconds > 0) {
    console.log(`\n[TIMING] 2.5. PREBUILD CPU BURN (Multi-threaded)`);
    const numCpus = cpus().length;
    console.log(`[TIMING]    Target duration: ${prebuildCpuBurnSeconds}s`);
    console.log(`[TIMING]    Available CPUs: ${numCpus}`);
    console.log(`[TIMING]    Starting ${numCpus} workers for real CPU work...`);
    
    const cpuBurnStart = Date.now();
    await runMultiThreadedCpuBurn(prebuildCpuBurnSeconds, numCpus);
    const cpuBurnDuration = (Date.now() - cpuBurnStart) / 1000;
    
    console.log(`[TIMING]    Prebuild CPU burn complete in ${cpuBurnDuration.toFixed(2)}s`);
  }
  
  // v11 fallback: Execute prebuild delay if configured (sleep-based, for backwards compatibility)
  const prebuildDelaySeconds = configFromFile.prebuildDelaySeconds || 0;
  if (prebuildDelaySeconds > 0 && prebuildCpuBurnSeconds === 0) {
    console.log(`\n[TIMING] 2.5. PREBUILD DELAY (Sleep-based fallback)`);
    console.log(`[TIMING]    Sleeping for ${prebuildDelaySeconds}s to reach target build time...`);
    await new Promise(resolve => setTimeout(resolve, prebuildDelaySeconds * 1000));
    console.log(`[TIMING]    Prebuild delay complete.`);
  }

  // Phase 3: Run Next.js build (compilation)
  runCommand('next build', 'Running Next.js compilation');
  
  timingData.timestamps.compilationFinished = timestamp();
  timingData.durations.compilationPhaseMs = 
    new Date(timingData.timestamps.compilationFinished).getTime() - 
    new Date(timingData.timestamps.dependenciesReady).getTime();
  console.log(`\n[TIMING] 3. COMPILATION FINISHED: ${timingData.timestamps.compilationFinished}`);
  console.log(`[TIMING]    Compilation phase duration: ${timingData.durations.compilationPhaseMs}ms`);
  await uploadTimingData('compilation_finished');

  // Phase 3.5: Post-compilation delay to align Trigger2Ready target
  const targetT2RMs = getTargetTrigger2ReadyMs(config.BuildTimeOnStandard);
  if (targetT2RMs) {
    const elapsedMs = new Date(timingData.timestamps.compilationFinished).getTime() -
      new Date(timingData.timestamps.buildStarted).getTime();
    const deployBufferMs = getDeployBufferMs(config.MachineType);
    const jitterMs = process.env.TRIGGER2READY_DISABLE_JITTER ? 0 : Math.floor((Math.random() * 6000) - 3000);
    const fixedDelayOverride = process.env.TRIGGER2READY_DELAY_MS;
    const computedDelayMs = targetT2RMs - elapsedMs - deployBufferMs + jitterMs;
    let delayMs = Math.max(0, computedDelayMs);
    if (fixedDelayOverride) {
      const parsed = parseInt(fixedDelayOverride, 10);
      delayMs = Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
    }
    const MAX_DELAY_MS = 10 * 60 * 1000;
    const finalDelayMs = Math.min(delayMs, MAX_DELAY_MS);

    if (finalDelayMs > 0) {
      console.log(`\n[TIMING] 3.5. POST-COMPILATION DELAY`);
      console.log(`[TIMING]    Target Trigger2Ready: ${(targetT2RMs / 1000).toFixed(2)}s`);
      console.log(`[TIMING]    Elapsed build time: ${(elapsedMs / 1000).toFixed(2)}s`);
      console.log(`[TIMING]    Deploy buffer: ${(deployBufferMs / 1000).toFixed(2)}s`);
      console.log(`[TIMING]    Jitter: ${(jitterMs / 1000).toFixed(2)}s`);
      console.log(`[TIMING]    Sleeping for ${(finalDelayMs / 1000).toFixed(2)}s to align Trigger2Ready...`);
      await new Promise(resolve => setTimeout(resolve, finalDelayMs));
      console.log(`[TIMING]    Post-compilation delay complete.`);
    } else {
      console.log(`\n[TIMING] 3.5. POST-COMPILATION DELAY`);
      console.log(`[TIMING]    No delay needed (target already met).`);
    }
  }

  // Phase 4: Deployment complete will be logged by the post-deploy script
  // For now, we mark the build output as ready
  console.log(`\n[TIMING] Build output ready. Deployment timing will be recorded post-deploy.`);
  
  // Calculate total build time (without deployment)
  timingData.durations.totalMs = 
    new Date(timingData.timestamps.compilationFinished).getTime() - 
    new Date(timingData.timestamps.buildStarted).getTime();
  
  console.log('\n' + '='.repeat(60));
  console.log('[TIMING] Build Summary:');
  console.log(`[TIMING]   Total build time: ${timingData.durations.totalMs}ms (${(timingData.durations.totalMs / 1000).toFixed(2)}s)`);
  console.log('='.repeat(60));

  await uploadTimingData('build_complete');
}

main().catch((error) => {
  console.error('[BUILD] Build failed:', error);
  process.exit(1);
});
