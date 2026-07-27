# phantomdo.github.io

Portfolio and online CV of **Donnovan Feuillastre**, game programmer.
Built with [Hugo](https://gohugo.io) (extended, ≥ 0.146) — no theme, the layouts are hand-written.

## Running it locally

```bash
hugo server -D
```

Then open <http://localhost:1313>. The French site lives under `/fr/`.

## Where things live

| Path | What it holds |
| --- | --- |
| `hugo.toml` | Site config: languages, menus, social links, e-mail |
| `data/cv/en.yaml`, `data/cv/fr.yaml` | **The CV itself** — experience, education, skills, languages |
| `content/en/`, `content/fr/` | Pages and project write-ups, one folder per language |
| `layouts/` | Hand-written templates (Hugo ≥ 0.146 layout system) |
| `assets/css/main.css` | The whole design system, including print styles for the CV |
| `assets/images/projects/` | Project cover images (optional — cards fall back to a generated monogram) |
| `static/images/` | Favicon and anything served as-is |

## Common edits

**Update the CV.** Edit `data/cv/<lang>.yaml`. Both the `/cv` page and the home page
"Experience" section read from it — there is no second copy to keep in sync.

**Add a project.** Create the same filename in `content/en/projects/` and `content/fr/projects/`
— matching filenames is what links the two languages together. Front matter:

```yaml
---
title: "Game name"
weight: 10          # controls ordering, lowest first
featured: true      # shows on the home page (first 3 featured by weight)
lede: "One sentence shown on the card and under the title."
studio: "Studio name"
studio_url: "https://…"
role: "Gameplay Programmer"
year: "2024"
engine: "Unity"
platforms: ["PC", "Nintendo Switch"]
tech: ["C#", "Optimisation"]
store: "https://store.steampowered.com/app/…"
cover: "game-name.jpg"   # optional, file in assets/images/projects/
---
```

**Add a cover image.** Drop it in `assets/images/projects/` and reference the filename in
`cover:`. Hugo resizes and converts it to WebP at build time. Without a cover, the card renders
a gradient with the game's initials.

The current covers are Steam store capsules (`capsule_616x353.jpg`), 616px wide — the templates
target exactly that width so nothing is upscaled. They belong to the games' studios and
publishers; see `LICENSE`.

**Change the e-mail or social links.** `hugo.toml`, under `[params]`.

## Deployment

Pushing to `main` triggers `.github/workflows/hugo.yml`, which builds with Hugo extended and
publishes to GitHub Pages. The repository must have **Settings → Pages → Source** set to
**GitHub Actions**.
