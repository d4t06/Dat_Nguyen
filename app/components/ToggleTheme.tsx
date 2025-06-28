"use client";

import { moonIcon, sunIcon } from "@/public/icon";

export default function ToggleTheme() {
	return (
		<>
			<button
				onClick={() => document.documentElement.classList.add("dark")}
				className="sun ml-3 hover:text-red-500 w-7"
			>
				{sunIcon}
			</button>
			<button
				onClick={() => document.documentElement.classList.remove("dark")}
				className="moon ml-3 hover:text-red-500 w-7"
			>
				{moonIcon}
			</button>
		</>
	);
}
