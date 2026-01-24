"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function LinkItem({
	children,
	href,
}: {
	children: ReactNode;
	href: string;
}) {
	const pathName = usePathname();

	const isActive =
		href === "/"
			? pathName === "/"
				? "active"
				: ""
			: pathName.includes(href)
				? "active"
				: "";

	return (
		<Link className={isActive} href={href}>
			{children}
		</Link>
	);
}
