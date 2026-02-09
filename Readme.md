# Valentine site

This is a simple static site with `index.html`, `styles.css`, and `script.js`.

## Run locally

Open `index.html` directly in a browser, or serve it locally:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish to GitHub

If you don’t see the files on GitHub, make sure you have a remote set and push
this branch:

```bash
git remote -v
```

If you see your GitHub repo as `origin`, push the branch:

```bash
git push -u origin HEAD
```

After the push completes, refresh your GitHub repo page and the files should
appear.
