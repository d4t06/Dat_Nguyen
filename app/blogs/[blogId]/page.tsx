import { notFound } from "next/navigation";

import { getAllPosts, getPostByName } from "@/libs/getLocalPosts";
import BlogPostLayout from "@/app/components/layouts/blogpost/BlogPostLayout";
import BlogpostWrapper from "./Wrapper";

export const revalidate = 86400;

type Props = {
  params: {
    blogId: string;
  };
};

export async function generateStaticParams() {
  const postsMeta = await getAllPosts("blogposts");


  if (!postsMeta) return [];

  return postsMeta.map((postMeta) => {
    return {
      blogId: postMeta.id,
    };
  });
}

export async function generateMetadata({ params }: Props) {

  const post = await getPostByName(`${params.blogId}.mdx`, 'blogposts');

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

  const post = await getPostByName(`${params.blogId}.mdx`, 'blogposts');


  if (!post) {
    return notFound();
  }

  return (
    <>
      <BlogPostLayout {...post}>
        <BlogpostWrapper />
      </BlogPostLayout>
    </>
  );
}
