import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [react()],
        server: {
        proxy: {
            '/api': {
                target: env.VITE_API_BASE_URL || 'http://localhost:3001',
                changeOrigin: true,
                secure: false
            },
          },
        },
        build: {
          outDir: 'dist',
          sourcemap: true
        },
    }
});
