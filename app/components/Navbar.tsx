"use client";
import Link from "next/link";
import { githubIcon, menuIcon } from "../../public/icon";
import ToggleTheme from "./ToggleTheme";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function LinkItem({ children, href }: { children: ReactNode; href: string }) {
   const pathName = usePathname();

   const getActive =
      href === "/"
         ? pathName === "/"
            ? "active"
            : ""
         : pathName.includes(href)
           ? "active"
           : "";

   return (
      <Link className={getActive} href={href}>
         {children}
      </Link>
   );
}

function Navbar() {
   return (
      <nav className="fixed left-0 w-full top-0 z-[99]">
         <div
            className={`absolute inset-0 transition-colors bg-white/70 dark:bg-slate-800/70  backdrop-blur-[15px] z-[-1]`}
         ></div>

         <div className="py-3 px-3 w-full md:w-3/4 mx-auto [&_a]:transition-[color] hover:[&_a]:text-red-500 flex flex-row md:flex-row justify-between">
            <Link href={"/"}>
               <h1 className="text-3xl font-bold">DN</h1>
            </Link>

            <div className="font-medium hidden md:flex items-center space-x-5 [&_a]:inline-block [&_a]:py-1 [&_a]:text-lg [&_a]:text-[--text-muted-cl] [&_a.active]:text-[--text-cl]">
               {/*<Link href={"/"}>Home</Link>*/}
               <LinkItem href={"/"}>Home</LinkItem>
               <LinkItem href={"/projects"}>Projects</LinkItem>
               <LinkItem href={"/notes"}>Notes</LinkItem>
               <LinkItem href={"/blogs"}>Blogs</LinkItem>
               <LinkItem href={"/about"}>About</LinkItem>
            </div>

            <div className="items-center flex space-x-2">
               <Link
                  href="https://github.com/d4t06"
                  target="_blank"
                  className="hidden md:block w-7"
               >
                  {githubIcon}
               </Link>

               <ToggleTheme />

               <label htmlFor="trigger_menu" className="block md:hidden w-8">
                  {menuIcon}
               </label>
            </div>
         </div>

         <MobileMenu />
      </nav>
   );
}

export default Navbar;
