import { removeAttributions } from "../../packages/aio-ui-vue/functions";

export default defineNuxtConfig({
	compatibilityDate: "2024-12-29",
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
	modules: ["@nuxt/test-utils/module"],
	$production: {
		vite: {
			vue: {
				template: {
					compilerOptions: {
						nodeTransforms: removeAttributions("data-test"),
					},
				},
			},
		},
	},
});
