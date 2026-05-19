# Peter Dabrowski — Portfolio

Personal portfolio site built with Next.js 16, React 19, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export is written to the `out/` directory.

## Deploy on Cloudflare Pages

This project is a **static export** (`output: "export"` in `next.config.ts`). Do **not** use the full **Next.js** preset (OpenNext / `@opennextjs-cloudflare`) — that will fail.

### Correct build settings (Dashboard)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → your project → **Settings** → **Build**
2. Set:

| Setting | Value |
|--------|--------|
| Framework preset | **Next.js (Static HTML Export)** or **None** |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Node.js version | `20` |

3. **Save** and trigger a new deployment (**Deployments** → **Retry deployment**).

### If you see `opennextjs-cloudflare build` failed

Cloudflare is using the wrong framework preset (**Next.js** with Workers, not static export). Change the preset to **Next.js (Static HTML Export)** or **None** with `npm run build` and output `out`, then redeploy.

The repo includes `wrangler.jsonc` with `pages_build_output_dir: "./out"` so Wrangler/Pages knows the static output folder.

No environment variables are required.

## Project structure

- `src/app/` — App Router pages and global styles
- `src/components/` — UI sections (Nav, Hero, Skills, Projects, Contact, Footer)
- `src/lib/data.ts` — Content (skills, projects, links)
- `public/` — Static assets (images)
