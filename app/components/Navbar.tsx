import Link from "next/link";
import { githubIcon, linkedinIcon, ubuntuIcon, wordpressIcon } from "../../public/icon";
// import Search from "./Search";

function Navbar() {
   return (
      <nav className="h-14 bg-slate-600 sticky top-0">
         <div className="w-2/4 mx-auto h-full flex flex-row md:flex-row items-center justify-between text-white">
            <Link href={"/"}>
               <h1 className="text-3xl font-bold">Dat&apos;s Blog</h1>
            </Link>

            {/* <Search /> */}
            <div className="">
               <ul className="flex flex-row items-center gap-5">
                  <li>
                     <Link className="h-10 w-10 block" href={"/"}>
                           {githubIcon}
                     </Link>
                  </li>
                  <li>
                     <Link className="h-10 w-10 block" href={"/"}>
                           {wordpressIcon}
                     </Link>
                  </li>
                  <li>
                     <Link className="h-10 w-10 block" href={"/"}>
                           {ubuntuIcon}
                     </Link>
                  </li>
                  <li>
                     <Link className="h-10 w-10 block" href={"/"}>
                           {linkedinIcon}
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
