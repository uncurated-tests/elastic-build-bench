import { NextRequest, NextResponse } from 'next/server';

// Force edge runtime
export const runtime = 'edge';

/**
 * Edge compute API - performs lightweight computation at the edge
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const iterations = parseInt(url.searchParams.get('iterations') || '1000', 10);
  
  const startTime = Date.now();
  
  // Perform some computation at the edge
  let result = 0;
  for (let i = 0; i < Math.min(iterations, 10000); i++) {
    result += Math.sin(i * 0.001) * Math.cos(i * 0.002);
  }
  
  const processingTime = Date.now() - startTime;
  
  return NextResponse.json({
    message: 'Edge computation complete',
    iterations: Math.min(iterations, 10000),
    result: result.toFixed(6),
    processingTimeMs: processingTime,
    timestamp: new Date().toISOString(),
    runtime: 'edge',
  });
}
