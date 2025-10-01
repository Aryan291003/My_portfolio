import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path"; // <-- works even if "type": "module"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
