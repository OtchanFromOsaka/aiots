import { createRoute } from "honox/factory";

import { AioAppBar } from "@/components/aio-app-bar";
import { AioSideNav } from "@/components/aio-side-nav";
import { AioButton } from "@/components/aio-button";
import { ThemeToggleSwitch } from "@/islands/theme-toggle-switch";

export default createRoute(async (c) => {
	const content = (
		<>
			<AioAppBar title="AioButton Component">
				<ThemeToggleSwitch />
			</AioAppBar>
			<AioSideNav>
				<h2>Navigation</h2>
				<ul style={{ listStyle: "none", padding: "0", marginTop: "16px" }}>
					<li style={{ marginBottom: "8px" }}>
						<a
							href="/"
							style={{ textDecoration: "none", color: "var(--text-color)" }}
						>
							Home
						</a>
					</li>
					<li style={{ marginBottom: "8px" }}>
						<a
							href="/button"
							style={{
								textDecoration: "none",
								color: "var(--primary-color)",
								fontWeight: "bold",
							}}
						>
							AioButton
						</a>
					</li>
				</ul>
			</AioSideNav>
			<main style={{ marginTop: "80px", marginLeft: "266px", padding: "16px" }}>
				<h1>AioButton Component</h1>
				<p style={{ marginBottom: "24px" }}>
					A customizable button component for the aio-hono-jsx library.
				</p>

				<section style={{ marginBottom: "32px" }}>
					<h2>Basic Usage</h2>
					<div
						style={{
							display: "flex",
							gap: "16px",
							marginTop: "16px",
							marginBottom: "24px",
						}}
					>
						<AioButton>Default Button</AioButton>
						<AioButton disabled>Disabled Button</AioButton>
					</div>
					<div
						style={{
							backgroundColor: "var(--secondary-color)",
							padding: "16px",
							borderRadius: "4px",
							overflow: "auto",
						}}
					>
						<pre style={{ margin: 0 }}>
							<code>{`<AioButton>Default Button</AioButton>
<AioButton disabled>Disabled Button</AioButton>`}</code>
						</pre>
					</div>
				</section>

				<section style={{ marginBottom: "32px" }}>
					<h2>Button Types</h2>
					<p>
						The AioButton component supports different button types: button,
						submit, and reset.
					</p>
					<div
						style={{
							display: "flex",
							gap: "16px",
							marginTop: "16px",
							marginBottom: "24px",
						}}
					>
						<AioButton type="button">Button Type</AioButton>
						<AioButton type="submit">Submit Type</AioButton>
						<AioButton type="reset">Reset Type</AioButton>
					</div>
					<div
						style={{
							backgroundColor: "var(--secondary-color)",
							padding: "16px",
							borderRadius: "4px",
							overflow: "auto",
						}}
					>
						<pre style={{ margin: 0 }}>
							<code>{`<AioButton type="button">Button Type</AioButton>
<AioButton type="submit">Submit Type</AioButton>
<AioButton type="reset">Reset Type</AioButton>`}</code>
						</pre>
					</div>
				</section>

				<section style={{ marginBottom: "32px" }}>
					<h2>Custom Styling</h2>
					<p>
						You can customize the appearance of the AioButton by adding a custom
						className.
					</p>
					<div
						style={{
							display: "flex",
							gap: "16px",
							marginTop: "16px",
							marginBottom: "24px",
						}}
					>
						<div style={{ display: "inline-block" }}>
							<style>{`
								.primary-button {
									background-color: var(--primary-color) !important;
									border-color: var(--primary-color) !important;
								}
							`}</style>
							<AioButton className="primary-button">Primary Button</AioButton>
						</div>
						<div style={{ display: "inline-block" }}>
							<style>{`
								.secondary-button {
									background-color: transparent !important;
									border-color: var(--primary-color) !important;
									color: var(--primary-color) !important;
								}
							`}</style>
							<AioButton className="secondary-button">
								Secondary Button
							</AioButton>
						</div>
						<div style={{ display: "inline-block" }}>
							<style>{`
								.danger-button {
									background-color: #e74c3c !important;
									border-color: #e74c3c !important;
								}
							`}</style>
							<AioButton className="danger-button">Danger Button</AioButton>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "var(--secondary-color)",
							padding: "16px",
							borderRadius: "4px",
							overflow: "auto",
						}}
					>
						<pre style={{ margin: 0 }}>
							<code>{`/* Add these styles to your CSS */
.primary-button {
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
}

.secondary-button {
  background-color: transparent !important;
  border-color: var(--primary-color) !important;
  color: var(--primary-color) !important;
}

.danger-button {
  background-color: #e74c3c !important;
  border-color: #e74c3c !important;
}

/* Then use the classes in your components */
<AioButton className="primary-button">Primary Button</AioButton>
<AioButton className="secondary-button">Secondary Button</AioButton>
<AioButton className="danger-button">Danger Button</AioButton>`}</code>
						</pre>
					</div>
				</section>

				<section style={{ marginBottom: "32px" }}>
					<h2>Event Handling</h2>
					<p>
						The AioButton component supports click events through the onClick
						prop.
					</p>
					<div
						style={{
							display: "flex",
							gap: "16px",
							marginTop: "16px",
							marginBottom: "24px",
						}}
					>
						<AioButton
							onClick={() => {
								alert("Button clicked!");
							}}
						>
							Click Me
						</AioButton>
					</div>
					<div
						style={{
							backgroundColor: "var(--secondary-color)",
							padding: "16px",
							borderRadius: "4px",
							overflow: "auto",
						}}
					>
						<pre style={{ margin: 0 }}>
							<code>{`<AioButton 
  onClick={() => {
    alert("Button clicked!");
  }}
>
  Click Me
</AioButton>`}</code>
						</pre>
					</div>
				</section>

				<section style={{ marginBottom: "32px" }}>
					<h2>Props Reference</h2>
					<table
						style={{
							width: "100%",
							borderCollapse: "collapse",
							marginTop: "16px",
						}}
					>
						<thead>
							<tr>
								<th
									style={{
										textAlign: "left",
										padding: "8px",
										borderBottom: "2px solid var(--border-color)",
									}}
								>
									Prop
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "8px",
										borderBottom: "2px solid var(--border-color)",
									}}
								>
									Type
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "8px",
										borderBottom: "2px solid var(--border-color)",
									}}
								>
									Default
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "8px",
										borderBottom: "2px solid var(--border-color)",
									}}
								>
									Description
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									type
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									"button" | "submit" | "reset"
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									"button"
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									The type of the button element
								</td>
							</tr>
							<tr>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									onClick
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									() =&gt; void
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									undefined
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									Function called when the button is clicked
								</td>
							</tr>
							<tr>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									disabled
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									boolean
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									false
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									Whether the button is disabled
								</td>
							</tr>
							<tr>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									className
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									string
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									""
								</td>
								<td
									style={{
										padding: "8px",
										borderBottom: "1px solid var(--border-color)",
									}}
								>
									Additional CSS class names
								</td>
							</tr>
							<tr>
								<td style={{ padding: "8px" }}>children</td>
								<td style={{ padding: "8px" }}>ReactNode</td>
								<td style={{ padding: "8px" }}>-</td>
								<td style={{ padding: "8px" }}>
									The content to be displayed inside the button
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				<section style={{ marginBottom: "32px" }}>
					<h2>CSS Classes</h2>
					<p>
						The AioButton component uses the following CSS classes for styling:
					</p>
					<ul style={{ marginTop: "16px", paddingLeft: "24px" }}>
						<li style={{ marginBottom: "8px" }}>
							<code>aio-button</code> - Applied to all button instances
						</li>
						<li style={{ marginBottom: "8px" }}>
							<code>aio-button-disabled</code> - Applied when the button is
							disabled
						</li>
					</ul>
					<div
						style={{
							backgroundColor: "var(--secondary-color)",
							padding: "16px",
							borderRadius: "4px",
							overflow: "auto",
							marginTop: "16px",
						}}
					>
						<pre style={{ margin: 0 }}>
							<code>{`.aio-button {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  color: #efefef;
  background-color: #7f7f7f;
  border: 1px solid #7f7f7f;
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: all 0.2s ease;
}

.aio-button:hover:not(.aio-button-disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.aio-button:active:not(.aio-button-disabled) {
  opacity: 0.8;
  transform: translateY(0);
}

.aio-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`}</code>
						</pre>
					</div>
				</section>
			</main>
		</>
	);

	const head = { title: "AioButton Component - AIO-UI" };

	return c.render(content, head);
});
