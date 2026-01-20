#!/usr/bin/env node
/**
 * Build script with timing instrumentation
 * Logs timestamps to Vercel Blob storage for build performance tracking
 */

import { put } from '@vercel/blob';
import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Load build config
const configPath = join(projectRoot, 'build-config.json');
const config = JSON.parse(readFileSync(configPath, 'utf-8'));

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
const gitCommit = getGitCommit();
const gitBranch = getGitBranch();

// Timing data structure
const timingData = {
  runId,
  gitCommit,
  gitBranch,
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
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { cwd: projectRoot, encoding: 'utf-8' }).trim();
  } catch {
    return process.env.VERCEL_GIT_COMMIT_REF || 'unknown';
  }
}

function timestamp() {
  return new Date().toISOString();
}

async function uploadTimingData(phase) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.log(`[TIMING] Skipping blob upload - no BLOB_READ_WRITE_TOKEN (phase: ${phase})`);
    return;
  }

  try {
    // Use phase-specific filename to avoid overwrite issues
    // Final file will contain all data
    const filename = `timing/${runId}-${phase}.json`;
    const blob = await put(filename, JSON.stringify(timingData, null, 2), {
      access: 'public',
      addRandomSuffix: false,
    });
    console.log(`[TIMING] Uploaded timing data for phase '${phase}': ${blob.url}`);
  } catch (error) {
    console.error(`[TIMING] Failed to upload timing data:`, error.message);
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

  // Phase 3: Run Next.js build (compilation)
  runCommand('next build', 'Running Next.js compilation');
  
  timingData.timestamps.compilationFinished = timestamp();
  timingData.durations.compilationPhaseMs = 
    new Date(timingData.timestamps.compilationFinished).getTime() - 
    new Date(timingData.timestamps.dependenciesReady).getTime();
  console.log(`\n[TIMING] 3. COMPILATION FINISHED: ${timingData.timestamps.compilationFinished}`);
  console.log(`[TIMING]    Compilation phase duration: ${timingData.durations.compilationPhaseMs}ms`);
  await uploadTimingData('compilation_finished');

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
