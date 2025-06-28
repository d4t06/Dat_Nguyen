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
				className={`relative flex items-center rounded-xl overflow-hidden ${reverse ? "flex-row-reverse" : ""}`}
			>
				<div className="w-full md:w-3/5 border border-black rounded-xl overflow-hidden">
					<Image
						alt=""
						className="w-full"
						width={700}
						height={700}
						src={iamgePath}
					/>
				</div>
				<div
					className={`absolute w-full bg-black/60 justify-center p-4 top-0 bottom-0 left-0 md:top-[unset] md:bottom-[unset] md:bg-transparent md:p-0 md:w-1/2 space-y-4 flex flex-col ${getTextBoxClasses()}`}
				>
					<div className="text-3xl font-bold">{name}</div>

					<div className="p-5 border bg-white	border-black rounded-md text-[#333] text-left dark:bg-slate-900 dark:text-white">
						{desc}
					</div>

					<div className="space-x-3 text-[#333] dark:text-white">
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
