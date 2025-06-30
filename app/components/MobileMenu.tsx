"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function MobileMenu() {
	const router = useRouter();

	const labelRef = useRef<HTMLLabelElement>(null);

	const navigate = (path: string) => {
		labelRef.current?.click();

		router.push(path);
	};

	return (
		<>
			<label ref={labelRef} className="hidden" htmlFor="trigger_menu"></label>
			<input id="trigger_menu" type="checkbox" className="peer hidden" />
			<div className="h-0 overflow-hidden md:peer-checked:hidden transition-[height] peer-checked:h-[120px]  font-semibold [&_button]:py-2 px-3 [&_button]:w-full">
				<button onClick={() => navigate("/")}>Home</button>
				<button onClick={() => navigate("/projects")}>Projetcs</button>
				<button onClick={() => navigate("/notes")}>Notes</button>
			</div>
		</>
	);
}
