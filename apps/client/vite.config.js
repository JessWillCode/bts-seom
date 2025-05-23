import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    plugins: [react()],
    define: {
        "process.env": {}
    },
    server: {
        port: 5173,
        proxy: {
            "/api": {
                target: process.env.VITE_API_BASE_URL || "http://localhost:3001", // eslint-disable-line no-undef
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