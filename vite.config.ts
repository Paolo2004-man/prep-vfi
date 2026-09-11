import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { jsonFileApi } from './server/jsonFileApi.ts';

export default defineConfig({
  plugins: [react(), jsonFileApi()],
});
