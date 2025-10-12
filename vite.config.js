import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  server: {
    host: true,
  },
  plugins: [react(), tailwindcss()],
  base: "/bambi-growth-lab/",
});
