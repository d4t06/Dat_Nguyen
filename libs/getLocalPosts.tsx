import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import CustomImage from "@/app/components/CustomImage";
import Video from "@/app/components/Video";
import CustomMDXComponents from "@/app/components/mdx/MDXComponents";
import remarkGfm from "remark-gfm";

const postDirectory = path.join(process.cwd(), "blogposts");

export async function getPostByName(fileName: string) {
   if (!fileName.endsWith(".mdx")) {
      return undefined;
   }

   const fullPath = path.join(postDirectory, fileName);
   const fileContent = fs.readFileSync(fullPath, "utf-8");

   const { frontmatter, content } = await compileMDX<Meta>({
      source: fileContent,
      components: {
         Video,
         CustomImage,
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
}

export default async function getLocalPosts() {
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

   return postsMeta;
}
