import { useState } from "hono/jsx";

import { AioIconSun, AioIconMoon } from "@/components/icon";
import { AioToggleSwitch } from "@/components/aio-toggle-switch";
import { isClient, isServer } from "@/utils/window";
import type { Theme } from "@/types";

export const ThemeToggleSwitch = () => {
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
			checkedBackgroundColor="#bfbfbf"
			thumbColor={theme === "dark" ? "#3f7fff" : "#ff7f00"}
		>
			{theme === "dark" ? (
				<AioIconMoon size={16} color="#ffffffbf" />
			) : (
				<AioIconSun size={14} color="#ffffffbf" />
			)}
		</AioToggleSwitch>
	) : null;
};
