import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'


const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/";

export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  },
  plugins: [vue()]
});
