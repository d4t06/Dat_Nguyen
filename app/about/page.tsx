import Frame from "./_components/Frame";

export default function AboutPage() {
	return (
		<div className="page mt-10  space-y-10 md:space-y-24 text-white">
			<Frame>
				<p>
					<span className="text-purple-400">datnguyen $</span>
					<span className="text-white"> cat datnguyen</span>
				</p>

				<br />
				<p className="text-white">
					Hello! I&apos;m Dat Nguyen
					<br />
					<br />
					I&apos;m a final-year Software Engineering student at Can Tho
					University with a strong passion for web technologies seeking an job
					opportunity.
					<br />
					<br />I am currently living Can Tho, Viet Nam and available for any
					kind of job opportunities that suit my interests.
					<br />
					<br />
					Download&nbsp;
					<a href="Nguyen_Huu_Dat.pdf" download className="underline">my CV</a>
				</p>
			</Frame>

			<Frame>
				<p>
					<span className="text-purple-400">datnguyen $ </span>
					<span className="text-white">cd skills/tools</span>
				</p>
				<br />
				<p>
					<span className="text-purple-400">skills/tools </span>
					<span className="text-green-400">(master) $ </span>
					ls
				</p>
				<br />

				<p className="text-purple-400">Proficient In </p>
				<br />

				<div className="grid grid-cols-2 text-white">
					<p>React</p> <p>Next.js</p>
					<p>Express</p> <p>NestJS</p>
				</div>
				<br />

				<p className="text-purple-400">Others </p>
				<br />

				<div className="grid grid-cols-2 text-white">
					<p>Vue</p> <p>Nuxt</p> <p>Angular</p>
					<p>Spring Boot</p> <p>React Native</p>
					<p>Flutter</p>
				</div>
				<br />

				<p className="text-purple-400">Tool </p>
				<br />

				<div className="grid grid-cols-2 text-white">
					<p>Git</p> <p>Docker</p>
				</div>
			</Frame>

			<Frame>
				<p>
					<span className="text-purple-400">datnguyen $ </span>
					<span className="text-white">cd work-experiences</span>
				</p>
				<br />
				<p>
					<span className="text-purple-400">work-experiences </span>
					<span className="text-green-400">(master) $ </span>
					ls
				</p>
				<br />

				<p className="text-purple-400">04/2023 - 10/2023 </p>
				<br />

				<p>Intern front-end developer | AI CREATIVE CO., LTD</p>

				<br />
				<p>Developed a responsive front-end website using WordPress and SCSS</p>
			</Frame>
		</div>
	);
}
