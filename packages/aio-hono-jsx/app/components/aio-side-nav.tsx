import type { FC, PropsWithChildren } from "hono/jsx";

interface AioSideNavProps extends PropsWithChildren {
	className?: string;
}

export const AioSideNav: FC<AioSideNavProps> = ({
	className = "",
	children,
}) => {
	const fullClassName = `
		aio-side-nav
		${className ? ` ${className}` : ""}
	`;

	return <nav className={fullClassName}>{children}</nav>;
};
