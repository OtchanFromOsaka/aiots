import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { hc } from "hono/client";

import { BaseLayout } from "@/components/base-layout";
import apiRouter from "@/routes/api/router";

const RenderList: FC<{ todos: Array<string> }> = (props) => {
	return (
		<ul>
			{props.todos.map((v) => (
				<li key={v}>{v}</li>
			))}
		</ul>
	);
};

const client = hc<typeof apiRouter>(process.env.ORIGIN || "");

const page = new Hono().get("/", (c) => {
	return c.html(
		<BaseLayout>
			<h1>Hello Hono!</h1>
			<RenderList todos={["todo1", "todo2", "todo3"]} />
		</BaseLayout>,
	);
});

export default page;
