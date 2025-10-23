"use client";
import Navigation from "./Navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useRef } from "react";

export default function DesktopOverlayClient() {
  const [isThin, setIsThin] = useState(true);
  const closeLabelRef = useRef<HTMLLabelElement | null>(null);
  const navOverlayPointerRef = useRef<HTMLLabelElement | null>(null);

  return (
    <>
      <label
        ref={navOverlayPointerRef}
        htmlFor="navOverlayPointer"
        className="hidden"
      ></label>
      <div
        onClick={() => closeLabelRef.current?.click()}
        className={` z-2 flex-1 h-full relative animate-config ${
          isThin ? "" : "bg-black/50"
        } `}
      >
        <div className="w-full h-full ">
          {isThin ? (
            <label
              htmlFor="desktopTransformations"
              onClick={(e) => {
                e.stopPropagation();
                navOverlayPointerRef.current?.click();
                setIsThin(false);
              }}
              className="bg-theme-150 w-20 h-16 absolute top-0 right-0 translate-x-full flex-center pointer-events-auto"
            >
              <FaBars className="w-5 h-5 hover:text-white" />
            </label>
          ) : (
            <label
              ref={closeLabelRef}
              htmlFor="desktopTransformations"
              onClick={(e) => {
                e.stopPropagation();
                navOverlayPointerRef.current?.click();
                setIsThin(true);
              }}
              className="bg-theme-150 w-20 h-16 absolute top-0 right-0 translate-x-full flex-center pointer-events-auto"
            >
              <FaXmark className="w-5 h-5 " />
            </label>
          )}
        </div>
      </div>
      <div
        className="z-1 flex-none pointer-events-auto "
        onClick={(e) => {
          e.stopPropagation();
          closeLabelRef.current?.click();
        }}
      >
        <Navigation isThin={isThin} height="100%" wsmall="80px" wbig="288px" />
      </div>
    </>
  );
}
