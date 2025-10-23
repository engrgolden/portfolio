"use client";

import { FaBars, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import Link from "next/link";

export default function NavigationPc() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const closeRef = useRef<HTMLLabelElement>(null);

  return (
    <>
      {visible && (
        <div
          className="hidden mdlg:block w-full h-full absolute bg-[rgba(0,0,0,0.5)] z-[11]"
          onClick={() => {
            setVisible(false);
            closeRef.current?.click();
          }}
        ></div>
      )}
      <div
        className={`hidden mdlg:flex flex-col justify-end h-full relative z-12 flex-none bg-neutral-800  animate-config ${
          visible ? "w-56" : "w-[80px]"
        }`}
      >
        <div className="flex-none h-20 bg-theme-150">
          <div className="flex h-20 justify-center items-center w-[80px]">
            <label
              htmlFor="nav-toggle"
              className="cursor-pointer"
              ref={closeRef}
            >
              {visible ? (
                <div
                  onClick={() => setVisible(false)}
                  className="w-12 h-12 flex-center"
                >
                  <FaXmark className="text-lg font-bold" />
                </div>
              ) : (
                <div
                  onClick={() => setVisible(true)}
                  className="w-12 h-12 flex-center"
                >
                  <FaBars className="text-lg font-bold" />
                </div>
              )}
            </label>
          </div>
        </div>

        <div className="flex-1">
          {visible ? (
            <div className=" h-full flex flex-col justify-center gap-4 mx-8 font-extrabold">
              <Link
                href="/"
                className={`hover:text-white ${
                  pathname === "/" ? "text-white" : ""
                }`}
              >
                HOME
              </Link>
              <Link
                href="/certifications"
                className={`hover:text-white ${
                  pathname === "/certifications" ? "text-white" : ""
                }`}
              >
                CERTIFICATIONS
              </Link>
              <Link
                href="/portfolio"
                className={`hover:text-white ${
                  pathname === "/portfolio" ? "text-white" : ""
                }`}
              >
                PORTFOLIO
              </Link>
            </div>
          ) : (
            <p className=" writing-vertical-rl my-auto mx-10 text-[10px] font-bold tracking-most-wide">
              {pathname === "/portfolio"
                ? "PORTFOLIO"
                : pathname === "/certifications"
                ? "CERTIFICATIONS"
                : "HOME"}
            </p>
          )}
        </div>

        <div className="flex-none h-28 bg-theme-150">
          <div className="h-28 flex-center w-[80px]">
            <p className="rounded-full bg-gold text-neutral-800 text-[10px] font-bold p-1">
              EN
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
