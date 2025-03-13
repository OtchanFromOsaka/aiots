import { createRoute } from "honox/factory";
import { css } from "hono/css";
import { useState } from "hono/jsx";
import { AioToggleSwitch } from "../components/aio-toggle-switch";

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
		gap: 2rem;
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

	const codeBlockStyle = css`
		background-color: #f1f3f5;
		padding: 1rem;
		border-radius: 0.25rem;
		font-family: monospace;
		margin-top: 1rem;
		white-space: pre-wrap;
		font-size: 0.875rem;
	`;

	// State for toggle switches
	const [primaryChecked, setPrimaryChecked] = useState(true);
	const [secondaryChecked, setSecondaryChecked] = useState(false);
	const [successChecked, setSuccessChecked] = useState(true);
	const [dangerChecked, setDangerChecked] = useState(false);
	const [warningChecked, setWarningChecked] = useState(true);
	const [infoChecked, setInfoChecked] = useState(false);
	const [lightChecked, setLightChecked] = useState(true);
	const [darkChecked, setDarkChecked] = useState(false);

	// State for size examples
	const [smallChecked, setSmallChecked] = useState(true);
	const [mediumChecked, setMediumChecked] = useState(true);
	const [largeChecked, setLargeChecked] = useState(true);

	// State for label position examples
	const [leftLabelChecked, setLeftLabelChecked] = useState(true);
	const [rightLabelChecked, setRightLabelChecked] = useState(true);

	return c.render(
		<div class={containerStyle}>
			<header class={headerStyle}>
				<h1>AIO-UI Toggle Switch Component</h1>
				<p>
					A showcase of the AioToggleSwitch component with various styles and
					states
				</p>
			</header>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Toggle Switch Variants</h2>
				<div class={demoCardStyle}>
					<div class={demoRowStyle}>
						<AioToggleSwitch
							label="Primary"
							variant="primary"
							checked={primaryChecked}
							onChange={(checked) => setPrimaryChecked(checked)}
						/>
						<AioToggleSwitch
							label="Secondary"
							variant="secondary"
							checked={secondaryChecked}
							onChange={(checked) => setSecondaryChecked(checked)}
						/>
						<AioToggleSwitch
							label="Success"
							variant="success"
							checked={successChecked}
							onChange={(checked) => setSuccessChecked(checked)}
						/>
						<AioToggleSwitch
							label="Danger"
							variant="danger"
							checked={dangerChecked}
							onChange={(checked) => setDangerChecked(checked)}
						/>
					</div>
					<div class={demoRowStyle}>
						<AioToggleSwitch
							label="Warning"
							variant="warning"
							checked={warningChecked}
							onChange={(checked) => setWarningChecked(checked)}
						/>
						<AioToggleSwitch
							label="Info"
							variant="info"
							checked={infoChecked}
							onChange={(checked) => setInfoChecked(checked)}
						/>
						<AioToggleSwitch
							label="Light"
							variant="light"
							checked={lightChecked}
							onChange={(checked) => setLightChecked(checked)}
						/>
						<AioToggleSwitch
							label="Dark"
							variant="dark"
							checked={darkChecked}
							onChange={(checked) => setDarkChecked(checked)}
						/>
					</div>
					<div class={codeBlockStyle}>
						{`<AioToggleSwitch
  label="Primary"
  variant="primary"
  checked={checked}
  onChange={(checked) => setChecked(checked)}
/>`}
					</div>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Toggle Switch Sizes</h2>
				<div class={demoCardStyle}>
					<div class={demoRowStyle}>
						<AioToggleSwitch
							label="Small"
							size="sm"
							checked={smallChecked}
							onChange={(checked) => setSmallChecked(checked)}
						/>
						<AioToggleSwitch
							label="Medium (Default)"
							size="md"
							checked={mediumChecked}
							onChange={(checked) => setMediumChecked(checked)}
						/>
						<AioToggleSwitch
							label="Large"
							size="lg"
							checked={largeChecked}
							onChange={(checked) => setLargeChecked(checked)}
						/>
					</div>
					<div class={codeBlockStyle}>
						{`<AioToggleSwitch
  label="Small"
  size="sm"
  checked={checked}
  onChange={(checked) => setChecked(checked)}
/>`}
					</div>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Toggle Switch States</h2>
				<div class={demoCardStyle}>
					<h3 class={demoCardTitleStyle}>Disabled State</h3>
					<div class={demoRowStyle}>
						<AioToggleSwitch
							label="Disabled (Unchecked)"
							disabled
							checked={false}
						/>
						<AioToggleSwitch
							label="Disabled (Checked)"
							disabled
							checked={true}
						/>
					</div>
					<div class={codeBlockStyle}>
						{`<AioToggleSwitch
  label="Disabled"
  disabled
  checked={checked}
/>`}
					</div>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Label Positions</h2>
				<div class={demoCardStyle}>
					<div class={demoRowStyle}>
						<AioToggleSwitch
							label="Label on Left"
							labelPosition="left"
							checked={leftLabelChecked}
							onChange={(checked) => setLeftLabelChecked(checked)}
						/>
						<AioToggleSwitch
							label="Label on Right (Default)"
							labelPosition="right"
							checked={rightLabelChecked}
							onChange={(checked) => setRightLabelChecked(checked)}
						/>
					</div>
					<div class={codeBlockStyle}>
						{`<AioToggleSwitch
  label="Label on Left"
  labelPosition="left"
  checked={checked}
  onChange={(checked) => setChecked(checked)}
/>`}
					</div>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Form Integration</h2>
				<div class={demoCardStyle}>
					<h3 class={demoCardTitleStyle}>With Name and ID</h3>
					<div class={demoRowStyle}>
						<AioToggleSwitch
							label="Accept Terms"
							name="acceptTerms"
							id="accept-terms"
							required
						/>
					</div>
					<div class={codeBlockStyle}>
						{`<AioToggleSwitch
  label="Accept Terms"
  name="acceptTerms"
  id="accept-terms"
  required
  checked={checked}
  onChange={(checked) => setChecked(checked)}
/>`}
					</div>
				</div>
			</section>

			<section class={sectionStyle}>
				<h2 class={sectionTitleStyle}>Accessibility</h2>
				<div class={demoCardStyle}>
					<h3 class={demoCardTitleStyle}>With ARIA Label</h3>
					<div class={demoRowStyle}>
						<AioToggleSwitch ariaLabel="Toggle dark mode" />
					</div>
					<div class={codeBlockStyle}>
						{`<AioToggleSwitch
  ariaLabel="Toggle dark mode"
  checked={checked}
  onChange={(checked) => setChecked(checked)}
/>`}
					</div>
				</div>
			</section>
		</div>,
		{ title: "Toggle Switch | AIO-UI" },
	);
});
