import { createRoute } from "honox/factory";
import { css } from "hono/css";
import {
	AioAppBar,
	AioNavItem,
	AioActionButton,
	AioDropdown,
	AioDropdownItem,
} from "../components/aio-app-bar";

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
		margin-top: 5rem;
	`;

	const sectionTitleStyle = css`
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		font-weight: 600;
		color: #212529;
	`;

	const demoCardStyle = css`
		padding: 1.5rem;
		border-radius: 0.5rem;
		background-color: #f8f9fa;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		margin-bottom: 1.5rem;
		position: relative;
		overflow: hidden;
	`;

	const demoCardTitleStyle = css`
		margin-bottom: 1rem;
		font-size: 1rem;
		font-weight: 600;
		color: #495057;
	`;

	const spacerStyle = css`
		height: 80px;
	`;

	const logoStyle = css`
		font-weight: bold;
		font-size: 1.5rem;
		color: inherit;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	`;

	// SVG icons for the demo
	const searchIcon = (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="Search"
		>
			<title>Search</title>
			<circle cx="11" cy="11" r="8" />
			<line x1="21" y1="21" x2="16.65" y2="16.65" />
		</svg>
	);

	const notificationIcon = (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="Notifications"
		>
			<title>Notifications</title>
			<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
			<path d="M13.73 21a2 2 0 0 1-3.46 0" />
		</svg>
	);

	const userIcon = (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="User profile"
		>
			<title>User profile</title>
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);

	const settingsIcon = (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="Settings"
		>
			<title>Settings</title>
			<circle cx="12" cy="12" r="3" />
			<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
		</svg>
	);

	const logoutIcon = (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="Logout"
		>
			<title>Logout</title>
			<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
			<polyline points="16 17 21 12 16 7" />
			<line x1="21" y1="12" x2="9" y2="12" />
		</svg>
	);

	const helpIcon = (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="Help"
		>
			<title>Help</title>
			<circle cx="12" cy="12" r="10" />
			<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
			<line x1="12" y1="17" x2="12.01" y2="17" />
		</svg>
	);

	const logoIcon = (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			role="img"
			aria-label="Logo"
		>
			<title>Logo</title>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	);

	// Common action buttons for all app bars
	const actionButtons = (
		<>
			<AioActionButton icon={searchIcon} label="Search" />
			<AioActionButton
				icon={notificationIcon}
				badge="3"
				label="Notifications"
			/>
			<AioDropdown
				trigger={
					<>
						{userIcon}
						<span>User</span>
					</>
				}
				open={false}
			>
				<AioDropdownItem icon={userIcon}>Profile</AioDropdownItem>
				<AioDropdownItem icon={settingsIcon}>Settings</AioDropdownItem>
				<AioDropdownItem icon={helpIcon}>Help</AioDropdownItem>
				<AioDropdownItem icon={logoutIcon} divider>
					Logout
				</AioDropdownItem>
			</AioDropdown>
		</>
	);

	// Common navigation items for all app bars
	const navItems = (
		<>
			<AioNavItem href="/" active>
				Home
			</AioNavItem>
			<AioNavItem href="/features">Features</AioNavItem>
			<AioNavItem href="/pricing">Pricing</AioNavItem>
			<AioNavItem href="/about">About</AioNavItem>
			<AioNavItem href="/contact">Contact</AioNavItem>
		</>
	);

	// Logo component for all app bars
	const logo = (
		<a href="/" class={logoStyle}>
			{logoIcon}
			<span>AIO-UI</span>
		</a>
	);

	return c.render(
		<div>
			{/* Primary AppBar (Fixed) */}
			<AioAppBar
				variant="primary"
				position="fixed"
				logo={logo}
				actions={actionButtons}
			>
				{navItems}
			</AioAppBar>

			<div class={containerStyle}>
				<div class={spacerStyle} />
				<header class={headerStyle}>
					<h1>AIO-UI AppBar Component</h1>
					<p>
						A showcase of the enhanced AioAppBar component with various styles
						and states
					</p>
				</header>

				<section class={sectionStyle}>
					<h2 class={sectionTitleStyle}>AppBar Variants</h2>

					<div class={demoCardStyle}>
						<h3 class={demoCardTitleStyle}>Primary AppBar (Default)</h3>
						<p>The primary AppBar is shown at the top of this page.</p>
					</div>

					<div class={demoCardStyle}>
						<h3 class={demoCardTitleStyle}>Secondary AppBar</h3>
						<AioAppBar
							variant="secondary"
							position="static"
							logo={logo}
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>

					<div class={demoCardStyle}>
						<h3 class={demoCardTitleStyle}>Light AppBar</h3>
						<AioAppBar
							variant="light"
							position="static"
							logo={logo}
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>

					<div class={demoCardStyle}>
						<h3 class={demoCardTitleStyle}>Dark AppBar</h3>
						<AioAppBar
							variant="dark"
							position="static"
							logo={logo}
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>

					<div class={demoCardStyle}>
						<h3 class={demoCardTitleStyle}>
							Transparent AppBar (No Elevation)
						</h3>
						<AioAppBar
							variant="primary"
							position="static"
							logo={logo}
							transparent
							elevation={false}
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>
				</section>

				<section class={sectionStyle}>
					<h2 class={sectionTitleStyle}>AppBar Sizes</h2>

					<div class={demoCardStyle}>
						<h3 class={demoCardTitleStyle}>Small AppBar</h3>
						<AioAppBar
							variant="primary"
							position="static"
							size="sm"
							logo={logo}
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>

					<div class={demoCardStyle}>
						<h3 class={demoCardTitleStyle}>Medium AppBar (Default)</h3>
						<AioAppBar
							variant="primary"
							position="static"
							size="md"
							logo={logo}
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>

					<div class={demoCardStyle}>
						<h3 class={demoCardTitleStyle}>Large AppBar</h3>
						<AioAppBar
							variant="primary"
							position="static"
							size="lg"
							logo={logo}
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>
				</section>

				<section class={sectionStyle}>
					<h2 class={sectionTitleStyle}>AppBar with Title</h2>

					<div class={demoCardStyle}>
						<AioAppBar
							variant="primary"
							position="static"
							title="Application Title"
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>
				</section>

				<section class={sectionStyle}>
					<h2 class={sectionTitleStyle}>AppBar with Logo and Title</h2>

					<div class={demoCardStyle}>
						<AioAppBar
							variant="primary"
							position="static"
							logo={logoIcon}
							title="Application Title"
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>
				</section>

				<section class={sectionStyle}>
					<h2 class={sectionTitleStyle}>Full Width AppBar</h2>

					<div class={demoCardStyle}>
						<AioAppBar
							variant="primary"
							position="static"
							logo={logo}
							fullWidth
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>
				</section>

				<section class={sectionStyle}>
					<h2 class={sectionTitleStyle}>AppBar with Mobile Menu</h2>

					<div class={demoCardStyle}>
						<AioAppBar
							variant="primary"
							position="static"
							logo={logo}
							onMenuClick={() => {}}
							actions={actionButtons}
						>
							{navItems}
						</AioAppBar>
					</div>
				</section>
			</div>
		</div>,
		{ title: "AppBar | AIO-UI" },
	);
});
