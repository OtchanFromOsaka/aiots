import { setTimeout } from "node:timers/promises";

import { Hono } from "hono";

const route = new Hono().get("/", async (c) => {
	await setTimeout(1000);
	return c.json({ message: "Hello, world!" });
});

export default route;
