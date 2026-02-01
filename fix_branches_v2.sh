fix_branch() {
  local branch=$1
  local buildTime=$2
  local fullTime=$3
  local cpuBurn=$4
  
  echo "Fixing $branch with prebuildCpuBurnSeconds=$cpuBurn..."
  git checkout $branch
  git fetch origin $branch
  git reset --hard origin/$branch
  
  # Ensure we have the latest build script from main (which has delays removed)
  git merge main -X theirs -m "Merge main: remove all artificial delays"
  
  cat > build-config.json <<JSON
{
  "BuildTimeOnStandard": "$buildTime",
  "FullTimeOnStandard": "$fullTime",
  "MachineType": "Standard",
  "ssgPages": 2000,
  "sharedComponents": 500,
  "apiRoutes": 5,
  "prebuildCpuBurnSeconds": $cpuBurn,
  "strategy": "ssg-cpu-burn-v26",
  "generatedAt": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
}
JSON

  git add build-config.json
  git commit --amend --no-edit || git commit -m "Update prebuildCpuBurnSeconds to $cpuBurn"
  git push origin $branch --force-with-lease
}

fix_branch build-4min-RealXTotal "4min" "5.1min" 206
fix_branch build-5min-RealXTotal "5min" "6.2min" 272
fix_branch build-8min-RealXTotal "8min" "9.5min" 470
fix_branch build-10min-RealXTotal "10min" "11.4min" 584
fix_branch build-20min-RealXTotal "20min" "21.8min" 1208
