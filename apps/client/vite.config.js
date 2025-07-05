import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    define: {
        "process.env": {}
    },
    server: {
        port: 5173,
        proxy: {
            "/api": {
                target: "https://bts-seom-backend.onrender.com", // eslint-disable-line no-undef
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        outDir: "dist",
        sourcemap: true,
    },
});
