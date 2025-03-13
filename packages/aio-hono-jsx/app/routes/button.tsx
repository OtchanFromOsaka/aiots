import { createRoute } from "honox/factory";
import { AioButton } from "../components/aio-button";
import { css } from "hono/css";

export default createRoute(async (c) => {
	const containerStyle = css`
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	`;

	const headerStyle = css`
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #e9ecef;
	`;

	const sectionStyle = css`
		margin-bottom: 3rem;
	`;

	const sectionTitleStyle = css`
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		font-weight: 600;
		color: #212529;
	`;

	const demoRowStyle = css`
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2rem;
		align-items: center;
	`;

	const demoCardStyle = css`
		padding: 1.5rem;
		border-radius: 0.5rem;
		background-color: #f8f9fa;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		margin-bottom: 1.5rem;
	`;

	const demoCardTitleStyle = css`
		margin-bottom: 1rem;
		font-size: 1rem;
		font-weight: 600;
		color: #495057;
	`;

	const iconStyle = css`
		display: inline-block;
		width: 1em;
		height: 1em;
	`;

	return c.render(
		<div class={containerStyle}>
			<header class={headerStyle}>
				<h1>AIO-UI Button Component</h1>
				<p>
					A showcase of the enhanced AioButton component with various styles and
					states
				</p>
			</header>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Button Variants</h2>
				<div class={demoRowStyle}>
					<AioButton variant="primary">Primary</AioButton>
					<AioButton variant="secondary">Secondary</AioButton>
					<AioButton variant="success">Success</AioButton>
					<AioButton variant="danger">Danger</AioButton>
					<AioButton variant="warning">Warning</AioButton>
					<AioButton variant="info">Info</AioButton>
					<AioButton variant="light">Light</AioButton>
					<AioButton variant="dark">Dark</AioButton>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Button Sizes</h2>
				<div class={demoRowStyle}>
					<AioButton size="sm">Small</AioButton>
					<AioButton size="md">Medium</AioButton>
					<AioButton size="lg">Large</AioButton>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Button States</h2>
				<div class={demoCardStyle}>
					<h3 class={demoCardTitleStyle}>Disabled State</h3>
					<div class={demoRowStyle}>
						<AioButton disabled>Disabled Button</AioButton>
						<AioButton variant="success" disabled>
							Disabled Success
						</AioButton>
						<AioButton variant="danger" disabled>
							Disabled Danger
						</AioButton>
					</div>
				</div>

				<div class={demoCardStyle}>
					<h3 class={demoCardTitleStyle}>Loading State</h3>
					<div class={demoRowStyle}>
						<AioButton loading>Loading</AioButton>
						<AioButton variant="success" loading>
							Loading Success
						</AioButton>
						<AioButton variant="danger" loading>
							Loading Danger
						</AioButton>
					</div>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Full Width Button</h2>
				<div class={demoCardStyle}>
					<AioButton fullWidth>Full Width Button</AioButton>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Buttons with Icons</h2>
				<div class={demoRowStyle}>
					<AioButton
						icon={
							<svg
								class={iconStyle}
								viewBox="0 0 24 24"
								fill="currentColor"
								role="img"
								aria-label="Next arrow"
							>
								<title>Next arrow</title>
								<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
							</svg>
						}
						iconPosition="right"
					>
						Next
					</AioButton>

					<AioButton
						variant="success"
						icon={
							<svg
								class={iconStyle}
								viewBox="0 0 24 24"
								fill="currentColor"
								role="img"
								aria-label="Confirm checkmark"
							>
								<title>Confirm checkmark</title>
								<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
							</svg>
						}
						iconPosition="left"
					>
						Confirm
					</AioButton>

					<AioButton
						variant="danger"
						icon={
							<svg
								class={iconStyle}
								viewBox="0 0 24 24"
								fill="currentColor"
								role="img"
								aria-label="Cancel icon"
							>
								<title>Cancel icon</title>
								<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
							</svg>
						}
						iconPosition="left"
					>
						Cancel
					</AioButton>
				</div>
			</section>
		</div>,
		{ title: "Button | AIO-UI" },
	);
});
