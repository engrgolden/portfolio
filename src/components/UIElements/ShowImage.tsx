"use client";

import { useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaXmark,
  FaChevronRight,
  FaArrowRightLong,
  FaArrowLeftLong,
} from "react-icons/fa6";
import Image from "next/image";
import { certificateImages, workImages } from "../../utils/data";

export default function ShowImage({ id, type }: { id: number; type: string }) {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const images = type === "certificate" ? certificateImages : workImages;

  const imageCount = Object.values(images).length;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (playing) {
      timer = setInterval(() => {
        setIndex((prev) => (prev % imageCount) + 1);
      }, 2000); // change image every 2 seconds
    }

    return () => {
      clearInterval(timer);
    };
  }, [playing, imageCount]);

  const handleLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => ((prev - 2 + imageCount) % imageCount) + 1);
  };

  const handleRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev % imageCount) + 1);
  };

  return (
    <>
      {show && (
        <section
          className="z-30 w-screen h-[100dvh] bg-theme-500/95 fixed top-0 left-0 mdlg:border-[16px] border-theme-900 flex flex-col"
          onClick={() => {
            setShow(false);
            setPlaying(false);
          }}
        >
          <header
            className="bg-theme-50 w-full flex flex-none justify-between items-center h-16 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mx-8">
              {index}/{imageCount}
            </p>
            <div className="flex gap-4">
              <button
                className="h-10 w-10 flex-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setPlaying((prev) => !prev);
                }}
              >
                {playing ? (
                  <FaPause className="h-4 w-4 hover:text-white" />
                ) : (
                  <FaPlay className="h-4 w-4 hover:text-white" />
                )}
              </button>
              <button
                className="h-10 w-10 flex-center"
                onClick={() => {
                  setShow(false);
                  setPlaying(false);
                }}
              >
                <FaXmark className="h-4 w-4 hover:text-white" />
              </button>
            </div>
          </header>
          <div className="flex-1 h-full w-full flex justify-between items-center  flex-wrap xs:flex-nowrap mdlg:p-8">
            <div
              className="w-full h-full max-h-1/2 xs:max-h-5/6 relative overflow-hidden order-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                fill
                objectFit="contain"
                src={images[index]}
                alt={
                  type === "certificate" ? "Certificate image" : "Project image"
                }
              />
            </div>
            <button
              className="flex-none h-10 w-10 flex-center order-3 xs:order-1"
              onClick={handleLeft}
            >
              <FaArrowLeftLong className="h-4 w-4 hover:text-white" />
            </button>
            <button
              className="flex-none h-10 w-10 flex-center order-4"
              onClick={handleRight}
            >
              <FaArrowRightLong className="h-4 w-4 hover:text-white" />
            </button>
          </div>
        </section>
      )}
      {type === "certificate" ? (
        <div
          className="text-[10px] text-gold flex items-center cursor-pointer font-bold tracking-widest gap-1"
          onClick={() => {
            setShow(true);
            setIndex(id);
          }}
        >
          <p>SHOW CERTIFICATE</p>
          <FaChevronRight />
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}
