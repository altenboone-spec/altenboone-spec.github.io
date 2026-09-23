# Alten Boone — Author Website

Static site for horror / sci-fi author **Alten Boone**. Pure HTML, CSS, and a little JavaScript — no build step.

## Preview locally

From this directory:

```bash
cd /workspace/alten-boone-site
python3 -m http.server 8765
```

Then open: [http://127.0.0.1:8765/](http://127.0.0.1:8765/)

Any other static server works the same way (e.g. `npx serve`, VS Code Live Server).

## Site map

| Path | Page |
|------|------|
| `index.html` | Home — hero, featured book, intro |
| `books.html` | All four titles with blurbs & Amazon links |
| `books/*.html` | Individual book pages |
| `about.html` | Full author bio |
| `blog/index.html` | Blog listing |
| `blog/*.html` | Individual posts |
| `css/styles.css` | Styles |
| `js/main.js` | Mobile nav |

## How to add a blog post

1. **Create a new HTML file** in `blog/`, e.g. `blog/my-new-post.html`.
2. **Copy an existing post** (`ordinary-people-extraordinary-places.html` or `writing-in-the-hours-left.html`) as a template.
3. Update:
   - `<title>` and `<meta name="description">`
   - `<time datetime="YYYY-MM-DD">` and visible date
   - `<h1>`, `.dek`, and body paragraphs inside `.article-body`
4. **Add a listing entry** at the top of `blog/index.html` inside `.blog-list`:

```html
<article class="blog-item">
  <time datetime="2026-04-01">1 April 2026</time>
  <h2><a href="my-new-post.html">Your Post Title</a></h2>
  <p class="excerpt">One or two sentences for the listing page.</p>
  <a class="read-more" href="my-new-post.html">Read post →</a>
</article>
```

Keep posts newest-first in the listing. Paths in blog posts use `../` for CSS, JS, and site nav (Home / Books / About).

Sample posts are clearly marked as replaceable in their body text.

## Amazon links

- **The Scrapyard** — direct ASINs (Kindle `B0GM5N97GH`, paperback `B0GM8BLQKC`)
- **Jacob’s Rest** — direct ASIN `B0GKJBTC39`
- **Terminus** / **Antiseptic Illusion** — Amazon search + author store (no stable `/dp/` ASIN wired yet; update when available)
- Author store: https://www.amazon.com/stores/author/B0GMPRM9D5

## License / credit

Site content © Alten Boone. Built as a static author portfolio — no framework required.
