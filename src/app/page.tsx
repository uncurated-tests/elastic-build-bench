import { list } from '@vercel/blob';

interface TimingRecord {
  runId: string;
  gitCommit: string;
  gitBranch: string;
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

async function getLatestBuildsByConfig(): Promise<Map<string, TimingRecord>> {
  const configMap = new Map<string, TimingRecord>();
  
  try {
    const { blobs } = await list({ prefix: 'timing/' });
    
    // Group by runId and get the most complete version
    const runIdMap = new Map<string, typeof blobs[0]>();
    
    for (const blob of blobs) {
      const match = blob.pathname.match(/timing\/(build-\d+)/);
      if (!match) continue;
      
      const runId = match[1];
      const existing = runIdMap.get(runId);
      
      if (!existing) {
        runIdMap.set(runId, blob);
      } else if (blob.pathname === `timing/${runId}.json`) {
        runIdMap.set(runId, blob);
      } else if (blob.pathname.includes('build_complete') && !existing.pathname.endsWith(`${runId}.json`)) {
        runIdMap.set(runId, blob);
      }
    }
    
    // Fetch all timing records
    const records: TimingRecord[] = [];
    for (const blob of runIdMap.values()) {
      try {
        const response = await fetch(blob.url);
        const data = await response.json();
        records.push(data);
      } catch {
        // Skip failed fetches
      }
    }
    
    // Group by config key and keep the latest COMPLETE record for each
    // A complete record has totalMs (build time) populated
    for (const record of records) {
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
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <thead>
                <tr className="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Target Build Time (Std)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Target Total Time (Std)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Machine Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Actual Build Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Actual E2E Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
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
                    <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                      {record.config.BuildTimeOnStandard}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                      {record.config.FullTimeOnStandard}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100 font-medium">
                      {record.config.MachineType}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono">
                      <span className={`px-2 py-1 rounded ${
                        record.durations.totalMs 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500'
                      }`}>
                        {formatDuration(record.durations.totalMs)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono">
                      <span className={`px-2 py-1 rounded ${
                        record.durations.totalWithDeploymentMs 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                          : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500'
                      }`}>
                        {formatDuration(record.durations.totalWithDeploymentMs)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-500 font-mono">
                      {record.gitBranch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

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
