import type { Plugin } from "vue";

import MyButton from "./src/MyButton.vue";

function createMyUi(): Plugin {
	return {
		install(app) {
			app.component("MyButton", MyButton);
		},
	};
}

export { createMyUi, MyButton };
