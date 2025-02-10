import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import client from "honox/vite/client";
import honox from "honox/vite";

import nodeServerPlugin from "./vite-node-server-plugin";

const resolve = {
	alias: {
		"@": fileURLToPath(new URL("./app", import.meta.url)),
	},
};

export default defineConfig(({ mode }) => {
	if (mode === "development") {
		return {
			plugins: [honox()],
			resolve,
			server: {
				port: 3000,
				host: true,
				watch: {
					usePolling: true,
				},
			},
		};
	}
	if (mode === "client") {
		return {
			plugins: [client()],
			resolve,
		};
	}
	if (mode === "server") {
		return {
			plugins: [honox(), nodeServerPlugin()],
			resolve,
		};
	}
	throw new Error(`Unknown mode: ${mode}`);
});
