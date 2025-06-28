// import { getPostsMeta } from "@/libs/post";
// import ListItem from "@/app/components/ListItem";
// import Link from "next/link";

// type Props = {
//    params: {
//       tag: string;
//    };
// };

// export const revalidate = 86400;

// export async function generateStaticParams() {
//    const posts = await getPostsMeta();

//    if (!posts) return [];

//    const tags = new Set(posts.map(post => post.tags).flat())

//    return Array.from(tags).map(tag => {tag})

// }

// export function generateMetadata({ params: { tag } }: Props) {
//    return {
//       title: `Post about '${tag}'`
//    }
// }

export default async function TagPostList() {
   // const posts = await getPostsMeta();

   // if (!posts) {
   //    return <p>Sorry, no post available</p>;
   // }

   // const tagPosts = posts.filter((post) => post.tags.includes(tag));

   // if (!tagPosts.length) {
   //    return (
   //       <div className="text-center mt-10 text-white text-xl">
   //          <p>No post for that keyword</p>
   //          <Link
   //             href={"/"}
   //             className="text-white hover:underline text-xl block mt-5 mb-10 font-medium"
   //          >
   //             Go back home
   //          </Link>
   //       </div>
   //    );
   // }

   return (
      <>
         <p>This is tag page</p>
         {/* <div className="w-2/4 mx-auto mt-10">
            <h1 className="text-3xl text-white">Result for #{tag}</h1>
            <ul className="mt-5">
               {posts.map((postMeta, index) => (
                  <ListItem postMeta={postMeta} key={index} />
               ))}
            </ul>
         </div>*/}
      </>
   );
}
