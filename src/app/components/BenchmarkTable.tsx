'use client';

import { useState } from 'react';

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

interface BenchmarkTableProps {
  records: TimingRecord[];
  standardE2EMap: Map<string, number>;
  standardBuildMap: Map<string, number>;
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

function getE2EReduction(record: TimingRecord, standardE2EMap: Map<string, number>): string {
  if (record.config.MachineType === 'Standard') {
    return '-';
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
}

function getBuildReduction(record: TimingRecord, standardBuildMap: Map<string, number>): string {
  if (record.config.MachineType === 'Standard') {
    return '-';
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
}

export default function BenchmarkTable({ records, standardE2EMap, standardBuildMap }: BenchmarkTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [showBranch, setShowBranch] = useState(false);

  const toggleRow = (runId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(runId)) {
      newExpanded.delete(runId);
    } else {
      newExpanded.add(runId);
    }
    setExpandedRows(newExpanded);
  };

  // Convert Map to object for client-side use
  const standardE2EObj = Object.fromEntries(standardE2EMap);
  const standardBuildObj = Object.fromEntries(standardBuildMap);
  const getStandardE2E = (key: string) => standardE2EObj[key];
  const getStandardBuild = (key: string) => standardBuildObj[key];

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center gap-4 text-sm">
        <label className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
          <input
            type="checkbox"
            checked={showBranch}
            onChange={(e) => setShowBranch(e.target.checked)}
            className="rounded border-zinc-300 dark:border-zinc-600"
          />
          Show branch names
        </label>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                <th className="px-3 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                  Target
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                  Machine
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                  Build
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                  E2E
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                  Cost
                </th>
                {showBranch && (
                  <th className="px-3 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                    Branch
                  </th>
                )}
                <th className="px-3 py-3 text-center text-xs font-semibold text-zinc-900 dark:text-zinc-100 w-10">
                  <span className="sr-only">Expand</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => {
                const isExpanded = expandedRows.has(record.runId);
                const e2eReduction = getE2EReduction(record, standardE2EMap);
                const buildReduction = getBuildReduction(record, standardBuildMap);
                const isE2EReduction = e2eReduction.startsWith('-');
                const isBuildReduction = buildReduction.startsWith('-');
                
                return (
                  <>
                    <tr 
                      key={record.runId}
                      className={`border-b border-zinc-100 dark:border-zinc-800 ${
                        index % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-50 dark:bg-zinc-900/50'
                      } hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer`}
                      onClick={() => toggleRow(record.runId)}
                    >
                      <td className="px-3 py-2.5 text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                        <span className="font-medium">{record.config.BuildTimeOnStandard}</span>
                        <span className="text-zinc-400 dark:text-zinc-500 text-xs ml-1">
                          /{record.config.FullTimeOnStandard}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-sm whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          record.config.MachineType === 'Turbo' 
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                            : record.config.MachineType === 'Enhanced'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300'
                        }`}>
                          {record.config.MachineType === 'Standard' && 'Standard - $0.014/min'}
                          {record.config.MachineType === 'Enhanced' && 'Enhanced - $0.028/min'}
                          {record.config.MachineType === 'Turbo' && 'Turbo - $0.105/min'}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-sm font-mono whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-zinc-900 dark:text-zinc-100">
                            {record.durations.totalMs ? formatDuration(record.durations.totalMs) : '-'}
                          </span>
                          {buildReduction !== '-' && (
                            <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                              isBuildReduction
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {buildReduction}
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-sm font-mono whitespace-nowrap">
                        <span className="inline-flex items-center gap-1">
                          <span className="text-zinc-900 dark:text-zinc-100">
                            {record.durations.totalWithDeploymentMs ? formatDuration(record.durations.totalWithDeploymentMs) : '-'}
                          </span>
                          {e2eReduction !== '-' && (
                            <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                              isE2EReduction
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {e2eReduction}
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-sm font-mono whitespace-nowrap">
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
                            <span className="inline-flex items-center gap-1">
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
                      {showBranch && (
                        <td className="px-3 py-2.5 text-xs text-zinc-500 dark:text-zinc-500 font-mono whitespace-nowrap max-w-[120px] truncate">
                          {record.gitBranch}
                        </td>
                      )}
                      <td className="px-3 py-2.5 text-center">
                        <button 
                          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          <svg 
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr key={`${record.runId}-expanded`} className="bg-zinc-50 dark:bg-zinc-800/50">
                        <td colSpan={showBranch ? 7 : 6} className="px-3 py-3">
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                            <div>
                              <p className="text-zinc-500 dark:text-zinc-500 mb-1">Branch</p>
                              <p className="font-mono text-zinc-700 dark:text-zinc-300 break-all">{record.gitBranch}</p>
                            </div>
                            <div>
                              <p className="text-zinc-500 dark:text-zinc-500 mb-1">Commit</p>
                              <p className="font-mono text-zinc-700 dark:text-zinc-300">{record.gitCommit?.slice(0, 8) || '-'}</p>
                            </div>
                            <div>
                              <p className="text-zinc-500 dark:text-zinc-500 mb-1">Compilation</p>
                              <p className="font-mono text-zinc-700 dark:text-zinc-300">{formatDuration(record.durations.compilationPhaseMs)}</p>
                            </div>
                            <div>
                              <p className="text-zinc-500 dark:text-zinc-500 mb-1">Deployment</p>
                              <p className="font-mono text-zinc-700 dark:text-zinc-300">{formatDuration(record.durations.deploymentPhaseMs)}</p>
                            </div>
                            {record.timestamps.buildStarted && (
                              <div className="col-span-2 sm:col-span-4">
                                <p className="text-zinc-500 dark:text-zinc-500 mb-1">Build Started</p>
                                <p className="font-mono text-zinc-700 dark:text-zinc-300">
                                  {new Date(record.timestamps.buildStarted).toLocaleString()}
                                </p>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
