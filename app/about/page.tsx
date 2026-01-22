import Frame from "./_components/Frame";

export default function AboutPage() {
	return (
		<div className="page md:w-3/4 mx-auto mt-10 space-y-10 md:space-y-24 text-white">
			<Frame>
				<p>
					<span className="text-purple-400">
						datnguyen
						<span className="text-green-400"> (master) $ </span>
					</span>
					<span className="text-white"> cat about</span>
				</p>

				<br />
				<p className="text-white leading-[1.5]">
					Hello! I&apos;m Nguyen Huu Dat, a fresher developer from Viet Nam
					<br />
					<br />
					I have graduated with a bachelor&apos;s degree (GPA 3/4) in Software
					Engineering from Can Tho University at Can Tho, Vietnam in 2025.
					<br />
					<br />
					My core skills are based on JavaScript and I&apos;m seeking an job
					opportunity.
					<br />
					<br />
					See&nbsp;
					<a
						href="https://raw.githubusercontent.com/d4t06/Dat_Nguyen_Resource/master/Nguyen_Huu_Dat_cv.pdf"
						target="_blank"
						className="underline"
					>
						my CV
					</a>
				</p>
			</Frame>

			<Frame>
				<p>
					<span className="text-purple-400">
						datnguyen
						<span className="text-green-400"> (master) $ </span>
					</span>
					<span className="text-white"> cat overview</span>
				</p>
				<br />
				<ul className="list-disc ml-6 [&_li]:mt-4">
					<li>Proficiency in linux distros: Ubuntu, Fedora</li>
					<li>Strengths: Front-end and Back-end web application development</li>
					<li>
						Familiarity with TypeScript and newer specifications of EcmaScript
					</li>
					<li>Have knowledge in PC Hardware components</li>
					<li>Ability to learn and apply new technology quickly</li>
				</ul>
			</Frame>

			<Frame>
				<p>
					<span className="text-purple-400">
						datnguyen
						<span className="text-green-400"> (master) $ </span>
					</span>
					<span className="text-white">cat education</span>
				</p>
				<br />
				<p className="text-purple-400">8/2021 - 12/2025 </p>
				<br />
				<p>Software Engineering - Bachelor | Can Tho University</p>
				<br />
				<p>GPA 3.0/ 4</p>
			</Frame>

			<Frame>
				<p>
					<span className="text-purple-400">
						datnguyen
						<span className="text-green-400"> (master) $ </span>
					</span>
					<span className="text-white">cat work-experiences</span>
				</p>
				<br />

				<p className="text-purple-400">04/2023 - 10/2023 </p>
				<br />

				<p>Freelance Front-end Developer | AI CREATIVE CO., LTD</p>

				<br />
				<p>Developed a responsive front-end website using WordPress and SCSS</p>
			</Frame>

			<Frame>
				<p>
					<span className="text-purple-400">
						datnguyen
						<span className="text-green-400"> (master) $ </span>
					</span>
					<span className="text-white">cat skills-tools</span>
				</p>
				<br />
				<p className="text-purple-400">Proficient In </p>
				<br />
				<div className="grid grid-cols-2 gap-3 text-white">
					<p>JavaScript</p>
					<p>Linux</p>
					<p>Hardware</p>
				</div>
				<br />
				<p className="text-purple-400">English </p>
				<br />
				<p>Certificate: VSTEP level 4</p>
			</Frame>
		</div>
	);
}
