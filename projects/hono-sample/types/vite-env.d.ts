/// <reference types="vite/client" />

declare module "process" {
	global {
		namespace NodeJS {
			interface ProcessEnv {
				NODE_ENV?: string;
				ORIGIN?: string;
				HEADERS?: string;
				METHODS?: string;
			}
		}
	}
}

interface Env {
	// Variables: {};
	Bindings: NodeJS.ProcessEnv;
}
