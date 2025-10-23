import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaChevronRight, FaExpand } from "react-icons/fa6";

export default function Project({
  showStack,
  name,
  tools,
  imageSrc,
  link,
}: {
  showStack: boolean;
  name: string;
  tools?: string;
  imageSrc: StaticImageData;
  link: string;
}) {
  return (
    <div className="w-full h-full overflow-hidden group/name1">
      <div className="relative flex flex-col h-full bg-gray-800">
        <div className="relative w-full aspect-[3/2]">
          <div className="absolute top-8 left-8 z-10 rounded-full p-2 bg-[#00000080] desktop-work-expand-icon animate-config">
            <FaExpand />
          </div>

          <Image
            className="absolute group-hover/name1:scale-110 animate-config"
            objectFit="cover"
            fill
            src={imageSrc}
            alt={"Screenshot from " + name}
          />
        </div>
        <div className="flex-none p-6 flex gap-2 flex-col desktop-work-detail animate-config">
          <p className="text-white header3 font-bold">{name}</p>
          {showStack && <p className="medium font-extralight">{tools}</p>}
          <Link
            href={link}
            target="_blank"
            className="text-gold font-bold flex gap-1 items-center w-fit"
          >
            VIEW PROJECT
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
