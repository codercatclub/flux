export NODE_ENV=production
yarn build
yarn export
touch out/.nojekyll
git add out/
git commit -m "New github pages deploy"
git subtree split --prefix out -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages