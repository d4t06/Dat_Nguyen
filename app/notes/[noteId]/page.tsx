import { notFound } from "next/navigation";
import { getAllPosts, getPostByName } from "@/libs/getLocalPosts";
import BlogPostLayout from "@/app/components/layouts/blogpost/BlogPostLayout";

export const revalidate = 86400;

type Props = {
  params: {
    noteId: string;
  };
};

export async function generateStaticParams() {
  const postsMeta = await getAllPosts('notes');

  if (!postsMeta) return [];

  return postsMeta.map((postMeta) => {
    return {
      noteId: postMeta.id,
    };
  });
}

export async function generateMetadata({ params }: Props) {


  const post = await getPostByName(`${params.noteId}.mdx`, 'notes');

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

  const post = await getPostByName(`${params.noteId}.mdx`, 'notes');

  if (!post) {
    return notFound();
  }

  return (
    <>
      <BlogPostLayout {...post} />
    </>
  );
}
