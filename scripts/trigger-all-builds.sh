#!/usr/bin/env bash
#
# Trigger builds across all Vercel projects and branches
# Adds a random string to bust the build cache
#
# Usage: ./scripts/trigger-all-builds.sh [--branches "branch1 branch2"] [--projects "Standard Enhanced Turbo"]
#

set -e

# Configuration
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TEAM_ID="team_MtLD9hKuWAvoDd3KmiHs9zUg"

# Project IDs
PROJECT_ID_Standard="prj_O7dSIpzeQW5Y2T4prlpOI6gpWLyw"
PROJECT_ID_Enhanced="prj_EL1OkL9hSDmNQxQ18THqzAky4wVF"
PROJECT_ID_Turbo="prj_peO4ut8pu8n8PV1Z93DcgYPt2Ny6"

get_project_id() {
  case "$1" in
    Standard) echo "$PROJECT_ID_Standard" ;;
    Enhanced) echo "$PROJECT_ID_Enhanced" ;;
    Turbo) echo "$PROJECT_ID_Turbo" ;;
    *) echo "" ;;
  esac
}

# Default branches to trigger
DEFAULT_BRANCHES="build-1min-2xtotal build-2min-2xtotal build-4min-2xtotal build-8min-2xtotal build-10min-2xtotal build-20min-2xtotal"
DEFAULT_PROJECTS="Standard Enhanced Turbo"

# Parse arguments
BRANCHES="$DEFAULT_BRANCHES"
PROJECTS="$DEFAULT_PROJECTS"

while [[ $# -gt 0 ]]; do
  case $1 in
    --branches)
      BRANCHES="$2"
      shift 2
      ;;
    --projects)
      PROJECTS="$2"
      shift 2
      ;;
    --help)
      echo "Usage: $0 [--branches \"branch1 branch2\"] [--projects \"Standard Enhanced Turbo\"]"
      echo ""
      echo "Triggers builds on all specified branches across all specified Vercel projects."
      echo "Adds a random cache-busting string to each branch."
      echo ""
      echo "Options:"
      echo "  --branches   Space-separated list of branches (default: all build-*min-2xtotal branches)"
      echo "  --projects   Space-separated list of projects: Standard, Enhanced, Turbo (default: all)"
      echo ""
      echo "Examples:"
      echo "  $0                                          # Trigger all branches on all projects"
      echo "  $0 --branches \"build-1min-2xtotal\"          # Only 1min branch on all projects"
      echo "  $0 --projects \"Standard\"                    # All branches on Standard only"
      echo "  $0 --branches \"build-4min-2xtotal\" --projects \"Enhanced Turbo\""
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Get Vercel token
VERCEL_TOKEN=$(cat "/Users/grappeggia/Library/Application Support/com.vercel.cli/auth.json" | jq -r '.token')
if [ -z "$VERCEL_TOKEN" ] || [ "$VERCEL_TOKEN" = "null" ]; then
  echo "Error: Could not get Vercel token"
  exit 1
fi

# Generate random string for cache busting
RANDOM_STRING=$(openssl rand -hex 4)
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
CACHE_BUSTER="${TIMESTAMP}-${RANDOM_STRING}"

echo "=============================================="
echo "Build Trigger Script"
echo "=============================================="
echo "Cache buster: $CACHE_BUSTER"
echo "Branches: $BRANCHES"
echo "Projects: $PROJECTS"
echo "=============================================="
echo ""

cd "$REPO_DIR"

# Ensure we're on main and up to date
git checkout main > /dev/null 2>&1
git pull > /dev/null 2>&1

# Track triggered builds
TRIGGERED=""
FAILED=""

for branch in $BRANCHES; do
  echo "Processing branch: $branch"
  
  # Check if branch exists
  if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
    echo "  ⚠️  Branch $branch does not exist, skipping"
    FAILED="$FAILED $branch(not-found)"
    continue
  fi
  
  # Checkout the branch
  git checkout "$branch" > /dev/null 2>&1
  
  # Add cache buster to build-config.json
  if [ -f "build-config.json" ]; then
    # Update or add cacheBuster field
    jq --arg cb "$CACHE_BUSTER" '.cacheBuster = $cb' build-config.json > build-config.json.tmp
    mv build-config.json.tmp build-config.json
    
    # Commit and push
    git add build-config.json
    git commit -m "Trigger build: $CACHE_BUSTER" > /dev/null 2>&1
    
    if git push origin "$branch" --force-with-lease > /dev/null 2>&1; then
      echo "  ✅ Pushed $branch with cache buster"
      TRIGGERED="$TRIGGERED $branch"
    else
      echo "  ❌ Failed to push $branch"
      FAILED="$FAILED $branch(push-failed)"
    fi
  else
    echo "  ⚠️  No build-config.json in $branch, skipping"
    FAILED="$FAILED $branch(no-config)"
  fi
done

# Return to main
git checkout main > /dev/null 2>&1

echo ""
echo "=============================================="
echo "Summary"
echo "=============================================="
echo "Triggered:$TRIGGERED"
if [ -n "$FAILED" ]; then
  echo "Failed:$FAILED"
fi
echo ""
echo "Builds will automatically trigger on:"
for proj in $PROJECTS; do
  project_id=$(get_project_id "$proj")
  if [ -n "$project_id" ]; then
    echo "  - $proj ($project_id)"
  fi
done
echo ""
echo "Monitor builds with:"
echo "  ./scripts/check-builds.sh"
echo ""
