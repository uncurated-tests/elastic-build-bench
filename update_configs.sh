update_branch() {
  local branch=$1
  local newValue=$2
  echo "Updating $branch with prebuildCpuBurnSeconds=$newValue"
  git checkout $branch
  git reset --hard origin/$branch
  
  # Merge latest main (to ensure no delays)
  git merge main -X theirs -m "Merge main: ensure no artificial delays"
  
  # Update config
  # Use sed to update prebuildCpuBurnSeconds value
  sed -i "s/\"prebuildCpuBurnSeconds\": [0-9]*/\"prebuildCpuBurnSeconds\": $newValue/" build-config.json
  
  git add build-config.json
  git commit --amend --no-edit || git commit -m "Update prebuildCpuBurnSeconds to $newValue"
  
  git push origin $branch --force-with-lease
}

update_branch build-4min-RealXTotal 304
update_branch build-5min-RealXTotal 512
update_branch build-8min-RealXTotal 970
update_branch build-10min-RealXTotal 1246
update_branch build-20min-RealXTotal 2205
