import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/student": "http://localhost:8000/",
      "/admin": "http://localhost:8000/",
    },
  },
});
