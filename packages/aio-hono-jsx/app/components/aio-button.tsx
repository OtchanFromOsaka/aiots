import type { PropsWithChildren, FC } from "hono/jsx";

type ButtonVariant = "primary" | "secondary" | "outlined" | "text";
type ButtonSize = "small" | "medium" | "large";

interface AioButtonProps extends PropsWithChildren {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	variant?: ButtonVariant;
	size?: ButtonSize;
	fullWidth?: boolean;
	disabled?: boolean;
	backgroundColor?: string;
	color?: string;
	borderRadius?: number;
	elevation?: number;
	className?: string;
}

export const AioButton: FC<AioButtonProps> = ({
	type = "button",
	onClick,
	variant = "primary",
	size = "medium",
	fullWidth = false,
	disabled = false,
	backgroundColor,
	color,
	borderRadius = 4,
	elevation = 2,
	className = "",
	children,
}) => {
	const handleClick = () => {
		if (onClick && !disabled) onClick();
	};

	// Size-based styles
	const sizeStyles = {
		small: {
			padding: "6px 12px",
			fontSize: "0.875rem",
		},
		medium: {
			padding: "8px 16px",
			fontSize: "1rem",
		},
		large: {
			padding: "10px 20px",
			fontSize: "1.125rem",
		},
	};

	// Variant-based styles
	const getVariantStyles = (variant: ButtonVariant) => {
		switch (variant) {
			case "primary":
				return {
					backgroundColor: backgroundColor || "var(--primary-color)",
					color: color || "#ffffff",
					border: "none",
				};
			case "secondary":
				return {
					backgroundColor: backgroundColor || "var(--secondary-color)",
					color: color || "var(--text-color)",
					border: "none",
				};
			case "outlined":
				return {
					backgroundColor: "transparent",
					color: color || "var(--primary-color)",
					border: `1px solid ${color || "var(--primary-color)"}`,
				};
			case "text":
				return {
					backgroundColor: "transparent",
					color: color || "var(--primary-color)",
					border: "none",
				};
			default:
				return {};
		}
	};

	const baseStyle = {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: `${borderRadius}px`,
		fontWeight: "500",
		cursor: disabled ? "not-allowed" : "pointer",
		transition: "all 0.2s ease",
		opacity: disabled ? "0.6" : "1",
		width: fullWidth ? "100%" : "auto",
		boxShadow:
			variant !== "text" && variant !== "outlined" && elevation > 0
				? `0 ${elevation}px ${elevation * 2}px var(--shadow-color)`
				: "none",
		...sizeStyles[size],
		...getVariantStyles(variant),
	};

	// Note: Hover and active styles should be defined in global CSS using the aio-button class

	// Combine default class with user-provided class
	const buttonClassName = `aio-button aio-button-${variant} aio-button-${size}${
		fullWidth ? " aio-button-full-width" : ""
	}${disabled ? " aio-button-disabled" : ""}${
		className ? ` ${className}` : ""
	}`;

	return (
		<button
			type={type}
			onClick={handleClick}
			style={baseStyle}
			disabled={disabled}
			className={buttonClassName}
		>
			{children}
		</button>
	);
};
