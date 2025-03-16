import type { FC, PropsWithChildren } from "hono/jsx";

interface AioAppBarProps extends PropsWithChildren {
	title?: string;
	height?: number | string;
	backgroundColor?: string;
	color?: string;
	position?: "fixed" | "static" | "sticky" | "absolute" | "relative";
	elevation?: number;
	className?: string;
}

export const AioAppBar: FC<AioAppBarProps> = ({
	title,
	height = 64,
	backgroundColor = "var(--primary-color)",
	color = "#ffffff",
	position = "fixed",
	elevation = 4,
	className = "",
	children,
}) => {
	const containerStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: typeof height === "number" ? `${height}px` : height,
		backgroundColor,
		color,
		position,
		top: position === "fixed" || position === "sticky" ? "0" : undefined,
		left: position === "fixed" ? "0" : undefined,
		right: position === "fixed" ? "0" : undefined,
		zIndex: "1000",
		padding: "0 16px",
		boxSizing: "border-box",
		boxShadow:
			elevation > 0
				? `0 ${elevation}px ${elevation * 2}px var(--shadow-color)`
				: "none",
	};

	const titleStyle = {
		margin: "0",
		fontSize: "1.25rem",
		fontWeight: "500",
		flexGrow: "1",
	};

	return (
		<header style={containerStyle} className={className}>
			{title && <h1 style={titleStyle}>{title}</h1>}
			{children}
		</header>
	);
};
