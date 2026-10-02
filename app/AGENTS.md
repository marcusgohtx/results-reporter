# Results Reporter Project Notes

- This folder contains the independent Results Reporter application.
- Before making substantial changes, read [PROJECT_PLAN.md](./PROJECT_PLAN.md) in this same folder.
- Keep this application standalone; its home page is app/page.tsx.
- Preserve the current default site styling unless the user explicitly asks for custom styling.
- The current implemented analysis is `independent samples t-test`.
- Summary-stats mode and dataset mode should both remain supported.
- Analysis and visualization are intended to run in-browser with `webR` and `ggplot2`.
- The report is the primary output. R code, R output, and hover-linked values are supporting evidence panels.
- For each new analysis added later, ask the user for the exact report template or a sample write-up before finalizing the report renderer.
