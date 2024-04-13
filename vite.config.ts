import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@screens": path.resolve(__dirname, "./src/screens"),
      "@comps": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@apis": path.resolve(__dirname, "./src/store/apis"),
      "@slices": path.resolve(__dirname, "./src/store/slices"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
