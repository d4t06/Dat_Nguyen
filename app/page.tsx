import { fbIcon, githubIcon, linkedinIcon } from "@/public/icon";
import Image from "next/image";
import Link from "next/link";
import Email from "./components/Email";

export default function Home() {
   return (
      <div className="flex flex-col flex-grow lg:flex-row items-center lg:justify-center min-h-[calc(100vh-120px-60px)] md:min-h-[unset]">
         <div className="w-[40vw] rounded-full overflow-hidden flex-shrink-0 md:w-[260px] relative">
            <Image
               className="w-full h-full"
               src="/images/my_avatar.jpg"
               width={300}
               height={300}
               alt="Dat"
            />

            <Image
               className="h-full w-full scale-[1.03] absolute top-0 left-0"
               src="/images/otw.png"
               width={300}
               height={300}
               alt="Dat"
            />
         </div>

         <div className="mt-10 lg:ml-10 dark:text-white">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
               I&apos;m&nbsp;
               <span className="text-red-500">Nguyen Huu Dat</span>
               &nbsp;
               <img
                  className="w-10 md:w-14 inline-block wave align-sub"
                  src="/images/wave_hand.png"
               />
            </div>

            <div className="text-xl r lg:text-2xl font-medium mt-5">
               <div>I&apos;m a fresher developer</div>
               <div>I like to build web things</div>
            </div>

            <div className="px-4 [&_p]:p-3 [&_img]:mr-4 [&_img]:pb-1 md:[&_p]:text-xl mt-3">
               <p>
                  <img
                     className="w-6 md:w-7 lg:w-8 inline-block translate-y-[-2px]"
                     src="/images/house.png"
                  />
                  An Giang, Viet Nam
               </p>
               <p>
                  <img
                     className="w-6 md:w-7 lg:w-8 inline-block"
                     src="/images/heart_start.png"
                  />
                  JavaScript, Tech Gears
               </p>
               <p>
                  <img
                     className="w-6 md:w-7 lg:w-8 inline-block"
                     src="/images/mail.png"
                  />

                  <Email />
               </p>
            </div>

            <div className="flex items-center justify-center space-x-10 mt-7 [&_a]:w-10 [&_a]:transition-[color] hover:[&_a]:text-red-500">
               <Link target="_blank" href={"https://github.com/d4t06"}>
                  {githubIcon}
               </Link>
               <Link target="_blank" href={"https://www.facebook.com/DAtdz06"}>
                  {fbIcon}
               </Link>
               <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/dat-nguyen-huu-9371a926a"}
               >
                  {linkedinIcon}
               </Link>
            </div>
         </div>
      </div>
   );
}
