import { createRoute } from "honox/factory";
import { css } from "hono/css";
import { useState } from "hono/jsx";
import { AioAppBar, AioNavItem, AioActionButton } from "../components/aio-app-bar";
import { AioToggleSwitch } from "../components/aio-toggle-switch";

export default createRoute(async (c) => {
	// State for theme (light/dark mode)
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Toggle theme function
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	// Theme-based styles
	const appStyles = css`
		min-height: 100vh;
		background-color: ${isDarkMode ? "#121212" : "#ffffff"};
		color: ${isDarkMode ? "#ffffff" : "#212529"};
		transition: background-color 0.3s ease, color 0.3s ease;
	`;

	// Logo component
	const logoStyle = css`
		font-weight: bold;
		font-size: 1.5rem;
		color: inherit;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	`;

	const logo = (
		<a href="/" class={logoStyle}>
			<span>AIO-UI</span>
		</a>
	);

	// Theme toggle component with label
	const themeToggleContainer = css`
		display: flex;
		align-items: center;
		gap: 0.5rem;
	`;

	// Sun icon for light mode
	const sunIcon = (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
	);

	// Moon icon for dark mode
	const moonIcon = (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	);

	// Navigation items
	const navItems = (
		<>
			<AioNavItem href="/" active>
				Home
			</AioNavItem>
			<AioNavItem href="/app-bar">
				AppBar
			</AioNavItem>
			<AioNavItem href="/toggle-switch">
				Toggle Switch
			</AioNavItem>
		</>
	);

	// Action buttons
	const actionButtons = (
		<div class={themeToggleContainer}>
			{isDarkMode ? moonIcon : sunIcon}
			<AioToggleSwitch
				checked={isDarkMode}
				onChange={toggleTheme}
				variant={isDarkMode ? "light" : "dark"}
				ariaLabel="Toggle dark mode"
			/>
		</div>
	);

	return c.render(
		<div class={appStyles}>
			<AioAppBar
				variant={isDarkMode ? "dark" : "light"}
				position="fixed"
				logo={logo}
				actions={actionButtons}
			>
				{navItems}
			</AioAppBar>
		</div>,
		{ title: "AIO-UI" },
	);
});
