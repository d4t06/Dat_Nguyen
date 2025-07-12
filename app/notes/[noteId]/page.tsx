import { notFound } from "next/navigation";
import dateFormatter from "@/libs/dateFormater";
import getLocalPosts, { getPostByName } from "@/libs/getLocalPosts";
import CustomImage from "@/app/components/CustomImage";
import NoteIdWrapper from "./Wrapper";
import TableOfContent from "@/app/components/mdx/TableOfContent";

export const revalidate = 86400;

type Props = {
   params: {
      noteId: string;
   };
};

export async function generateStaticParams() {
   const postsMeta = await getLocalPosts();

   if (!postsMeta) return [];

   return postsMeta.map((postMeta) => {
      return {
         noteId: postMeta.id,
      };
   });
}

export async function generateMetadata({ params }: Props) {
   const post = await getPostByName(`${params.noteId}.mdx`);

   if (!post) {
      return {
         title: "Not found",
      };
   }

   return {
      title: post.meta.title,
   };
}

export default async function Page({ params }: Props) {
   const post = await getPostByName(`${params.noteId}.mdx`);

   if (!post) {
      return notFound();
   }

   const { meta, content, rawContent } = post;

   return (
      <>
         <div className="flex w-ful mt-10 flex-wrap items-start">
            <TableOfContent content={rawContent} />

            <div className="p-3 md:p-5 w-full md:w-3/4 ml-auto text-black dark:text-white bg-amber-100 dark:bg-slate-900 rounded-xl">
               {meta.image && (
                  <div className="rounded-md mb-3 overflow-hidden aspect-[4/1] dark:bg-white">
                     <CustomImage
                        width={700}
                        height={300}
                        className="h-full object-cover w-full m-auto"
                        alt="image"
                        src={meta.image}
                     />
                  </div>
               )}

               <h1 className="text-4xl font-bold">{meta.title}</h1>
               <p>{dateFormatter(meta.date)}</p>
               <br />

               <NoteIdWrapper>
                  <div className="prose max-w-[unset] prose-base prose-slate dark:prose-invert [&_img]:mx-auto [&_img]:rounded-md">
                     {content}
                  </div>
               </NoteIdWrapper>
            </div>
         </div>
      </>
   );
}
