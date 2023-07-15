import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Video from "@/app/components/Video";
import CustomImage from "@/app/components/CustomImage";

const postDirectory = path.join(process.cwd(), "blogposts");

export async function getPostByName(fileName: string) {
   if (!fileName.endsWith(".mdx")) {
      return undefined;
   }

   const fullPath = path.join(postDirectory, fileName);
   const fileContent = fs.readFileSync(fullPath, "utf-8");

   const { frontmatter, content } = await compileMDX<{
      title: string;
      date: string;
      tags: string[];
   }>({
      source: fileContent,
      components: {
         Video, 
         CustomImage,
      },
      options: {
         parseFrontmatter: true,
      },
   });

   const id = fileName.replace(/\.mdx$/, "");

   const blogPostObj: BlogPost = {
      meta: {
         id,
         title: frontmatter.title,
         date: frontmatter.date,
         tags: frontmatter.tags,
      },
      content,
   };

   return blogPostObj;
}

export async function getPostsMeta() {
   const fileNameArray = fs.readdirSync(postDirectory);

   if (!fileNameArray.length) return undefined;

   const postsMeta: Meta[] = [];

   for (const fileName of fileNameArray) {
      const post = await getPostByName(fileName);
      if (post) {
         const {meta} = post;
         postsMeta.push(meta);
      }
   }

   // const postsMeta = fileNameArray.map(async (fileName) => {
   //    if (fileName.endsWith(".mdx")) {
   //       const post = await getPostByName(fileName);

   //       if (post) {
   // console.log("check get post by name", post);

   //          const { meta } = post;
   //          return meta;
   //       }
   //    }
   // });
   // console.log("check postsMeta", postsMeta);

   return postsMeta;
}
