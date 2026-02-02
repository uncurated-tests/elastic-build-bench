#!/usr/bin/env bash
#
# Check build status across all Vercel projects
#
# Usage: ./scripts/check-builds.sh [--watch] [--projects "Standard Enhanced Turbo"]
#

set -e

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

# Parse arguments
WATCH=false
PROJECTS="Standard Enhanced Turbo"
LIMIT=10

while [[ $# -gt 0 ]]; do
  case $1 in
    --watch|-w)
      WATCH=true
      shift
      ;;
    --projects)
      PROJECTS="$2"
      shift 2
      ;;
    --limit)
      LIMIT="$2"
      shift 2
      ;;
    --help)
      echo "Usage: $0 [--watch] [--projects \"Standard Enhanced Turbo\"] [--limit N]"
      echo ""
      echo "Options:"
      echo "  --watch, -w  Continuously poll every 30 seconds"
      echo "  --projects   Space-separated list of projects (default: all)"
      echo "  --limit      Number of deployments to show per project (default: 10)"
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

check_builds() {
  echo "=============================================="
  echo "Build Status - $(date '+%Y-%m-%d %H:%M:%S')"
  echo "=============================================="
  
  building_count=0
  
  for proj in $PROJECTS; do
    project_id=$(get_project_id "$proj")
    if [ -z "$project_id" ]; then
      echo "Unknown project: $proj"
      continue
    fi
    
    echo ""
    echo "=== $proj ==="
    printf "%-25s %-10s %-10s %-6s\n" "BRANCH" "STATE" "TIME" "AT"
    echo "---------------------------------------------------"
    
    response=$(curl -s -H "Authorization: Bearer $VERCEL_TOKEN" \
      "https://api.vercel.com/v6/deployments?projectId=$project_id&teamId=$TEAM_ID&limit=$LIMIT")
    
    echo "$response" | jq -r '
      .deployments[] | 
      select(.meta.githubCommitRef != "main" and .meta.githubCommitRef != null) |
      [
        .meta.githubCommitRef,
        .state,
        (if .state == "READY" then 
          ((.ready - .buildingAt) / 1000 | floor | tostring) + "s"
        elif .state == "ERROR" then 
          "FAILED"
        elif .state == "BUILDING" then
          "..."
        elif .state == "QUEUED" then
          "queued"
        else 
          .state 
        end),
        (.createdAt / 1000 | strftime("%H:%M"))
      ] | @tsv
    ' | while IFS=$'\t' read -r branch state time at; do
      printf "%-25s %-10s %-10s %-6s\n" "$branch" "$state" "$time" "$at"
    done
    
    # Count building
    count=$(echo "$response" | jq '[.deployments[] | select(.state == "BUILDING" or .state == "QUEUED")] | length')
    building_count=$((building_count + count))
  done
  
  echo ""
  if [ "$building_count" -gt 0 ]; then
    echo "⏳ $building_count builds in progress..."
  else
    echo "✅ All builds complete"
  fi
}

if [ "$WATCH" = true ]; then
  while true; do
    clear 2>/dev/null || true
    check_builds
    echo ""
    echo "Refreshing in 30s... (Ctrl+C to exit)"
    sleep 30
  done
else
  check_builds
fi
