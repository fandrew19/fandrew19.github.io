# fandrew19.github.io

Personal site for Andrews Frimpong Adu — bioinformatics engineer & computational genomicist.

The site is built by GitHub Pages with Jekyll (no theme — the design is custom). Push to `main` and it rebuilds automatically within a minute or two.

## Pages

| URL | File | What's on it |
|---|---|---|
| `/` | `index.html` | Hero, profile, skills, experience, education, 3 featured projects, expertise, 4 most recent publications, teaching |
| `/projects/` | `projects/index.html` | All projects |
| `/publications/` | `publications/index.html` | All publications |

## Where things live

- `_layouts/default.html` — the page shell (`<head>`, fonts, stylesheet) shared by every page.
- `_includes/header.html` / `_includes/footer.html` — the top nav and the contact footer, shared by every page.
- `assets/css/site.css` — all styles. `assets/js/site.js` — scroll reveal, DNA background, mobile menu.
- `_includes/projects/*.html` — one file per project card. The home page and `/projects/` both include these, so edit a project in one place.
- `_data/publications.yml` — the publication list. The home page shows the first 4; `/publications/` shows all.

## Common edits

- **Add a publication:** copy an entry to the top of `_data/publications.yml` and edit it.
- **Add a project:** create `_includes/projects/<name>.html` (copy an existing card), then add `{% include projects/<name>.html %}` to `projects/index.html` — and to `index.html` too if it should be featured on the home page. Add `featured` to the card's class for a full-width card.
- **Add a new page:** create `<name>/index.html` starting with front matter (`layout: default`, `title: …`), and add a link to it in `_includes/header.html`.
- **Swap the CV:** replace `assets/Andrews_Frimpong_Adu_CV.pdf` with a file of the same name.

## Previewing locally (optional)

```bash
gem install jekyll
jekyll serve        # then open http://localhost:4000
```
