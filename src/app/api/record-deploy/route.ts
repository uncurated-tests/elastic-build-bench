import { put, list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * API endpoint to record deployment completion timestamp
 * Called after deployment to update the timing data in blob storage
 */
export async function POST(request: Request) {
  try {
    const { runId } = await request.json();
    
    if (!runId) {
      return NextResponse.json({ error: 'runId is required' }, { status: 400 });
    }

    // Find the build_complete timing file (contains full data)
    const { blobs } = await list({ prefix: `timing/${runId}` });
    
    // Look for the build_complete file which has all the timing data
    const completeBlob = blobs.find(blob => blob.pathname.includes('build_complete'));
    
    if (!completeBlob) {
      return NextResponse.json({ 
        error: 'Timing data not found for runId', 
        availableBlobs: blobs.map(b => b.pathname) 
      }, { status: 404 });
    }

    // Fetch existing timing data
    const response = await fetch(completeBlob.url);
    const timingData = await response.json();

    // Update with deployment completion
    const deploymentComplete = new Date().toISOString();
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
    const blob = await put(filename, JSON.stringify(timingData, null, 2), {
      access: 'public',
      addRandomSuffix: false,
    });

    return NextResponse.json({
      success: true,
      timingData,
      blobUrl: blob.url,
    });
  } catch (error) {
    console.error('Error recording deployment:', error);
    return NextResponse.json(
      { error: 'Failed to record deployment', details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // List all timing records
    const { blobs } = await list({ prefix: 'timing/' });
    
    // Group blobs by runId and get the most complete version for each
    const runIdMap = new Map<string, typeof blobs[0]>();
    
    for (const blob of blobs) {
      // Extract runId from pathname (e.g., "timing/build-123456789-build_complete.json" -> "build-123456789")
      const match = blob.pathname.match(/timing\/(build-\d+)/);
      if (!match) continue;
      
      const runId = match[1];
      const existing = runIdMap.get(runId);
      
      // Prefer final deployment file (no phase suffix), then build_complete
      if (!existing) {
        runIdMap.set(runId, blob);
      } else if (blob.pathname === `timing/${runId}.json`) {
        // This is the final file with deployment data
        runIdMap.set(runId, blob);
      } else if (blob.pathname.includes('build_complete') && !existing.pathname.endsWith(`${runId}.json`)) {
        runIdMap.set(runId, blob);
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
