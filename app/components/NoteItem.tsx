import CustomImage from "@/app/components/CustomImage";
import Link from "next/link";

export default function NoteItem({
  postMeta,
  postfix
}: {
  postMeta: Meta;
  postfix: "notes" | "blogs";
}) {
  const { id, title, image } = postMeta;

  return (
    <Link
      href={`/${postfix}/${id}`}
      className="transition-transform dark:bg-slate-900 rounded-xl border border-black dark:border-white overflow-hidden hover:translate-y-2"
    >
      <div className="pt-[45%] relative">
        <div className="absolute inset-0 dark:bg-white">
          <CustomImage
            className="h-full w-full mx-auto object-cover"
            alt=""
            src={image}
          />
        </div>
      </div>
      <div className="px-3 py-5">
        <p className="text-2xl font-bold">{title}</p>
        <div className="flex gap-2 mt-3">
          {!!postMeta.tags &&
            postMeta.tags.map((tag, i) => {
              return (
                <span
                  className="opacity-[.8] text-sm px-3 py-1 border border-black dark:border-white rounded-full"
                  key={i}
                >
                  {tag}
                </span>
              );
            })}
        </div>
      </div>
    </Link>
  );
}
