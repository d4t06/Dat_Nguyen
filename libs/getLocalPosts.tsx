import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import CustomImage from "@/app/components/CustomImage";
import Video from "@/app/components/Video";
import CustomMDXComponents from "@/app/components/mdx/MDXComponents";
import ImageFigure from "@/app/components/mdx/ImageFigure";
import remarkGfm from "remark-gfm";
import Short from "@/app/components/Short";

export async function getPostByName(
  fileName: string,
  directory: "notes" | "blogposts",
) {
  try {
    const postDirectory = path.join(process.cwd(), directory);
    if (!fileName.endsWith(".mdx")) return;

    const fullPath = path.join(postDirectory, fileName);

    const fileContent = fs.readFileSync(fullPath, { encoding: "utf-8" });

    const { frontmatter, content } = await compileMDX<Meta>({
      source: fileContent,
      components: {
        Video,
        CustomImage,
        ImageFigure,
        Short,
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

export async function getAllPosts(directory: "notes" | "blogposts") {
  const fileNameArray = fs.readdirSync(directory);

  if (!fileNameArray.length) return undefined;

  const postsMeta: Meta[] = [];

  for (const fileName of fileNameArray) {
    const post = await getPostByName(fileName, directory);
    if (post) {
      const { meta } = post;
      postsMeta.push(meta);
    }
  }

  postsMeta.sort(
    (a, b) => new Date(b.date).getDate() - new Date(a.date).getDate(),
  );

  return postsMeta;
}
