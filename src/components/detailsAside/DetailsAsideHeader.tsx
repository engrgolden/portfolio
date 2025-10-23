import Image from "next/image";
import Headshot from "../../../public/headshot.png";
import { FaCircle } from "react-icons/fa6";

export default function DetailsAsideHeader() {
  return (
    <div
      className={`z-1 absolute w-full bg-theme-200 h-60 pb-8 p-8 flex flex-col items-center gap-2`}
    >
      <div className="relative">
        <div className="h-24 w-24 relative rounded-full overflow-hidden">
          <Image
            src={Headshot}
            fill
            objectFit="contain"
            alt="picture of Oderemi Boluwatife."
          />
        </div>

        <div className="absolute bottom-2 right-2 flex h-3 w-3">
          <FaCircle className="animate-ping absolute text-gold opacity-75 text-[12px]" />
          <FaCircle className="absolute text-gold text-[12px]" />
        </div>
      </div>
      <a className="header2 hover:!text-gold glow-text">Oderemi Boluwatife</a>
      <p className=" font-light w-2/3 text-center">
        Full stack (Web and Mobile) Developer.
      </p>
    </div>
  );
}
