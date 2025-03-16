import type { FC, PropsWithChildren } from "hono/jsx";

interface AioSideNavProps extends PropsWithChildren {
	location?: "left" | "right";
	visible?: boolean;
	overlay?: boolean;
	width?: number;
	className?: string;
}

export const AioSideNav: FC<AioSideNavProps> = ({
	location = "left",
	visible = true,
	overlay = false,
	width = 250,
	className = "",
	children,
}) => {
	const sideNavStyle = {
		position: "fixed",
		top: "0",
		[location]: visible ? "0" : `-${width}px`,
		width: `${width}px`,
		height: "100vh",
		backgroundColor: "var(--secondary-color)",
		boxShadow: "0 0 10px var(--shadow-color)",
		transition: "all 0.3s ease",
		zIndex: "900",
		overflowY: "auto",
		padding: "16px",
		boxSizing: "border-box",
	};

	const overlayStyle = overlay
		? {
				position: "fixed",
				top: "0",
				left: "0",
				width: "100vw",
				height: "100vh",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				zIndex: "800",
				display: visible ? "block" : "none",
				transition: "all 0.3s ease",
			}
		: {};

	return (
		<>
			{overlay && <div style={overlayStyle} />}
			<nav style={sideNavStyle} className={className}>
				{children}
			</nav>
		</>
	);
};
