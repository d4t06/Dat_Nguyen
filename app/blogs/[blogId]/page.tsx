import { notFound } from "next/navigation";
import dateFormatter from "@/libs/dateFormater";
import CustomImage from "@/app/components/CustomImage";
import NoteIdWrapper from "./Wrapper";
import TableOfContent from "@/app/components/mdx/TableOfContent";
import useMDXPost from "@/libs/getLocalPosts";
import BlogPostLayout from "@/app/components/layouts/blogpost/BlogPostLayout";
import BlogpostWrapper from "./Wrapper";

export const revalidate = 86400;

type Props = {
  params: {
    blogId: string;
  };
};
const { getAllPosts, getPostByName } = useMDXPost({ directory: "blogposts" });

export async function generateStaticParams() {
  const postsMeta = await getAllPosts();

  if (!postsMeta) return [];

  return postsMeta.map((postMeta) => {
    return {
      blogId: postMeta.id,
    };
  });
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostByName(`${params.blogId}.mdx`);

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
  const post = await getPostByName(`${params.blogId}.mdx`);

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
