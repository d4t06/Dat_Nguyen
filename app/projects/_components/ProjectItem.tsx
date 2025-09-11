import { githubIcon, linkIcon } from "@/public/icon";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import TechListFrame from "./TechListFrame";

type Props = {
	name: string;
	iamgePath: string;
	iamgePathDark?: string;
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
	iamgePathDark,
	name,
	tech,
	reverse,
}: Props) {
	const getTextBoxClasses = () => {
		if (reverse) return "md:right-[unset] md:left-0";
		else return "md:left-[unset] md:right-0 md:text-right";
	};

	return (
		<>
			<div
				className={`md:flex relative primary-shadow md:shadow-none md:items-center rounded-xl bg-white  dark:bg-slate-900 md:!bg-transparent overflow-hidden group ${reverse ? "md:flex-row-reverse" : "no-reverse"}`}
			>
				<div className="w-full md:w-3/5 md:border md:border-[--a-10-cl] md:rounded-xl overflow-hidden">
					<Image
						alt=""
						className={`w-full ${iamgePathDark ? "dark:hidden" : ""} `}
						width={1080}
						height={720}
						src={iamgePath}
					/>

					{iamgePathDark && (
						<Image
							alt=""
							className={`w-full hidden dark:block`}
							width={1080}
							height={720}
							src={iamgePathDark}
						/>
					)}
				</div>
				<div
					className={`md:absolute justify-center p-4 md:top-0 md:bottom-0 md:left-0 md:top-[unset] md:bottom-[unset] md:bg-transparent md:p-0 md:w-1/2 space-y-4 flex flex-col ${getTextBoxClasses()}`}
				>
					<div className="text-2xl lg:text-3xl font-bold md:w-[70%] md:ml-none md:group-[.no-reverse]:ml-auto">{name}</div>

					<div className="md:primary-shadow md:p-3 lg:p-5 lg:text-lg md:border md:bg-white	border-black  rounded-md text-left md:dark:bg-slate-900 text-[--text-muted-cl] md:text-[--text-cl]">
						{desc}
					</div>

					<TechListFrame className="!mt-1">
						{tech.map((t, i) => (
							<span key={i}>{t}</span>
						))}
					</TechListFrame>

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
