import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface RequestBody {
  data: string;
  timestamp: number;
  options?: Record<string, unknown>;
}

interface ResponseData {
  id: number;
  processed: boolean;
  result: string;
  computation: number;
  meta: {
    processingTime: number;
    index: number;
    memoryUsage: number;
  };
}

function heavyComputation(iterations: number): number {
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    result += Math.sin(i * 0.001) * Math.cos(i * 0.001) * Math.tan(i * 0.0001 + 0.01);
  }
  return result;
}

export async function GET(): Promise<NextResponse<ResponseData>> {
  const startTime = Date.now();
  
  const computation = heavyComputation(1000);
  
  return NextResponse.json({
    id: 15,
    processed: true,
    result: `API Route 15 processed successfully`,
    computation,
    meta: {
      processingTime: Date.now() - startTime,
      index: 15,
      memoryUsage: process.memoryUsage().heapUsed,
    },
  });
}

export async function POST(request: Request): Promise<NextResponse<ResponseData>> {
  const startTime = Date.now();
  
  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    body = { data: '', timestamp: Date.now() };
  }
  
  const computation = heavyComputation(500);
  
  return NextResponse.json({
    id: 15,
    processed: true,
    result: `Processed: ${body.data} at ${body.timestamp}`,
    computation,
    meta: {
      processingTime: Date.now() - startTime,
      index: 15,
      memoryUsage: process.memoryUsage().heapUsed,
    },
  });
}
