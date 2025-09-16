import { ComponentProps } from "react";
import CustomImage from "../CustomImage";

type Props = {
    text: string;
    className?: string;
    imageClassName?: string;
};

export default function ImageFigure({
    text,
    imageClassName = "object-cover w-full h-full",
    className = "aspect-[1/1]",
    ...props
}: Props & ComponentProps<typeof CustomImage>) {
    return (
        <figure className="not-prose">
            <div className={className}>
                <CustomImage className={`${imageClassName}`} {...props} />
            </div>
            <figcaption className="text-center mt-3">{text}</figcaption>
        </figure>
    );
}
