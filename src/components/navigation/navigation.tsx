"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation({
  isThin,
  height,
  wsmall,
  wbig,
}: {
  isThin: boolean;
  height: string;
  wsmall: string;
  wbig: string;
}) {
  const pathname = usePathname();
  const width = isThin ? wsmall : wbig;

  return (
    <div
      style={{ height, width }}
      className="flex flex-col h-full overflow-hidden relative animate-config"
    >
      <div
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
        className="flex-none h-16 bg-theme-150 animate-config"
      ></div>
      <div
        style={{ width }}
        className="flex-1 flex items-center py-8 bg-theme-500 animate-config"
      >
        {isThin ? (
          <p
            style={{ width: wsmall }}
            className=" h-fit self-start flex-none flex items-center justify-center text-[10px] writing-vertical-rl font-bold tracking-most-wide"
          >
            {pathname === "/portfolio"
              ? "PORTFOLIO"
              : pathname === "/certifications"
              ? "CERTIFICATIONS"
              : "HOME"}
          </p>
        ) : (
          <div className="mx-8 h-full flex flex-col justify-center gap-4  font-extrabold">
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
        )}
      </div>

      <div
        className="flex-none h-28 bg-theme-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ width: wsmall }} className="h-28  flex-center">
          <p className="rounded-full bg-gold text-theme-700 text-[10px] font-bold p-1">
            EN
          </p>
        </div>
      </div>
    </div>
  );
}
