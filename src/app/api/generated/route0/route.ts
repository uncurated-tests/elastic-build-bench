import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    id: 0,
    message: 'API Route 0',
    timestamp: Date.now(),
  });
}
