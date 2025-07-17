import MDXWrapper from "./Wrapper";
import TableOfContent from "../../mdx/TableOfContent";
import CustomImage from "../../CustomImage";
import { ReactNode } from "react";
import dateFormatter, { convertMM_DDToDD_MM } from "@/app/utils/appHelper";

export default function BlogPostLayout({
  meta,
  content,
  rawContent,
  children,
}: BlogPost & { children?: ReactNode }) {
  return (
    <>
      <div className="flex w-ful mt-10 flex-wrap items-start">
        <TableOfContent content={rawContent} />

        <div className="p-3 md:p-5 w-full md:w-3/4 ml-auto text-black dark:text-white bg-amber-100 dark:bg-slate-900 rounded-xl">
          {meta.image && (
            <div className="rounded-md mb-3 overflow-hidden aspect-[4/2] dark:bg-white">
              <CustomImage
                width={700}
                height={300}
                className="h-full object-cover w-full m-auto"
                alt="image"
                src={meta.image}
              />
            </div>
          )}

          <h1 className="text-4xl font-bold">{meta.title}</h1>
          <p>{dateFormatter(convertMM_DDToDD_MM(meta.date).toDateString())}</p>
          <br />

          <MDXWrapper>
            <div className="prose max-w-[unset]  prose-base prose-slate dark:prose-invert [&_img]:mx-auto md:[&>img]:max-w-[60%] [&_img]:rounded-md [&_iframe]:rounded-md">
              {content}
            </div>

            {children}
          </MDXWrapper>
        </div>
      </div>
    </>
  );
}
