# Results Reporter

Independent application extracted from marcusgohtx.github.io. The app opens at the root of its own GitHub Pages project site.

## Development

Run `npm ci`, then `npm run dev`. Open http://localhost:3000.

Run `npm run lint` and `npm run build` before publishing. The static build is in `out/`.

## Deployment

Enable GitHub Pages with **GitHub Actions** as its source. Pushing to `main` runs the included build and deploy workflow. The production base path comes from the repository name in GitHub Actions.

The portfolio stays at https://marcusgohtx.github.io/projects/.

Analysis runs in the browser using webR and ggplot2 from external services. Both CSV dataset mode and summary-statistics mode are preserved. See app/PROJECT_PLAN.md for the analysis design.
