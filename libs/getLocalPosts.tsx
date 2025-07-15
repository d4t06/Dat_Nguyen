import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import CustomImage from "@/app/components/CustomImage";
import Video from "@/app/components/Video";
import CustomMDXComponents from "@/app/components/mdx/MDXComponents";
import ImageFigure from "@/app/components/mdx/ImageFigure";
import remarkGfm from "remark-gfm";

const getDate = (value: string) => {
  const parts = value.split("-");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Subtract 1 for zero-indexed month
  const year = parseInt(parts[2], 10);

  return new Date(year, month, day).getDate();
};

export default function useMDXPost({
  directory,
}: {
  directory: "notes" | "blogposts";
}) {
  const postDirectory = path.join(process.cwd(), directory);

  async function getPostByName(fileName: string) {
    try {
      if (!fileName.endsWith(".mdx")) return;

      const fullPath = path.join(postDirectory, fileName);

      const fileContent = fs.readFileSync(fullPath, { encoding: "utf-8" });

      const { frontmatter, content } = await compileMDX<Meta>({
        source: fileContent,
        components: {
          Video,
          CustomImage,
          ImageFigure,
          ...CustomMDXComponents,
        },
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      });

      const id = fileName.replace(/\.mdx$/, "");

      const blogPostObj: BlogPost = {
        meta: {
          id,
          title: frontmatter.title,
          date: frontmatter.date,
          tags: frontmatter.tags,
          image: frontmatter.image || "",
        },
        content,
        rawContent: fileContent,
      };

      return blogPostObj;
    } catch (error) {}
  }

  async function getAllPosts() {
    const fileNameArray = fs.readdirSync(postDirectory);

    if (!fileNameArray.length) return undefined;

    const postsMeta: Meta[] = [];

    for (const fileName of fileNameArray) {
      const post = await getPostByName(fileName);
      if (post) {
        const { meta } = post;
        postsMeta.push(meta);
      }
    }

    postsMeta.sort((a, b) => getDate(b.date) - getDate(a.date));

    return postsMeta;
  }

  return { getAllPosts, getPostByName };
}
