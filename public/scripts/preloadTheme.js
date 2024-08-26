const getTheme = () => {
	if (
		typeof localStorage !== "undefined" &&
		localStorage.getItem("theme") === "dark"
	)
		return "dark"
	if (
		localStorage.getItem("theme") !== "light" &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	)
		return "dark"
	return "light"
}

const setTheme = () => {
	const theme = getTheme()
	document.documentElement.classList.toggle("dark", theme === "dark")
	window.localStorage.setItem("theme", theme)
}

document.addEventListener("astro:page-load", () => {
	setTheme()
})

setTheme()
