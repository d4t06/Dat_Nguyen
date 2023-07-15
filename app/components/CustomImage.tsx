import Image from "next/image";

type Props = {
   src: string,
   alt: string
};

export default function CustomImage({ src, alt }: Props) {
   return (
      <div className="w-full h-full">
         <Image
            className="rounded mx-auto"
            src={src}
            alt={alt}
            width={650}
            height={650}
         />
      </div>
   );
}
