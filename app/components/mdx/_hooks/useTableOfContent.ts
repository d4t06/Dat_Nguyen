import { useEffect, useState } from "react";
import { getHeadingId } from "../getHeadingId";

type Props = {
  content: string;
};

type TableOfContent = {
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
};

export default function useTableOfContent({ content }: Props) {
  const [tableOfContents, setTableOfContents] = useState<TableOfContent[]>([]);

  // mobile only
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const headings: TableOfContent[] = [];
    // Split content into lines and find headings
    content.split("\n").forEach((line) => {
      let level: TableOfContent["level"] = 6;
      let text = "";

      if (line.startsWith("#### ")) {
        level = 4;
        text = line.substring(5).trim();
      } else if (line.startsWith("### ")) {
        level = 3;
        text = line.substring(4).trim();
      } else if (line.startsWith("## ")) {
        level = 2;
        text = line.substring(3).trim();
      } else if (line.startsWith("# ")) {
        level = 1;
        text = line.substring(2).trim();
      }

      if (level > 0 && text.length > 0) {
        headings.push({
          level,
          text,
          id: getHeadingId(text), // Create a unique ID for the anchor
        });
      }
    });
    setTableOfContents(headings);
  }, [content]);

  return { tableOfContents, isOpen, setIsOpen };
}
