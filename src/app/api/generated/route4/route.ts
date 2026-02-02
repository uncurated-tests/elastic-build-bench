import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    id: 4,
    message: 'API Route 4',
    timestamp: Date.now(),
  });
}
