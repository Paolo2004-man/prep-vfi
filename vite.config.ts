import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { jsonFileApi } from './server/jsonFileApi.ts';

// In produzione (GitHub Pages) il sito è in /prep-vfi/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/prep-vfi/' : '/',
  plugins: [react(), jsonFileApi()],
}));
