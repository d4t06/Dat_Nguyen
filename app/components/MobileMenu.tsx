"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";

function LinkItem({
	children,
	href,
	onClick,
}: {
	children: ReactNode;
	href: string;
	onClick: (v: string) => void;
}) {
	const pathName = usePathname();



   const getActive =
      href === "/"
         ? pathName === "/"
            ? "active"
            : ""
         : pathName.includes(href)
           ? "active"
           : "";


	return (
		<button
			className={getActive}
			onClick={() => onClick(href)}
		>
			{children}
		</button>
	);
}

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
			<div className="h-0 overflow-hidden md:peer-checked:hidden transition-[height] peer-checked:h-[220px] font-semibold [&_button]:py-2 px-3 [&_button]:w-full [&_button]:text-[--text-muted-cl] [&_button.active]:text-[--text-cl]">
				{/*<button onClick={() => navigate("/")}>Home</button>*/}
				<LinkItem onClick={navigate} href={"/"}>Home</LinkItem>
				<LinkItem onClick={navigate} href={"/projects"}>Projetcs</LinkItem>
				<LinkItem onClick={navigate} href={"/notes"}>Notes</LinkItem>
				<LinkItem onClick={navigate} href={"/blogs"}>Blogs</LinkItem>
				<LinkItem onClick={navigate} href={"/about"}>About</LinkItem>
			</div>
		</>
	);
}
