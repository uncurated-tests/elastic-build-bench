#!/usr/bin/env node
import { list } from '@vercel/blob';

// Chart configuration
const CHART_WIDTH = 60;
const CHART_HEIGHT = 20;
const MARKERS = { Standard: '●', Enhanced: '■', Turbo: '▲' };
const COLORS = {
  Standard: '\x1b[34m',  // Blue
  Enhanced: '\x1b[32m',  // Green
  Turbo: '\x1b[33m',     // Yellow
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  bright: '\x1b[1m',
};

function renderChart(dataPoints) {
  // dataPoints: [{ targetMin, actualSec, machine }]

  if (dataPoints.length === 0) {
    console.log('No data points to chart.\n');
    return;
  }

  // Find ranges
  const maxTargetMin = Math.max(...dataPoints.map(d => d.targetMin));
  const maxActualSec = Math.max(...dataPoints.map(d => d.actualSec));

  // Add some padding to max values
  const xMax = Math.ceil(maxTargetMin / 5) * 5 || 20;
  const yMax = Math.ceil(maxActualSec / 60) * 60 || 1200;

  // Create empty chart grid
  const grid = Array(CHART_HEIGHT).fill(null).map(() => Array(CHART_WIDTH).fill(' '));

  // Draw ideal line (y = x * 60, where x is minutes and y is seconds)
  for (let x = 0; x < CHART_WIDTH; x++) {
    const targetMin = (x / CHART_WIDTH) * xMax;
    const idealSec = targetMin * 60;
    const y = Math.round((1 - idealSec / yMax) * (CHART_HEIGHT - 1));
    if (y >= 0 && y < CHART_HEIGHT) {
      grid[y][x] = '·';
    }
  }

  // Group data by machine type
  const byMachine = {};
  for (const d of dataPoints) {
    if (!byMachine[d.machine]) byMachine[d.machine] = [];
    byMachine[d.machine].push(d);
  }

  // Plot points for each machine type
  const plotted = {}; // Track plotted positions to handle overlaps
  for (const [machine, points] of Object.entries(byMachine)) {
    for (const p of points) {
      const x = Math.round((p.targetMin / xMax) * (CHART_WIDTH - 1));
      const y = Math.round((1 - p.actualSec / yMax) * (CHART_HEIGHT - 1));
      if (x >= 0 && x < CHART_WIDTH && y >= 0 && y < CHART_HEIGHT) {
        const key = `${x},${y}`;
        if (!plotted[key]) plotted[key] = [];
        plotted[key].push({ machine, marker: MARKERS[machine] || '○' });
      }
    }
  }

  // Apply plotted points to grid
  for (const [key, items] of Object.entries(plotted)) {
    const [x, y] = key.split(',').map(Number);
    // If multiple points at same location, show first one
    grid[y][x] = items[0].marker;
  }

  // Render chart
  console.log(`${COLORS.bright}Actual Build Time vs Target Build Time${COLORS.reset}`);
  console.log(`${COLORS.dim}(dotted line = ideal where actual = target)${COLORS.reset}\n`);

  // Y-axis labels and grid
  for (let row = 0; row < CHART_HEIGHT; row++) {
    const yVal = yMax * (1 - row / (CHART_HEIGHT - 1));
    const yLabel = row % 4 === 0 ? `${Math.round(yVal / 60)}m`.padStart(4) : '    ';

    let line = '';
    for (let col = 0; col < CHART_WIDTH; col++) {
      const char = grid[row][col];
      // Color the markers
      if (char === MARKERS.Standard) {
        line += `${COLORS.Standard}${char}${COLORS.reset}`;
      } else if (char === MARKERS.Enhanced) {
        line += `${COLORS.Enhanced}${char}${COLORS.reset}`;
      } else if (char === MARKERS.Turbo) {
        line += `${COLORS.Turbo}${char}${COLORS.reset}`;
      } else if (char === '·') {
        line += `${COLORS.dim}${char}${COLORS.reset}`;
      } else {
        line += char;
      }
    }

    const border = row === 0 ? '┌' : row === CHART_HEIGHT - 1 ? '└' : '│';
    console.log(`${yLabel} ${border}${line}│`);
  }

  // X-axis
  console.log('     └' + '─'.repeat(CHART_WIDTH) + '┘');

  // X-axis labels - evenly spaced
  const xLabelCount = 5;
  let xLabelsLine = '      ';
  for (let i = 0; i < xLabelCount; i++) {
    const val = Math.round((i / (xLabelCount - 1)) * xMax);
    const label = `${val}m`;
    const spacing = Math.floor(CHART_WIDTH / (xLabelCount - 1));
    if (i === 0) {
      xLabelsLine += label;
    } else {
      xLabelsLine += label.padStart(spacing);
    }
  }
  console.log(xLabelsLine);
  console.log('      ' + ' '.repeat(CHART_WIDTH / 2 - 8) + 'Target Build Time\n');

  // Legend
  console.log('  Legend:');
  console.log(`    ${COLORS.Standard}${MARKERS.Standard}${COLORS.reset} Standard    ${COLORS.Enhanced}${MARKERS.Enhanced}${COLORS.reset} Enhanced    ${COLORS.Turbo}${MARKERS.Turbo}${COLORS.reset} Turbo    ${COLORS.dim}·${COLORS.reset} Ideal (actual=target)`);
  console.log('');
}

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

  // Get latest for each and build rows
  const rows = [];
  const chartData = [];

  for (const [key, records] of Object.entries(grouped)) {
    const latest = records.sort((a, b) => new Date(b.timestamps?.buildStarted || 0) - new Date(a.timestamps?.buildStarted || 0))[0];
    const [branch, machine] = key.split('|');
    const buildSec = latest.durations?.compilationPhaseMs ? (latest.durations.compilationPhaseMs / 1000) : null;
    const e2eSec = latest.durations?.totalWithDeploymentMs ? (latest.durations.totalWithDeploymentMs / 1000) : null;
    const target = latest.config?.BuildTimeOnStandard || 'N/A';
    const targetMin = parseInt(branch.match(/(\d+)min/)?.[1] || target.match(/(\d+)/)?.[1] || '0');

    rows.push({
      branch,
      machine,
      buildSec: buildSec !== null ? buildSec.toFixed(0) : 'N/A',
      e2eSec: e2eSec !== null ? e2eSec.toFixed(0) : 'N/A',
      target,
      targetMin
    });

    // Add to chart data if we have valid data
    if (buildSec !== null && targetMin > 0 && ['Standard', 'Enhanced', 'Turbo'].includes(machine)) {
      chartData.push({
        targetMin,
        actualSec: buildSec,
        machine
      });
    }
  }

  // Sort by target minutes then machine
  rows.sort((a, b) => {
    if (a.targetMin !== b.targetMin) return a.targetMin - b.targetMin;
    const machineOrder = { Standard: 1, Enhanced: 2, Turbo: 3 };
    return (machineOrder[a.machine] || 99) - (machineOrder[b.machine] || 99);
  });

  // Render chart first
  renderChart(chartData);

  // Then render table
  console.log('─'.repeat(78));
  console.log('Branch                    | Machine    | Build Time |  E2E Time | Target');
  console.log('--------------------------|------------|------------|-----------|-------');

  for (const r of rows) {
    console.log(r.branch.padEnd(25) + ' | ' + r.machine.padEnd(10) + ' | ' + (r.buildSec + 's').padStart(10) + ' | ' + (r.e2eSec + 's').padStart(9) + ' | ' + r.target);
  }
}

fetchTimings().catch(console.error);
