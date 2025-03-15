import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

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
			<body>{children}</body>
		</html>
	);
});
