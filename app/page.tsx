import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
   title: "Dat's blog posts",
   description: "Create by Dat"
}

export default function Home() {
   return (
      <main>
         <MyProfilePic />
         <h1 className="text-center mt-5 text-white text-3xl font-bold">
            Hi i&apos;m Dat &#128075;
         </h1>
         <Posts />
      </main>
   );
}
