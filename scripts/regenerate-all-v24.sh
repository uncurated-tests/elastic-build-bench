#!/usr/bin/env bash
#
# Regenerate all branches with v24 calibration
#

set -e

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR"

# Branches to regenerate with their target minutes
BRANCHES="1 2 4 8 10 15 20"
E2E_MULTIPLIER=2

echo "=============================================="
echo "v24 Branch Regeneration"
echo "=============================================="

# Ensure we start from main
git checkout main
git pull

for minutes in $BRANCHES; do
  branch="build-${minutes}min-${E2E_MULTIPLIER}xtotal"
  echo ""
  echo "=== Processing $branch ==="

  # Checkout or create branch from main
  if git show-ref --verify --quiet "refs/heads/$branch"; then
    git checkout "$branch"
    git merge main -m "Merge main for v24 calibration" --no-edit || true
  else
    git checkout -b "$branch"
  fi

  # Generate load
  echo "Generating load for ${minutes}min..."
  node scripts/generate-load.mjs "$minutes" "$E2E_MULTIPLIER"

  # Commit and push
  git add -A
  git commit -m "v24 calibration: ${minutes}min target (${E2E_MULTIPLIER}x E2E)" || echo "No changes to commit"
  git push origin "$branch" --force-with-lease

  echo "✅ $branch updated"
done

# Return to main
git checkout main

echo ""
echo "=============================================="
echo "All branches regenerated with v24 calibration"
echo "=============================================="
