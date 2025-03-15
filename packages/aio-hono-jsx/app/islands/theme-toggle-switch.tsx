import { useState } from "hono/jsx";

// import { AioIconSun, AioIconMoon } from "@/components/icon";
import AioToggleSwitch from "@/components/aio-toggle-switch";
import { isClient, isServer } from "@/utils/window";
import type { Theme } from "@/types";

export default function ThemeToggleSwitch() {
	const [theme, setTheme] = useState<Theme>(() => {
		if (isServer()) return null;

		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === null) {
			const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			return isDark ? "dark" : "light";
		}
		if (storedTheme === "dark") {
			document.documentElement.classList.add("dark");
			return "dark";
		}
		return "light";
	});

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);

		if (isClient()) {
			localStorage.setItem("theme", newTheme);
			if (newTheme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	};

	return theme !== null ? (
		<AioToggleSwitch
			isChecked={theme === "dark"}
			onChange={toggleTheme}
			height={24}
			width={48}
			backgroundColor="#ccc"
			checkedBackgroundColor="#2196F3"
			thumbSize={20}
			thumbColor="#fff"
			transitionSeconds={0.3}
		/>
	) : null;
}
