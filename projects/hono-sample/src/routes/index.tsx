import { Hono } from "hono";

import { BaseLayout } from "@/layouts/base-layout";
import { Counter } from "@/islands/counter";

const page = new Hono().get("/", (c) => {
	return c.render(
		<BaseLayout>
			<h1>Hello Hono!</h1>
			<Counter />
		</BaseLayout>
	);
});

export default page;
