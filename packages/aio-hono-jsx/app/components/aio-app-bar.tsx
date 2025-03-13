import { css } from "hono/css";
import type { PropsWithChildren, FC, Child } from "hono/jsx";
import { AioButton } from "./aio-button";

type AppBarVariant = "primary" | "secondary" | "light" | "dark" | "transparent";
type AppBarPosition = "fixed" | "static" | "sticky";
type AppBarSize = "sm" | "md" | "lg";

interface AioAppBarProps {
	variant?: AppBarVariant;
	position?: AppBarPosition;
	size?: AppBarSize;
	elevation?: boolean;
	logo?: Child;
	title?: string;
	actions?: Child;
	onMenuClick?: () => void;
	transparent?: boolean;
	fullWidth?: boolean;
}

// Helper function to generate variant styles
const getVariantStyles = (variant: AppBarVariant) => {
	const variants = {
		primary: {
			bg: "#4361ee",
			text: "#ffffff",
			border: "none",
		},
		secondary: {
			bg: "#6c757d",
			text: "#ffffff",
			border: "none",
		},
		light: {
			bg: "#f8f9fa",
			text: "#212529",
			border: "1px solid #dee2e6",
		},
		dark: {
			bg: "#343a40",
			text: "#ffffff",
			border: "none",
		},
		transparent: {
			bg: "transparent",
			text: "#212529",
			border: "none",
		},
	};

	return variants[variant];
};

// Helper function to generate size styles
const getSizeStyles = (size: AppBarSize) => {
	const sizes = {
		sm: {
			height: "48px",
			padding: "0 1rem",
			fontSize: "0.875rem",
		},
		md: {
			height: "64px",
			padding: "0 1.5rem",
			fontSize: "1rem",
		},
		lg: {
			height: "80px",
			padding: "0 2rem",
			fontSize: "1.125rem",
		},
	};

	return sizes[size];
};

// Helper function to generate position styles
const getPositionStyles = (position: AppBarPosition) => {
	const positions = {
		fixed: {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			zIndex: 1100,
		},
		static: {
			position: "static",
		},
		sticky: {
			position: "sticky",
			top: 0,
			zIndex: 1000,
		},
	};

	return positions[position];
};

export const AioAppBar: FC<PropsWithChildren<AioAppBarProps>> = ({
	variant = "primary",
	position = "fixed",
	size = "md",
	elevation = true,
	logo,
	title,
	actions,
	onMenuClick,
	transparent = false,
	fullWidth = false,
	children,
}) => {
	const variantStyles = getVariantStyles(transparent ? "transparent" : variant);
	const sizeStyles = getSizeStyles(size);
	const positionStyles = getPositionStyles(position);

	// Base app bar styles
	const appBarClass = css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: ${sizeStyles.height};
		padding: ${sizeStyles.padding};
		background-color: ${variantStyles.bg};
		color: ${variantStyles.text};
		border-bottom: ${variantStyles.border};
		font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
		font-size: ${sizeStyles.fontSize};
		box-sizing: border-box;
		transition: all 0.3s ease;
		${position === "fixed" ? "width: 100%;" : ""}
		${position === "fixed" || position === "sticky" ? "backdrop-filter: blur(8px);" : ""}
		${elevation ? "box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);" : ""}
		${Object.entries(positionStyles)
			.map(([key, value]) => `${key}: ${value};`)
			.join(" ")}
	`;

	const containerClass = css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: ${fullWidth ? "100%" : "1200px"};
		margin: 0 auto;
		height: 100%;
	`;

	const leftSectionClass = css`
		display: flex;
		align-items: center;
		gap: 1rem;
	`;

	const titleClass = css`
		font-weight: 600;
		font-size: 1.25rem;
		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	`;

	const logoClass = css`
		display: flex;
		align-items: center;
		height: 100%;
	`;

	const navClass = css`
		display: flex;
		align-items: center;
		height: 100%;
		margin-left: 2rem;

		@media (max-width: 768px) {
			display: none;
		}
	`;

	const actionsClass = css`
		display: flex;
		align-items: center;
		gap: 0.5rem;
	`;

	const menuButtonClass = css`
		display: none;
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		padding: 0.5rem;
		margin-right: 0.5rem;

		@media (max-width: 768px) {
			display: block;
		}
	`;

	// SVG for menu icon
	const menuIcon = (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="Menu"
		>
			<title>Menu</title>
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	);

	return (
		<header class={appBarClass}>
			<div class={containerClass}>
				<div class={leftSectionClass}>
					{onMenuClick && (
						<button type="button" class={menuButtonClass} onClick={onMenuClick}>
							{menuIcon}
						</button>
					)}
					{logo && <div class={logoClass}>{logo}</div>}
					{title && <h1 class={titleClass}>{title}</h1>}
					{children && <nav class={navClass}>{children}</nav>}
				</div>
				{actions && <div class={actionsClass}>{actions}</div>}
			</div>
		</header>
	);
};

// NavItem component for navigation links
interface NavItemProps {
	href?: string;
	active?: boolean;
	onClick?: () => void;
}

export const AioNavItem: FC<PropsWithChildren<NavItemProps>> = ({
	href,
	active = false,
	onClick,
	children,
}) => {
	const navItemClass = css`
		display: inline-flex;
		align-items: center;
		height: 100%;
		padding: 0 1rem;
		color: inherit;
		text-decoration: none;
		position: relative;
		transition: all 0.2s ease;
		opacity: ${active ? "1" : "0.8"};
		font-weight: ${active ? "600" : "400"};

		&:hover {
			opacity: 1;
			background-color: rgba(255, 255, 255, 0.1);
		}

		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 3px;
			background-color: currentColor;
			transform: scaleX(${active ? "1" : "0"});
			transition: transform 0.2s ease;
		}

		&:hover::after {
			transform: scaleX(1);
		}
	`;

	return href ? (
		<a href={href} class={navItemClass}>
			{children}
		</a>
	) : (
		<button type="button" class={navItemClass} onClick={onClick}>
			{children}
		</button>
	);
};

// Action button for the app bar
interface ActionButtonProps {
	icon: Child;
	label?: string;
	onClick?: () => void;
	badge?: number | string;
}

export const AioActionButton: FC<ActionButtonProps> = ({
	icon,
	label,
	onClick,
	badge,
}) => {
	const actionButtonClass = css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 50%;
		position: relative;
		transition: background-color 0.2s ease;

		&:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}
	`;

	const badgeClass = css`
		position: absolute;
		top: 0;
		right: 0;
		background-color: #e74c3c;
		color: white;
		border-radius: 50%;
		min-width: 18px;
		height: 18px;
		font-size: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 4px;
		transform: translate(25%, -25%);
		font-weight: bold;
	`;

	const labelClass = css`
		margin-left: 0.5rem;
		font-size: 0.875rem;

		@media (max-width: 768px) {
			display: none;
		}
	`;

	return (
		<button
			type="button"
			class={actionButtonClass}
			onClick={onClick}
			aria-label={label}
		>
			{icon}
			{label && <span class={labelClass}>{label}</span>}
			{badge && <span class={badgeClass}>{badge}</span>}
		</button>
	);
};

// Dropdown menu for app bar
interface DropdownProps {
	trigger: Child;
	open?: boolean;
	onToggle?: () => void;
}

export const AioDropdown: FC<PropsWithChildren<DropdownProps>> = ({
	trigger,
	open = false,
	onToggle,
	children,
}) => {
	const dropdownClass = css`
		position: relative;
		display: inline-block;
	`;

	const triggerClass = css`
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		&:hover {
			background-color: rgba(255, 255, 255, 0.1);
			border-radius: 4px;
		}
	`;

	const menuClass = css`
		position: absolute;
		top: 100%;
		right: 0;
		background-color: white;
		border-radius: 4px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		min-width: 200px;
		z-index: 1200;
		overflow: hidden;
		transform-origin: top right;
		transition: transform 0.2s ease, opacity 0.2s ease;
		transform: ${open ? "scale(1)" : "scale(0.95)"};
		opacity: ${open ? "1" : "0"};
		pointer-events: ${open ? "auto" : "none"};
	`;

	return (
		<div class={dropdownClass}>
			<button type="button" class={triggerClass} onClick={onToggle}>
				{trigger}
			</button>
			<div class={menuClass}>{children}</div>
		</div>
	);
};

// Dropdown menu item
interface DropdownItemProps {
	icon?: Child;
	onClick?: () => void;
	divider?: boolean;
}

export const AioDropdownItem: FC<PropsWithChildren<DropdownItemProps>> = ({
	icon,
	onClick,
	divider = false,
	children,
}) => {
	const itemClass = css`
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		color: #212529;
		text-decoration: none;
		cursor: pointer;
		transition: background-color 0.2s ease;
		border-bottom: ${divider ? "1px solid #e9ecef" : "none"};

		&:hover {
			background-color: #f8f9fa;
		}
	`;

	const iconClass = css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		color: #6c757d;
	`;

	return (
		<button type="button" class={itemClass} onClick={onClick}>
			{icon && <span class={iconClass}>{icon}</span>}
			{children}
		</button>
	);
};
