import { createRoute } from "honox/factory";

import { Counter } from "@/islands/counter";

export default createRoute(async (c) => {
	const content = (
		<>
			<main style={{ marginTop: "80px", marginLeft: "266px", padding: "16px" }}>
				<div>
					<Counter />
				</div>
			</main>
		</>
	);

	const head = { title: "AIO-UI" };

	return c.render(content, head);
});
