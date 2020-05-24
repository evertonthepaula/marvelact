#!/bin/bash
set -e

echo  -e "####################################"
echo  -e "Build dist!"
echo  -e "####################################"
npm run build && cd build

echo  -e "####################################"
echo  -e "Push!"
echo  -e "####################################"
git init
git config user.name "Travis CI"
git config user.email "travisci@gmail.com"
git add .
git commit -m "Travis CI - Deploy to GitHub Pages"
git push -f -q "https://${GH_TOKEN}@github.com/evertonthepaula/marvelact" master:gh-pages > /dev/null 2>&1
