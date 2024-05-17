import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/student": "https://aic-backend-crnr.onrender.com/",
      "/admin": "https://aic-backend-crnr.onrender.com/",
      "/frenchise": "https://aic-backend-crnr.onrender.com/",
      "/notification": "https://aic-backend-crnr.onrender.com/",
    },
  },
});
