import { put, list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface TimingData {
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

/**
 * Helper to record deployment completion for a specific runId
 */
async function recordDeploymentCompletion(runId: string, deploymentTime?: string): Promise<TimingData | null> {
  const { blobs } = await list({ prefix: `timing/${runId}` });
  
  // Look for the build_complete file which has all the timing data
  const completeBlob = blobs.find(blob => blob.pathname.includes('build_complete'));
  
  if (!completeBlob) {
    return null;
  }

  // Fetch existing timing data
  const response = await fetch(completeBlob.url);
  const timingData: TimingData = await response.json();

  // Skip if already recorded
  if (timingData.timestamps.deploymentComplete) {
    return timingData;
  }

  // Update with deployment completion
  const deploymentComplete = deploymentTime || new Date().toISOString();
  timingData.timestamps.deploymentComplete = deploymentComplete;
  
  // Calculate deployment phase duration
  if (timingData.timestamps.compilationFinished) {
    timingData.durations.deploymentPhaseMs = 
      new Date(deploymentComplete).getTime() - 
      new Date(timingData.timestamps.compilationFinished).getTime();
  }

  // Calculate total time including deployment
  if (timingData.timestamps.buildStarted) {
    timingData.durations.totalWithDeploymentMs = 
      new Date(deploymentComplete).getTime() - 
      new Date(timingData.timestamps.buildStarted).getTime();
  }

  // Upload updated timing data
  const filename = `timing/${runId}.json`;
  await put(filename, JSON.stringify(timingData, null, 2), {
    access: 'public',
    addRandomSuffix: false,
  });

  return timingData;
}

/**
 * API endpoint to record deployment completion timestamp
 * 
 * POST with { runId } - Record deployment completion for specific runId
 * POST with { autoComplete: true } - Auto-complete all pending deployments using Vercel API
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Auto-complete mode: find and complete all pending deployments
    if (body.autoComplete) {
      const { blobs } = await list({ prefix: 'timing/' });
      
      // Get all unique runIds with build_complete but no final deployment file
      const pendingRunIds: string[] = [];
      const completedRunIds = new Set<string>();
      
      for (const blob of blobs) {
        const match = blob.pathname.match(/timing\/(build-\d+)/);
        if (!match) continue;
        
        const runId = match[1];
        
        // Check if this is the final file (no phase suffix)
        if (blob.pathname === `timing/${runId}.json`) {
          completedRunIds.add(runId);
        } else if (blob.pathname.includes('build_complete')) {
          if (!completedRunIds.has(runId) && !pendingRunIds.includes(runId)) {
            pendingRunIds.push(runId);
          }
        }
      }
      
      // Remove any runIds that have been completed
      const actuallyPending = pendingRunIds.filter(id => !completedRunIds.has(id));
      
      // Complete each pending deployment
      const results = await Promise.all(
        actuallyPending.map(async (runId) => {
          try {
            const result = await recordDeploymentCompletion(runId);
            return { runId, success: true, data: result };
          } catch (error) {
            return { runId, success: false, error: String(error) };
          }
        })
      );
      
      return NextResponse.json({
        autoCompleted: true,
        pendingCount: actuallyPending.length,
        results,
      });
    }
    
    // Single runId mode
    const { runId } = body;
    
    if (!runId) {
      return NextResponse.json({ error: 'runId is required' }, { status: 400 });
    }

    const timingData = await recordDeploymentCompletion(runId);
    
    if (!timingData) {
      const { blobs } = await list({ prefix: `timing/${runId}` });
      return NextResponse.json({ 
        error: 'Timing data not found for runId', 
        availableBlobs: blobs.map(b => b.pathname) 
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      timingData,
    });
  } catch (error) {
    console.error('Error recording deployment:', error);
    return NextResponse.json(
      { error: 'Failed to record deployment', details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const autoComplete = url.searchParams.get('autoComplete') === 'true';
    
    // List all timing records
    const { blobs } = await list({ prefix: 'timing/' });
    
    // Group blobs by runId and get the most complete version for each
    const runIdMap = new Map<string, typeof blobs[0]>();
    const completedRunIds = new Set<string>();
    const pendingRunIds: string[] = [];
    
    for (const blob of blobs) {
      // Extract runId from pathname (e.g., "timing/build-123456789-build_complete.json" -> "build-123456789")
      const match = blob.pathname.match(/timing\/(build-\d+)/);
      if (!match) continue;
      
      const runId = match[1];
      const existing = runIdMap.get(runId);
      
      // Check if this is the final file (has deployment data)
      if (blob.pathname === `timing/${runId}.json`) {
        completedRunIds.add(runId);
        runIdMap.set(runId, blob);
      } else if (blob.pathname.includes('build_complete')) {
        if (!existing || !existing.pathname.endsWith(`${runId}.json`)) {
          runIdMap.set(runId, blob);
        }
        if (!completedRunIds.has(runId) && !pendingRunIds.includes(runId)) {
          pendingRunIds.push(runId);
        }
      } else if (!existing) {
        runIdMap.set(runId, blob);
      }
    }
    
    // Auto-complete pending deployments if requested
    let autoCompletedCount = 0;
    if (autoComplete) {
      const actuallyPending = pendingRunIds.filter(id => !completedRunIds.has(id));
      await Promise.all(
        actuallyPending.map(async (runId) => {
          try {
            await recordDeploymentCompletion(runId);
            autoCompletedCount++;
          } catch {
            // Ignore errors for auto-complete
          }
        })
      );
      
      // Re-fetch blobs after auto-completing
      if (autoCompletedCount > 0) {
        const { blobs: updatedBlobs } = await list({ prefix: 'timing/' });
        runIdMap.clear();
        
        for (const blob of updatedBlobs) {
          const match = blob.pathname.match(/timing\/(build-\d+)/);
          if (!match) continue;
          
          const runId = match[1];
          const existing = runIdMap.get(runId);
          
          if (blob.pathname === `timing/${runId}.json`) {
            runIdMap.set(runId, blob);
          } else if (blob.pathname.includes('build_complete') && (!existing || !existing.pathname.endsWith(`${runId}.json`))) {
            runIdMap.set(runId, blob);
          } else if (!existing) {
            runIdMap.set(runId, blob);
          }
        }
      }
    }
    
    const selectedBlobs = Array.from(runIdMap.values());
    
    const timingRecords = await Promise.all(
      selectedBlobs.slice(0, 20).map(async (blob) => {
        try {
          const response = await fetch(blob.url);
          return await response.json();
        } catch {
          return { url: blob.url, error: 'Failed to fetch' };
        }
      })
    );

    return NextResponse.json({
      count: selectedBlobs.length,
      totalBlobs: blobs.length,
      autoCompletedCount,
      records: timingRecords,
    });
  } catch (error) {
    console.error('Error listing timing records:', error);
    return NextResponse.json(
      { error: 'Failed to list timing records', details: String(error) },
      { status: 500 }
    );
  }
}
