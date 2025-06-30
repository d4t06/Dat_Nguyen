import { githubIcon, linkIcon } from "@/public/icon";
import Image from "next/image";
import Link from "next/link";

type Props = {
	name: string;
	iamgePath: string;
	desc: string;
	tech: string[];
	gitLink: string;
	demoLink: string;
	reverse?: boolean;
};

export default function ProjectItem({
	demoLink,
	desc,
	gitLink,
	iamgePath,
	name,
	tech,
	reverse,
}: Props) {
	const getTextBoxClasses = () => {
		if (reverse) return "md:right-[unset] md:left-0";
		else return "md:left-[unset] md:right-0 text-right";
	};

	return (
		<>
			<div
				className={`relative aspect-[1/1] flex items-center rounded-xl md:aspect-[unset] bg-white md:bg-transparent overflow-hidden ${reverse ? "flex-row-reverse" : ""}`}
			>
				<div className="w-full md:w-3/5 md:border md:border-black md:rounded-xl overflow-hidden">
					<Image
						alt=""
						className="w-full"
						width={950}
						height={950}
						src={iamgePath}
					/>
				</div>
				<div
					className={`absolute w-full text-white md:text-black dark:md:text-white bg-black/60 justify-center p-4 top-0 bottom-0 left-0 md:top-[unset] md:bottom-[unset] md:bg-transparent md:p-0 md:w-1/2 space-y-4 flex flex-col ${getTextBoxClasses()}`}
				>
					<div className="text-2xl lg:text-3xl font-bold">{name}</div>

					<div className="p-3 lg:p-5 lg:text-lg border bg-white	border-black dark:border-white rounded-md text-black text-left dark:bg-slate-900 dark:text-white">
						{desc}
					</div>

					<div className="space-x-3 text-sm lg:text-base dark:text-white">
						{tech.map((t, i) => (
							<span key={i}>{t}</span>
						))}
					</div>

					<div className="space-x-4 hover:[&_a]:text-red-500">
						<Link href={gitLink} target="_blank" className="inline-block w-6">
							{githubIcon}
						</Link>

						<Link href={demoLink} target="_blank" className="inline-block w-6">
							{linkIcon}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
