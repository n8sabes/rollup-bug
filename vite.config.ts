import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig, type UserConfig } from "vite";

export default defineConfig((): UserConfig => {
  return {
    plugins: [qwikVite({debug: true, csr: true})],
  };
});
