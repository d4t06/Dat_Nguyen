import Link from "next/link";
import { githubIcon, sunIcon } from "../../public/icon";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
   return (
      <nav className="sticky top-0 z-[99]">
         <div
            className={`absolute inset-0 bg-white dark:bg-slate-800 !bg-opacity-[0.7] backdrop-blur-[15px] z-[-1]`}
         ></div>

         <div className="py-3 w-3/4 mx-auto h-full [&_a]:transition-[color] hover:[&_a]:text-red-500 flex flex-row md:flex-row items-center justify-between">
            <Link href={"/"}>
               <h1 className="text-3xl font-bold">DN</h1>
            </Link>

            <div className="font-semibold">
               <ul className="flex flex-row items-center space-x-5">
                  <li>
                     <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                     <Link href={"/projects"}>Projects</Link>
                  </li>
               </ul>
            </div>

            <div className="flex items-center">
               <span className="w-7">{githubIcon}</span>

               <ToggleTheme />
               {/* <button className="ml-3 hover:text-red-500 w-7">
                  {sunIcon}
               </button>*/}
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
