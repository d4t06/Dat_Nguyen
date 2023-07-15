import { getPostsMeta } from "@/libs/post";
// import { getPostsMeta } from "@/libs/postLocal";
import ListItem from "./ListItem";

async function Posts() {
   const postsMeta = await getPostsMeta();

   // console.log("check postsMeta", postsMeta)

   if (!postsMeta) return <p className="mt-10 text-white text-center">No posts available.{process.env.GITHUB_TOKEN}</p>

   return (
      <div className="w-2/4 mx-auto mt-10">
         <h2 className="text-white text-2xl font-bold">My Posts</h2>
         <ul className="mt-4">
            {postsMeta.map((postMeta, index) => (
               <ListItem postMeta={postMeta} key={index}/>
            ))}
         </ul>
      </div>
   );
}

export default Posts;
