import { useEffect, useRef } from "react";


//  scroll-spy
export default function useFocusTOC() {
	const prevActive = useRef("");
	const headingRefs = useRef<Record<string, Element>>({});

	useEffect(() => {
		const headings = document.querySelectorAll("h2, h3, h4");
		headings.forEach((heading) => {
			headingRefs.current[heading.id] = heading;
		});
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			// let currentActiveId = "";
			const offset = 300; // Adjust this value as needed

			for (const id in headingRefs.current) {
				const heading = headingRefs.current[id];
				if (heading) {
					const rect = heading.getBoundingClientRect();
					// Check if the heading is in the viewport (with an offset)
					if (rect.top >= 0 && rect.top <= window.innerHeight - offset) {
						if (id === prevActive.current) break;

						const currenActive = document.querySelector(`a.active`);
						if (currenActive) currenActive.classList.remove("active");

						let currentHeading: HTMLAnchorElement | null =
							document.querySelector(`a[href="#${id}"]`);

						if (currentHeading) {
							let i = 0;
							while (!currentHeading.classList.contains("main")) {
								// only 3 levels of heading
								if (!currentHeading.previousSibling || i >= 3) return;

								currentHeading =
									currentHeading.previousSibling as HTMLAnchorElement;
								i++;
							}

							currentHeading.classList.add("active");
							prevActive.current = id;
						}

						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
}
