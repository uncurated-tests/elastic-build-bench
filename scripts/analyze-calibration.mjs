#!/usr/bin/env node
import { list } from '@vercel/blob';

async function analyzeCalibration() {
  const result = await list({ prefix: 'timing/', limit: 100 });

  const timings = [];
  for (const blob of result.blobs) {
    const res = await fetch(blob.url);
    const data = await res.json();
    timings.push(data);
  }

  // Group by branch - only get Standard machine data for calibration
  const grouped = {};
  for (const t of timings) {
    if (t.config?.MachineType !== 'Standard') continue;
    const branch = t.gitBranch;
    if (!grouped[branch]) grouped[branch] = [];
    grouped[branch].push(t);
  }

  console.log('=== CALIBRATION ANALYSIS (Standard Machine) ===\n');
  console.log('Branch                 | Target | Actual | SSG Pages | CPU Burn | Rate');
  console.log('-----------------------|--------|--------|-----------|----------|------');

  const rows = [];
  for (const [branch, records] of Object.entries(grouped)) {
    const latest = records.sort((a, b) =>
      new Date(b.timestamps?.buildStarted || 0) - new Date(a.timestamps?.buildStarted || 0)
    )[0];

    const targetMin = parseInt(branch.match(/(\d+)min/)?.[1] || '0');
    const targetSec = targetMin * 60;
    const actualSec = latest.durations?.compilationPhaseMs ? latest.durations.compilationPhaseMs / 1000 : 0;
    const ssgPages = latest.config?.ssgPages || 0;
    const cpuBurn = latest.config?.prebuildCpuBurnSeconds || 0;

    // Calculate effective rate
    const ratio = targetSec / actualSec;

    rows.push({
      branch,
      targetMin,
      targetSec,
      actualSec: Math.round(actualSec),
      ssgPages,
      cpuBurn,
      ratio: ratio.toFixed(2)
    });
  }

  rows.sort((a, b) => a.targetMin - b.targetMin);

  for (const r of rows) {
    console.log(
      r.branch.padEnd(22) + ' | ' +
      (r.targetSec + 's').padStart(6) + ' | ' +
      (r.actualSec + 's').padStart(6) + ' | ' +
      String(r.ssgPages).padStart(9) + ' | ' +
      (r.cpuBurn + 's').padStart(8) + ' | ' +
      r.ratio + 'x'
    );
  }

  console.log('\n=== DERIVED CALIBRATION CONSTANTS ===\n');

  // For builds without CPU burn, calculate time per SSG page
  const ssgOnlyBuilds = rows.filter(r => r.cpuBurn === 0 && r.ssgPages > 0);
  if (ssgOnlyBuilds.length > 0) {
    console.log('SSG-only builds (no CPU burn):');
    for (const r of ssgOnlyBuilds) {
      const timePerPage = r.actualSec / r.ssgPages;
      console.log(`  ${r.branch}: ${r.actualSec}s / ${r.ssgPages} pages = ${timePerPage.toFixed(4)}s/page`);
    }
  }

  // For builds with CPU burn, calculate effective CPU burn rate
  const cpuBurnBuilds = rows.filter(r => r.cpuBurn > 0);
  if (cpuBurnBuilds.length > 0) {
    console.log('\nCPU burn builds:');
    for (const r of cpuBurnBuilds) {
      // Estimate SSG time based on pages (using ~0.045s/page + 19s overhead from current formula)
      const estimatedSsgTime = 19 + (r.ssgPages * 0.045);
      const actualCpuBurnTime = r.actualSec - estimatedSsgTime;
      const cpuBurnRate = actualCpuBurnTime / r.cpuBurn;
      console.log(`  ${r.branch}: actual=${r.actualSec}s, ssgEst=${Math.round(estimatedSsgTime)}s, cpuBurnConfig=${r.cpuBurn}s, actualCpuBurn≈${Math.round(actualCpuBurnTime)}s, rate=${cpuBurnRate.toFixed(2)}x`);
    }
  }

  console.log('\n=== RECOMMENDED NEW PARAMETERS ===\n');

  // Based on observed data, recommend new parameters
  // The key insight: we need to calculate what SSG page count or CPU burn actually produces the target time

  for (const r of rows) {
    if (r.cpuBurn === 0) {
      // SSG-only: scale pages proportionally
      const newPages = Math.round(r.ssgPages * r.ratio);
      console.log(`${r.branch}: ${r.ssgPages} → ${newPages} SSG pages (${r.ratio}x scale)`);
    } else {
      // CPU burn: need to adjust both
      // The 15min build took 1363s with 791s CPU burn configured
      // That means CPU burn ran at ~1.5x on Standard (single-threaded)
      const cpuBurnActualRate = (r.actualSec - 109) / r.cpuBurn; // 109 = 19 overhead + 90 max SSG
      const newCpuBurn = Math.round((r.targetSec - 109) / cpuBurnActualRate);
      console.log(`${r.branch}: cpuBurn ${r.cpuBurn}s → ${Math.max(0, newCpuBurn)}s (rate=${cpuBurnActualRate.toFixed(2)}x)`);
    }
  }
}

analyzeCalibration().catch(console.error);
