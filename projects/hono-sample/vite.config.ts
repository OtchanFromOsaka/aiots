import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import devServer from "@hono/vite-dev-server";

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	const config = {
		plugins: [devServer({ entry: "./src/server-vite.ts" })],
		define: { "process.env": env },
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
			extensions: [".json", ".js", ".ts", ".jsx", ".tsx"],
		},
		server: {
			port: 3000,
			host: true,
			watch: {
				usePolling: true,
			},
		},
	};

	return config;
});
