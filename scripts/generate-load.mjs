#!/usr/bin/env node
/**
 * Generate synthetic load for build time testing
 * 
 * v9 Strategy: Realistic Complex Application
 * - SSG pages drive base build time (~0.124s per page + 19s overhead)
 * - Heavy barrel-file imports (MUI Icons, React Icons) add compile time
 * - MDX content with Shiki syntax highlighting for longer builds
 * - Complex TypeScript inference types
 * - All approaches mirror real-world enterprise applications
 * 
 * Usage: node scripts/generate-load.mjs <buildMinutes> <e2eMultiplier>
 * Example: node scripts/generate-load.mjs 4 2  # 4min build, 2x E2E (8min total)
 */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Parse arguments
const buildMinutes = parseFloat(process.argv[2] || '1');
const e2eMultiplier = parseFloat(process.argv[3] || '2');

console.log(`\n========================================`);
console.log(`v9 Load Generator: Realistic Complex App Strategy`);
console.log(`========================================`);
console.log(`Target: ${buildMinutes}min build, ${e2eMultiplier}x E2E multiplier`);

// =============================================================================
// v9 CALIBRATION - Based on realistic build patterns
// =============================================================================
// 
// Build time components (on Standard 4 vCPU):
//   1. Base overhead: ~20s (Next.js startup, npm install cached)
//   2. SSG pages: ~0.13s per page (up to 2000 pages max)
//   3. Heavy imports: ~5-15s per heavy icon library barrel import
//   4. MDX files: ~0.15s per file with full plugin chain
//   5. Complex types: ~0.05s per complex type file
//   6. Shiki highlighting: ~0.1s per code block
//
// Strategy by target:
//   1-4min: SSG pages only (linear scaling)
//   5-10min: SSG pages + heavy imports + MDX files
//   10-20min: All of the above + more MDX + Shiki code blocks
//
// =============================================================================

const BASE_OVERHEAD = 20;           // seconds
const MAX_SSG_PAGES = 2000;         // Cap to avoid OOM errors
const SECONDS_PER_PAGE = 0.13;      // Empirical from v8
const BASE_COMPONENTS = 500;        // Shared component pool

// Heavy import time estimates (per library with barrel import)
const HEAVY_IMPORT_TIME = {
  muiIcons: 8,      // @mui/icons-material - ~11k icons
  reactIcons: 6,    // react-icons - ~10k icons
  lucide: 3,        // lucide-react - ~1.5k icons
};

// MDX processing time
const SECONDS_PER_MDX = 0.15;       // With remark-gfm, rehype-slug
const SECONDS_PER_CODE_BLOCK = 0.1; // Shiki highlighting

// Complex type inference time
const SECONDS_PER_COMPLEX_TYPE = 0.05;

// Target build time in seconds
const targetSeconds = buildMinutes * 60;
const targetE2EMinutes = buildMinutes * e2eMultiplier;

// =============================================================================
// Calculate load composition based on target
// =============================================================================

// Start with base overhead
let remainingTime = targetSeconds - BASE_OVERHEAD;

// Determine which heavy imports to use based on target
let useHeavyImports = {
  muiIcons: false,
  reactIcons: false,
  lucide: false,
};

// For 5+ min builds, add heavy imports
if (buildMinutes >= 5) {
  useHeavyImports.muiIcons = true;
  remainingTime -= HEAVY_IMPORT_TIME.muiIcons;
}
if (buildMinutes >= 8) {
  useHeavyImports.reactIcons = true;
  remainingTime -= HEAVY_IMPORT_TIME.reactIcons;
}
if (buildMinutes >= 10) {
  useHeavyImports.lucide = true;
  remainingTime -= HEAVY_IMPORT_TIME.lucide;
}

// Calculate SSG pages (max ~4.5 min worth)
const maxPagesTime = MAX_SSG_PAGES * SECONDS_PER_PAGE;
const pagesTime = Math.min(remainingTime * 0.7, maxPagesTime); // Use 70% for pages
let numSSGPages = Math.ceil(pagesTime / SECONDS_PER_PAGE);
numSSGPages = Math.min(numSSGPages, MAX_SSG_PAGES);
numSSGPages = Math.max(100, numSSGPages);

remainingTime -= numSSGPages * SECONDS_PER_PAGE;

// Calculate MDX files (for 5+ min builds)
let numMdxFiles = 0;
let numCodeBlocks = 0;

if (buildMinutes >= 5 && remainingTime > 0) {
  // Each MDX file with 2 code blocks = ~0.35s
  const mdxTimePerFile = SECONDS_PER_MDX + (2 * SECONDS_PER_CODE_BLOCK);
  numMdxFiles = Math.min(Math.floor(remainingTime / mdxTimePerFile), 500);
  numCodeBlocks = numMdxFiles * 2;
  remainingTime -= numMdxFiles * mdxTimePerFile;
}

// For 10+ min builds, add more MDX and code blocks
if (buildMinutes >= 10 && remainingTime > 0) {
  const additionalMdx = Math.min(Math.floor(remainingTime / SECONDS_PER_MDX), 300);
  numMdxFiles += additionalMdx;
  numCodeBlocks += additionalMdx * 3; // 3 code blocks each
  remainingTime -= additionalMdx * (SECONDS_PER_MDX + 3 * SECONDS_PER_CODE_BLOCK);
}

// Complex TypeScript types (scaled by build target)
let numComplexTypes = Math.min(30 + (buildMinutes * 10), 200);

// Fixed values
const numApiRoutes = 5;

console.log(`\nv9 Load Composition:`);
console.log(`  Base overhead: ${BASE_OVERHEAD}s`);
console.log(`  SSG pages: ${numSSGPages} (~${Math.round(numSSGPages * SECONDS_PER_PAGE)}s)`);
console.log(`  Heavy imports: ${Object.entries(useHeavyImports).filter(([,v]) => v).map(([k]) => k).join(', ') || 'none'}`);
console.log(`  MDX files: ${numMdxFiles} with ${numCodeBlocks} code blocks`);
console.log(`  Complex types: ${numComplexTypes}`);
console.log(`  Expected total: ~${targetSeconds}s`);

// =============================================================================
// Clean up previous generated files
// =============================================================================

const generatedDir = join(projectRoot, 'src', 'generated');
if (existsSync(generatedDir)) {
  rmSync(generatedDir, { recursive: true });
}
mkdirSync(generatedDir, { recursive: true });
mkdirSync(join(generatedDir, 'components'), { recursive: true });
mkdirSync(join(generatedDir, 'types'), { recursive: true });
mkdirSync(join(generatedDir, 'styles'), { recursive: true });
mkdirSync(join(generatedDir, 'mdx'), { recursive: true });

const apiGeneratedDir = join(projectRoot, 'src', 'app', 'api', 'generated');
if (existsSync(apiGeneratedDir)) {
  rmSync(apiGeneratedDir, { recursive: true });
}

const ssgDir = join(projectRoot, 'src', 'app', 'ssg');
if (existsSync(ssgDir)) {
  rmSync(ssgDir, { recursive: true });
}

const mdxPagesDir = join(projectRoot, 'src', 'app', 'docs');
if (existsSync(mdxPagesDir)) {
  rmSync(mdxPagesDir, { recursive: true });
}

// =============================================================================
// Complex TypeScript Types (Deep Inference)
// =============================================================================

function generateComplexTypeFile(index) {
  const depth = 8 + (index % 6);
  const unionSize = 10 + (index % 20);
  
  // Generate a union type with many members
  const unionMembers = Array.from({ length: unionSize }, (_, i) => 
    `'option_${index}_${i}'`
  ).join(' | ');
  
  return `// Complex type file ${index} - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_${index}<T, D extends number = ${depth}> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: ${index}; depth: D };
      nested: DeepNested_${index}<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_${index}<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_${index}<T> = T extends string
  ? { type: 'string'; value: T; index: ${index} }
  : T extends number
  ? { type: 'number'; value: T; computed: \`value_\${T}\` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_${index} = ${unionMembers};
type OptionMap_${index} = {
  [K in OptionKey_${index}]: {
    key: K;
    index: ${index};
    handler: (input: K) => Distributed_${index}<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_${index}<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_${index} = \`on\$\{Capitalize<OptionKey_${index}>\}Change\`;

// Export all types
export type {
  DeepNested_${index},
  Distributed_${index},
  OptionKey_${index},
  OptionMap_${index},
  ExtractReturn_${index},
  EventName_${index},
};
`;
}

// =============================================================================
// Shared Components (with optional heavy imports)
// =============================================================================

function generateSharedComponent(index, useHeavyImports) {
  const imports = [`import React, { memo } from 'react';`];
  let iconUsage = '';
  
  // Add heavy barrel imports for specific component ranges
  if (useHeavyImports.muiIcons && index % 50 === 0) {
    // Import all MUI icons (barrel import forces parsing ~11k modules)
    imports.push(`import * as MuiIcons from '@mui/icons-material';`);
    iconUsage = `
      const IconComponent = Object.values(MuiIcons)[${index} % Object.keys(MuiIcons).length] as React.ComponentType;`;
  }
  
  if (useHeavyImports.reactIcons && index % 75 === 0) {
    imports.push(`import * as FaIcons from 'react-icons/fa';`);
    iconUsage += `
      const FaIcon = Object.values(FaIcons)[${index} % Object.keys(FaIcons).length] as React.ComponentType;`;
  }
  
  if (useHeavyImports.lucide && index % 100 === 0) {
    imports.push(`import * as LucideIcons from 'lucide-react';`);
    iconUsage += `
      const LucideIcon = Object.values(LucideIcons).filter(v => typeof v === 'function')[${index} % 100] as React.ComponentType;`;
  }
  
  return `'use client';
${imports.join('\n')}

interface Props {
  id: string;
  value: number;
  label?: string;
}

const SharedComponent${index} = memo(function SharedComponent${index}({ id, value, label }: Props) {
  const computed = Math.sin(value * ${index + 1}) * Math.cos(value);
  ${iconUsage}
  
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
// MDX Content Files (with code blocks for Shiki)
// =============================================================================

function generateMdxFile(index, numCodeBlocks) {
  const codeBlocksPerFile = Math.min(numCodeBlocks, 5);
  
  const codeBlocks = Array.from({ length: codeBlocksPerFile }, (_, i) => {
    const languages = ['typescript', 'javascript', 'python', 'rust', 'go'];
    const lang = languages[i % languages.length];
    
    const codeExamples = {
      typescript: `// TypeScript example ${index}-${i}
interface User {
  id: number;
  name: string;
  email: string;
  roles: ('admin' | 'user' | 'guest')[];
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) throw new Error('User not found');
  return response.json();
}

const processUsers = (users: User[]) => {
  return users
    .filter(u => u.roles.includes('admin'))
    .map(u => ({ ...u, isAdmin: true }));
};`,
      javascript: `// JavaScript example ${index}-${i}
const createStore = (initialState) => {
  let state = initialState;
  const listeners = new Set();
  
  return {
    getState: () => state,
    setState: (newState) => {
      state = { ...state, ...newState };
      listeners.forEach(fn => fn(state));
    },
    subscribe: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
};`,
      python: `# Python example ${index}-${i}
from dataclasses import dataclass
from typing import List, Optional

@dataclass
class DataProcessor:
    name: str
    batch_size: int = 100
    
    def process(self, items: List[dict]) -> List[dict]:
        results = []
        for i in range(0, len(items), self.batch_size):
            batch = items[i:i + self.batch_size]
            results.extend(self._process_batch(batch))
        return results
    
    def _process_batch(self, batch: List[dict]) -> List[dict]:
        return [self._transform(item) for item in batch]`,
      rust: `// Rust example ${index}-${i}
use std::collections::HashMap;

#[derive(Debug, Clone)]
struct Cache<T> {
    data: HashMap<String, T>,
    max_size: usize,
}

impl<T: Clone> Cache<T> {
    fn new(max_size: usize) -> Self {
        Self {
            data: HashMap::new(),
            max_size,
        }
    }
    
    fn get(&self, key: &str) -> Option<T> {
        self.data.get(key).cloned()
    }
    
    fn set(&mut self, key: String, value: T) {
        if self.data.len() >= self.max_size {
            if let Some(k) = self.data.keys().next().cloned() {
                self.data.remove(&k);
            }
        }
        self.data.insert(key, value);
    }
}`,
      go: `// Go example ${index}-${i}
package main

import (
    "context"
    "sync"
    "time"
)

type Worker struct {
    id       int
    jobs     <-chan Job
    results  chan<- Result
    wg       *sync.WaitGroup
}

func (w *Worker) Start(ctx context.Context) {
    defer w.wg.Done()
    for {
        select {
        case job, ok := <-w.jobs:
            if !ok {
                return
            }
            result := w.process(job)
            w.results <- result
        case <-ctx.Done():
            return
        }
    }
}`,
    };
    
    return `\`\`\`${lang}
${codeExamples[lang]}
\`\`\``;
  }).join('\n\n');
  
  return `---
title: Documentation Page ${index}
description: Auto-generated documentation with code examples
---

# Documentation Section ${index}

This is auto-generated documentation content for testing build performance with MDX processing.

## Overview

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## Code Examples

The following code examples demonstrate various patterns and implementations:

${codeBlocks}

## Additional Information

- Point one: Configuration details for section ${index}
- Point two: Implementation notes and best practices
- Point three: Performance considerations

### Summary

This documentation page is part of the generated content for build time testing. Each page includes multiple code blocks that are processed by Shiki for syntax highlighting at build time.
`;
}

// =============================================================================
// CSS Files
// =============================================================================

function generateCssFile(index) {
  return `/* Page ${index} styles */
.page-${index} {
  --page-index: ${index};
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.page-${index}-header {
  font-size: calc(1rem + ${index % 10}px);
  color: hsl(${(index * 37) % 360}, 70%, 50%);
}

.page-${index}-content {
  padding: ${1 + (index % 4)}rem;
  border-radius: ${4 + (index % 8)}px;
}
`;
}

// =============================================================================
// SSG Pages
// =============================================================================

function generateSSGPage(pageIndex, totalComponents, useHeavyImports) {
  const componentsPerPage = Math.min(20, totalComponents);
  const startIdx = (pageIndex * 7) % totalComponents;
  
  const imports = [];
  const componentNames = [];
  for (let i = 0; i < componentsPerPage; i++) {
    const compIdx = (startIdx + i) % totalComponents;
    imports.push(`import SharedComponent${compIdx} from '@/generated/components/SharedComponent${compIdx}';`);
    componentNames.push(`SharedComponent${compIdx}`);
  }
  
  // Add direct heavy imports for some pages (to trigger barrel parsing)
  let heavyImportSection = '';
  if (useHeavyImports.muiIcons && pageIndex % 100 === 0) {
    imports.unshift(`import { Home, Settings, Person, Search, Menu } from '@mui/icons-material';`);
    heavyImportSection = '<Home className="w-4 h-4" />';
  }
  
  return `// SSG Page ${pageIndex}
import '@/generated/styles/page${pageIndex}.css';
${imports.join('\n')}

export default async function SSGPage${pageIndex}() {
  const data = {
    pageId: ${pageIndex},
    generatedAt: new Date().toISOString(),
  };
  
  const items = Array.from({ length: ${componentsPerPage} }, (_, i) => ({
    id: \`\${${pageIndex}}-\${i}\`,
    value: ${pageIndex} * 100 + i,
    label: \`Page ${pageIndex} Item\`,
  }));
  
  return (
    <div className="page-${pageIndex} p-6 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <h1 className="page-${pageIndex}-header text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        SSG Page ${pageIndex} ${heavyImportSection}
      </h1>
      <p className="text-sm text-zinc-500 mb-4">
        Generated: {data.generatedAt}
      </p>
      <div className="page-${pageIndex}-content grid grid-cols-2 md:grid-cols-4 gap-2">
        {[${componentNames.join(', ')}].map((Component, idx) => (
          <Component key={idx} {...items[idx]} />
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
    message: 'API Route ${index}',
    timestamp: Date.now(),
  });
}
`;
}

// =============================================================================
// MDX Page Component
// =============================================================================

function generateMdxPageComponent(index) {
  return `import Content from '@/generated/mdx/doc${index}.mdx';

export default function DocPage${index}() {
  return (
    <article className="prose dark:prose-invert max-w-none p-8">
      <Content />
    </article>
  );
}
`;
}

// =============================================================================
// Build Config
// =============================================================================

function updateBuildConfig() {
  const config = {
    BuildTimeOnStandard: `${buildMinutes}min`,
    FullTimeOnStandard: `${targetE2EMinutes}min`,
    MachineType: "Standard",
    components: BASE_COMPONENTS,
    ssgPages: numSSGPages,
    mdxFiles: numMdxFiles,
    codeBlocks: numCodeBlocks,
    complexTypes: numComplexTypes,
    apiRoutes: numApiRoutes,
    heavyImports: useHeavyImports,
    strategy: "realistic-complex-app-v9",
    generatedAt: new Date().toISOString(),
    buildId: randomUUID(),
  };
  writeFileSync(
    join(projectRoot, 'build-config.json'),
    JSON.stringify(config, null, 2) + '\n'
  );
  console.log(`\nUpdated build-config.json:`, config);
}

// =============================================================================
// Generate All Files
// =============================================================================

// 1. Generate complex type files
console.log('\n1. Generating complex TypeScript types...');
const typeExports = [];
for (let i = 0; i < numComplexTypes; i++) {
  const typePath = join(generatedDir, 'types', `complex${i}.ts`);
  writeFileSync(typePath, generateComplexTypeFile(i));
  typeExports.push(`export * from './complex${i}';`);
}
writeFileSync(join(generatedDir, 'types', 'index.ts'), typeExports.join('\n'));
console.log(`   Generated ${numComplexTypes} complex type files`);

// 2. Generate shared components
console.log('\n2. Generating shared components...');
for (let i = 0; i < BASE_COMPONENTS; i++) {
  const componentPath = join(generatedDir, 'components', `SharedComponent${i}.tsx`);
  writeFileSync(componentPath, generateSharedComponent(i, useHeavyImports));
  
  if ((i + 1) % 100 === 0) {
    console.log(`   Generated ${i + 1}/${BASE_COMPONENTS} components`);
  }
}
console.log(`   Generated ${BASE_COMPONENTS} shared components`);

// 3. Generate CSS files
console.log('\n3. Generating CSS files...');
for (let i = 0; i < numSSGPages; i++) {
  const cssPath = join(generatedDir, 'styles', `page${i}.css`);
  writeFileSync(cssPath, generateCssFile(i));
  
  if ((i + 1) % 500 === 0) {
    console.log(`   Generated ${i + 1}/${numSSGPages} CSS files`);
  }
}
console.log(`   Generated ${numSSGPages} CSS files`);

// 4. Generate MDX files (if any)
if (numMdxFiles > 0) {
  console.log('\n4. Generating MDX content files...');
  for (let i = 0; i < numMdxFiles; i++) {
    const mdxPath = join(generatedDir, 'mdx', `doc${i}.mdx`);
    const codeBlocksForFile = Math.ceil(numCodeBlocks / numMdxFiles);
    writeFileSync(mdxPath, generateMdxFile(i, codeBlocksForFile));
    
    if ((i + 1) % 100 === 0) {
      console.log(`   Generated ${i + 1}/${numMdxFiles} MDX files`);
    }
  }
  console.log(`   Generated ${numMdxFiles} MDX files`);
  
  // Generate MDX page routes
  console.log('\n5. Generating MDX page routes...');
  mkdirSync(mdxPagesDir, { recursive: true });
  for (let i = 0; i < Math.min(numMdxFiles, 100); i++) { // Limit to 100 MDX pages
    const pageDir = join(mdxPagesDir, `doc${i}`);
    mkdirSync(pageDir, { recursive: true });
    writeFileSync(join(pageDir, 'page.tsx'), generateMdxPageComponent(i));
  }
  console.log(`   Generated ${Math.min(numMdxFiles, 100)} MDX page routes`);
}

// 5/6. Generate SSG pages
console.log(`\n${numMdxFiles > 0 ? '6' : '4'}. Generating SSG pages...`);
mkdirSync(ssgDir, { recursive: true });
for (let i = 0; i < numSSGPages; i++) {
  const pageDir = join(ssgDir, `page${i}`);
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'page.tsx'), generateSSGPage(i, BASE_COMPONENTS, useHeavyImports));
  
  if ((i + 1) % 500 === 0) {
    console.log(`   Generated ${i + 1}/${numSSGPages} SSG pages`);
  }
}
console.log(`   Generated ${numSSGPages} SSG pages`);

// 6/7. Generate API routes
console.log(`\n${numMdxFiles > 0 ? '7' : '5'}. Generating API routes...`);
mkdirSync(apiGeneratedDir, { recursive: true });
for (let i = 0; i < numApiRoutes; i++) {
  const routeDir = join(apiGeneratedDir, `route${i}`);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'route.ts'), generateApiRoute(i));
}
console.log(`   Generated ${numApiRoutes} API routes`);

// Update build config
updateBuildConfig();

console.log('\n========================================');
console.log('Generation complete!');
console.log('========================================');
console.log(`Strategy: Realistic Complex App v9`);
console.log(`Expected build time on Standard: ~${buildMinutes} min`);
console.log(`Expected E2E time on Standard: ~${targetE2EMinutes} min`);
console.log('');
