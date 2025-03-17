import Link from "next/link";
import DynamicCode from "./dynamic-code";

export default function HomeHeader() {
  return (
    <div className="my-4 w-auto bg-[url('/landscape.jpg')] bg-cover bg-center overflow-hidden">
      <div className="p-8 py-16 h-full w-full bg-gray-600/80 flex flex-col gap-6 items-center">
        <h1 className="text-5xl font-black text-center">
          Discover My Amazing Art Space!
        </h1>
        <DynamicCode />
        <Link
          href="#."
          className="bg-amber-400 p-8 py-4 text-black text-xs  font-medium"
        >
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}
