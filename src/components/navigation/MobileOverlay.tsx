"use client";
import { useState, useRef } from "react";
import DetailsAside from "../detailsAside/DetailsAside";
import Navigation from "./Jaes";
import { FaEllipsisVertical, FaBars, FaXmark } from "react-icons/fa6";

export default function MobileOverlay() {
  const [show, setShow] = useState({ aside: false, navigation: false });
  const closeAsideRef = useRef<HTMLLabelElement | null>(null);
  const closeNavigationRef = useRef<HTMLLabelElement | null>(null);

  return (
    <div
      className={`flex h-full absolute animate-config ${
        show.aside ? "left-0" : show.navigation ? "right-0" : "-left-72"
      }`}
    >
      <div className="flex-none pointer-events-auto">
        <DetailsAside width={"288px"} height={"100%"} />
      </div>
      <div
        className={`w-screen h-full flex-none relative bg-none z-1 animate-config ${
          (show.aside && "bg-black/50") || (show.navigation && "bg-black/50")
        }`}
        onClick={() => {
          console.log("here");
          if (show.aside) {
            closeAsideRef.current?.click();
          } else if (show.navigation) {
            closeNavigationRef.current?.click();
          }
        }}
      >
        <div className="bg-theme-500 h-16 w-full"></div>
        <div
          className={`bg-none w-20 h-16 absolute top-0  flex-center pointer-events-auto animate-config ${
            show.aside ? "-left-20" : "left-0"
          }`}
        >
          {!show.aside ? (
            <label
              className="w-full h-full flex-center "
              htmlFor="navOverlayPointer"
              onClick={(e) => {
                e.stopPropagation();
                setShow({ aside: true, navigation: false });
              }}
            >
              <FaEllipsisVertical className=" hover:text-white w-5 h-5 " />
            </label>
          ) : (
            <label
              className="w-full h-full flex-center "
              htmlFor="navOverlayPointer"
              ref={closeAsideRef}
              onClick={(e) => {
                e.stopPropagation();
                setShow({ aside: false, navigation: false });
              }}
            >
              <FaXmark className="hover:text-white w-5 h-5 " />
            </label>
          )}
        </div>
        <div
          className={`bg-none w-20 h-16 absolute top-0  pointer-events-auto animate-config ${
            show.navigation ? "-right-20" : "right-0"
          }`}
        >
          {!show.navigation ? (
            <label
              className="w-full h-full flex-center "
              htmlFor="navOverlayPointer"
              onClick={(e) => {
                e.stopPropagation();
                setShow({ aside: false, navigation: true });
              }}
            >
              <FaBars className=" hover:text-white w-5 h-5 " />
            </label>
          ) : (
            <label
              className="w-full h-full flex-center "
              htmlFor="navOverlayPointer"
              ref={closeNavigationRef}
              onClick={(e) => {
                e.stopPropagation();
                setShow({ aside: false, navigation: false });
              }}
            >
              <FaXmark className="hover:text-white w-5 h-5 " />
            </label>
          )}
        </div>
      </div>
      <div
        className="w-72 h-full flex-none relative   pointer-events-auto "
        onClick={(e) => {
          e.stopPropagation();
          closeNavigationRef.current?.click();
        }}
      >
        <Navigation
          height={"100%"}
          wsmall={"80px"}
          wbig={"288px"}
          isThin={false}
        />
      </div>
    </div>
  );
}
