"use client";

import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";

export default function MDXWrapper({ children }: { children: ReactNode }) {
  return <MDXProvider>{children}</MDXProvider>;
}
