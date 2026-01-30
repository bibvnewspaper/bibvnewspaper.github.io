# Templates

Use these templates when adding new issues or articles.

## issue.md

```
# Month YYYY Issue

Welcome to the Month YYYY edition of *On a MONTHLY BASIS*. This month we cover campus culture, student initiatives, and a spotlight interview.

## Highlights
- Highlight one
- Highlight two
- Highlight three

## Editor's note
Thank you for reading and supporting our student writers. If you have story ideas, send them our way.
```

## issue index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Month YYYY Issue | On a MONTHLY BASIS</title>
    <meta
      name="description"
      content="Month YYYY issue of the On a MONTHLY BASIS student newspaper."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../../styles.css" />
  </head>
  <body>
    <div class="page">
      <header class="site-header">
        <nav class="nav" aria-label="Primary">
          <a class="nav__brand" href="../../index.html">On a MONTHLY BASIS</a>
          <div class="nav__links">
            <a class="nav__link" href="../../index.html">Home</a>
            <a class="nav__link" href="../../about.html">About Us</a>
            <a class="nav__link" href="../../formatting.html">Format</a>
          </div>
        </nav>
      </header>

      <main class="main">
        <section class="hero">
          <p class="eyebrow">Latest Issue</p>
          <h1>Month YYYY</h1>
          <p class="lead">
            Monthly stories, interviews, and features from BASIS Independent Bellevue.
          </p>
        </section>

        <section class="section">
          <h2>In This Issue</h2>
          <div class="issue-links">
            <a class="issue-link" href="articles/your-article.html">
              Article title goes here
            </a>
          </div>
        </section>

        <section class="section">
          <div class="markdown" data-markdown-src="issue.md">
            <script type="text/markdown" data-markdown-fallback>
# Month YYYY Issue

Welcome to the Month YYYY edition of *On a MONTHLY BASIS*. This month we cover campus culture, student initiatives, and a spotlight interview.

## Highlights
- Highlight one
- Highlight two
- Highlight three

## Editor's note
Thank you for reading and supporting our student writers. If you have story ideas, send them our way.
            </script>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="footer-grid">
          <div>
            <p class="footer-title">On a Monthly BASIS</p>
            <p class="footer-meta">© 2026 On a Monthly BASIS Newspaper</p>
          </div>
          <div>
            <p class="footer-title">Links</p>
            <ul class="footer-links">
              <li><a href="../../index.html">Home</a></li>
              <li><a href="../../about.html">About</a></li>
              <li><a href="../../formatting.html">Format</a></li>
              <li><a href="index.html">Latest Issue</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-title">Contact</p>
            <ul class="footer-links">
              <li><a href="mailto:basisindependentblv.newspaper@gmail.com">basisindependentblv.newspaper@gmail.com</a></li>
              <li><a href="https://github.com/bibvnewspaper/bibvnewspaper.github.io">GitHub</a></li>
              <li><a href="../../changelog/">Changelog</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" defer></script>
    <script src="../../script.js" defer></script>
  </body>
</html>
```

## article.md

```
# Article Title

*By Author Name*

Opening paragraph of the article.

## Section title
- Bullet one
- Bullet two

Closing paragraph.

> Optional quote.
```

## article.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Article Title | On a MONTHLY BASIS</title>
    <meta
      name="description"
      content="Article: Article Title."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../../../styles.css" />
  </head>
  <body>
    <div class="page">
      <header class="site-header">
        <nav class="nav" aria-label="Primary">
          <a class="nav__brand" href="../../../index.html">On a MONTHLY BASIS</a>
          <div class="nav__links">
            <a class="nav__link" href="../index.html">Month YYYY Issue</a>
            <a class="nav__link" href="../../../about.html">About Us</a>
            <a class="nav__link" href="../../../formatting.html">Format</a>
          </div>
        </nav>
      </header>

      <main class="main">
        <section class="hero">
          <p class="eyebrow">Feature</p>
          <h1>Article Title</h1>
          <p class="lead">Month YYYY • On a MONTHLY BASIS</p>
        </section>

        <section class="section">
          <div class="markdown" data-markdown-src="your-article.md">
            <script type="text/markdown" data-markdown-fallback>
# Article Title

*By Author Name*

Opening paragraph of the article.

## Section title
- Bullet one
- Bullet two

Closing paragraph.

> Optional quote.
            </script>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="footer-grid">
          <div>
            <p class="footer-title">On a Monthly BASIS</p>
            <p class="footer-meta">© 2026 On a Monthly BASIS Newspaper</p>
          </div>
          <div>
            <p class="footer-title">Links</p>
            <ul class="footer-links">
              <li><a href="../../../index.html">Home</a></li>
              <li><a href="../../../about.html">About</a></li>
              <li><a href="../../../formatting.html">Format</a></li>
              <li><a href="../index.html">Latest Issue</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-title">Contact</p>
            <ul class="footer-links">
              <li><a href="mailto:basisindependentblv.newspaper@gmail.com">basisindependentblv.newspaper@gmail.com</a></li>
              <li><a href="https://github.com/bibvnewspaper/bibvnewspaper.github.io">GitHub</a></li>
              <li><a href="../../../changelog/">Changelog</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" defer></script>
    <script src="../../../script.js" defer></script>
  </body>
</html>
```
