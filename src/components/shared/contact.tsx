"use client";
import Link from "next/link";
import DynamicCode from "../home/dynamic-code";
import HeadshotNoBg from "../../../public/headshot-no-bg.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Contact({
  header,
  text,
  showImage,
  showDynamic,
}: {
  header: string;
  text?: string;
  showImage: boolean;
  showDynamic: boolean;
}) {
  const pathname = usePathname();

  const href = pathname === "/" ? "#getintouch" : "/#getintouch";

  return (
    <div className="my-4 w-auto bg-[url('/landscape.jpg')] bg-cover bg-center overflow-hidden text-white ">
      <div
        className={`bg-[linear-gradient(90deg,rgba(45,45,58,0.9)_15%,rgba(45,45,58,0.7)_50%,rgba(43,43,53,0.7)_100%)] flex items-center min-h-80 ${
          showImage && " p-8 xl:p-0 xl:pl-18"
        }`}
      >
        <div
          className={` h-full w-full flex flex-col gap-3 flex-1 ${
            showImage
              ? " items-center xs:items-start"
              : " items-center border border-[#ffc10788] border-dashed mdlg:border-none m-12"
          } `}
        >
          <h1
            className={`header0 ${
              showImage ? "text-center xs:text-start" : " text-center"
            } `}
          >
            {header}
          </h1>
          {showDynamic ? (
            <DynamicCode />
          ) : (
            <p className="text-sm font-courier tracking-most-wide font-semibold text-center">
              {text}
            </p>
          )}

          <Link
            href={href}
            className="bg-amber-400 p-8 py-4 text-black text-xs mt-6 font-medium w-fit tracking-widest text-center animate-config  hover:-translate-y-1"
          >
            CONTACT ME
          </Link>
        </div>
        {showImage && (
          <div className="relative h-80 aspect-square hidden xl:block mr-9">
            <Image
              src={HeadshotNoBg}
              alt="Headshot of oderemi boluwatife"
              fill
            />
          </div>
        )}
      </div>
    </div>
  );
}
