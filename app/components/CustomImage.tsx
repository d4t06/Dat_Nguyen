import Image from "next/image";

type Props = {
   src: string;
   alt: string;
   width?: number;
   height?: number;
   className?: string;
};

export default function CustomImage({
   src,
   alt,
   height = 500,
   width = 500,
   className = "",
}: Props) {
   return (
      <Image
         className={`${className}`}
         src={src || '/images/simon.png'}
         alt={alt}
         width={width}
         height={height}
      />
   );
}
