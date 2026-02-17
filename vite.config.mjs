import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: Set your repo name here for GitHub Pages deployment
const repoName = 'Jim_Resume_Website';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});