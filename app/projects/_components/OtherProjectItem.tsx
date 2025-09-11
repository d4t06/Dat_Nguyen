import { fileIcon, githubIcon, linkIcon } from "@/public/icon";
import Link from "next/link";
import TechListFrame from "./TechListFrame";

type Props = {
	name: string;
	desc: string;
	tech: string[];
	gitLink: string;
	demoLink?: string;
};

export default function OtherProjectItem({
	name,
	demoLink,
	desc,
	gitLink,
	tech,
}: Props) {
	return (
		<div className="px-4 py-6 space-y-4 transition ease-out transform border border-black rounded shadow-lg dark:text-gray-300 dark:bg-bdark-light hover:-translate-y-2">
			<div className="flex items-center justify-between">
				<span className="w-6">{fileIcon}</span>
				<div className="flex space-x-2">
					<Link target="_blank" href={gitLink} className="w-6">
						{githubIcon}
					</Link>
					{demoLink && (
						<Link target="_blank" href={demoLink} className="w-6">
							{linkIcon}
						</Link>
					)}
				</div>
			</div>

			<div className="text-xl font-bold">{name}</div>

			<div className="text-[--text-muted-cl]">{desc}</div>

			<TechListFrame className="!mt-1">
				{tech.map((t, i) => (
					<span key={i}>{t}</span>
				))}
			</TechListFrame>
		</div>
	);
}
