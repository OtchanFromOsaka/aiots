import { createRouter, createWebHistory } from "vue-router";

import Index from "../pages/index.vue";
import Button from "../pages/button.vue";

const routes = [
	{
		path: "/",
		name: "Index",
		component: Index,
	},
	{
		path: "/button",
		name: "Button",
		component: Button,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
