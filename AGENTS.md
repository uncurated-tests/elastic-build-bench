# Agent Instructions for Elastic Build Benchmark

## Project Overview

This project benchmarks Vercel build times across different machine types (Standard, Enhanced, Turbo) using synthetic React component loads. Each branch represents a specific build time target.

## Auto-Push Requirement

**Always commit and push changes** after completing modifications (unless explicitly told not to). This keeps deployments and benchmarks up to date.

## Important: Deployment Promotion

**After completing any work that results in a successful deployment, agents MUST promote the most recent deployment to production.**

### How to Promote to Production

```bash
# Get the most recent deployment URL
vercel ls --scope uncurated-tests | head -5

# Promote the deployment to production
vercel promote <deployment-url> --scope uncurated-tests
```

Or use the Vercel CLI shorthand:
```bash
vercel --prod --scope uncurated-tests
```

### When to Promote

- After fixing bugs in the dashboard or API
- After updating the build timing script
- After any changes to main branch that affect the dashboard
- After merging changes that should be visible in production

## Project Structure

- **main branch**: Contains the dashboard and baseline (1680 components)
- **build-Xmin-Yxtotal branches**: Pre-generated components for specific build time targets
  - X = target build time in minutes (1, 2, 4, 8, 10)
  - Y = E2E multiplier (2x or 3x the build time)

## Vercel Projects

| Project | Machine Type | Project ID | Scope |
|---------|--------------|------------|-------|
| elastic-build-bench | Standard (4 vCPU) | prj_O7dSIpzeQW5Y2T4prlpOI6gpWLyw | uncurated-tests |
| elastic-build-bench-enhanced | Enhanced (8 vCPU) | prj_EL1OkL9hSDmNQxQ18THqzAky4wVF | uncurated-tests |
| elastic-build-bench-turbo | Turbo (30 vCPU) | prj_peO4ut8pu8n8PV1Z93DcgYPt2Ny6 | uncurated-tests |

Team ID: `team_MtLD9hKuWAvoDd3KmiHs9zUg`

## Key Files

- `scripts/build-with-timing.mjs` - Build script that records timing to Vercel Blob
- `src/app/page.tsx` - Dashboard displaying timing data
- `src/app/api/record-deploy/route.ts` - API for timing records
- `build-config.json` - Branch-specific configuration

## Environment Variables

All projects need:
- `BLOB_READ_WRITE_TOKEN` - Shared blob storage token
- `VERCEL_FORCE_NO_BUILD_CACHE=1` - Disable build caching for accurate benchmarks

## Workflow for Updating Branches

When updating the build script or shared code:

1. Make changes on main branch
2. Commit and push to main
3. For each build branch, merge main while preserving branch-specific config:
   ```bash
   git checkout build-Xmin-Yxtotal
   git merge main -m "Merge from main"
   # Resolve conflicts keeping the branch's build-config.json values
   git push origin build-Xmin-Yxtotal
   ```

## Tuning Build Times

If actual build times don't match targets:

1. Check current component count in `build-config.json`
2. Calculate rate: `components / actual_build_seconds`
3. Adjust: `new_components = target_seconds * rate`
4. Regenerate components using `scripts/generate-load.mjs` or update manually
