import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js Middleware - runs at the edge for every request
 * This adds deployment overhead as middleware is bundled separately
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add custom headers for tracking
  response.headers.set('x-middleware-timestamp', new Date().toISOString());
  response.headers.set('x-request-path', request.nextUrl.pathname);
  
  // Add timing header
  const startTime = Date.now();
  response.headers.set('x-edge-start', String(startTime));
  
  // Geolocation headers from Vercel's injected headers
  const country = request.headers.get('x-vercel-ip-country');
  const region = request.headers.get('x-vercel-ip-country-region');
  const city = request.headers.get('x-vercel-ip-city');
  
  if (country) response.headers.set('x-geo-country', country);
  if (region) response.headers.set('x-geo-region', region);
  if (city) response.headers.set('x-geo-city', city);
  
  // Add cache control for static assets
  if (request.nextUrl.pathname.startsWith('/images/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  return response;
}

// Configure which paths middleware runs on
export const config = {
  matcher: [
    // Match all paths except static files and API routes that don't need middleware
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
