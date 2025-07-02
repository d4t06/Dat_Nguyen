import OtherProjectItem from "./_components/OtherProjectItem";
import ProjectItem from "./_components/ProjectItem";

export default function ProjectsPage() {
	return (
		<>
			<div className="space-y-20 mt-10">
				<div className="text-2xl text-center font-semibold">
					Some Things I&apos;ve Built
				</div>

				<ProjectItem
					demoLink="https://d4t06.github.io/HD-MP3"
					gitLink="https://github.com/d4t06/HD-MP3"
					desc="Modern music player application with live lyrics and karaoke functionality and many other things..."
					iamgePath="/images/projects/hd-mp3.png"
					name="HD MP3"
					tech={["ReactJS", "Firebase", "TypeScript", "TailwindCSS"]}
				/>

				<ProjectItem
					reverse
					demoLink="https://next-mobile-ebon.vercel.app"
					gitLink="https://github.com/d4t06/Next-Mobile"
					iamgePath="/images/projects/next-mobile.png"
					desc="Laptop, Tablet and Smartphone reviews application with aim is to provide
information about notebooks, smartphones and tablet"
					name="Next Mobile"
					tech={["Next.js", "NestJS", "Tailwind CSS", "MySQL"]}
				/>

				<ProjectItem
					demoLink="https://d4t06.github.io/HDPlayer"
					gitLink="https://github.com/d4t06/HDPlayer"
					iamgePath="/images/projects/hd-player.png"
					desc="Simple music player with live lyrics"
					name="HD Player"
					tech={[
						"React",
						"Express",
						"Sequelize ORM",
						"Tailwind CSS",
						"MySQL",
					]}
				/>

				<ProjectItem
					reverse
					demoLink="https://d4t06.github.io/HD-Mobile"
					gitLink="https://github.com/d4t06/HD-Mobile"
					iamgePath="/images/projects/hd-mobile.png"
					desc="Modern e-commerce website with a user-friendly UI and powerful
management system"
					name="HD Mobile"
					tech={[
						"React",
						"Express",
						"Sequelize ORM",
						"Tailwind CSS",
						"MySQL",
					]}
				/>

				<ProjectItem
					demoLink="https://d4t06.github.io/HD-Chat"
					gitLink="https://github.com/d4t06/HD-Chat"
					iamgePath="/images/projects/hd-chat.png"
					desc="Modern e-commerce website with a user-friendly UI and powerful
management system"
					name="HD Chat"
					tech={[
						"React",
						"Express",
						"Sequelize ORM",
						"Tailwind CSS",
						"MySQL",
					]}
				/>

				<ProjectItem
					reverse
					demoLink="https://next-mp3.vercel.app"
					gitLink="https://github.com/d4t06/Next-MP3"
					iamgePath="/images/projects/next-mp3.png"
					desc="Simple music player with live lyrics using Next.js"
					name="Next MP3 "
					tech={["Next.js", "Tailwind CSS", "NestJS", "MySQL"]}
				/>

				<div className="text-2xl text-center font-semibold mt-10">
					Other Noteworthy Projects
				</div>

				<div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
					<OtherProjectItem
						demoLink="https://github.com/d4t06/Argo-Store-React-Native"
						desc="Grocery store management built with React Native"
						gitLink="https://github.com/d4t06/Argo-Store-React-Native"
						name="Argo Store"
						tech={[
							"React Native",
							"Expo",
							"Tailwind CSS",
							"Firebase",
						]}
					/>

					<OtherProjectItem
						demoLink="https://nuxt-mobile.netlify.app"
						gitLink="https://github.com/d4t06/Nuxt-Mobile"
						desc="Laptop, Tablet and Smartphone reviews application with aim is to provide information about notebooks, smartphones and tablet"
						name="Nuxt Mobile"
						tech={["Nuxt", "Tailwind CSS"]}
					/>
					<OtherProjectItem
						demoLink="https://nuxt-mp3.netlify.app"
						desc="Modern music player application with live lyrics and karaoke functionality and many other things..."
						gitLink="https://github.com/d4t06/Nuxt-MP3"
						name="Nuxt MP3"
						tech={["Nuxt", "Tailwind CSS"]}
					/>

					<OtherProjectItem
						demoLink="https://d4t06.github.io/react-ui"
						desc="Reuse react components"
						gitLink="https://github.com/d4t06/react-ui"
						name="React UI"
						tech={["React", "Tailwind CSS"]}
					/>

					<OtherProjectItem
						demoLink="https://github.com/d4t06/OpenCore-Dell_5270"
						desc="Opencore EFI MacOS 10.15 Catalina for Dell 5270 laptop"
						gitLink="https://github.com/d4t06/OpenCore-Dell_5270"
						name="Hackintosh"
						tech={["Opencore"]}
					/>
				</div>
			</div>
		</>
	);
}
