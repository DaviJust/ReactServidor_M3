set -e

npm run build

cd Servidor_M3

echo > .nojekyll

git init
git checkout -B main
git add -A
-f git@github.com:<DaviJust>/<DaviJust>.github.io.git main

cd -
