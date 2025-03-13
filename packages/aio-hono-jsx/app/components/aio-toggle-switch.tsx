import { css } from "hono/css";
import type { FC } from "hono/jsx";

type ToggleSwitchVariant =
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "info"
	| "light"
	| "dark";
type ToggleSwitchSize = "sm" | "md" | "lg";
type ToggleSwitchLabelPosition = "left" | "right";

interface AioToggleSwitchProps {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	variant?: ToggleSwitchVariant;
	size?: ToggleSwitchSize;
	disabled?: boolean;
	label?: string;
	labelPosition?: ToggleSwitchLabelPosition;
	name?: string;
	id?: string;
	required?: boolean;
	ariaLabel?: string;
}

// Helper function to generate variant styles
const getVariantStyles = (variant: ToggleSwitchVariant) => {
	const variants = {
		primary: {
			bg: "#4361ee",
			hoverBg: "#3a56d4",
			activeBg: "#2a46c0",
			uncheckedBg: "#e9ecef",
			uncheckedHoverBg: "#dee2e6",
		},
		secondary: {
			bg: "#6c757d",
			hoverBg: "#5c636a",
			activeBg: "#565e64",
			uncheckedBg: "#e9ecef",
			uncheckedHoverBg: "#dee2e6",
		},
		success: {
			bg: "#2ecc71",
			hoverBg: "#27ae60",
			activeBg: "#219653",
			uncheckedBg: "#e9ecef",
			uncheckedHoverBg: "#dee2e6",
		},
		danger: {
			bg: "#e74c3c",
			hoverBg: "#c0392b",
			activeBg: "#a33025",
			uncheckedBg: "#e9ecef",
			uncheckedHoverBg: "#dee2e6",
		},
		warning: {
			bg: "#f39c12",
			hoverBg: "#e67e22",
			activeBg: "#d35400",
			uncheckedBg: "#e9ecef",
			uncheckedHoverBg: "#dee2e6",
		},
		info: {
			bg: "#3498db",
			hoverBg: "#2980b9",
			activeBg: "#2471a3",
			uncheckedBg: "#e9ecef",
			uncheckedHoverBg: "#dee2e6",
		},
		light: {
			bg: "#f8f9fa",
			hoverBg: "#e2e6ea",
			activeBg: "#dae0e5",
			uncheckedBg: "#adb5bd",
			uncheckedHoverBg: "#6c757d",
		},
		dark: {
			bg: "#343a40",
			hoverBg: "#23272b",
			activeBg: "#1d2124",
			uncheckedBg: "#e9ecef",
			uncheckedHoverBg: "#dee2e6",
		},
	};

	return variants[variant];
};

// Helper function to generate size styles
const getSizeStyles = (size: ToggleSwitchSize) => {
	const sizes = {
		sm: {
			width: "32px",
			height: "18px",
			knobSize: "14px",
			fontSize: "0.875rem",
			labelGap: "0.5rem",
		},
		md: {
			width: "44px",
			height: "24px",
			knobSize: "20px",
			fontSize: "1rem",
			labelGap: "0.75rem",
		},
		lg: {
			width: "56px",
			height: "30px",
			knobSize: "26px",
			fontSize: "1.25rem",
			labelGap: "1rem",
		},
	};

	return sizes[size];
};

export const AioToggleSwitch: FC<AioToggleSwitchProps> = ({
	checked = false,
	onChange,
	variant = "primary",
	size = "md",
	disabled = false,
	label,
	labelPosition = "right",
	name,
	id,
	required = false,
	ariaLabel,
}) => {
	const variantStyles = getVariantStyles(variant);
	const sizeStyles = getSizeStyles(size);

	// Generate a unique ID if not provided
	const switchId =
		id || `toggle-switch-${Math.random().toString(36).substring(2, 11)}`;

	// Container styles
	const containerClass = css`
		display: inline-flex;
		align-items: center;
		gap: ${sizeStyles.labelGap};
		flex-direction: ${labelPosition === "left" ? "row-reverse" : "row"};
		cursor: ${disabled ? "not-allowed" : "pointer"};
		opacity: ${disabled ? "0.65" : "1"};
		user-select: none;
		font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
		font-size: ${sizeStyles.fontSize};
	`;

	// Switch track styles
	const trackClass = css`
		position: relative;
		display: inline-block;
		width: ${sizeStyles.width};
		height: ${sizeStyles.height};
		background-color: ${checked ? variantStyles.bg : variantStyles.uncheckedBg};
		border-radius: ${sizeStyles.height};
		transition: all 0.2s ease-in-out;
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

		&:hover {
			background-color: ${!disabled && (checked ? variantStyles.hoverBg : variantStyles.uncheckedHoverBg)};
		}

		&:focus-within {
			outline: 0;
			box-shadow: 0 0 0 0.25rem ${variant === "light" ? "rgba(248, 249, 250, 0.5)" : `${variantStyles.bg}40`};
		}
	`;

	// Switch knob styles
	const knobClass = css`
		position: absolute;
		top: 50%;
		left: ${checked ? `calc(100% - ${sizeStyles.knobSize} - 2px)` : "2px"};
		transform: translateY(-50%);
		width: ${sizeStyles.knobSize};
		height: ${sizeStyles.knobSize};
		background-color: white;
		border-radius: 50%;
		transition: all 0.2s ease-in-out;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

		&::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) ${checked ? "scale(1)" : "scale(0)"};
			width: ${checked ? "6px" : "0"};
			height: ${checked ? "6px" : "0"};
			background-color: ${variantStyles.bg};
			border-radius: 50%;
			opacity: ${checked ? "0.5" : "0"};
			transition: all 0.2s ease-in-out;
		}
	`;

	// Label styles
	const labelClass = css`
		color: ${disabled ? "#6c757d" : "#212529"};
		margin: 0;
	`;

	// Hidden input styles
	const inputClass = css`
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
	`;

	// Handle change event
	const handleChange = (e: Event) => {
		if (disabled) return;

		const target = e.target as HTMLInputElement;
		if (onChange) {
			onChange(target.checked);
		}
	};

	// Handle keyboard events for accessibility
	const handleKeyDown = (e: KeyboardEvent) => {
		if (disabled) return;

		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			if (onChange) {
				onChange(!checked);
			}
		}
	};

	return (
		<label class={containerClass} htmlFor={switchId}>
			{label && <span class={labelClass}>{label}</span>}
			<div class={trackClass}>
				<span class={knobClass} />
				<input
					type="checkbox"
					id={switchId}
					name={name}
					class={inputClass}
					checked={checked}
					disabled={disabled}
					required={required}
					aria-label={ariaLabel || label}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
			</div>
		</label>
	);
};
