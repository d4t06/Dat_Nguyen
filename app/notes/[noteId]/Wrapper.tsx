"use client";

import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import useNoteEffect from "./_hooks/useNoteEffect";
import ImageModal from "@/app/components/image-modal";

export default function NoteIdWrapper({ children }: { children: ReactNode }) {
  const { closeModal, imageUrl } = useNoteEffect();

  return (
    <MDXProvider>
      {children}

      <ImageModal closeModal={closeModal} isOpenModal={imageUrl} />
    </MDXProvider>
  );
}
