import { defineConfig } from "vite";

export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 5173,
        hmr: true,
    },
    build: {
        manifest: true,
        outDir: "./dist",
        rollupOptions: {
            input: [
                "index.html",
            ],
        },
    },
});
