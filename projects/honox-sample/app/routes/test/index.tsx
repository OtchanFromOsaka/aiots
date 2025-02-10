import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Fetcher from "@/islands/fetcher";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
	const name = c.req.query("name") ?? "Test";
	return c.render(
		<div class={className}>
			<h1>Hello, {name}!</h1>
			<Fetcher />
		</div>,
		{ title: name },
	);
});
