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
 * v27: Simple, honest approach:
 * - totalIterations is a FIXED amount of work (from config)
 * - Work is divided equally among available CPU cores
 * - More cores = faster completion (natural parallelism, no fudging)
 * 
 * @param {number} totalIterations - Total iterations to perform across all workers
 * @param {number} numWorkers - Number of worker threads to spawn
 * @returns {Promise<void>}
 */
async function runMultiThreadedCpuBurn(totalIterations, numWorkers) {
  const workerPath = join(__dirname, 'cpu-burn-worker.mjs');
  
  // Check if worker file exists
  if (!existsSync(workerPath)) {
    console.log(`[CPU-BURN] Worker file not found, using inline CPU burn`);
    // Fallback to inline single-threaded burn
    await runInlineCpuBurn(totalIterations);
    return;
  }
  
  const workers = [];
  const promises = [];
  
  // Divide work equally among workers
  const iterationsPerWorker = Math.ceil(totalIterations / numWorkers);
  
  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(workerPath, {
      workerData: {
        workerId: i + 1,
        totalWorkers: numWorkers,
        iterationsPerWorker
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
  const actualTotalIterations = results.reduce((sum, r) => sum + r.iterations, 0);
  const maxElapsed = Math.max(...results.map(r => r.elapsed));
  console.log(`[CPU-BURN] All ${numWorkers} workers complete`);
  console.log(`[CPU-BURN] Total iterations: ${actualTotalIterations.toLocaleString()}`);
  console.log(`[CPU-BURN] Wall clock time: ${(maxElapsed / 1000).toFixed(2)}s`);
}

/**
 * Fallback inline CPU burn (single-threaded)
 * Used when worker file is not available
 */
async function runInlineCpuBurn(totalIterations) {
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

// Build run metadata
const runId = `build-${Date.now()}`;
const buildTimestamp = new Date().toISOString();
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
    prebuildCpuBurnIterations: configFromFile.prebuildCpuBurnIterations || 0,
  },
  system: {
    cpuCount: cpus().length,
    cpuModel: cpus()[0]?.model || 'unknown',
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

// Persist runId for client-side deployment beacon
try {
  const generatedDir = join(projectRoot, 'src', 'generated');
  mkdirSync(generatedDir, { recursive: true });
  const runIdFile = join(generatedDir, 'run-id.ts');
  writeFileSync(
    runIdFile,
    `export const buildRunId = '${runId}';\nexport const buildTimestamp = '${buildTimestamp}';\n`
  );
  console.log(`[TIMING] Wrote runId for client beacon: ${runIdFile}`);
} catch (error) {
  console.warn('[TIMING] Failed to write runId for client beacon:', error);
}

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

async function attemptDeploymentRecord(runId) {
  const deploymentHost = process.env.VERCEL_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (!deploymentHost) {
    console.warn('[TIMING] No deployment host available for record-deploy');
    return;
  }

  const url = `https://${deploymentHost}/api/record-deploy`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ runId, deploymentTime: new Date().toISOString(), source: 'build-script' }),
      signal: controller.signal,
    });
    console.log(`[TIMING] record-deploy response: ${response.status}`);
  } catch (error) {
    console.warn('[TIMING] record-deploy attempt failed:', error);
  } finally {
    clearTimeout(timeout);
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

  // v27: Execute prebuild CPU burn if configured (multi-threaded, real work)
  // Uses total iterations - a fixed amount of work that scales naturally with core count
  const prebuildCpuBurnIterations = configFromFile.prebuildCpuBurnIterations || 0;
  if (prebuildCpuBurnIterations > 0) {
    console.log(`\n[TIMING] 2.5. PREBUILD CPU BURN (Multi-threaded)`);
    const reportedCpus = cpus().length;
    const maxWorkers = config.MachineType === 'Standard' ? 4 : reportedCpus;
    const numCpus = Math.min(reportedCpus, maxWorkers);
    console.log(`[TIMING]    Total iterations: ${prebuildCpuBurnIterations.toLocaleString()}`);
    console.log(`[TIMING]    CPU cores reported: ${reportedCpus}`);
    console.log(`[TIMING]    CPU workers used: ${numCpus}`);
    console.log(`[TIMING]    Starting ${numCpus} workers...`);
    
    const cpuBurnStart = Date.now();
    await runMultiThreadedCpuBurn(prebuildCpuBurnIterations, numCpus);
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

  // Calculate total build time (without deployment)
  timingData.durations.totalMs = 
    new Date(timingData.timestamps.compilationFinished).getTime() - 
    new Date(timingData.timestamps.buildStarted).getTime();

  // Phase 4: Deployment completion is recorded asynchronously by the app runtime
  // (client beacon + record-deploy API). Leave deployment times null here.
  console.log('\n' + '='.repeat(60));
  console.log('[TIMING] Build Summary:');
  console.log(`[TIMING]   Compilation time: ${timingData.durations.totalMs}ms (${(timingData.durations.totalMs / 1000).toFixed(2)}s)`);
  console.log('[TIMING]   Trigger2Ready time: pending (recorded after deployment)');
  console.log('='.repeat(60));

  await uploadTimingData('build_complete');

  // Best-effort: try to record deployment completion (may fail if not ready yet)
  await attemptDeploymentRecord(runId);
}

main().catch((error) => {
  console.error('[BUILD] Build failed:', error);
  process.exit(1);
});
