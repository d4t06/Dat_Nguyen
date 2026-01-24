import MDXWrapper from "./Wrapper";
import TableOfContent from "../../mdx/TableOfContent";
import CustomImage from "../../CustomImage";
import { ReactNode } from "react";
import dateFormatter from "@/app/utils/appHelper";

export default function BlogPostLayout({
  meta,
  content,
  headings,
  children,
}: BlogPost & { children?: ReactNode }) {
  return (
    <>
      <div className="flex w-ful mt-10 flex-wrap items-start">
        <TableOfContent headings={headings} />

        <div className="p-3 md:p-5 w-full md:w-3/4 ml-auto text-black dark:text-white bg-amber-100 dark:bg-slate-900 rounded-xl">
          {meta.image && (
            <CustomImage
              width={700}
              height={450}
              className="h-full object-cover w-3/4 m-auto aspect-[4/2] mb-5 rounded-md"
              alt="image"
              src={meta.image}
            />
          )}

          <h1 className="text-4xl font-bold">{meta.title}</h1>
          <p>{dateFormatter(meta.date)}</p>
          <br />

          <MDXWrapper>
            <div className="prose max-w-[unset] prose-base prose-slate dark:prose-invert [&_img]:mx-auto [&_div.not-prose_img]:max-w-full md:[&_img]:max-w-[70%] [&_img]:rounded-md [&_iframe]:rounded-md [&_code:not(pre>code)]:px-2 [&_code:not(pre>code)]:py-1 [&_code:not(pre>code)]:bg-slate-600 [&_code:not(pre>code)]:text-gray-200 [&_code:not(pre>code)]:rounded">
              {content}
            </div>

            {children}
          </MDXWrapper>
        </div>
      </div>
    </>
  );
}
