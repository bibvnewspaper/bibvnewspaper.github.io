# Contributing

## Steps for adding MDX and Articles to the repo!

1. Clone the repo and install dependencies (run this on your terminal)

```bash
git clone https://github.com/bibvnewspaper/bibvnewspaper.github.io.git
cd bibvnewspaper.github.io
npm install
```

2. Create a new article file under the correct issue folder (match existing folder casing like `2025-Dec`):

```bash
mkdir -p src/content/articles/2026-Jan
$EDITOR src/content/articles/2026-Jan/your-article-slug.mdx
```

3. Add frontmatter and content template (please modify as necessary):

```mdx
---
title: "Your Article Title"
date: YEAR-MM-DD
summary: "One-sentence summary."
issue: "Issue 2026.VV"
draft: false
---

VV stands for Version Number; for example, the March issue would be 03.
```

4. Verify the frontmatter schema:

The `articles` collection requires `title`, `date`, `summary`, `issue`, and `draft`. Missing fields will fail the dev server with a “frontmatter does not match schema” error.

5. Commit and push:

```bash
git add src/content/articles/2026-Jan/your-article-slug.mdx
git commit -m "Add article: Your Article Title"
git push
```

## How the latest issue is chosen

`src/pages/index.astro` loads all entries from the `issues` content collection, filters out drafts, sorts by the `date` field (newest first), and uses the first entry as the latest issue. That is why the issue with the most recent `date` appears in the “Latest Release” section.
