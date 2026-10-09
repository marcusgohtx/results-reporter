# Results Reporter

Independent application extracted from marcusgohtx.github.io, with hosting configured for ChatGPT Sites and GitHub Pages.

## Development

Run `npm ci`, then `npm run dev`. Open http://localhost:3000.

Run `npm run lint` and `npm run build` before publishing. The static build is in `out/`.

## Deployment

The ChatGPT Site is named `results-reporter`. Its address is https://results-reporter.marcusgohtx.chatgpt.site. The Site starts private to its owner.

`.openai/hosting.json` records the Site identity and the `out/` static output directory. Normal builds use root-relative assets for Sites. GitHub Actions builds retain the repository base path for GitHub Pages.

The Sites source checkout is `.sites-checkout/`, with publication archives in `.sites-artifacts/`. Both are ignored by this repository. Use the Sites source workflow to sync source, build, package, and publish future changes to the existing Site ID. Changes made in this repository do not automatically update the hosted Site.

Enable GitHub Pages with **GitHub Actions** as its source. Pushing to `main` runs the included build and deploy workflow. The production base path comes from the repository name in GitHub Actions.

The portfolio stays at https://marcusgohtx.github.io/projects/.

Analysis runs in the browser using webR and ggplot2 from external services. Both CSV dataset mode and summary-statistics mode are preserved. See app/PROJECT_PLAN.md for the analysis design.
