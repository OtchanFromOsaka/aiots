import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import honox from "honox/vite";
import client from "honox/vite/client";

import { nodeServer } from "./vite-plugin";

const resolve = {
	alias: {
		"@": fileURLToPath(new URL("./app", import.meta.url)),
	},
};

const server = {
	port: 3000,
	host: true,
	watch: {
		usePolling: true,
	},
};

export default defineConfig(({ mode }) => {
	switch (mode) {
		case "development":
			return {
				plugins: [honox()],
				resolve,
				server,
			};
		case "client":
			return {
				plugins: [client()],
				resolve,
			};
		case "server":
			return {
				plugins: [honox(), nodeServer()],
				resolve,
			};
		default:
			throw new Error(`Unknown mode: ${mode}`);
	}
});
