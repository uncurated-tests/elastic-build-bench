import { NextRequest, NextResponse } from 'next/server';

// Force edge runtime for this route
export const runtime = 'edge';

/**
 * Edge API route - runs at the edge, closer to users
 * This adds deployment overhead as edge functions are bundled separately
 */
export async function GET(request: NextRequest) {
  const startTime = Date.now();
  
  // Get request info
  const url = new URL(request.url);
  
  // Get geo info from headers (Vercel adds these)
  const geo = {
    country: request.headers.get('x-vercel-ip-country') || 'unknown',
    region: request.headers.get('x-vercel-ip-country-region') || 'unknown',
    city: request.headers.get('x-vercel-ip-city') || 'unknown',
  };
  
  // Simulate some edge computation
  const data = {
    message: 'Hello from the edge!',
    timestamp: new Date().toISOString(),
    requestUrl: url.pathname,
    searchParams: Object.fromEntries(url.searchParams),
    headers: {
      userAgent: request.headers.get('user-agent'),
      acceptLanguage: request.headers.get('accept-language'),
    },
    geo,
    runtime: 'edge',
    processingTimeMs: Date.now() - startTime,
  };
  
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
      'X-Edge-Region': geo.region,
    },
  });
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const body = await request.json();
    
    return NextResponse.json({
      message: 'Edge POST received',
      timestamp: new Date().toISOString(),
      receivedData: body,
      runtime: 'edge',
      processingTimeMs: Date.now() - startTime,
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }
}
