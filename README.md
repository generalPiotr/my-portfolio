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

1. Push this repository to GitHub.
2. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select this repository.
4. Build settings:

| Setting | Value |
|--------|--------|
| Framework preset | None (or Next.js Static) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` (or `22`) |

5. Deploy. Optional: add a custom domain (e.g. `peterdabrowski.dev`) under **Custom domains**.

No environment variables are required for the static build.

## Project structure

- `src/app/` — App Router pages and global styles
- `src/components/` — UI sections (Nav, Hero, Skills, Projects, Contact, Footer)
- `src/lib/data.ts` — Content (skills, projects, links)
- `public/` — Static assets (images)
