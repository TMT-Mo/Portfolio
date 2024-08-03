/// <reference types="vite/client" />
import * as path from "path";
import react from "@vitejs/plugin-react";
import svgrPlugin from 'vite-plugin-svgr';
import { defineConfig } from "vite";
import {
  default as tsconfigPaths,
  default as viteTsconfigPaths,
} from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    tsconfigPaths(),
    svgrPlugin()
  ],
  server: {
    // open: true,
    port: 3001,
  },
  base: "/Second-Portfolio/",
  // mode: "development",
  // build: {
  //   minify: false,
  // },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         "primary-color": "#0757A2",
  //         "secondary-color": "#16aced",
  //       },
  //       javascriptEnabled: true,
  //       additionalData: "@root-entry-name: default;",
  //     },
  //   },
  // },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    
  },

  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [esbuildCommonjs(["react-calendar", "react-date-picker"])],
  //   },
  // },
});
