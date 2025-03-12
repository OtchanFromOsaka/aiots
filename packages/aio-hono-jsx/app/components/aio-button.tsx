import { css } from "hono/css";
import type { PropsWithChildren, FC } from "hono/jsx";

interface AioButtonProps {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
}

export const AioButton: FC<PropsWithChildren<AioButtonProps>> = (props) => {
	const className = css`
		font-family: sans-serif;
	`;

	return (
		<button type={props.type || "button"} class={className}>
			{props.children}
		</button>
	);
};
