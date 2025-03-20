import type { FC, PropsWithChildren } from "hono/jsx";

interface AioMainProps extends PropsWithChildren {
	mainClassName?: string;
	innerClassName?: string;
}

export const AioMain: FC<AioMainProps> = ({
	mainClassName = "",
	innerClassName = "",
	children,
}) => {
	const fullInnerClassName = `
		aio-main
		${innerClassName ? ` ${innerClassName}` : ""}
	`;

	return (
		<main className={mainClassName}>
			<div className={fullInnerClassName}>{children}</div>
		</main>
	);
};
