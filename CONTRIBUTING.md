# Contributing

## Contribution
Ask Hengsheng about contributing code for this website. Right now, the account that hosts the repository has been suspended because it lacks 2FA. I'll work on that later.

Once you've been added as contributor, you can clone in the repo. Steps for setting up GitHub in your terminal are not shown below, but please read the steps assuming that those logistics are finished.

## Steps for adding MDX and Articles to the repo!

Updated April 9th, 2026.

1. Clone the repository and install dependencies for NPM.


```bash
git clone https://github.com/bibvnewspaper/bibvnewspaper.github.io.git
cd bibvnewspaper.github.io
npm install
```

2. Without loss of generality, we'll use March 2026 as an example.

    1. Create/locate folder `2026-mar` (`/articles`)
    2. Create/locate mdx file `2026-mar.mdx` (`/issues`)
    3. Create/locate any file in the corresponding folder.

3. For new articles, add the following template for frontmatter:

```mdx
---
title: "Your Article Title"
date: YEAR-MM-DD
summary: "One-sentence summary."
issue: "2026.VV"
---

# Header 1

## Header 2

### Header 3

Normal Text.
```

5. Commit and push:

```bash
git add src/content/articles/2026-jan/your-article-slug.mdx
git commit -m "Add article: Your Article Title"
git push
```

If we ever run into the issue that two people are commiting to the same branch at the same time and conflicts occur... we'll deal with that later.