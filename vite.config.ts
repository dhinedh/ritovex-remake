import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    sitemap({
      hostname: "https://zechsoft.tech",
      dynamicRoutes: [
        "/about-us",
        "/services",
        "/projects",
        "/blog",
        "/contact",
        "/careers",
        "/shopeasy",
        "/school-erp",
        "/hospital-hims",
        "/manufacturing",
        "/payroll-erp",
        "/billing-software",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
