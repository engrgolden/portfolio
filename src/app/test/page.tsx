import DetailsAside from "@/components/detailsAside/DetailsAside";
import Navigation from "@/components/navigation/Navigation";

export default function FlexRowSlide() {
  return (
    <div className="flex w-full h-[100dvh] overflow-scroll">
      <div className="h-[200vh] bg-red-400"></div>
      <div></div>
      <div></div>
    </div>
    // <div className="bg-red-500 w-screen h-[100dvh] flex">
    //   <div className="bg-amber-400 h-40 w-40 fixed top-0 left-0 z-10"></div>
    //   <div className="w-72 h-[500px]">
    //     <DetailsAside baseZ={20} />
    //   </div>
    //   <div className=" w-72 h-[500px]">
    //     <Navigation baseZ={11} />
    //   </div>
    // </div>
    // <div className="flex h-[100dvh] w-screen relative border-8 border-purple-500">
    //   <div className="w-32 absolute left-10 top-0 h-full bg-green-600 flex-none"></div>
    //   <div className="w-32 bg-green-600 flex-none "></div>
    //   <div className="flex-1 bg-red-600  border-amber-400 border-4 z-10"></div>
    //   <div className="w-20 bg-blue-600 flex-none"></div>
    // </div>
  );
}
