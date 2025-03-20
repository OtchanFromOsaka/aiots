import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

import { AioAppBar } from "@/components/aio-app-bar";
import { ThemeToggleSwitch } from "@/islands/theme-toggle-switch";
import { AioSideNav } from "@/components/aio-side-nav";
import { AioMain } from "@/components/aio-main";

const routes = [
	{ path: "/button", name: "AioButton" },
	{ path: "/button", name: "AioButton" },
	{ path: "/button", name: "AioButton" },
	{ path: "/button", name: "AioButton" },
];

export default jsxRenderer(({ children, title }) => {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{title}</title>
				<script src="/app/theme.ts" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/app/style.css" />
				<Script src="/app/client.ts" async />
				<Style />
			</head>
			<body>
				<AioAppBar>
					<h1>AIO-UI</h1>
					<ThemeToggleSwitch />
				</AioAppBar>
				<AioSideNav className="aio-app-bar-spacer">
					<ul>
						{routes.map((route) => (
							<li key={route.path}>
								<a href={route.path}>{route.name}</a>
							</li>
						))}
					</ul>
				</AioSideNav>
				<AioMain mainClassName="aio-app-bar-spacer aio-side-nav-spacer">
					{children}
				</AioMain>
			</body>
		</html>
	);
});
