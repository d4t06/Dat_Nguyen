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
import matter from "gray-matter";
import readline from "readline";
import rehypeSlug from "rehype-slug";
import { getHeadingId } from "@/app/components/mdx/getHeadingId";

const options: Options = {
  theme: "one-dark-pro",
};

export async function getPostByName(
  fileName: string,
  directory: "notes" | "blogposts",
) {
  try {
    if (!fileName.endsWith(".mdx")) return;

    const fullPath = path.join(directory, fileName);
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
          rehypePlugins: [rehypeSlug, [rehypePrettyCode, options] as any],
        },
      },
    });

    const headingLines = fileContent
      .split("\n")
      .filter((line) => line.match(/^#{1,4}\s/));

    const headings: BlogPost["headings"] = [];

    headingLines.forEach((line) => {
      const match = line.match(/^(#{2,4})\s(.*)/);

      if (match) {
        const level = match[1].length; // Number of # characters
        const text = match[2].trim();

        // Create an ID that matches what rehype-slug produces
        const id = getHeadingId(text);

        headings.push({ text, id, level });
      }
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
      headings,
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
    if (!fileName.endsWith(".mdx")) return;

    const fullPath = path.join(directory, fileName);
    const fileStream = fs.createReadStream(fullPath);

    let lines: string[] = [];
    let fenceCount = 0;

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (let line of rl) {
      lines.push(line);

      if (line.trim() === "---") fenceCount++;

      if (fenceCount === 2) {
        rl.close();
        fileStream.destroy();

        break;
      }

      if (lines.length >= 10) {
        rl.close();
        fileStream.destroy();

        break;
      }
    }

    const metaContent = lines.join("\n");
    const id = fileName.replace(/\.mdx$/, "");

    const { data } = matter(metaContent);

    postsMeta.push({ ...data, id } as Meta);
  }

  // convert dd-mm-yyyy to yyyy-mm-dd
  const convertStringDate = (s: string) => s.split("-").reverse().join("-");

  postsMeta.sort(
    (a, b) =>
      new Date(convertStringDate(b.date)).getTime() -
      new Date(convertStringDate(a.date)).getTime(),
  );

  return postsMeta;
}
