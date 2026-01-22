#!/usr/bin/env node
/**
 * Calculate calibration constants from observed build times
 */

// Observed data from Standard machine:
const observed = [
  { branch: '1min', pages: 331, cpuBurn: 0, actualSec: 37, targetSec: 60 },
  { branch: '2min', pages: 815, cpuBurn: 0, actualSec: 64, targetSec: 120 },
  { branch: '4min', pages: 1783, cpuBurn: 0, actualSec: 135, targetSec: 240 },
  { branch: '15min', pages: 2000, cpuBurn: 791, actualSec: 1363, targetSec: 900 },
];

console.log('=== CALIBRATION CALCULATION ===\n');

// Calculate SSG rate from builds without CPU burn
// Using linear regression: time = overhead + (pages * rate)
const ssgOnly = observed.filter(o => o.cpuBurn === 0);

// Use first and last to solve:
// overhead + pages1 * rate = time1
// overhead + pages2 * rate = time2
const p1 = ssgOnly[0].pages, t1 = ssgOnly[0].actualSec;
const p2 = ssgOnly[2].pages, t2 = ssgOnly[2].actualSec;

const rate = (t2 - t1) / (p2 - p1);
const overhead = t1 - (p1 * rate);

console.log('SSG Calibration (from 1min and 4min builds):');
console.log(`  Overhead: ${overhead.toFixed(1)}s`);
console.log(`  Rate: ${rate.toFixed(4)}s/page`);
console.log(`  Max pages (2000): ${(overhead + 2000 * rate).toFixed(1)}s`);

// Verify with 2min
const predicted2min = overhead + ssgOnly[1].pages * rate;
console.log(`  Verify 2min (815 pages): predicted=${predicted2min.toFixed(1)}s, actual=${ssgOnly[1].actualSec}s`);

// Calculate CPU burn multiplier from 15min build
const build15 = observed.find(o => o.branch === '15min');
const ssgTime15 = overhead + build15.pages * rate;
const cpuBurnActual = build15.actualSec - ssgTime15;
const cpuBurnMultiplier = cpuBurnActual / build15.cpuBurn;

console.log('\nCPU Burn Calibration (from 15min build):');
console.log(`  SSG time (2000 pages): ${ssgTime15.toFixed(1)}s`);
console.log(`  CPU burn configured: ${build15.cpuBurn}s`);
console.log(`  CPU burn actual: ${cpuBurnActual.toFixed(1)}s`);
console.log(`  Multiplier: ${cpuBurnMultiplier.toFixed(2)}x`);

// Calculate new parameters for each target
console.log('\n=== NEW PARAMETERS FOR EACH TARGET ===\n');

const targets = [1, 2, 4, 8, 10, 15, 20];
const MAX_PAGES = 2000;

for (const targetMin of targets) {
  const targetSec = targetMin * 60;

  // Calculate pages needed (without CPU burn)
  const pagesNeeded = Math.ceil((targetSec - overhead) / rate);

  if (pagesNeeded <= MAX_PAGES) {
    // SSG only
    const predictedTime = overhead + pagesNeeded * rate;
    console.log(`${targetMin}min (${targetSec}s): ${pagesNeeded} SSG pages, 0s CPU burn → ~${predictedTime.toFixed(0)}s`);
  } else {
    // Need CPU burn
    const ssgTime = overhead + MAX_PAGES * rate;
    const remainingTime = targetSec - ssgTime;
    const cpuBurnConfig = Math.ceil(remainingTime / cpuBurnMultiplier);
    const predictedTime = ssgTime + cpuBurnConfig * cpuBurnMultiplier;
    console.log(`${targetMin}min (${targetSec}s): ${MAX_PAGES} SSG pages, ${cpuBurnConfig}s CPU burn → ~${predictedTime.toFixed(0)}s`);
  }
}

console.log('\n=== CONSTANTS FOR generate-load.mjs ===\n');
console.log(`const BASE_OVERHEAD = ${overhead.toFixed(1)};`);
console.log(`const SECONDS_PER_PAGE = ${rate.toFixed(4)};`);
console.log(`const CPU_BURN_MULTIPLIER = ${cpuBurnMultiplier.toFixed(2)};`);
console.log(`const MAX_SSG_PAGES = ${MAX_PAGES};`);
