"use client";

import type { JSX } from "react/jsx-runtime"; // Import JSX to declare the variable
import { getHeadingId } from "./getHeadingId";
import { ReactNode } from "react";

// Utility to automatically add IDs to headings
export default function AutoHeading({
  level,
  children,
  id,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  id?: string;
}) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const _id = id || getHeadingId(children?.toString() || "");

  return <Tag id={_id}>{children}</Tag>;
}
