# Jimmy Ornido – Medical Virtual Assistant (Client Catcher)

A conversion-first, JSON-driven one-page resume/portfolio for Jimmy C. Ornido, built with Vite + React + TypeScript + Tailwind CSS. Designed for client conversion and credibility, deployable to GitHub Pages.

---

## 🚀 Features
- **Conversion-first**: Lead capture form, clear offer, credibility metrics, workflow portfolio
- **JSON-driven**: Editable resume/site content, fetched at runtime from `/public/*.json`
- **Modern UI**: Editorial blue/navy healthcare brand, strong typography, accessible
- **Production-ready**: Error boundaries, validation, responsive, accessible
- **Deploys to GitHub Pages**: Uses `gh-pages` script

---

## 🛠️ Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Run locally
```sh
npm run dev
```

### 3. Build for production
```sh
npm run build
```

### 4. Deploy to GitHub Pages
- **Set your repo name** in `vite.config.ts`:
  ```ts
  // vite.config.ts
  const repoName = 'Jim_Resume_Website'; // <-- set to your GitHub repo name
  ```
- **Push to GitHub** (main branch)
- **Deploy:**
  ```sh
  npm run deploy
  ```
  This publishes the `dist/` folder to the `gh-pages` branch.

- **GitHub Pages settings:**
  - Set source to `gh-pages` branch, `/` root

### 5. Common Issues
- **Blank page after deploy?**
  - Make sure `base` in `vite.config.ts` matches your repo name (e.g., `/Jim_Resume_Website/`)
  - Clear browser cache or do a hard refresh
  - Ensure all asset/data paths use the correct base

---

## 📁 Project Structure
```
src/
  assets/
  components/
    ui/
  sections/
  data/
  hooks/
  lib/
  types/
  ErrorBoundary.tsx
  App.tsx
  main.tsx
```

---

## 📝 Content Management
- **Edit all resume/site content in:**
  - `public/resume.json`
  - `public/site.json`
  - (fetched at runtime — no rebuild needed for content-only changes in dev; still requires a redeploy on GitHub Pages)
- **Workflow portfolio & training certificates:**
  - `src/data/workflows.ts`
  - `src/data/training.ts`
- **Types and validation:**
  - `src/types/`
  - Uses [Zod](https://zod.dev/) for runtime validation of `resume.json`/`site.json`

---

## 🖼️ Images

- Run `node scripts/optimize-images.mjs` after adding new images to `src/assets/img/` to resize and convert them to WebP.
- Certificate/portrait originals are kept alongside their optimized `.webp` versions.
- Raw workflow screenshots that were never sanitized for public use are excluded via `.gitignore` — see the privacy review notes in project history before re-adding any screenshot-based visuals.

---

## 📨 Contact Form
- Client-side validation
- Uses `mailto:` to open email client (no backend required)
- Fallback: copy email address

---

## 🛡️ Error Handling
- Global error boundary
- Data loading errors show friendly panel
- Form validation errors are inline

---

## 📦 Dependencies
- React, TypeScript, Vite, Tailwind CSS, Zod

---

## 🏁 License
MIT
