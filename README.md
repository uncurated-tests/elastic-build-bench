# Elastic Build Bench

Benchmarks Vercel build performance across Standard, Enhanced, and Turbo machine types using synthetic Next.js workloads.

## Architecture

- Dashboard: Next.js app in `src/app/page.tsx` renders latest timing data, charts, and cost comparisons.
- Build instrumentation: `scripts/build-with-timing.mjs` records build start, compile finish, and deployment completion, then uploads JSON to Vercel Blob.
- Synthetic load: `scripts/generate-load.mjs` generates SSG pages plus fixed-iteration CPU burn; branches hold pre-generated loads per target build time.
- CPU burn: `scripts/cpu-burn-worker.mjs` executes fixed iteration work in worker threads; Standard is capped to 4 workers to mimic 4 vCPU.
- Data storage: timing records stored in Vercel Blob under `timing/` and read by the dashboard.
- Cost chart: normalized to Standard; includes a 100%–130% acceptable-cost band.
- Tooltips: build cost chart hover shows actual Trigger2Ready and compilation times.

## Branch Model

- `main`: dashboard and baseline.
- `build-<X>min-RealXTotal`: synthetic loads targeting X-minute compilation time on Standard.

## Key Projects

- Standard: `elastic-build-bench`
- Enhanced: `elastic-build-bench-enhanced`
- Turbo: `elastic-build-bench-turbo`

## Environment

- `BLOB_READ_WRITE_TOKEN` required for timing uploads.
- `VERCEL_FORCE_NO_BUILD_CACHE=1` recommended for accurate benchmarks.

## Local Dev

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
