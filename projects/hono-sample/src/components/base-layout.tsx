import type { FC } from "hono/jsx";
import { css, cx, keyframes, Style } from "hono/css";

const globalClass = css`
	html {
		font-family: Arial, Helvetica, sans-serif;
		color: #efefef;
		background-color: #1f1f1f;
	}
`;

export const BaseLayout: FC = (props) => {
	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<title>hono-sample | AIO.ts</title>
				<Style>{globalClass}</Style>
			</head>
			<body>{props.children}</body>
		</html>
	);
};
