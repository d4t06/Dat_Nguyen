// import { notFound } from "next/navigation";
// import { getPostByName, getPostsMeta } from "@/libs/post";
// import Link from "next/link";
// import dateFormatter from "@/libs/dateFormater";

// export const revalidate = 86400;

// type Props = {
//    params: {
//       postId: string;
//    };
// };

// export async function generateStaticParams() {
//    const postsMeta = await getPostsMeta();

//    if (!postsMeta) return [];

//    return postsMeta.map((postMeta) => {
//       return {
//          postId: postMeta.id,
//       };
//    });
// }

// export function generateMetadata() {
//    const post = await getPostByName(`${postId}.mdx`);

//    if (!post) {
//       return {
//          title: "Not found",
//       };
//    }

//    return {
//       title: post.meta.title,
//    };
// }

export default async function Page() {
   //    const post = await getPostByName(`${postId}.mdx`);

   //    // console.log("check post", post);

   //    if (!post) {
   //       return notFound();
   //    }

   //    const { meta, content } = post;

   return (
      <>
         <p>This is post page</p>;
      </>
   );
   // return (
   //    <div className="w-2/4 mx-auto">
   //       <h1 className="text-3xl mt-10 font-bold text-white">{meta.title}</h1>
   //       <p className="text-white">{dateFormatter(meta.date)}</p>
   //       <br />
   //       <article className="text-white">{content}</article>
   //       <div className="flex flex-row gap-5 mt-8">
   //          {!!meta.tags &&
   //             meta.tags.map((tag, i) => {
   //                return (
   //                   <Link
   //                      className="text-l text-white hover:underline border px-3 py-1 rounded"
   //                      href={`/tag/${tag}`}
   //                      key={i}
   //                   >
   //                      #{tag}
   //                   </Link>
   //                );
   //             })}
   //       </div>
   //       <Link
   //          href={"/"}
   //          className="text-white hover:underline text-xl block mt-5 mb-10 font-medium"
   //       >
   //          Go back home
   //       </Link>
   //    </div>
   // );
}
