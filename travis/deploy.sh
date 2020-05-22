#!/bin/bash
set -e

echo  -e "####################################"
echo  -e "Push!"
echo  -e "####################################"
cd build
git init
git config user.name "Travis CI"
git config user.email "travisci@gmail.com"
git add .
git commit -m "Travis CI - Deploy to GitHub Pages"
git push -f -q "https://${GH_TOKEN}@github.com/evertonthepaula/marvelact.github.io" master:gh-pages > /dev/null 2>&1
