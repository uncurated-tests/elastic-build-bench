#!/bin/bash
# Regenerate all 14 build branches with current main code
# Usage: ./scripts/regenerate-all-branches.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "=========================================="
echo "V8 Branch Regeneration Script"
echo "=========================================="
echo ""

# Ensure we're on main and up to date
git checkout main
git pull

# Function to get real multiplier for a target
get_multiplier() {
  case "$1" in
    1) echo "1.82" ;;
    2) echo "1.38" ;;
    4) echo "1.28" ;;
    5) echo "1.23" ;;
    8) echo "1.19" ;;
    10) echo "1.14" ;;
    20) echo "1.09" ;;
    *) echo "2" ;;
  esac
}

# Build targets in minutes
for TARGET in 1 2 4 5 8 10 20; do
  echo ""
  echo "=========================================="
  echo "Processing ${TARGET}min builds"
  echo "=========================================="
  
  # Get the real multiplier for this target
  REAL_MULT=$(get_multiplier $TARGET)
  
  # Branch 1: 2x multiplier
  BRANCH="build-${TARGET}min-2xtotal"
  echo ""
  echo "--- Creating $BRANCH ---"
  git branch -D "$BRANCH" 2>/dev/null || true
  git checkout -b "$BRANCH"
  node scripts/generate-load.mjs "$TARGET" 2
  git add -A
  git commit -m "v8: ${TARGET}min build, 2x E2E multiplier (PostCSS CPU burn strategy)"
  git push origin "$BRANCH" --force-with-lease
  git checkout main
  
  # Branch 2: Real multiplier
  BRANCH="build-${TARGET}min-RealXTotal"
  echo ""
  echo "--- Creating $BRANCH ---"
  git branch -D "$BRANCH" 2>/dev/null || true
  git checkout -b "$BRANCH"
  node scripts/generate-load.mjs "$TARGET" "$REAL_MULT"
  git add -A
  git commit -m "v8: ${TARGET}min build, ${REAL_MULT}x E2E multiplier (PostCSS CPU burn strategy)"
  git push origin "$BRANCH" --force-with-lease
  git checkout main
  
  echo "Completed ${TARGET}min branches"
done

echo ""
echo "=========================================="
echo "All 14 branches regenerated and pushed!"
echo "=========================================="
echo ""
echo "Builds will be triggered on all 3 Vercel projects:"
echo "  - elastic-build-bench (Standard)"
echo "  - elastic-build-bench-enhanced (Enhanced)"
echo "  - elastic-build-bench-turbo (Turbo)"
echo ""
echo "Monitor progress with: ./scripts/check-builds.sh"
