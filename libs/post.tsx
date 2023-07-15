import { compileMDX } from "next-mdx-remote/rsc";
import Video from "@/app/components/Video";
import CustomImage from "@/app/components/CustomImage";

type Filetree = {
   tree: [{ path: string }];
};

export async function getPostByName(
   fileName: string
): Promise<BlogPost | undefined> {
   // console.log("check file name", fileName);

   const res = await fetch(
      `https://raw.githubusercontent.com/d4t06/learn-nextjs-blogposts/master/${fileName}`,
      // {
      //    headers: {
      //       Accept: "application/vnd.github+json",
      //       Authorization: `Bearer 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`,
      //       "X-GitHub-Api-Version": "2022-11-28",
      //    },
      // }
   );

   if (!res.ok) return undefined;

   const rawMdx = await res.text();

   if (rawMdx === "404: Not Found") return undefined;

   const { frontmatter, content } = await compileMDX<{
      title: string;
      date: string;
      tags: string[];
   }>({
      source: rawMdx,
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

   // console.log("check post ", blogPostObj);

   return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
   const res = await fetch(
      "https://api.github.com/repos/d4t06/learn-nextjs-blogposts/git/trees/master?recursive=1",
      // {
      //    headers: {
      //       Accept: "application/vnd.github+json",
      //       Authorization: `Bearer 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`,
      //       "X-GitHub-Api-Version": "2022-11-28",
      //    },
      // }
   );

   // console.log("check res", res);
   

   if (!res.ok) return undefined;

   const repoFiletree: Filetree = await res.json();

   // console.log("check tree", repoFiletree);

   const fileNameArray = repoFiletree.tree
      .map((obj) => obj.path)
      .filter((path) => path.endsWith(".mdx"));

   // console.log("check filesArray", fileNameArray);

   const posts: Meta[] = [];

   for (const fileName of fileNameArray) {
      const post = await getPostByName(fileName);
      if (post) {
         const { meta } = post;
         posts.push(meta);
      }
   }

   return posts;
}
