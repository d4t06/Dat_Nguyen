"use client";

import Link from "next/link";
import useTabelOfContent from "./_hooks/useTableOfContent";
import { menuIcon, xmarkIcon } from "@/public/icon";

type Props = {
  content: string;
};

export default function TableOfContent({ content }: Props) {
  const { tableOfContents, isOpen, setIsOpen } = useTabelOfContent({ content });

  const getClassByLevel = (level: (typeof tableOfContents)[0]["level"]) => {
    switch (level) {
      case 2:
        return "font-bold text-lg main";
      case 3:
        return "ml-2.5 font-semibold";
      case 4:
        return "ml-5";
      default:
        return "";
    }
  };

  return (
    <>
      <div
        className={`bg-white dark:bg-slate-800 w-[300px] max-w-[50vw] fixed top-0 left-0 bottom-0 mt-[60px] pb-16 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-[none]"
        } md:max-w-[100vw] md:w-1/4 p-3  rounded-lg overflow-hidden md:bottom-0 md:left-0 flex flex-col md:pb-10`}
      >
        <div className="font-semibold text-2xl">Table of contents</div>

        <div className="toc flex-grow overflow-auto mt-3 hover:[&_a]:bg-black/5 dark:hover:[&_a]:bg-white/5 [&_a]:py-1 [&_a]:px-2.5 [&_a]:rounded space-y-1 [&_a.active]:text-red-500">
          {tableOfContents.map((t, i) => (
            <Link
              key={i}
              onClick={() => setIsOpen(false)}
              className={`block ${getClassByLevel(t.level)}`}
              href={`#${t.id}`}
            >
              {t.text}
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed md:hidden bg-white dark:bg-slate-800 p-1.5 bottom-5 left-4 primary-shadow [&_svg]:w-6 rounded"
      >
        {isOpen ? xmarkIcon : menuIcon}
      </button>
    </>
  );
}
