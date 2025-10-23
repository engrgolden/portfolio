import { FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function DetailsAsideFooter() {
  return (
    <div className="absolute bottom-0 w-full flex flex-none bg-theme-200 px-8 h-12 items-center justify-between">
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/boluwatife-oderemi/"
      >
        <FaLinkedin className=" w-4 h-4 hover:text-white" />
      </Link>
      <Link target="_blank" href="https://github.com/engrgolden">
        <FaGithub className=" w-4 h-4 hover:text-white" />
      </Link>
    </div>
  );
}
