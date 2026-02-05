# On a MONTHLY BASIS

Minimal student newspaper site built with Astro + MDX.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start the site:

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
<<<<<<< HEAD

- `src/pages/` routes
- `src/content/articles/` MDX articles
- `src/styles/global.css` site styling
- `archives1/` previous static site (untouched)

## Build

```bash
npm run build
```

Outputs `dist/` for GitHub Pages.
=======
Written by Hengsheng Wang $\cdot$ January 30th, 2026
- Home Page: Brief Introduction, Contact, Latest Release
- About Us: Information about who we are.
- Individual Pages for new issues
    - Markdown files for content
    - Backup MD assist within HTML in case of Markdown fetch failure.

## Next Steps
- So essentially I took a look at the `nytimes.com` website.
- Are we going to get there? Definitely no! Here are a few reasons why:
    - We don't post a new article every hour of the day, every day of the week.
    - Actually, we make a newsletter with about 10 articles every *month*
    - This isn't to say that we are incompetent; it is simply that the New York Times have hundreds of reporters!
    - On the other hand, our school newspaper has about 10 members. And one person making the site.
 
So with the plan of exotic designs out of mind, I decided to take a look at the Lakeside Tatler's website.
- They run this site on `sno` (for newspapers and media), which is fine I guess...
- They seem to also have a lot of newspaper club members...
- However, what I'm looking into is their front page design.
    - When it comes to the design of individual content (article) pages, there isn't much to tinker with
    - However, the front page design needs to have color and **flair** to attract readers.
    - This is stuff like having multiple articles on the front page with photos and different sizes, etc.

The drawbacks are that having this much stuff is incredibly hard to maintain. Maybe you can see, with one (or even a small group) of people behind the code,
- You need to constantly be changing headlines and article content and all that.
- And, managing these files is really a headache (even though programming is definitely fun)

So now I have to meet up with the newspaper club and see what I can do 😭

## Other Notes
(quick note, I made an overleaf file that roughly outlines what the next steps are, a bit more formally)
>>>>>>> 3612cf9bd6aff09923852eefbf834625d31e434d
