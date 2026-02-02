import { list, put } from '@vercel/blob';
import BenchmarkTable from './components/BenchmarkTable';
import BuildTimeChart from './components/BuildTimeChart';
import BuildCostChart from './components/BuildCostChart';
import DeploymentBeacon from './components/DeploymentBeacon';

// Revalidate every 60 seconds to pick up new build data
export const revalidate = 60;

interface TimingRecord {
  runId: string;
  gitCommit: string;
  gitBranch: string;
  deploymentId?: string | null;
  vercelProjectName?: string | null;
  config: {
    BuildTimeOnStandard: string;
    FullTimeOnStandard: string;
    MachineType: string;
  };
  timestamps: {
    buildStarted: string | null;
    dependenciesReady: string | null;
    compilationFinished: string | null;
    deploymentComplete: string | null;
  };
  durations: {
    dependencyPhaseMs: number | null;
    compilationPhaseMs: number | null;
    deploymentPhaseMs: number | null;
    totalMs: number | null;
    totalWithDeploymentMs?: number | null;
  };
}

// Auto-complete a record's E2E time if it has build_complete but no deployment time
async function autoCompleteRecord(record: TimingRecord): Promise<TimingRecord> {
  // Skip if already has deployment time
  if (record.timestamps.deploymentComplete) {
    return record;
  }
  
  // Skip if no build completion time
  if (!record.timestamps.compilationFinished) {
    return record;
  }
  
  // Use current time as deployment completion (approximation)
  const deploymentComplete = new Date().toISOString();
  record.timestamps.deploymentComplete = deploymentComplete;
  
  // Calculate deployment phase duration
  record.durations.deploymentPhaseMs = 
    new Date(deploymentComplete).getTime() - 
    new Date(record.timestamps.compilationFinished).getTime();
  
  // Calculate total time including deployment
  if (record.timestamps.buildStarted) {
    record.durations.totalWithDeploymentMs = 
      new Date(deploymentComplete).getTime() - 
      new Date(record.timestamps.buildStarted).getTime();
  }
  
  // Save the completed record
  try {
    const filename = `timing/${record.runId}.json`;
    await put(filename, JSON.stringify(record, null, 2), {
      access: 'public',
      addRandomSuffix: false,
    });
  } catch {
    // Ignore upload errors - record is still updated in memory
  }
  
  return record;
}

async function getLatestBuildsByConfig(): Promise<Map<string, TimingRecord>> {
  const configMap = new Map<string, TimingRecord>();
  
  try {
    // Paginate through all blobs to get complete list
    let allBlobs: Awaited<ReturnType<typeof list>>['blobs'] = [];
    let cursor: string | undefined;
    
    do {
      const result = await list({ prefix: 'timing/', cursor, limit: 1000 });
      allBlobs = allBlobs.concat(result.blobs);
      cursor = result.cursor;
    } while (cursor);
    
    // Group by runId and get the most complete version
    const runIdMap = new Map<string, typeof allBlobs[0]>();
    const pendingRunIds: string[] = [];
    const completedRunIds = new Set<string>();
    
    for (const blob of allBlobs) {
      const match = blob.pathname.match(/timing\/(build-\d+)/);
      if (!match) continue;
      
      const runId = match[1];
      const existing = runIdMap.get(runId);
      
      // Track which runIds have final files vs build_complete files
      if (blob.pathname === `timing/${runId}.json`) {
        completedRunIds.add(runId);
        runIdMap.set(runId, blob);
      } else if (blob.pathname.includes('build_complete')) {
        if (!completedRunIds.has(runId)) {
          pendingRunIds.push(runId);
        }
        if (!existing || !existing.pathname.endsWith(`${runId}.json`)) {
          runIdMap.set(runId, blob);
        }
      } else if (!existing) {
        runIdMap.set(runId, blob);
      }
    }
    
    // Fetch all timing records and auto-complete pending ones
    const records: TimingRecord[] = [];
    for (const blob of runIdMap.values()) {
      try {
        const response = await fetch(blob.url);
        let data: TimingRecord = await response.json();
        
        // Auto-complete if this record doesn't have E2E time
        if (!data.timestamps.deploymentComplete && data.timestamps.compilationFinished) {
          data = await autoCompleteRecord(data);
        }
        
        records.push(data);
      } catch {
        // Skip failed fetches
      }
    }
    
    // Group by config key and keep the latest COMPLETE record for each
    // A complete record has totalMs (build time) populated
    const MAX_REASONABLE_E2E_MS = 120 * 60 * 1000; // 120 minutes max for E2E (allow long builds)
    
    for (const record of records) {
      // Skip baseline records (main branch with no synthetic load)
      if (record.config.BuildTimeOnStandard === 'baseline') {
        continue;
      }
      
      // Skip records with unreasonably high E2E times (likely data errors)
      if (record.durations.totalWithDeploymentMs && record.durations.totalWithDeploymentMs > MAX_REASONABLE_E2E_MS) {
        continue;
      }
      
      // Skip records with unknown commits (incomplete data)
      if (record.gitCommit === 'unknown') {
        continue;
      }
      
      // Skip main branch records - we only want dedicated build branches
      if (record.gitBranch === 'main') {
        continue;
      }
      
      const configKey = `${record.config.MachineType}-${record.config.BuildTimeOnStandard}-${record.config.FullTimeOnStandard}`;
      const existing = configMap.get(configKey);
      
      // Skip records without build time data
      const hasCompleteData = record.durations.totalMs != null && record.durations.totalMs > 0;
      const existingHasCompleteData = existing?.durations.totalMs != null && existing.durations.totalMs > 0;
      
      if (!existing) {
        // No existing record, use this one
        configMap.set(configKey, record);
      } else if (hasCompleteData && !existingHasCompleteData) {
        // This record has data, existing doesn't - prefer this one
        configMap.set(configKey, record);
      } else if (hasCompleteData && existingHasCompleteData) {
        // Both have data - prefer the most recent one
        if (record.timestamps.buildStarted && existing.timestamps.buildStarted && 
            new Date(record.timestamps.buildStarted) > new Date(existing.timestamps.buildStarted)) {
          configMap.set(configKey, record);
        }
      }
      // If neither has complete data, keep the existing one (first found)
    }
  } catch (error) {
    console.error('Failed to fetch timing data:', error);
  }
  
  return configMap;
}

function formatDuration(ms: number | null | undefined): string {
  if (ms === null || ms === undefined) return '-';
  if (ms < 1000) return `${ms}ms`;
  const seconds = ms / 1000;
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = (seconds % 60).toFixed(0);
  return `${minutes}m ${remainingSeconds}s`;
}

export default async function Home() {
  const buildsByConfig = await getLatestBuildsByConfig();
  const records = Array.from(buildsByConfig.values());
  
  // Sort by column 1 (Target Build Time), then column 2 (Target Total Time), then column 3 (Machine Type)
  // Parse time strings like "1min", "2min", "4min" to numbers for sorting
  const parseTime = (timeStr: string): number => {
    const match = timeStr.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };
  
  // Machine type order: Standard -> Enhanced -> Turbo
  const machineTypeOrder: Record<string, number> = {
    'Standard': 0,
    'Enhanced': 1,
    'Turbo': 2,
  };
  
  records.sort((a, b) => {
    // Column 1: Target Build Time (ascending) - PRIMARY SORT
    const buildTimeA = parseTime(a.config.BuildTimeOnStandard);
    const buildTimeB = parseTime(b.config.BuildTimeOnStandard);
    if (buildTimeA !== buildTimeB) return buildTimeA - buildTimeB;
    
    // Column 2: Machine Type (Standard -> Enhanced -> Turbo)
    const machineOrderA = machineTypeOrder[a.config.MachineType] ?? 99;
    const machineOrderB = machineTypeOrder[b.config.MachineType] ?? 99;
    if (machineOrderA !== machineOrderB) return machineOrderA - machineOrderB;
    
    // Column 3: RealXTotal branches preferred (for same build time + machine)
    const isRealXTotalA = a.gitBranch?.includes('RealXTotal') ? 0 : 1;
    const isRealXTotalB = b.gitBranch?.includes('RealXTotal') ? 0 : 1;
    return isRealXTotalA - isRealXTotalB;
  });

  // Build a lookup map for Standard E2E times by (BuildTimeOnStandard, FullTimeOnStandard)
  const standardE2EMap = new Map<string, number>();
  // Build a lookup map for Standard Build times by (BuildTimeOnStandard, FullTimeOnStandard)
  const standardBuildMap = new Map<string, number>();
  for (const record of records) {
    if (record.config.MachineType === 'Standard') {
      const key = `${record.config.BuildTimeOnStandard}-${record.config.FullTimeOnStandard}`;
      if (record.durations.totalWithDeploymentMs) {
        standardE2EMap.set(key, record.durations.totalWithDeploymentMs);
      }
      if (record.durations.totalMs) {
        standardBuildMap.set(key, record.durations.totalMs);
      }
    }
  }

  // Field ratios for calculating Target Trigger2Ready from Target Compilation
  const fieldRatios: Record<number, number> = {
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

  // Get field ratio for a given build time (interpolate if needed)
  const getFieldRatio = (buildMin: number): number => {
    if (fieldRatios[buildMin]) return fieldRatios[buildMin];
    // Approximate using formula: multiplier ≈ 1 + (0.82 / buildMinutes^0.6)
    return 1 + (0.82 / Math.pow(buildMin, 0.6));
  };

  // Prepare chart data - using Trigger2Ready (E2E) times
  // First, collect all data points with timestamps for deduplication
  const chartDataWithTimestamp = records
    .filter(r => r.durations.totalWithDeploymentMs && ['Standard', 'Enhanced', 'Turbo'].includes(r.config.MachineType))
    .map(r => {
      const targetCompilationMin = parseTime(r.config.BuildTimeOnStandard);
      const fieldRatio = getFieldRatio(targetCompilationMin);
      const targetT2RMin = targetCompilationMin * fieldRatio;
      return {
        targetMin: targetT2RMin,
        actualSec: (r.durations.totalWithDeploymentMs || 0) / 1000,
        machine: r.config.MachineType as 'Standard' | 'Enhanced' | 'Turbo',
        label: r.config.BuildTimeOnStandard,
        compilationSec: (r.durations.totalMs || 0) / 1000,
        timestamp: r.timestamps.buildStarted ? new Date(r.timestamps.buildStarted).getTime() : 0,
      };
    })
    .filter(d => d.targetMin > 0);

  // Deduplicate: keep only the most recent data point for each (label, machine) combination
  const chartDataMap = new Map<string, typeof chartDataWithTimestamp[0]>();
  for (const d of chartDataWithTimestamp) {
    const key = `${d.label}-${d.machine}`;
    const existing = chartDataMap.get(key);
    if (!existing || d.timestamp > existing.timestamp) {
      chartDataMap.set(key, d);
    }
  }
  const chartData = Array.from(chartDataMap.values()).map(({ timestamp, ...rest }) => rest);

  // Prepare cost chart data - Build Cost per second
  const COST_PER_MIN = {
    Standard: 0.014,
    Enhanced: 0.028,
    Turbo: 0.105,
  };

  // Prepare cost chart data with timestamps for deduplication
  const costChartDataWithTimestamp = records
    .filter(r => r.durations.totalWithDeploymentMs && ['Standard', 'Enhanced', 'Turbo'].includes(r.config.MachineType))
    .map(r => {
      const targetCompilationMin = parseTime(r.config.BuildTimeOnStandard);
      const fieldRatio = getFieldRatio(targetCompilationMin);
      const targetT2RMin = targetCompilationMin * fieldRatio;
      const machineType = r.config.MachineType as 'Standard' | 'Enhanced' | 'Turbo';
      const seconds = (r.durations.totalWithDeploymentMs || 0) / 1000;
      const costPerSec = seconds * (COST_PER_MIN[machineType] / 60);
      return {
        targetMin: targetT2RMin,
        costPerSec,
        machine: machineType,
        label: r.config.BuildTimeOnStandard,
        e2eSec: seconds,
        compilationSec: (r.durations.totalMs || 0) / 1000,
        timestamp: r.timestamps.buildStarted ? new Date(r.timestamps.buildStarted).getTime() : 0,
      };
    })
    .filter(d => d.targetMin > 0);

  // Deduplicate: keep only the most recent data point for each (label, machine) combination
  const costChartDataMap = new Map<string, typeof costChartDataWithTimestamp[0]>();
  for (const d of costChartDataWithTimestamp) {
    const key = `${d.label}-${d.machine}`;
    const existing = costChartDataMap.get(key);
    if (!existing || d.timestamp > existing.timestamp) {
      costChartDataMap.set(key, d);
    }
  }
  const costChartData = Array.from(costChartDataMap.values()).map(({ timestamp, ...rest }) => rest);

  // Helper function to get deployment inspection URL
  const getDeploymentUrl = (record: TimingRecord): string | null => {
    if (record.deploymentId && record.vercelProjectName) {
      return `https://vercel.com/uncurated-tests/${record.vercelProjectName}/${record.deploymentId}`;
    }
    // Fallback: link to project deployments filtered by branch
    const projectNameMap: Record<string, string> = {
      'Standard': 'elastic-build-bench',
      'Enhanced': 'elastic-build-bench-enhanced',
      'Turbo': 'elastic-build-bench-turbo',
    };
    const projectName = projectNameMap[record.config.MachineType];
    if (projectName && record.gitBranch) {
      return `https://vercel.com/uncurated-tests/${projectName}/deployments?branch=${encodeURIComponent(record.gitBranch)}`;
    }
    return null;
  };

  // Helper function to calculate E2E time reduction percentage
  const getE2EReduction = (record: TimingRecord): string => {
    if (record.config.MachineType === 'Standard') {
      return '-'; // Baseline, no reduction to show
    }
    
    const key = `${record.config.BuildTimeOnStandard}-${record.config.FullTimeOnStandard}`;
    const standardE2E = standardE2EMap.get(key);
    const currentE2E = record.durations.totalWithDeploymentMs;
    
    if (!standardE2E || !currentE2E) {
      return '-';
    }
    
    const reduction = ((standardE2E - currentE2E) / standardE2E) * 100;
    if (reduction > 0) {
      return `-${reduction.toFixed(0)}%`;
    } else if (reduction < 0) {
      return `+${Math.abs(reduction).toFixed(0)}%`;
    }
    return '0%';
  };

  // Helper function to calculate build time reduction percentage (vs Standard)
  const getBuildReduction = (record: TimingRecord): string => {
    if (record.config.MachineType === 'Standard') {
      return '-'; // Baseline, no reduction to show
    }
    
    const key = `${record.config.BuildTimeOnStandard}-${record.config.FullTimeOnStandard}`;
    const standardBuild = standardBuildMap.get(key);
    const currentBuild = record.durations.totalMs;
    
    if (!standardBuild || !currentBuild) {
      return '-';
    }
    
    const reduction = ((standardBuild - currentBuild) / standardBuild) * 100;
    if (reduction > 0) {
      return `-${reduction.toFixed(0)}%`;
    } else if (reduction < 0) {
      return `+${Math.abs(reduction).toFixed(0)}%`;
    }
    return '0%';
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8">
      <main className="max-w-6xl mx-auto">
        <DeploymentBeacon />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Elastic Build Benchmark
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Build timing data for different configurations
          </p>
        </div>

        {records.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8 text-center">
            <p className="text-zinc-500 dark:text-zinc-400">No build timing data available yet.</p>
          </div>
        ) : (
          <>
            {/* Charts */}
            <BuildTimeChart data={chartData} />
            <BuildCostChart data={costChartData} />

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Machine
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Actual Compilation
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Actual Trigger2Ready
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Actual Ratio
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Build Cost (per min.)
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Build Cost (per sec.)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record, index) => (
                    <tr 
                      key={record.runId}
                      className={`border-b border-zinc-100 dark:border-zinc-800 ${
                        index % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-50 dark:bg-zinc-900/50'
                      } hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors`}
                    >
                      <td className="px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 font-medium">
                        <span className="inline-flex items-center gap-1.5">
                          {record.config.MachineType === 'Standard' && 'Standard - $0.014/min'}
                          {record.config.MachineType === 'Enhanced' && 'Enhanced - $0.028/min'}
                          {record.config.MachineType === 'Turbo' && 'Turbo - $0.105/min'}
                          {(() => {
                            const url = getDeploymentUrl(record);
                            if (!url) return null;
                            return (
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-blue-500 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors"
                                title="View deployment on Vercel"
                              >
                                🔗
                              </a>
                            );
                          })()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm font-mono">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="text-zinc-900 dark:text-zinc-100">
                            {record.durations.totalMs ? formatDuration(record.durations.totalMs) : '-'}
                          </span>
                          {(() => {
                            const reduction = getBuildReduction(record);
                            if (reduction === '-') return null;
                            const isReduction = reduction.startsWith('-');
                            return (
                              <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                                isReduction
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              }`}>
                                {reduction}
                              </span>
                            );
                          })()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm font-mono">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="text-zinc-900 dark:text-zinc-100">
                            {record.durations.totalWithDeploymentMs ? formatDuration(record.durations.totalWithDeploymentMs) : '-'}
                          </span>
                          {(() => {
                            const reduction = getE2EReduction(record);
                            if (reduction === '-') return null;
                            const isReduction = reduction.startsWith('-');
                            return (
                              <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                                isReduction
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              }`}>
                                {reduction}
                              </span>
                            );
                          })()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-zinc-600 dark:text-zinc-400">
                        {(() => {
                          const e2e = record.durations.totalWithDeploymentMs;
                          const build = record.durations.totalMs;
                          if (!e2e || !build) return '-';
                          const ratio = e2e / build;
                          return `${ratio.toFixed(2)}x`;
                        })()}
                      </td>
                      <td className="px-4 py-3 text-sm font-mono">
                        {(() => {
                          if (!record.durations.totalWithDeploymentMs) {
                            return <span className="text-zinc-400">-</span>;
                          }
                          const minutes = Math.ceil(record.durations.totalWithDeploymentMs / 60000);
                          const costPerMin = record.config.MachineType === 'Turbo' ? 0.105 
                            : record.config.MachineType === 'Enhanced' ? 0.028 
                            : 0.014;
                          const cost = (minutes * costPerMin).toFixed(3);
                          
                          // Calculate Standard cost for comparison
                          const key = `${record.config.BuildTimeOnStandard}-${record.config.FullTimeOnStandard}`;
                          const standardE2E = standardE2EMap.get(key);
                          let costDelta = null;
                          if (record.config.MachineType !== 'Standard' && standardE2E) {
                            const standardMinutes = Math.ceil(standardE2E / 60000);
                            const standardCost = standardMinutes * 0.014;
                            const currentCost = minutes * costPerMin;
                            const delta = ((currentCost - standardCost) / standardCost) * 100;
                            costDelta = delta;
                          }
                          
                          return (
                            <span className="inline-flex items-center gap-1.5">
                              <span className="text-zinc-900 dark:text-zinc-100">
                                ${cost}
                              </span>
                              {costDelta !== null && (
                                <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                                  costDelta < 0
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                }`}>
                                  {costDelta < 0 ? `${costDelta.toFixed(0)}%` : `+${costDelta.toFixed(0)}%`}
                                </span>
                              )}
                            </span>
                          );
                        })()}
                      </td>
                      <td className="px-4 py-3 text-sm font-mono">
                        {(() => {
                          if (!record.durations.totalWithDeploymentMs) {
                            return <span className="text-zinc-400">-</span>;
                          }
                          // Use exact seconds instead of ceiling to minutes
                          const seconds = record.durations.totalWithDeploymentMs / 1000;
                          const costPerSec = record.config.MachineType === 'Turbo' ? 0.105 / 60
                            : record.config.MachineType === 'Enhanced' ? 0.028 / 60
                            : 0.014 / 60;
                          const cost = (seconds * costPerSec).toFixed(3);
                          
                          // Calculate Standard cost for comparison
                          const key = `${record.config.BuildTimeOnStandard}-${record.config.FullTimeOnStandard}`;
                          const standardE2E = standardE2EMap.get(key);
                          let costDelta = null;
                          if (record.config.MachineType !== 'Standard' && standardE2E) {
                            const standardSeconds = standardE2E / 1000;
                            const standardCost = standardSeconds * (0.014 / 60);
                            const currentCost = seconds * costPerSec;
                            const delta = ((currentCost - standardCost) / standardCost) * 100;
                            costDelta = delta;
                          }
                          
                          return (
                            <span className="inline-flex items-center gap-1.5">
                              <span className="text-zinc-900 dark:text-zinc-100">
                                ${cost}
                              </span>
                              {costDelta !== null && (
                                <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                                  costDelta < 0
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                }`}>
                                  {costDelta < 0 ? `${costDelta.toFixed(0)}%` : `+${costDelta.toFixed(0)}%`}
                                </span>
                              )}
                            </span>
                          );
                        })()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-4">
              {records.map((record) => (
                <div 
                  key={record.runId}
                  className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 inline-flex items-center gap-1.5">
                        {record.config.MachineType}
                        {(() => {
                          const url = getDeploymentUrl(record);
                          if (!url) return null;
                          return (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-400 hover:text-blue-500 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors"
                              title="View deployment on Vercel"
                            >
                              🔗
                            </a>
                          );
                        })()}
                      </span>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono mt-1">
                        {record.gitBranch}
                      </p>
                    </div>
                    {(() => {
                      const reduction = getE2EReduction(record);
                      if (reduction === '-') return null;
                      const isReduction = reduction.startsWith('-');
                      return (
                        <span className={`px-2 py-1 rounded text-sm font-medium ${
                          isReduction
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          T2R: {reduction}
                        </span>
                      );
                    })()}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-zinc-500 dark:text-zinc-500 text-xs mb-1">Actual Compilation</p>
                      <span className="inline-flex items-center gap-1">
                        <span className={`px-2 py-1 rounded text-xs font-mono ${
                          record.durations.totalMs 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500'
                        }`}>
                          {formatDuration(record.durations.totalMs)}
                        </span>
                        {(() => {
                          const reduction = getBuildReduction(record);
                          if (reduction === '-') return null;
                          const isReduction = reduction.startsWith('-');
                          return (
                            <span className={`px-1 py-0.5 rounded text-xs font-medium ${
                              isReduction
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {reduction}
                            </span>
                          );
                        })()}
                      </span>
                    </div>
                    <div>
                      <p className="text-zinc-500 dark:text-zinc-500 text-xs mb-1">Actual Trigger2Ready</p>
                      <span className={`px-2 py-1 rounded text-xs font-mono ${
                        record.durations.totalWithDeploymentMs 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                          : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500'
                      }`}>
                        {formatDuration(record.durations.totalWithDeploymentMs)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Methodology Section */}
        <div className="mt-12 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Methodology
          </h2>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-3">
            <p>
              This benchmark measures Vercel build performance across different machine types by generating 
              synthetic Next.js applications with predictable build times using real CPU work.
            </p>
            
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mt-4">Synthetic Load Generation (v30)</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>SSG Pages:</strong> Up to 2,000 statically generated pages with shared React components 
                and CSS files. Each page adds ~0.056s to build time (plus ~13s base overhead), providing up 
                to ~113s of SSG-based build work. The page count is capped to avoid memory pressure and ensure 
                consistent compile behavior across machine types.
              </li>
              <li>
                <strong>Multi-threaded CPU Burn:</strong> For longer targets, a prebuild phase performs real CPU
                math using Node.js worker threads. The workload is specified as a <em>fixed iteration count</em>
                (not a time delay) and divided across workers, so faster machines finish sooner. Standard is
                capped to 4 workers to mimic a 4 vCPU ceiling, while Enhanced and Turbo use all reported cores.
                Iteration rates are calibrated by duration band (short, medium, long, very long) to account for
                thermal throttling and GC overhead during extended burns.
              </li>
              <li>
                <strong>Trigger2Ready Ratio:</strong> The ratio between total E2E time and compilation time 
                varies by build duration: ~1.8x for 1-minute builds (deployment overhead dominates), decreasing 
                to ~1.1x for 20+ minute builds (compilation dominates). These ratios are derived from empirical 
                measurements on Standard machines and applied uniformly to all machine types for comparison.
              </li>
            </ul>
            
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 mt-4">Measurement</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Timing Instrumentation:</strong> A custom build script records timestamps at each phase 
                (build start, compilation complete, deployment complete) and uploads them to Vercel Blob storage.
                Each phase is emitted as a separate JSON blob and later deduplicated by (target, machine, branch).
              </li>
              <li>
                <strong>Machine Comparison:</strong> The same codebase is deployed to three Vercel projects 
                configured with Standard (4 vCPU, $0.014/min), Enhanced (8 vCPU, $0.028/min), and 
                Turbo (30 vCPU, $0.105/min) machine types. Comparisons use the latest run per target/machine to
                avoid stale results from earlier calibrations.
              </li>
              <li>
                <strong>Delta Calculations:</strong> Percentage changes for build time, E2E time, and cost 
                are calculated relative to the Standard machine baseline for the same target configuration.
                The cost chart normalizes Standard to 100% and highlights a 100%–130% acceptable upgrade band.
              </li>
            </ul>
            
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-4">
              Source code: <a 
                href="https://github.com/uncurated-tests/elastic-build-bench" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/uncurated-tests/elastic-build-bench
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
          <p>Last updated: {new Date().toISOString()}</p>
          <p className="mt-1">
            <a href="/api/record-deploy" className="text-blue-600 dark:text-blue-400 hover:underline">
              View raw timing data
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
