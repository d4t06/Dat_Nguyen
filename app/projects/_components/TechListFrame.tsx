import { ReactNode } from "react";

export default function TechListFrame({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`break-keep text-sm font-medium -ml-3 [&_span]:inline-block [&_span]:mt-3 [&_span]:ml-3 ${className}`}
		>
			{children}
		</div>
	);
}
