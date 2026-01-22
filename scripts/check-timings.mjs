#!/usr/bin/env node
import { list } from '@vercel/blob';

// Chart configuration
const CHART_WIDTH = 50;
const CHART_HEIGHT = 20;
const CHART_GAP = 4;
const MARKERS = { Standard: '●', Enhanced: '■', Turbo: '▲' };
const COLORS = {
  Standard: '\x1b[34m',  // Blue
  Enhanced: '\x1b[32m',  // Green
  Turbo: '\x1b[33m',     // Yellow
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  bright: '\x1b[1m',
};

// Cost multipliers per machine type (relative to Standard)
const COST_MULTIPLIERS = { Standard: 1, Enhanced: 2, Turbo: 7.5 };

function colorizeChar(char) {
  if (char === MARKERS.Standard) {
    return `${COLORS.Standard}${char}${COLORS.reset}`;
  } else if (char === MARKERS.Enhanced) {
    return `${COLORS.Enhanced}${char}${COLORS.reset}`;
  } else if (char === MARKERS.Turbo) {
    return `${COLORS.Turbo}${char}${COLORS.reset}`;
  } else if (char === '·') {
    return `${COLORS.dim}${char}${COLORS.reset}`;
  }
  return char;
}

function buildChartLines(dataPoints, { title, subtitle, xLabel, yLabelFn, xMax, yMax, idealLineFn }) {
  const lines = [];

  if (dataPoints.length === 0) {
    lines.push('No data points to chart.');
    return lines;
  }

  // Create empty chart grid
  const grid = Array(CHART_HEIGHT).fill(null).map(() => Array(CHART_WIDTH).fill(' '));

  // Draw ideal line if provided
  if (idealLineFn) {
    for (let x = 0; x < CHART_WIDTH; x++) {
      const xVal = (x / CHART_WIDTH) * xMax;
      const idealY = idealLineFn(xVal);
      const y = Math.round((1 - idealY / yMax) * (CHART_HEIGHT - 1));
      if (y >= 0 && y < CHART_HEIGHT) {
        grid[y][x] = '·';
      }
    }
  }

  // Group data by machine type
  const byMachine = {};
  for (const d of dataPoints) {
    if (!byMachine[d.machine]) byMachine[d.machine] = [];
    byMachine[d.machine].push(d);
  }

  // Plot points for each machine type
  const plotted = {};
  for (const [machine, points] of Object.entries(byMachine)) {
    for (const p of points) {
      const x = Math.round((p.x / xMax) * (CHART_WIDTH - 1));
      const y = Math.round((1 - p.y / yMax) * (CHART_HEIGHT - 1));
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
    grid[y][x] = items[0].marker;
  }

  // Build chart lines
  lines.push(`${COLORS.bright}${title}${COLORS.reset}`);
  lines.push(`${COLORS.dim}${subtitle}${COLORS.reset}`);
  lines.push('');

  // Y-axis labels and grid
  for (let row = 0; row < CHART_HEIGHT; row++) {
    const yVal = yMax * (1 - row / (CHART_HEIGHT - 1));
    const yLabel = row % 4 === 0 ? yLabelFn(yVal).padStart(6) : '      ';

    let line = '';
    for (let col = 0; col < CHART_WIDTH; col++) {
      line += colorizeChar(grid[row][col]);
    }

    const border = row === 0 ? '┌' : row === CHART_HEIGHT - 1 ? '└' : '│';
    lines.push(`${yLabel} ${border}${line}│`);
  }

  // X-axis
  lines.push('       └' + '─'.repeat(CHART_WIDTH) + '┘');

  // X-axis labels
  const xLabelCount = 5;
  let xLabelsLine = '        ';
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
  lines.push(xLabelsLine);
  lines.push(' '.repeat(8 + CHART_WIDTH / 2 - xLabel.length / 2) + xLabel);

  return lines;
}

function renderChartsSideBySide(chartData, costData) {
  // Build first chart: Actual Build Time vs Target Build Time
  const maxTargetMin1 = Math.max(...chartData.map(d => d.targetMin), 1);
  const maxActualSec = Math.max(...chartData.map(d => d.actualSec), 60);
  const xMax1 = Math.ceil(maxTargetMin1 / 5) * 5 || 20;
  const yMax1 = Math.ceil(maxActualSec / 60) * 60 || 1200;

  const chart1Data = chartData.map(d => ({ x: d.targetMin, y: d.actualSec, machine: d.machine }));
  const chart1Lines = buildChartLines(chart1Data, {
    title: 'Actual Build Time vs Target Build Time',
    subtitle: '(dotted line = ideal where actual = target)',
    xLabel: 'Target Build Time',
    yLabelFn: (val) => `${Math.round(val / 60)}m`,
    xMax: xMax1,
    yMax: yMax1,
    idealLineFn: (targetMin) => targetMin * 60  // ideal: actual seconds = target minutes * 60
  });

  // Build second chart: Build Cost vs Target Trigger2Ready
  const maxTargetMin2 = Math.max(...costData.map(d => d.targetMin), 1);
  const maxCost = Math.max(...costData.map(d => d.cost), 1);
  const xMax2 = Math.ceil(maxTargetMin2 / 5) * 5 || 20;
  const yMax2 = Math.ceil(maxCost / 100) * 100 || 1000;

  const chart2Data = costData.map(d => ({ x: d.targetMin, y: d.cost, machine: d.machine }));
  const chart2Lines = buildChartLines(chart2Data, {
    title: 'Build Cost ($/sec) vs Target Trigger2Ready',
    subtitle: '(dotted line = Standard cost baseline)',
    xLabel: 'Target Trigger2Ready',
    yLabelFn: (val) => `$${Math.round(val)}`,
    xMax: xMax2,
    yMax: yMax2,
    idealLineFn: (targetMin) => targetMin * 60 * COST_MULTIPLIERS.Standard  // baseline: Standard cost
  });

  // Render side by side
  const maxLines = Math.max(chart1Lines.length, chart2Lines.length);
  for (let i = 0; i < maxLines; i++) {
    const left = chart1Lines[i] || '';
    const right = chart2Lines[i] || '';
    // Calculate visible width (excluding ANSI codes)
    const visibleLeft = left.replace(/\x1b\[[0-9;]*m/g, '');
    const padding = CHART_WIDTH + 14 - visibleLeft.length;
    console.log(left + ' '.repeat(Math.max(CHART_GAP, padding)) + right);
  }

  // Legend (shared)
  console.log('');
  console.log('  Legend:');
  console.log(`    ${COLORS.Standard}${MARKERS.Standard}${COLORS.reset} Standard (1x)    ${COLORS.Enhanced}${MARKERS.Enhanced}${COLORS.reset} Enhanced (2x)    ${COLORS.Turbo}${MARKERS.Turbo}${COLORS.reset} Turbo (7.5x)    ${COLORS.dim}·${COLORS.reset} Baseline`);
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
  const costData = [];

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

      // Calculate build cost: actual build seconds × cost multiplier
      const costMultiplier = COST_MULTIPLIERS[machine] || 1;
      const cost = buildSec * costMultiplier;
      costData.push({
        targetMin,
        cost,
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

  // Render both charts side by side
  renderChartsSideBySide(chartData, costData);

  // Then render table
  console.log('─'.repeat(78));
  console.log('Branch                    | Machine    | Build Time |  E2E Time | Target');
  console.log('--------------------------|------------|------------|-----------|-------');

  for (const r of rows) {
    console.log(r.branch.padEnd(25) + ' | ' + r.machine.padEnd(10) + ' | ' + (r.buildSec + 's').padStart(10) + ' | ' + (r.e2eSec + 's').padStart(9) + ' | ' + r.target);
  }
}

fetchTimings().catch(console.error);
