/**
 * CPU Burn Worker
 * Performs CPU-intensive work for a specified duration
 * Used by build-with-timing.mjs for multi-threaded prebuild CPU burn
 */

import { parentPort, workerData } from 'worker_threads';
import { cpus } from 'os';

const { targetSeconds, workerId, totalWorkers } = workerData;

// Calibration: iterations per second on a single Vercel Standard core
// Vercel Standard has 4 vCPU, each running at ~2.5GHz
// Empirically calibrated: ~2,500,000 iterations = 1 second of CPU time per core
const ITERATIONS_PER_SECOND = 2_500_000;

// Each worker runs for the FULL target time (all cores burn in parallel)
// This ensures wall-clock time = targetSeconds
const iterationsPerWorker = Math.ceil(targetSeconds * ITERATIONS_PER_SECOND);

console.log(`[CPU-BURN] Worker ${workerId}/${totalWorkers}: Starting ${iterationsPerWorker.toLocaleString()} iterations`);

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
