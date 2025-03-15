import type { PropsWithChildren, FC } from "hono/jsx";

interface AioButtonProps {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
}

export const AioButton: FC<PropsWithChildren<AioButtonProps>> = ({
	type = "button",
	onClick,
	children,
}) => {
	const handleClick = () => {
		if (onClick) onClick();
	};

	return (
		<button type={type} onClick={handleClick}>
			{children}
		</button>
	);
};
