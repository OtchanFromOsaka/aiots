import { css } from "hono/css";
import type { PropsWithChildren, FC, Child } from "hono/jsx";

type ButtonVariant =
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "info"
	| "light"
	| "dark";
type ButtonSize = "sm" | "md" | "lg";

interface AioButtonProps {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	loading?: boolean;
	fullWidth?: boolean;
	icon?: Child;
	iconPosition?: "left" | "right";
}

// Helper function to generate variant styles
const getVariantStyles = (variant: ButtonVariant) => {
	const variants = {
		primary: {
			bg: "#4361ee",
			hoverBg: "#3a56d4",
			activeBg: "#2a46c0",
			text: "#ffffff",
			border: "none",
		},
		secondary: {
			bg: "#6c757d",
			hoverBg: "#5c636a",
			activeBg: "#565e64",
			text: "#ffffff",
			border: "none",
		},
		success: {
			bg: "#2ecc71",
			hoverBg: "#27ae60",
			activeBg: "#219653",
			text: "#ffffff",
			border: "none",
		},
		danger: {
			bg: "#e74c3c",
			hoverBg: "#c0392b",
			activeBg: "#a33025",
			text: "#ffffff",
			border: "none",
		},
		warning: {
			bg: "#f39c12",
			hoverBg: "#e67e22",
			activeBg: "#d35400",
			text: "#212529",
			border: "none",
		},
		info: {
			bg: "#3498db",
			hoverBg: "#2980b9",
			activeBg: "#2471a3",
			text: "#ffffff",
			border: "none",
		},
		light: {
			bg: "#f8f9fa",
			hoverBg: "#e2e6ea",
			activeBg: "#dae0e5",
			text: "#212529",
			border: "1px solid #dee2e6",
		},
		dark: {
			bg: "#343a40",
			hoverBg: "#23272b",
			activeBg: "#1d2124",
			text: "#ffffff",
			border: "none",
		},
	};

	return variants[variant];
};

// Helper function to generate size styles
const getSizeStyles = (size: ButtonSize) => {
	const sizes = {
		sm: {
			padding: "0.25rem 0.5rem",
			fontSize: "0.875rem",
			borderRadius: "0.2rem",
			height: "30px",
		},
		md: {
			padding: "0.375rem 0.75rem",
			fontSize: "1rem",
			borderRadius: "0.25rem",
			height: "38px",
		},
		lg: {
			padding: "0.5rem 1rem",
			fontSize: "1.25rem",
			borderRadius: "0.3rem",
			height: "48px",
		},
	};

	return sizes[size];
};

export const AioButton: FC<PropsWithChildren<AioButtonProps>> = ({
	type = "button",
	onClick,
	variant = "primary",
	size = "md",
	disabled = false,
	loading = false,
	fullWidth = false,
	icon,
	iconPosition = "left",
	children,
}) => {
	const variantStyles = getVariantStyles(variant);
	const sizeStyles = getSizeStyles(size);

	// Base button styles
	const buttonClass = css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
		font-weight: 500;
		line-height: 1.5;
		text-align: center;
		text-decoration: none;
		vertical-align: middle;
		cursor: ${disabled || loading ? "not-allowed" : "pointer"};
		user-select: none;
		border: ${variantStyles.border};
		padding: ${sizeStyles.padding};
		font-size: ${sizeStyles.fontSize};
		border-radius: ${sizeStyles.borderRadius};
		height: ${sizeStyles.height};
		background-color: ${disabled ? "#e9ecef" : variantStyles.bg};
		color: ${disabled ? "#6c757d" : variantStyles.text};
		opacity: ${disabled ? "0.65" : "1"};
		width: ${fullWidth ? "100%" : "auto"};
		transition: all 0.15s ease-in-out;
		position: relative;
		overflow: hidden;

		&:hover {
			background-color: ${!disabled && !loading ? variantStyles.hoverBg : ""};
			transform: ${!disabled && !loading ? "translateY(-1px)" : ""};
			box-shadow: ${!disabled && !loading ? "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)" : ""};
		}

		&:focus {
			outline: 0;
			box-shadow: 0 0 0 0.25rem ${variant === "light" ? "rgba(248, 249, 250, 0.5)" : `${variantStyles.bg}40`};
		}

		&:active {
			background-color: ${!disabled && !loading ? variantStyles.activeBg : ""};
			transform: ${!disabled && !loading ? "translateY(0)" : ""};
			box-shadow: ${!disabled && !loading ? "0 2px 4px rgba(50, 50, 93, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)" : ""};
		}

		.ripple {
			position: absolute;
			border-radius: 50%;
			background-color: rgba(255, 255, 255, 0.7);
			transform: scale(0);
			animation: ripple 0.6s linear;
		}

		@keyframes ripple {
			to {
				transform: scale(4);
				opacity: 0;
			}
		}

		.button-content {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			opacity: ${loading ? "0" : "1"};
		}

		.spinner {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 1rem;
			height: 1rem;
			border: 2px solid rgba(255, 255, 255, 0.3);
			border-radius: 50%;
			border-top-color: ${variantStyles.text};
			animation: spin 0.8s linear infinite;
		}

		@keyframes spin {
			to {
				transform: translate(-50%, -50%) rotate(360deg);
			}
		}
	`;

	// Function to create ripple effect
	const createRipple = (e: MouseEvent) => {
		if (disabled || loading) return;

		const button = e.currentTarget as HTMLButtonElement;
		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
		circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
		circle.classList.add("ripple");

		// Remove existing ripples
		const ripple = button.getElementsByClassName("ripple")[0];
		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
	};

	// Handle click event
	const handleClick = (e: MouseEvent) => {
		createRipple(e);
		if (!disabled && !loading && onClick) {
			onClick();
		}
	};

	return (
		<button
			type={type}
			class={buttonClass}
			disabled={disabled}
			onClick={handleClick}
		>
			{loading && <span class="spinner" />}
			<span class="button-content">
				{icon && iconPosition === "left" && icon}
				{children}
				{icon && iconPosition === "right" && icon}
			</span>
		</button>
	);
};
