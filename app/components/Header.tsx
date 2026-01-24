import Link from "next/link";
import { githubIcon, menuIcon } from "../../public/icon";
import ToggleTheme from "./ToggleTheme";
import MobileMenu from "./MobileMenu";
import LinkItem from "./LinkItem";

function Header() {
   return (
      <nav className="fixed left-0 w-full top-0 z-[99] bg-white/70 dark:bg-slate-800/70  backdrop-blur-[15px]">
         <div className="py-3 px-3 w-full container mx-auto [&_a]:transition-[color] hover:[&_a]:text-red-500 flex flex-row md:flex-row justify-between">
            <Link href={"/"}>
               <h1 className="text-2xl font-semibold">Dat Nguyen</h1>
            </Link>

            <div className="font-medium hidden md:flex items-center space-x-5 [&_a]:inline-block [&_a]:py-1 [&_a]:text-lg [&_a]:text-[--text-muted-cl] [&_a.active]:text-[--text-cl]">
               <LinkItem href={"/"}>Home</LinkItem>
               <LinkItem href={"/projects"}>Projects</LinkItem>
               <LinkItem href={"/notes"}>Notes</LinkItem>
               <LinkItem href={"/blogs"}>Blogs</LinkItem>
               <LinkItem href={"/about"}>About</LinkItem>
            </div>

            <div className="items-center flex space-x-3">
               <Link
                  href="https://github.com/d4t06"
                  target="_blank"
                  className="w-7"
               >
                  {githubIcon}
               </Link>

               <ToggleTheme />

               <label
                  htmlFor="trigger_menu"
                  className="cursor-pointer block md:hidden w-8 bg-gray-100 dark:bg-gray-600 rounded-md p-[0.125rem]"
               >
                  {menuIcon}
               </label>
            </div>
         </div>

         <MobileMenu />
      </nav>
   );
}

export default Header;
