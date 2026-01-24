"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
	const { setTheme, theme } = useTheme();

	const [isMount, setIsMount] = useState(false);

	useEffect(() => {
		if (!isMount) setIsMount(true);
	}, []);

	if (!isMount)
		return (
				<img className="w-7 inline-block" src="/images/sun.png" />
		);

	return (
		<>
			<button
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				className=""
			>
				{theme === "light" ? (
					<img className="w-7 inline-block" src="/images/sun.png" />
				) : (
					<img className="w-7 inline-block" src="/images/moon.png" />
				)}
			</button>
		</>
	);
}
