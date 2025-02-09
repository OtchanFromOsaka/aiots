import type { FC } from "hono/jsx";
import { css, Style } from "hono/css";

import { globalStyles } from "./global-styles";

export const BaseLayout: FC = (props) => {
	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<title>hono-sample | AIO.ts</title>
				<Style>{globalStyles}</Style>
			</head>
			<body>{props.children}</body>
		</html>
	);
};
