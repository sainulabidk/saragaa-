#!/usr/bin/env bash
#if output=$(git status --porcelain) && [ -z "$output" ]; then
  # Working directory clean
  git checkout develop2 
  dir="../build"
  [ -d  $dir ] && rm  -rf $dir

  file="build.zip "
  [ -f $file ] && rm  -rf $file

  npm run build &&

  cd ../build/
scp -r * root@165.232.177.25:/var/www/sargaPortal/html/ &&
echo "Deployment completed"

echo "Clearing Deployment junks"
[ -d  $dir2 ] && rm  -rf $dir2
[ -d $dir ] && rm  -rf $dir
git checkout develop2
exit