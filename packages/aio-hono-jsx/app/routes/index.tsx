import { createRoute } from "honox/factory";

import Counter from "@/islands/counter";
import ThemeToggleSwitch from "@/islands/theme-toggle-switch";

export default createRoute(async (c) => {
	const content = (
		<>
			<header>
				<h1>AIO-UI</h1>
			</header>
			<main>
				<div>
					<Counter />
				</div>
				<div>
					<ThemeToggleSwitch />
				</div>
			</main>
		</>
	)

	const head = { title: "AIO-UI" };

	return c.render(content, head);
});
