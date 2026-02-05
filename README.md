# On a MONTHLY BASIS

## About

This is a website developed by Hengsheng Wang with extensive use of OpenAI's CODEX.
- Runs on NextJS and Astro!
- Github by defaults wants to use Jekyll for some reason...

## Notes

Last Updated ReadME: February 4th, 2026

# Contribution Info

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start the site for running on the local terminal: (run on localhost)

```bash
npm run dev
```

3. Add a new article:

Create a new `.mdx` file in `src/content/articles/` (copy the example below).

```mdx
---
title: "Your Article Title"
date: 2026-02-01
summary: "One sentence summary."
issue: "Issue 2026.02"
draft: false
---

Write the story here.
```

### Code, LaTeX, Images

- Code blocks:

~~~mdx
```js
console.log("Hello");
```
~~~

- LaTeX (inline + block):

~~~mdx
Einstein wrote $E=mc^2$.

$$
\\int_0^1 x^2 dx = \\frac{1}{3}
$$
~~~

- Images: place files in `public/images/` and reference them:

~~~mdx
![Caption](/images/your-photo.jpg)
~~~

4. Commit and push:

```bash
git add src/content/articles/your-article.mdx
git commit -m "Add February article"
git push
```

## Structure

- `src/pages/` routes
- `src/content/articles/` MDX articles
- `src/styles/global.css` site styling
- `archives1/` previous static site (untouched)

## Build

```bash
npm run build
```

Outputs `dist/` for GitHub Pages.