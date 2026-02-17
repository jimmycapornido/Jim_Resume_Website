# Jimmy Ornido – Medical Virtual Assistant (Client Catcher)

A conversion-first, JSON-driven one-page resume/portfolio for Jimmy C. Ornido, built with Vite + React + TypeScript + Tailwind CSS. Designed for client conversion and credibility, deployable to GitHub Pages.

---

## 🚀 Features
- **Conversion-first**: Lead capture form, clear offer, credibility metrics
- **JSON-driven**: All resume and site content in `/src/data/*.json`
- **Modern UI**: Clean, clinical, accessible, dark mode
- **No hardcoded resume content**: All data loaded from JSON
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
  - `src/data/resume.json`
  - `src/data/site.json`
- **Types and validation:**
  - `src/types/`
  - Uses [Zod](https://zod.dev/) for runtime validation

---

## 🌓 Dark Mode
- Toggle in bottom-right corner
- Remembers preference (localStorage)

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
