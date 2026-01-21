import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    id: 3,
    message: 'API Route 3',
    timestamp: Date.now(),
  });
}
