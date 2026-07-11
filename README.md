# fandrew19.github.io

Personal site for Andrews Frimpong Adu — bioinformatics engineer & computational genomicist.

This is a custom-built, single-page site (`index.html`), **not** the default Jekyll theme, so it gives full control over layout and design. The `.nojekyll` file tells GitHub Pages to serve `index.html` as-is instead of trying to build it with Jekyll.

## How to publish

1. In this repo (`fandrew19/fandrew19.github.io`), replace the existing files with:
   - `index.html`
   - `.nojekyll`
   - `assets/Andrews_Frimpong_Adu_CV.pdf`
   - this `README.md`
   You can delete `_config.yml` — it's no longer used since the site doesn't run through Jekyll.
2. Commit and push to the `main` branch.
3. In **Settings → Pages**, make sure the source is set to deploy from the `main` branch, root folder.
4. Your site will be live at `https://fandrew19.github.io/` within a minute or two of the push.

## Making updates later

Everything — text, links, publications, timeline entries — lives directly in `index.html` as plain HTML, organized by section (profile, skills, experience, education, projects, expertise, publications, teaching, contact). Search for the text you want to change and edit it directly; no build step is required.

To swap the downloadable CV, replace `assets/Andrews_Frimpong_Adu_CV.pdf` with a new file of the same name (or update the `href` links in `index.html` if you rename it).
