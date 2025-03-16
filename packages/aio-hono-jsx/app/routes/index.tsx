import { createRoute } from "honox/factory";

import { AioAppBar } from "@/components/aio-app-bar";
import { Counter } from "@/islands/counter";
import { ThemeToggleSwitch } from "@/islands/theme-toggle-switch";

export default createRoute(async (c) => {
	const content = (
		<>
			<AioAppBar title="AIO-UI">
				<ThemeToggleSwitch />
			</AioAppBar>
			<main style={{ marginTop: "80px", padding: "16px" }}>
				<div>
					<Counter />
				</div>
			</main>
		</>
	);

	const head = { title: "AIO-UI" };

	return c.render(content, head);
});
