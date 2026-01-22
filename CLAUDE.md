# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Elastic build time benchmarking tool for Vercel. Measures build performance across three machine types (Standard 4vCPU, Enhanced 8vCPU, Turbo 30vCPU) using synthetic workloads.

## Commands

```bash
# Development
npm run dev              # Start dev server on port 3000
npm run build            # Build with timing instrumentation
npm run lint             # ESLint

# Generate load for a branch (creates SSG pages + CPU burn)
node scripts/generate-load.mjs <buildMinutes> <e2eMultiplier>
# Example: node scripts/generate-load.mjs 15 2  # 15min build, 2x E2E

# Flush all timing data from blob storage
export BLOB_READ_WRITE_TOKEN="<token from .env.local>"
node scripts/flush-blob.mjs

# Trigger builds on all branches
./scripts/trigger-all-builds.sh
./scripts/trigger-all-builds.sh --branches "build-4min-2xtotal build-8min-2xtotal"

# Monitor build status
./scripts/check-builds.sh
```

## Architecture

- **Dashboard** (`src/app/page.tsx`): SSR page fetching timing data from Vercel Blob, displays benchmark results
- **Build Script** (`scripts/build-with-timing.mjs`): Runs during Vercel CI, records timestamps to blob storage
- **Load Generator** (`scripts/generate-load.mjs`): Creates synthetic workload (SSG pages + multi-threaded CPU burn)
- **Timing API** (`src/app/api/record-deploy/route.ts`): Records deployment completion timestamps

## Branch Strategy

- `main`: Dashboard and baseline configuration
- `build-Xmin-Yxtotal`: Pre-generated workloads for specific build times
  - X = target build time in minutes (1, 2, 4, 8, 10, 15, 20)
  - Y = E2E multiplier (typically 2x)

## Vercel Projects

| Project | Machine | Project ID |
|---------|---------|------------|
| elastic-build-bench | Standard (4 vCPU) | prj_O7dSIpzeQW5Y2T4prlpOI6gpWLyw |
| elastic-build-bench-enhanced | Enhanced (8 vCPU) | prj_EL1OkL9hSDmNQxQ18THqzAky4wVF |
| elastic-build-bench-turbo | Turbo (30 vCPU) | prj_peO4ut8pu8n8PV1Z93DcgYPt2Ny6 |

Team ID: `team_MtLD9hKuWAvoDd3KmiHs9zUg`

## Environment Variables

- `BLOB_READ_WRITE_TOKEN`: Vercel Blob storage access
- `VERCEL_FORCE_NO_BUILD_CACHE=1`: Disable caching for accurate benchmarks

## Key Configuration Files

- `build-config.json`: Branch-specific build parameters (target time, SSG pages, CPU burn seconds)
- `field-ratios.json`: Historical E2E/build time multipliers

## Load Generation Strategy (v23)

- SSG pages: ~0.045s per page, max 2000 pages (~90s)
- Multi-threaded CPU burn: For builds >4.5min, fills remaining time
- Base overhead: ~19s (Next.js startup)
