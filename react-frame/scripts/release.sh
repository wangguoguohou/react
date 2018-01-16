#!/bin/bash

# 快速git, 并推送到gitlab,
# 可以根据自己使用习惯改写脚本

branch="dev"

# Build project, and push it to gitlab.
git pull origin $branch
npm run build
git add dist
git commit -m 'build'

git add src
git commit -m 'bug fixed'

git add -A
git commit -m 'update'

git push origin $branch

# Invoke ssh server
./scripts/ssh_server.sh
