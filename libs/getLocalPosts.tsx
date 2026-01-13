import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import CustomImage from "@/app/components/CustomImage";
import Video from "@/app/components/Video";
import CustomMDXComponents from "@/app/components/mdx/MDXComponents";
import ImageFigure from "@/app/components/mdx/ImageFigure";
import remarkGfm from "remark-gfm";
import Short from "@/app/components/Short";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

const options: Options = {
  theme: "one-dark-pro",
};

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
          rehypePlugins: [[rehypePrettyCode, options] as any],
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
  } catch (error) {
    console.log(error);
  }
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

  // convert dd-mm-yyyy to yyyy-mm-dd
  const convertStringDate = (s: string) => s.split("-").reverse().join('-')

  postsMeta.sort(
    (a, b) => new Date(convertStringDate(b.date)).getTime() - new Date(convertStringDate(a.date)).getTime(),
  );

  return postsMeta;
}
