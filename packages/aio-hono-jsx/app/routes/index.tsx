import { createRoute } from "honox/factory";

import { Counter } from "@/islands/counter";

export default createRoute(async (c) => {
	const content = <Counter />;

	const head = { title: "AIO-UI" };

	return c.render(content, head);
});
