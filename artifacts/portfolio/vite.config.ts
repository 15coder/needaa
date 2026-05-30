import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(async ({ command }) => {
  const isDev = command === "serve";

  /* PORT — only required in dev/preview, not during `vite build` */
  let port = 3000;
  if (isDev) {
    const rawPort = process.env.PORT;
    if (!rawPort) throw new Error("PORT environment variable is required for dev.");
    const p = Number(rawPort);
    if (Number.isNaN(p) || p <= 0) throw new Error(`Invalid PORT value: "${rawPort}"`);
    port = p;
  }

  /* BASE_PATH — defaults to "/" for Netlify / standalone deploys */
  const basePath = process.env.BASE_PATH ?? "/";

  const replitPlugins =
    isDev && process.env.REPL_ID
      ? [
          await import("@replit/vite-plugin-runtime-error-modal").then(m => m.default()),
          await import("@replit/vite-plugin-cartographer").then(m =>
            m.cartographer({ root: path.resolve(import.meta.dirname, "..") })
          ),
          await import("@replit/vite-plugin-dev-banner").then(m => m.devBanner()),
        ]
      : [];

  return {
    base: basePath,
    plugins: [react(), tailwindcss(), ...replitPlugins],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: isDev ? { port, strictPort: true, host: "0.0.0.0", allowedHosts: true } : undefined,
    preview: isDev ? { port, host: "0.0.0.0", allowedHosts: true } : undefined,
  };
});
