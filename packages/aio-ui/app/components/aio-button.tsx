import type { PropsWithChildren, FC } from "hono/jsx";

interface AioButtonProps extends PropsWithChildren {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	disabled?: boolean;
}

export const AioButton: FC<AioButtonProps> = ({
	type = "button",
	onClick,
	disabled = false,
	children,
}) => {
	const handleClick = () => {
		if (onClick && !disabled) onClick();
	};

	const style = {
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? "0.6" : "1",
	};

	const className = "";

	return (
		<button
			type={type}
			onClick={handleClick}
			disabled={disabled}
			style={style}
			className={className}
		>
			{children}
		</button>
	);
};
