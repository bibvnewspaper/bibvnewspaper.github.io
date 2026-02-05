# Contributing Guide

This file explains how, if you are contributing, to add new articles, complete issues, and other media using the website's current framework. The workflow is file-based (HTML + Markdown).

You can test it locally on your (not relative) copied path, and testing it out on the browser is very straightforward.

## Folder structure

Each issue lives in `issues/YYYY-MM/` with an `index.html` and an `issue.md`. Each article is a subpage under `issues/YYYY-MM/articles/` with its own `.html` and `.md`.

Example:

```
issues/
  2026-01/
    index.html
    issue.md
    articles/
      first-article.html
      first-article.md
      secon-article.html
      secon-article.md
```

## Steps for creating new issues via terminal:

1. Create the folder structure: run  `
mkdir -p issues/2026-02/articles`

2. Add the issue Markdown content
    1. Create `issues/2026-02/issue.md`
    2. Write your issue overview

3) Create the issue page (HTML)
    1. Copy the issue-page template (location at `TEMPLATES.md`)
    2. Save this as `issues/YEAR_MO/index.html`
    3. Make sure to update title, metadata, issue name, links, the `data-markdown-src` path if necessary, and the fallback markdown block

4) Add article Markdown + page; for each article:
    1. Create `issues/YEAR-MO/articles/your-article.md`
    2. Copy the article page template from `TEMPLATES.md`
    3. Save it as `issues/YEAR-MO/articles/your-article.html`
    4. Update the title, `data-markdown-src`, and fallback

5) Update the homepage (Latest Release)
    1. Open `index.html` in the overall directory
    2. Change the issue month, title, exceprt, and links.

## Local preview

If you open the HTML files directly in a browser, some browsers block `fetch` for local files. The fallback Markdown is included to avoid blank pages.

If you prefer live Markdown loading without fallback, start a local server from the repo root:

```
python3 -m http.server
```

Then visit:

```
http://localhost:8000
```

## Some Final Notes

- `script.js` renders any element with `data-markdown-src` by
    - loading the MD and 
    - converting it with `marked`.
- If `fetch` fails, it will render the embedded fallback Markdown.
- Keep filenames lowercase and use hyphens for spaces.
