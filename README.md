# Sher Afghan Malik — Portfolio

Static professional portfolio for [Sher Afghan Malik](https://sherafghanmalik.com), built with Astro and TypeScript.

The site includes research, publications, experience and education, a verified HTML CV, and centralized professional profile data. It intentionally does not publish an outdated PDF CV.

## Local development

Requires Node.js 22 and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

To preview the exact production output:

```bash
npm run build
npm run preview
```

Open `http://localhost:4321` unless Astro reports a different port.

## Deployment

- **GitHub Pages:** the included workflow builds and deploys pushes to `main`. Configure the repository's Pages source as GitHub Actions and point the custom domain to `sherafghanmalik.com`.
- **Cloudflare Pages:** use `npm run build` as the build command and `dist` as the output directory. No server runtime is required.

The site uses `https://sherafghanmalik.com` as its canonical origin.
