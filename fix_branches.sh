fix_branch() {
  local branch=$1
  local buildTime=$2
  local fullTime=$3
  local cpuBurn=$4
  
  echo "Fixing $branch..."
  git checkout $branch
  git reset --hard origin/$branch
  
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
  git commit -m "Fix build-config.json and set prebuildCpuBurnSeconds to $cpuBurn"
  git push origin $branch --force-with-lease
}

fix_branch build-4min-RealXTotal "4min" "5.1min" 304
fix_branch build-5min-RealXTotal "5min" "6.2min" 512
fix_branch build-8min-RealXTotal "8min" "9.5min" 970
fix_branch build-10min-RealXTotal "10min" "11.4min" 1246
fix_branch build-20min-RealXTotal "20min" "21.8min" 2205
