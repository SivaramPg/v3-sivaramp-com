# sivaramp.com

Personal portfolio of Sivaram Pandariganthan — full-stack product engineer across AI platforms, crypto & payment systems, smart contracts, analytics infrastructure, mobile apps, and developer tools.

Live at [sivaramp.com](https://sivaramp.com/), hosted on Cloudflare Pages as a fully static build.

## Stack

- [Astro 7](https://astro.build/) — static output, zero client JS except the theme toggle
- [Tailwind CSS 4](https://tailwindcss.com/) — CSS-first config via `@tailwindcss/vite` (see `src/styles/global.css`; there is no `tailwind.config` file)
- TypeScript 6 (pinned to 6.x — `astro check` does not yet support the TS 7 native compiler)
- [Bun](https://bun.sh/) as package manager and script runner

## Commands

| Command           | Action                                            |
| :---------------- | :------------------------------------------------ |
| `bun install`     | Install dependencies                              |
| `bun run dev`     | Start local dev server at `localhost:4321`        |
| `bun run build`   | Type-check (`astro check`) and build to `./dist/` |
| `bun run preview` | Preview the production build locally              |

## Structure

```text
/
├── public/            # fonts, icons, images, robots.txt
├── src/
│   ├── components/    # page sections + small building blocks
│   ├── pages/
│   │   └── index.astro  # the single page
│   └── styles/
│       └── global.css   # Tailwind 4 CSS-first config (theme, dark variant)
└── astro.config.mjs
```

Dark mode is class-based: `ThemeSwitch.astro` toggles `.dark` on `<html>` and persists the choice to `localStorage`; the custom variant is defined in `global.css`.
