import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const VITE_BASE_URL = process.env.VITE_BASE_URL || "/news-portal";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  base: `${VITE_BASE_URL}`,
  host: true,
});
