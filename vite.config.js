import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: true // Change this line to false disable auto-refreshing.
  }
})
