/**
 * CPU Burn Worker
 * Performs CPU-intensive work for a specified duration
 * Used by build-with-timing.mjs for multi-threaded prebuild CPU burn
 * 
 * v20: Work is now DIVIDED among workers so more cores = faster builds
 * The total work is calibrated for Standard (4 cores), then divided by actual core count
 */

import { parentPort, workerData } from 'worker_threads';

const { targetSeconds, workerId, totalWorkers, standardCores } = workerData;

// Calibration: iterations per second on a single core
// This determines how much TOTAL work we need for the target time on Standard
// v20: 8.5M (20min build took 32min on Standard - 1.62x too slow)
// v21: 14M (8.5M * 1.62 correction factor)
const ITERATIONS_PER_SECOND_PER_CORE = 14_000_000;

// Standard machine has 4 cores - this is our baseline
const STANDARD_CORES = standardCores || 4;

// Total work needed = targetSeconds worth of work on Standard (4 cores running in parallel)
// We multiply by STANDARD_CORES because all 4 cores work simultaneously
const totalIterations = targetSeconds * ITERATIONS_PER_SECOND_PER_CORE * STANDARD_CORES;

// Divide work among actual workers - more workers = less work per worker = faster completion
const iterationsPerWorker = Math.ceil(totalIterations / totalWorkers);

console.log(`[CPU-BURN] Worker ${workerId}/${totalWorkers}: Starting ${iterationsPerWorker.toLocaleString()} iterations (total work divided by ${totalWorkers} cores)`);

const startTime = Date.now();
let result = workerId; // Seed with worker ID for uniqueness

for (let i = 0; i < iterationsPerWorker; i++) {
  // CPU-intensive math operations that can't be easily optimized away
  result += Math.sin(i * 0.001 + result * 0.0001) * Math.cos(i * 0.002 - result * 0.0001);
  result += Math.sqrt(Math.abs(result + i)) * 0.0001;
  result = Math.atan2(result, i + 1) + Math.log(Math.abs(result) + 1);
  result = result % 1000000; // Prevent overflow
  
  // Log progress every 10%
  if (i > 0 && i % Math.floor(iterationsPerWorker / 10) === 0) {
    const progress = Math.floor((i / iterationsPerWorker) * 100);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`[CPU-BURN] Worker ${workerId}: ${progress}% complete (${elapsed}s elapsed)`);
  }
}

const elapsed = Date.now() - startTime;
console.log(`[CPU-BURN] Worker ${workerId}/${totalWorkers}: Complete in ${(elapsed/1000).toFixed(2)}s, result: ${result.toFixed(4)}`);

// Send result back to main thread
parentPort.postMessage({ workerId, elapsed, result, iterations: iterationsPerWorker });
