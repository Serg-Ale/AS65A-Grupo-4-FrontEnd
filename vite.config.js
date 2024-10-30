import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/assets/styles/variables.scss" as *;`, // Importa todas as variáveis e funções
      },
    },
  },
});
