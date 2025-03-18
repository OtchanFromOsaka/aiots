import type { PropsWithChildren, FC } from "hono/jsx";

interface AioButtonProps extends PropsWithChildren {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
}

export const AioButton: FC<AioButtonProps> = ({
	type = "button",
	onClick,
	disabled = false,
	className = "",
	children,
}) => {
	const handleClick = () => {
		if (onClick && !disabled) onClick();
	};

	const baseStyle = {
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? "0.6" : "1",
	};

	const buttonClassName = `aio-button${disabled ? " aio-button-disabled" : ""}${
		className ? ` ${className}` : ""
	}`;

	return (
		<button
			type={type}
			onClick={handleClick}
			disabled={disabled}
			style={baseStyle}
			className={buttonClassName}
		>
			{children}
		</button>
	);
};
