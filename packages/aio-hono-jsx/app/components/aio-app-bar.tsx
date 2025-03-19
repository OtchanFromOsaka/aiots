import type { FC, PropsWithChildren } from "hono/jsx";

interface AioAppBarProps extends PropsWithChildren {
	position?: "fixed" | "static" | "sticky" | "absolute" | "relative";
	height?: number;
	className?: string;
}

export const AioAppBar: FC<AioAppBarProps> = ({
	position = "fixed",
	height = 64,
	className = "",
	children,
}) => {
	const style = {
		position,
		top: position === "fixed" || position === "sticky" ? "0" : undefined,
		left: position === "fixed" ? "0" : undefined,
		right: position === "fixed" ? "0" : undefined,
		height,
	};

	const fullClassName = `
		aio-app-bar
		${className ? ` ${className}` : ""}
	`;

	return (
		<>
			<header style={style} className={fullClassName}>
				{children}
			</header>
			<div style={{ height }}></div>
		</>
	);
};
