import type { FC } from 'hono/jsx'

export const BaseLayout: FC = (props) => {
	return (
		<html lang="ja">
			<body>{props.children}</body>
		</html>
	)
}
