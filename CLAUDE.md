# Claude Code Instructions

## Auto-Deploy Workflow

**IMPORTANT**: After making any code changes, ALWAYS follow this workflow:

1. **Commit** changes with a descriptive message
2. **Push** to the appropriate branch(es)
3. **Deploy** to production if on main branch

### Commit and Push

```bash
git add <files>
git commit -m "Description of changes

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
git push origin <branch>
```

### Deploy to Production

After pushing to main, trigger a production deployment:

```bash
# Option 1: Use Vercel CLI
vercel --prod --scope uncurated-tests

# Option 2: If the build was already triggered by push, promote it
vercel promote <deployment-url> --scope uncurated-tests
```

### For Branch Updates (Calibration Changes)

When updating build parameters, regenerate all branches:

```bash
bash scripts/regenerate-all-v25.sh
```

This will:
- Checkout each build-Xmin-Yxtotal branch
- Merge latest from main
- Regenerate load with updated parameters
- Commit and push to all branches

## Checking Build Timings

Run the timing checker to see current build performance:

```bash
export $(grep -v '^#' .env.local | xargs) && node scripts/check-timings.mjs
```

This displays:
- ASCII chart comparing actual vs target build times
- Table of all builds with timing data
- Breakdown by machine type (Standard, Enhanced, Turbo)

## Calibration

If builds are not hitting targets, update constants in `scripts/generate-load.mjs`:

- `BASE_OVERHEAD` - Next.js startup time
- `SECONDS_PER_PAGE` - Time per SSG page
- `CPU_BURN_MULTIPLIER` - CPU burn execution rate

Then regenerate all branches with `scripts/regenerate-all-v25.sh`.

## Vercel Projects

| Project | Machine Type |
|---------|--------------|
| elastic-build-bench | Standard (4 vCPU) |
| elastic-build-bench-enhanced | Enhanced (8 vCPU) |
| elastic-build-bench-turbo | Turbo (30 vCPU) |

All use scope: `uncurated-tests`
