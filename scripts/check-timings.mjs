#!/usr/bin/env node
import { list } from '@vercel/blob';

async function fetchTimings() {
  const result = await list({ prefix: 'timing/', limit: 100 });

  const timings = [];
  for (const blob of result.blobs) {
    const res = await fetch(blob.url);
    const data = await res.json();
    timings.push(data);
  }

  // Group by branch and machine type
  const grouped = {};
  for (const t of timings) {
    const key = t.gitBranch + '|' + (t.config?.MachineType || 'unknown');
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(t);
  }

  // Get latest for each
  console.log('Branch                    | Machine    | Build Time |  E2E Time | Target');
  console.log('--------------------------|------------|------------|-----------|-------');

  const rows = [];
  for (const [key, records] of Object.entries(grouped)) {
    const latest = records.sort((a, b) => new Date(b.timestamps?.buildStarted || 0) - new Date(a.timestamps?.buildStarted || 0))[0];
    const [branch, machine] = key.split('|');
    const buildSec = latest.durations?.compilationPhaseMs ? (latest.durations.compilationPhaseMs / 1000).toFixed(0) : 'N/A';
    const e2eSec = latest.durations?.totalWithDeploymentMs ? (latest.durations.totalWithDeploymentMs / 1000).toFixed(0) : 'N/A';
    const target = latest.config?.BuildTimeOnStandard || 'N/A';
    rows.push({ branch, machine, buildSec, e2eSec, target });
  }

  // Sort by target minutes then machine
  rows.sort((a, b) => {
    const aMin = parseInt(a.branch.match(/\d+/)?.[0] || '0');
    const bMin = parseInt(b.branch.match(/\d+/)?.[0] || '0');
    if (aMin !== bMin) return aMin - bMin;
    const machineOrder = { Standard: 1, Enhanced: 2, Turbo: 3 };
    return (machineOrder[a.machine] || 99) - (machineOrder[b.machine] || 99);
  });

  for (const r of rows) {
    console.log(r.branch.padEnd(25) + ' | ' + r.machine.padEnd(10) + ' | ' + (r.buildSec + 's').padStart(10) + ' | ' + (r.e2eSec + 's').padStart(9) + ' | ' + r.target);
  }
}

fetchTimings().catch(console.error);
