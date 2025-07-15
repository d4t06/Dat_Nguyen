"use client";

import useNoteEffect from "./_hooks/useNoteEffect";
import ImageModal from "@/app/components/image-modal";

export default function BlogpostImageModal() {
  const { closeModal, imageUrl } = useNoteEffect();

  return (
    <>
      <ImageModal closeModal={closeModal} isOpenModal={imageUrl} />
    </>
  );
}
