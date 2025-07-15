import { useEffect, useRef, useState } from "react";

export default function useNoteEffect() {
  const [isMounted, setIsMounted] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const closeModal = () => {
    const body =
      typeof document !== "undefined" && document.querySelector("body");

    if (body) {
      body.style.overflow = "auto";
    }
    setImageUrl("");
  };

  const openModal = (src: string) => {
    const body =
      typeof document !== "undefined" && document.querySelector("body");

    if (body) {
      body.style.overflow = "hidden";
    }

    setImageUrl(src);
  };

  const handleImageClick = (e: Event) => {
    const imageEle = e.target as HTMLImageElement;
    openModal(imageEle.src);
  };

  useEffect(() => {
    if (!isMounted) return setIsMounted(true);

    const images =
      typeof document !== "undefined"
        ? document.querySelectorAll<HTMLImageElement>(".prose img")
        : [];

    if (images)
      images.forEach((image) => {
        image.addEventListener("click", handleImageClick);
      });

    return () => {
      if (images)
        images.forEach((image) => {
          image.removeEventListener("click", handleImageClick);
        });
    };
  }, [isMounted]);

  return { imageUrl, closeModal };
}
