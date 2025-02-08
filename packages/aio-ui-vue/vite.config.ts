import { resolve } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		extensions: [".json", ".js", ".ts", ".vue"],
	},
	server: {
		port: 3000,
		host: true,
		watch: {
			usePolling: true,
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "./index.ts"),
			name: "aio-ui-vue",
			fileName: "index",
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
