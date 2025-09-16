"use client";

import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import useFocusTOC from "./useFocusTOC";

export default function MDXWrapper({ children }: { children: ReactNode }) {
  useFocusTOC();

  return <MDXProvider>{children}</MDXProvider>;
}
