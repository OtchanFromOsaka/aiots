import { Hono } from "hono";

const route = new Hono().get("/", (c) => {
	return c.json({ message: "Hello, world!" });
});

export default route;
