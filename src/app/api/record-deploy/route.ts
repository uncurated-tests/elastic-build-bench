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

    // Find the existing timing file
    const { blobs } = await list({ prefix: `timing/${runId}` });
    
    if (blobs.length === 0) {
      return NextResponse.json({ error: 'Timing data not found for runId' }, { status: 404 });
    }

    // Fetch existing timing data
    const existingBlob = blobs[0];
    const response = await fetch(existingBlob.url);
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
    
    const timingRecords = await Promise.all(
      blobs.slice(0, 20).map(async (blob) => {
        try {
          const response = await fetch(blob.url);
          return await response.json();
        } catch {
          return { url: blob.url, error: 'Failed to fetch' };
        }
      })
    );

    return NextResponse.json({
      count: blobs.length,
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
