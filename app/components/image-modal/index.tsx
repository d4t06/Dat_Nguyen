import { createPortal } from "react-dom";
import useImageModal from "./useImageModal";

type Props = {
   isOpenModal: string;
   closeModal: () => void;
};
export default function ImageModal({ closeModal, isOpenModal }: Props) {
   const { attributeObj, isZoomAble, isDrag, imageRef } = useImageModal({ isOpenModal });

   return (
      <>
         {isOpenModal &&
            createPortal(
               <>
                  <div
                     className={`fixed inset-0 bg-black/60 z-[99] `}
                     onClick={closeModal}
                  ></div>
                  <div
                     className={`fixed z-[99] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
                  >
                     <img
                        draggable={false}
                        ref={imageRef}
                        {...attributeObj}
                        className={`${
                           isZoomAble
                              ? "cursor-zoom-in"
                              : isDrag
                                 ? "cursor-grabbing"
                                 : "cursor-grab"
                        } select-none touch-none max-w-[95vw] origin-top-left h-auto sm:max-h-[80vh] sm:max-w-[80vw]`}
                        src={isOpenModal}
                        alt=""
                     />
                  </div>
               </>,
               document.querySelector("#portal")!
            )}
      </>
   );
}
