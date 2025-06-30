"use client";

import { moonIcon, sunIcon } from "@/public/icon";
import { use, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/appHelper";

export default function ToggleTheme() {
	const toggleDarkMode = (toggle: boolean) => {
		if (toggle) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		setLocalStorage("dark", toggle);
	};

	useEffect(() => {
		const isDark = getLocalStorage()["dark"];
		if (isDark) document.documentElement.classList.add("dark");
	}, []);

	return (
		<>
			<button
				onClick={() => toggleDarkMode(true)}
				className="sun ml-3 hover:text-red-500 w-7"
			>
				{sunIcon}
			</button>
			<button
				onClick={() => toggleDarkMode(false)}
				className="moon ml-3 hover:text-red-500 w-7"
			>
				{moonIcon}
			</button>
		</>
	);
}
