import { createRoute } from "honox/factory";

import { AioAppBar } from "@/components/aio-app-bar";
import { AioSideNav } from "@/components/aio-side-nav";
import { Counter } from "@/islands/counter";
import { ThemeToggleSwitch } from "@/islands/theme-toggle-switch";

export default createRoute(async (c) => {
	const content = (
		<>
			<AioAppBar title="AIO-UI">
				<ThemeToggleSwitch />
			</AioAppBar>
			<AioSideNav>
				<h2>Navigation</h2>
				<ul style={{ listStyle: "none", padding: "0", marginTop: "16px" }}>
					<li style={{ marginBottom: "8px" }}>
						<a
							href="/"
							style={{ textDecoration: "none", color: "var(--text-color)" }}
						>
							Home
						</a>
					</li>
					<li style={{ marginBottom: "8px" }}>
						<a
							href="/button"
							style={{ textDecoration: "none", color: "var(--text-color)" }}
						>
							AioButton
						</a>
					</li>
				</ul>
			</AioSideNav>
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
