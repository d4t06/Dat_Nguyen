import { fbIcon, githubIcon, linkedinIcon } from "@/public/icon";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

export default function Home() {
   return (
      <div className="flex flex-col flex-grow lg:flex-row items-center lg:justify-center">
         <div className="w-[30vh] flex-shrink-0 lg:w-[400px]">
            <Image
               className="rounded-full w-full"
               src="/images/my_avatar.jpg"
               width={400}
               height={400}
               alt="Dat"
            />
         </div>

         <div className="mt-10 lg:ml-10 dark:text-white">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
               Hi, I&apos;m <span className="text-red-500">Dat Nguyen</span>{" "}
               &nbsp;
               <span className="inline-block wave">&#128075;</span>
            </div>

            <div className="text-xl r lg:text-2xl font-semibold mt-3">
               <div>I&apos;m a full-stack developer.</div>
               <div>I build things for the web.</div>
            </div>

            <div className="px-4 [&_p]:p-3 text-xl mt-3">
               <p>🏢 &nbsp; Can Tho, Viet Nam</p>
               <p>💖 &nbsp; ReactJS, TailwindCSS</p>
               <p>✉️ &nbsp; datnh0708@gmail.com</p>
            </div>

            <div className="flex items-center justify-center space-x-10 mt-7 [&_a]:w-10 [&_a]:transition-[color] hover:[&_a]:text-red-500">
               <Link href={"/"}>{githubIcon}</Link>
               <Link href={"/"}>{fbIcon}</Link>
               <Link href={"/"}>{linkedinIcon}</Link>
            </div>
         </div>
      </div>
   );
}
