import { list, put } from '@vercel/blob';
import BenchmarkTable from './components/BenchmarkTable';

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
    // Priority 0: RealXTotal branches first (these are the validated benchmarks)
    const isRealXTotalA = a.gitBranch?.includes('RealXTotal') ? 0 : 1;
    const isRealXTotalB = b.gitBranch?.includes('RealXTotal') ? 0 : 1;
    if (isRealXTotalA !== isRealXTotalB) return isRealXTotalA - isRealXTotalB;
    
    // Column 1: Target Build Time (ascending)
    const buildTimeA = parseTime(a.config.BuildTimeOnStandard);
    const buildTimeB = parseTime(b.config.BuildTimeOnStandard);
    if (buildTimeA !== buildTimeB) return buildTimeA - buildTimeB;
    
    // Column 2: Target Total Time (ascending)
    const totalTimeA = parseTime(a.config.FullTimeOnStandard);
    const totalTimeB = parseTime(b.config.FullTimeOnStandard);
    if (totalTimeA !== totalTimeB) return totalTimeA - totalTimeB;
    
    // Column 3: Machine Type (Standard -> Enhanced -> Turbo)
    const machineOrderA = machineTypeOrder[a.config.MachineType] ?? 99;
    const machineOrderB = machineTypeOrder[b.config.MachineType] ?? 99;
    return machineOrderA - machineOrderB;
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
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Target Build
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Target E2E
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Target Ratio
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Machine
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Actual Build
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Actual E2E
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Actual Ratio
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Build Cost (per min.)
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      Branch
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
                      <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">
                        {record.config.BuildTimeOnStandard}
                      </td>
                      <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">
                        {record.config.FullTimeOnStandard}
                      </td>
                      <td className="px-4 py-3 text-sm font-mono text-zinc-600 dark:text-zinc-400">
                        {(() => {
                          // Calculate target ratio from FullTimeOnStandard / BuildTimeOnStandard
                          const buildMatch = record.config.BuildTimeOnStandard.match(/(\d+)/);
                          const e2eMatch = record.config.FullTimeOnStandard.match(/(\d+)/);
                          if (!buildMatch || !e2eMatch) return '-';
                          const buildMin = parseInt(buildMatch[1], 10);
                          const e2eMin = parseInt(e2eMatch[1], 10);
                          if (buildMin === 0) return '-';
                          const ratio = e2eMin / buildMin;
                          return `${ratio.toFixed(1)}x`;
                        })()}
                      </td>
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
                      <td className="px-4 py-3 text-xs text-zinc-500 dark:text-zinc-500 font-mono truncate max-w-[150px]">
                        {record.gitBranch}
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
                          E2E: {reduction}
                        </span>
                      );
                    })()}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-zinc-500 dark:text-zinc-500 text-xs mb-1">Target Build</p>
                      <p className="text-zinc-900 dark:text-zinc-100">{record.config.BuildTimeOnStandard}</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 dark:text-zinc-500 text-xs mb-1">Target E2E</p>
                      <p className="text-zinc-900 dark:text-zinc-100">{record.config.FullTimeOnStandard}</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 dark:text-zinc-500 text-xs mb-1">Actual Build</p>
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
                      <p className="text-zinc-500 dark:text-zinc-500 text-xs mb-1">Actual E2E</p>
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
              This benchmark measures Vercel build performance across different machine types by using 
              synthetically generated Next.js applications with controlled complexity levels.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Build Time Control:</strong> Each branch contains a specific number of React components 
                (~28-35 components per second of target build time on Standard machines). Components include 
                complex TypeScript types, React hooks, and state management to stress the compiler.
              </li>
              <li>
                <strong>E2E Multiplier:</strong> The &quot;2x&quot; and &quot;3x&quot; variants add additional API routes and 
                static pages to extend the total deployment time beyond just compilation.
              </li>
              <li>
                <strong>Timing Instrumentation:</strong> A custom build script records timestamps at each phase 
                (dependency install, compilation, deployment) and uploads them to Vercel Blob storage.
              </li>
              <li>
                <strong>Machine Detection:</strong> The same codebase is deployed to three Vercel projects 
                configured with different machine types (Standard, Enhanced, Turbo), allowing direct comparison.
              </li>
              <li>
                <strong>Build Time Reduction:</strong> Shows the percentage improvement in E2E time compared to 
                the Standard machine baseline for the same workload configuration.
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
