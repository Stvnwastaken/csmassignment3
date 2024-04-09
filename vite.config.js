import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/csmassignment3/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "products.html"),
        location: resolve(__dirname, "location.html"),
        extra: resolve(__dirname, "extra.html"),
        contact: resolve(__dirname, "contact.html"),
      }
    }
  }
});
