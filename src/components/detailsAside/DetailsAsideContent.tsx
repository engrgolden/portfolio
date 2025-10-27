import { FaDownload, FaCheck } from "react-icons/fa6";
import { skillsData } from "../../utils/data";
import Link from "next/link";

export default function DetailsAsideContent() {
  return (
    <div className="p-4 px-8 h-full w-full flex-1 overflow-scroll hide-scrollbar absolute top-0 bg-theme-500 ">
      <div className="h-60 w-full "></div>
      <div>
        <div className="flex justify-between">
          <p className="text-white">Location:</p>
          <p>Abuja, Nigeria.</p>
        </div>
        <hr className="my-4 bg-[#393b3a]" />
        <ul className="flex flex-col gap-2">
          {skillsData.map((skill, i) => (
            <li key={i} className="flex gap-2   items-center">
              <FaCheck className="text-gold" />
              <p>{skill}</p>
            </li>
          ))}
        </ul>
        <hr className="my-4 bg-[#393b3a]" />
        <div className=" font-bold flex gap-2 items-center hover:text-white">
          <Link target="_blank" href="https://bit.ly/engrgolden-cv">
            <p>VIEW RESUME</p>
          </Link>

          <FaDownload />
        </div>
      </div>
      <div className="h-12 w-full "></div>
    </div>
  );
}
