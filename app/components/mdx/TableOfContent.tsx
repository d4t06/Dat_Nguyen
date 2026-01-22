import Link from "next/link";
import { menuIcon, xmarkIcon } from "@/public/icon";

type Props = {
  headings: BlogPost["headings"];
};

export default function TableOfContent({ headings }: Props) {
  const getClassByLevel = (level: number) => {
    switch (level) {
      case 2:
        return "font-bold text-lg main";
      case 3:
        return "ml-2.5 font-semibold opacity-[.8]";
      case 4:
        return "ml-5 opacity-[.7]";
      default:
        return "";
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="sidebar-toggle"
        className="peer hidden"
        aria-label="Toggle sidebar"
      />

      <div
        className={`bg-white dark:bg-slate-800 flex flex-col w-[300px] max-w-[50vw] fixed top-0 left-0 bottom-0 pt-[60px] transition-transform -translate-x-full peer-checked:translate-x-0 md:translate-x-0 px-3 overflow-hidden md:h-[calc(100vh-100px)] md:pt-0 md:sticky md:pl-0 md:top-[100px] md:w-1/4`}
      >
        <div className="font-semibold text-xl">
          <img className="w-6 inline-block mr-2 -mt-1" src="/images/note.png" />

          <span>Contents</span>
        </div>

        <div className="toc flex-grow overflow-auto mt-3 hover:[&_a]:text-red-500  hover:[&_a]:opacity-100 [&_a]:py-1 space-y-1 pl-3 [&_a.active]:text-red-500 pb-16">
          {headings.map((t, i) => (
            <Link
              key={i}
              // onClick={() => setIsOpen(false)}
              className={`block ${getClassByLevel(t.level)}`}
              href={`#${t.id}`}
            >
              {t.text}
            </Link>
          ))}
        </div>
      </div>

      <label
        htmlFor="sidebar-toggle"
        className="sidebar-toggle fixed md:hidden bg-white dark:bg-gray-500 p-1.5 bottom-5 left-4 primary-shadow [&_svg]:w-6 rounded"
        aria-label="Toggle sidebar menu"
      >
        <span className="menu-icon">{menuIcon}</span>

        <span className="xmark-icon hidden">{xmarkIcon}</span>
      </label>
    </>
  );
}
