import { createRoute } from "honox/factory";

export default createRoute(async (c) => {
	return c.render(
		<div>
			<header>
				<h1>AIO-UI</h1>
			</header>
		</div>,
		{ title: "AIO-UI" },
	);
});
