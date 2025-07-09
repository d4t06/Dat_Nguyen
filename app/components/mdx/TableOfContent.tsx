"use client";

import Link from "next/link";
import useTabelOfContent from "./_hooks/useTableOfContent";

type Props = {
	content: string;
};

export default function TableOfContent({ content }: Props) {
	const { tableOfContents } = useTabelOfContent({ content });

	const getClassByLevel = (level: (typeof tableOfContents)[0]["level"]) => {
		switch (level) {
			case 2:
				return "font-semibold";
			case 3:
				return "ml-2 font-semibold";
			case 4:
				return "ml-4";
			default:
				return "";
		}
	};

	return (
		<div className="w-full md:w-1/4 p-3  rounded-lg md:fixed overflow-hidden md:bottom-0 md:left-0 md:top-24 flex flex-col pb-10">
			<div className="font-semibold text-2xl">Table of contents</div>

			<div className="flex-grow overflow-auto mt-5 hover:[&_a]:bg-black/5 dark:hover:[&_a]:bg-white/5 [&_a]:py-1 [&_a]:px-2.5  [&_a]:rounded space-y-1 ">
				{tableOfContents.map((t, i) => (
					<Link
						key={i}
						className={`block ${getClassByLevel(t.level)}`}
						href={`#${t.id}`}
					>
						{t.text}
					</Link>
				))}
			</div>
		</div>
	);
}
