import { builtinModules } from "node:module";

import type { Plugin, UserConfig } from "vite";

export function nodeServer(): Plugin {
	const name = "@hono/vite-node-server";

	const virtualEntryId = "virtual:node-server-entry-module";
	const resolvedVirtualEntryId = `\0${virtualEntryId}`;

	const resolveId = (id: string) => {
		if (id === virtualEntryId) {
			return resolvedVirtualEntryId;
		}
	};

	const load = async (id: string) => {
		if (id === resolvedVirtualEntryId) {
			return `
				import { Hono } from "hono";
				import { serveStatic } from "@hono/node-server/serve-static";
				import { serve } from "@hono/node-server";

				const worker = new Hono();
				worker.use("/static/*", serveStatic({ root: "./dist" }));
				worker.use("/favicon.ico", serveStatic({ root: "./dist" }));

				const modules = import.meta.glob(["/app/server.ts"], {
					import: "default",
					eager: true,
				});

				for (const [, app] of Object.entries(modules)) {
					if (app) {
						worker.route("/", app);
						worker.notFound(app.notFoundHandler);
					}
				}

				serve({ ...worker, port: 3000 }, (info) => {
					console.log("Server listening on port " + info.port);
				});
			`;
		}
	};

	const config = async (): Promise<UserConfig> => {
		return {
			ssr: {
				external: [],
				noExternal: true,
			},
			build: {
				outDir: "./dist",
				emptyOutDir: false,
				minify: true,
				ssr: true,
				rollupOptions: {
					external: [...builtinModules, /^node:/],
					input: virtualEntryId,
					output: {
						entryFileNames: "server.js",
					},
				},
			},
		};
	};

	return {
		name,
		resolveId,
		load,
		config,
	};
}

export function awsLambda(): Plugin {
	const name = "@hono/vite-aws-lambda";

	const virtualEntryId = "virtual:aws-lambda-entry-module";
	const resolvedVirtualEntryId = `\0${virtualEntryId}`;

	const resolveId = (id: string) => {
		if (id === virtualEntryId) {
			return resolvedVirtualEntryId;
		}
	};

	const load = async (id: string) => {
		if (id === resolvedVirtualEntryId) {
			return `
				import { Hono } from "hono";
				import { handle } from "hono/aws-lambda";

				const worker = new Hono();

				const modules = import.meta.glob(["/app/server.ts"], {
					import: "default",
					eager: true,
				});

				for (const [, app] of Object.entries(modules)) {
					if (app) {
						worker.route("/", app);
						worker.notFound(app.notFoundHandler);
					}
				}

				export const handler = handle(worker);
			`;
		}
	};

	const config = async (): Promise<UserConfig> => {
		return {
			ssr: {
				external: [],
				noExternal: true,
			},
			build: {
				outDir: "./dist",
				emptyOutDir: false,
				minify: true,
				ssr: true,
				rollupOptions: {
					external: [...builtinModules, /^node:/],
					input: virtualEntryId,
					output: {
						entryFileNames: "server.js",
					},
				},
			},
			esbuild: {
				minifyIdentifiers: true,
				minifySyntax: true,
				minifyWhitespace: true,
			},
		};
	};

	return {
		name,
		resolveId,
		load,
		config,
	};
}
