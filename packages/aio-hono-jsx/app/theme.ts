const setTheme = () => {
	const storedTheme = localStorage.getItem("theme");
	const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	if (storedTheme === null && isDark) {
		document.documentElement.classList.add("dark");
	}
	if (storedTheme === "dark") {
		document.documentElement.classList.add("dark");
	}
};

setTheme();
window.addEventListener("pageshow", setTheme);
