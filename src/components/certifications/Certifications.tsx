import ShowImage from "../UIElements/ShowImage";
import { FaSquareFull } from "react-icons/fa6";
import { certificationsData } from "../../utils/data";

export default function Certifications() {
  return (
    <div className="p-7 pb-0 pr-2 mdlg:pr-7">
      <div>
        <h1 className="header1 mb-6">Certifications</h1>
        <div className="flex flex-col gap-7 ">
          {certificationsData.map((certificate, i) => (
            <div key={certificate.id} className="flex group mr-2">
              <section className="bg-theme-50 p-7 ">
                <div className="flex justify-between">
                  <p className="header2">{certificate.name}</p>
                  <p className="small bg-theme-800 p-3 py-1 shadow-[inset_0_4px_20px_rgba(0,0,0,0.3)] rounded-xl">
                    {certificate.date}
                  </p>
                </div>
                <div className="small italic">{certificate.source}</div>
                <div className="my-2">{certificate.description}</div>
                <div>
                  <ShowImage id={certificate.id} type="certificate" />
                </div>
              </section>
              <div
                className={`relative flex-none w-5 mdlg:w-10  border-r-5 border-theme-900 translate-y-6  `}
              >
                <FaSquareFull className="rotate-45 -translate-x-1/2 -translate-y-1/2 text-theme-50" />
                <span className=" translate-x-1/2 -translate-y-1/2 absolute top-0 right-0 w-6 h-6 ">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-[calc(50%-2px)] -translate-y-1/2 h-4 w-4 rounded-full bg-gold opacity-75 group-hover:animate-ping"></span>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-[calc(50%-2px)] -translate-y-1/2 h-4 w-4 rounded-full bg-gold"></span>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-[calc(50%-2px)] -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-theme-900"></span>
                </span>
                {i !== 0 && (
                  <span className="absolute -z-10 top-0 right-0 w-[5px] h-7 bg-theme-900 translate-x-full -translate-y-full"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-1 h-7 bg-theme-550"></div>
    </div>
  );
}
