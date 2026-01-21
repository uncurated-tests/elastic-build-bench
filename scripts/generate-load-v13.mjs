#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing - v13
 * 
 * v13 Strategy: SSG Pages + CSS Module Scaling (NO Heavy TypeScript)
 * - Individual SSG pages: ~0.10s per page (max 2000 before OOM)
 * - Dynamic route SSG pages: allows more pages via generateStaticParams
 * - CSS modules: ~0.02s per module, many per page for longer builds
 * - NO heavy TypeScript with recursive generics (causes Turbopack hang)
 * - NO delays - all time comes from actual compilation work
 * 
 * Usage: node scripts/generate-load-v13.mjs <buildMinutes>
 * Example: node scripts/generate-load-v13.mjs 10
 */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Parse arguments
const buildMinutes = parseFloat(process.argv[2] || '1');

console.log(`\n========================================`);
console.log(`v13 Load Generator: SSG + CSS Scaling`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build`);

// =============================================================================
// v13 CALIBRATION
// =============================================================================

const BASE_OVERHEAD = 25;              // seconds (Next.js startup)
const SECONDS_PER_STATIC_PAGE = 0.10;  // Individual SSG pages
const MAX_STATIC_PAGES = 2000;         // OOM limit for individual pages

// Dynamic routes with generateStaticParams - test if we can get more pages
const SECONDS_PER_DYNAMIC_PAGE = 0.08; // Slightly faster (less file overhead)
const PAGES_PER_DYNAMIC_ROUTE = 500;   // Each dynamic route handles 500 paths

// CSS module calibration
const SECONDS_PER_CSS_MODULE = 0.025;  // Slightly higher estimate
const MAX_CSS_MODULES_PER_PAGE = 50;   // Can go higher if needed

// Target build time in seconds
const targetSeconds = buildMinutes * 60;

// =============================================================================
// Calculate Strategy
// =============================================================================

// Phase 1: Static SSG pages (up to MAX_STATIC_PAGES)
let numStaticPages = Math.min(MAX_STATIC_PAGES, Math.ceil((targetSeconds - BASE_OVERHEAD) / SECONDS_PER_STATIC_PAGE));
let staticPageTime = numStaticPages * SECONDS_PER_STATIC_PAGE;
let remainingAfterStatic = targetSeconds - BASE_OVERHEAD - staticPageTime;

// Phase 2: Additional dynamic route pages if needed
let numDynamicRoutes = 0;
let numDynamicPagesPerRoute = 0;
let totalDynamicPages = 0;
let dynamicPageTime = 0;

if (remainingAfterStatic > 50) { // Only use if significant time remaining
  // Calculate how many dynamic pages we need
  const dynamicPagesNeeded = Math.ceil(remainingAfterStatic / SECONDS_PER_DYNAMIC_PAGE);
  numDynamicRoutes = Math.ceil(dynamicPagesNeeded / PAGES_PER_DYNAMIC_ROUTE);
  numDynamicPagesPerRoute = Math.min(PAGES_PER_DYNAMIC_ROUTE, dynamicPagesNeeded);
  totalDynamicPages = numDynamicRoutes * numDynamicPagesPerRoute;
  dynamicPageTime = totalDynamicPages * SECONDS_PER_DYNAMIC_PAGE;
}

let remainingAfterPages = remainingAfterStatic - dynamicPageTime;

// Phase 3: CSS modules per page (on static pages only)
let cssModulesPerPage = 1;
let totalExtraCSSTime = 0;
if (remainingAfterPages > 0 && numStaticPages > 0) {
  const extraCSSNeeded = Math.ceil(remainingAfterPages / SECONDS_PER_CSS_MODULE);
  const extraCSSPerPage = Math.min(MAX_CSS_MODULES_PER_PAGE - 1, Math.ceil(extraCSSNeeded / numStaticPages));
  cssModulesPerPage = 1 + extraCSSPerPage;
  totalExtraCSSTime = (cssModulesPerPage - 1) * numStaticPages * SECONDS_PER_CSS_MODULE;
}

const expectedBuildTime = BASE_OVERHEAD + staticPageTime + dynamicPageTime + totalExtraCSSTime;

// Fixed values
const numSharedComponents = 500;
const numApiRoutes = 5;

console.log(`\nv13 Load Composition:`);
console.log(`  Target: ${targetSeconds}s (${buildMinutes}min)`);
console.log(`  Base overhead: ${BASE_OVERHEAD}s`);
console.log(`  Static SSG pages: ${numStaticPages} (~${Math.round(staticPageTime)}s)`);
if (numDynamicRoutes > 0) {
  console.log(`  Dynamic routes: ${numDynamicRoutes} x ${numDynamicPagesPerRoute} pages = ${totalDynamicPages} (~${Math.round(dynamicPageTime)}s)`);
}
console.log(`  CSS modules per static page: ${cssModulesPerPage} (~${Math.round(totalExtraCSSTime)}s extra)`);
console.log(`  Expected total: ~${Math.round(expectedBuildTime)}s`);

// =============================================================================
// Clean up previous generated files
// =============================================================================

const generatedDir = join(projectRoot, 'src', 'generated');
if (existsSync(generatedDir)) {
  rmSync(generatedDir, { recursive: true });
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(join(generatedDir, 'components'), { recursive: true });
mkdirSync(join(generatedDir, 'styles'), { recursive: true });

const apiGeneratedDir = join(projectRoot, 'src', 'app', 'api', 'generated');
if (existsSync(apiGeneratedDir)) {
  rmSync(apiGeneratedDir, { recursive: true });
}

const ssgDir = join(projectRoot, 'src', 'app', 'ssg');
if (existsSync(ssgDir)) {
  rmSync(ssgDir, { recursive: true });
}

const dynamicDir = join(projectRoot, 'src', 'app', 'dynamic');
if (existsSync(dynamicDir)) {
  rmSync(dynamicDir, { recursive: true });
}

// =============================================================================
// Shared Components (simple, no complex generics)
// =============================================================================

function generateSharedComponent(index) {
  return `'use client';
import React, { memo } from 'react';

interface Props {
  id: string;
  value: number;
  label?: string;
}

const SharedComponent${index} = memo(function SharedComponent${index}({ id, value, label }: Props) {
  const computed = Math.sin(value * ${index + 1}) * Math.cos(value);
  
  return (
    <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded">
      <span className="font-medium">{label || 'Item'} {id}</span>
      <span className="ml-2 text-zinc-500">{computed.toFixed(2)}</span>
    </div>
  );
});

SharedComponent${index}.displayName = 'SharedComponent${index}';
export default SharedComponent${index};
`;
}

// =============================================================================
// CSS Files (complex selectors for processing time)
// =============================================================================

function generateCssModule(pageIndex, moduleIndex) {
  const hue = ((pageIndex * 37) + (moduleIndex * 17)) % 360;
  let css = `/* Page ${pageIndex} Module ${moduleIndex} - v13 */\n`;
  
  // Generate multiple complex selectors - more than v12 for better scaling
  for (let i = 0; i < 40; i++) {
    const h = (hue + i * 9) % 360;
    css += `
.p${pageIndex}-m${moduleIndex}-s${i} {
  --idx: ${i};
  --page: ${pageIndex};
  --module: ${moduleIndex};
  color: hsl(${h}, 70%, 50%);
  background: linear-gradient(${i * 9}deg, hsl(${h}, 60%, 95%), hsl(${(h + 30) % 360}, 60%, 90%));
  padding: ${1 + (i % 4)}rem ${0.5 + (i % 3)}rem;
  margin: ${(i % 5) * 0.25}rem;
  border: ${1 + (i % 3)}px solid hsl(${h}, 50%, 70%);
  border-radius: ${4 + (i % 12)}px;
  box-shadow: 
    0 ${1 + (i % 4)}px ${2 + (i % 8)}px rgba(0,0,0,0.${1 + (i % 10)}),
    inset 0 ${i % 2}px ${i % 4}px rgba(255,255,255,0.${i % 5});
  transform: rotate(${(i % 10) - 5}deg) scale(1.0${i % 10});
  transition: all 0.${2 + (i % 4)}s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${0.75 + (i % 4) * 0.125}rem;
  line-height: ${1.2 + (i % 5) * 0.1};
}
.p${pageIndex}-m${moduleIndex}-s${i}:hover {
  transform: rotate(${(i % 10) - 5 + 2}deg) scale(1.0${(i + 2) % 10});
  box-shadow: 
    0 ${2 + (i % 6)}px ${4 + (i % 12)}px rgba(0,0,0,0.${2 + (i % 10)}),
    inset 0 ${i % 3}px ${i % 6}px rgba(255,255,255,0.${(i + 2) % 5});
}
.p${pageIndex}-m${moduleIndex}-s${i}:focus {
  outline: ${2 + (i % 2)}px solid hsl(${(h + 180) % 360}, 70%, 50%);
  outline-offset: ${1 + (i % 3)}px;
}
.p${pageIndex}-m${moduleIndex}-s${i}::before {
  content: "${pageIndex}-${moduleIndex}-${i}";
  position: absolute;
  top: ${i % 10}px;
  left: ${i % 10}px;
  font-size: 0.6rem;
  opacity: 0.5;
}
.p${pageIndex}-m${moduleIndex}-s${i}::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${10 + (i % 20)}px;
  height: ${10 + (i % 20)}px;
  background: hsl(${(h + 60) % 360}, 50%, 80%);
  border-radius: 50%;
}
`;
  }
  
  return css;
}

// =============================================================================
// Static SSG Pages
// =============================================================================

function generateStaticSSGPage(pageIndex) {
  const imports = [];
  const componentUses = [];
  
  // Import CSS modules
  for (let m = 0; m < cssModulesPerPage; m++) {
    imports.push(`import '@/generated/styles/p${pageIndex}_m${m}.css';`);
  }
  
  // Import shared components
  const sharedCount = 5;
  const startIdx = (pageIndex * 7) % numSharedComponents;
  for (let i = 0; i < sharedCount; i++) {
    const compIdx = (startIdx + i) % numSharedComponents;
    imports.push(`import SharedComponent${compIdx} from '@/generated/components/SharedComponent${compIdx}';`);
    componentUses.push(`<SharedComponent${compIdx} id="${pageIndex}-${i}" value={${pageIndex * 100 + i}} label="S" />`);
  }
  
  return `// Static SSG Page ${pageIndex} - v13
${imports.join('\n')}

export default function SSGPage${pageIndex}() {
  return (
    <div className="p${pageIndex}-m0-s0 p-4 min-h-screen">
      <h1 className="text-lg font-bold mb-2">Static Page ${pageIndex}</h1>
      <div className="grid grid-cols-2 gap-1">
        ${componentUses.join('\n        ')}
      </div>
    </div>
  );
}
`;
}

// =============================================================================
// Dynamic SSG Route
// =============================================================================

function generateDynamicRoute(routeIndex, numPages) {
  return `// Dynamic Route ${routeIndex} - v13
// Generates ${numPages} static pages at build time

export function generateStaticParams() {
  return Array.from({ length: ${numPages} }, (_, i) => ({
    slug: \`dynamic-${routeIndex}-\${i}\`,
  }));
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const pageNum = parseInt(params.slug.split('-').pop() || '0', 10);
  
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <h1 className="text-xl font-bold mb-4">Dynamic Page: {params.slug}</h1>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <div className="font-medium">Section {i + 1}</div>
            <div className="text-zinc-500">Route ${routeIndex}, Page {pageNum}</div>
            <div className="text-sm mt-2">Value: {Math.sin(pageNum * ${routeIndex + 1} + i).toFixed(4)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;
}

// =============================================================================
// API Routes
// =============================================================================

function generateApiRoute(index) {
  return `import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    id: ${index},
    timestamp: Date.now(),
  });
}
`;
}

// =============================================================================
// Build Config
// =============================================================================

function updateBuildConfig() {
  const config = {
    BuildTimeOnStandard: `${buildMinutes}min`,
    FullTimeOnStandard: `${buildMinutes}min`,
    MachineType: "Standard",
    staticSsgPages: numStaticPages,
    dynamicRoutes: numDynamicRoutes,
    dynamicPagesPerRoute: numDynamicPagesPerRoute,
    totalDynamicPages: totalDynamicPages,
    sharedComponents: numSharedComponents,
    cssModulesPerPage: cssModulesPerPage,
    apiRoutes: numApiRoutes,
    prebuildDelaySeconds: 0,
    strategy: "ssg-css-v13",
    expectedBuildTime: Math.round(expectedBuildTime),
    generatedAt: new Date().toISOString(),
    buildId: randomUUID(),
  };
  writeFileSync(
    join(projectRoot, 'build-config.json'),
    JSON.stringify(config, null, 2) + '\n'
  );
  console.log(`\nUpdated build-config.json`);
}

// =============================================================================
// Generate All Files
// =============================================================================

// 1. Shared components
console.log('\n1. Generating shared components...');
for (let i = 0; i < numSharedComponents; i++) {
  writeFileSync(join(generatedDir, 'components', `SharedComponent${i}.tsx`), generateSharedComponent(i));
  if ((i + 1) % 100 === 0) console.log(`   ${i + 1}/${numSharedComponents}`);
}
console.log(`   Done: ${numSharedComponents} shared components`);

// 2. CSS modules for static pages
console.log('\n2. Generating CSS modules...');
let cssCount = 0;
for (let p = 0; p < numStaticPages; p++) {
  for (let m = 0; m < cssModulesPerPage; m++) {
    writeFileSync(join(generatedDir, 'styles', `p${p}_m${m}.css`), generateCssModule(p, m));
    cssCount++;
  }
  if ((p + 1) % 500 === 0) console.log(`   ${cssCount} CSS files (${p + 1}/${numStaticPages} pages)`);
}
console.log(`   Done: ${cssCount} CSS files`);

// 3. Static SSG pages
console.log('\n3. Generating static SSG pages...');
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numStaticPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateStaticSSGPage(i));
  if ((i + 1) % 500 === 0) console.log(`   ${i + 1}/${numStaticPages}`);
}
console.log(`   Done: ${numStaticPages} static SSG pages`);

// 4. Dynamic routes
if (numDynamicRoutes > 0) {
  console.log('\n4. Generating dynamic routes...');
  mkdirSync(dynamicDir, { recursive: true });
  for (let i = 0; i < numDynamicRoutes; i++) {
    const routeDir = join(dynamicDir, `route${i}`, '[slug]');
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(join(routeDir, 'page.tsx'), generateDynamicRoute(i, numDynamicPagesPerRoute));
  }
  console.log(`   Done: ${numDynamicRoutes} dynamic routes (${totalDynamicPages} pages)`);
}

// 5. API routes
console.log('\n5. Generating API routes...');
mkdirSync(apiGeneratedDir, { recursive: true });
for (let i = 0; i < numApiRoutes; i++) {
  const routeDir = join(apiGeneratedDir, `route${i}`);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'route.ts'), generateApiRoute(i));
}
console.log(`   Done: ${numApiRoutes} API routes`);

updateBuildConfig();

console.log('\n========================================');
console.log('Generation complete!');
console.log(`Strategy: v13 SSG + CSS Scaling`);
console.log(`Expected build time: ~${Math.round(expectedBuildTime)}s (~${(expectedBuildTime/60).toFixed(1)}min)`);
console.log('========================================\n');
