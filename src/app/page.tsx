import HomeHeader from "@/components/home/home-header";
import HomeServices from "@/components/home/home-services";

export default function Home() {
  return (
    <div className="px-4 flex flex-col gap-4">
      <HomeHeader />
      <HomeServices />
    </div>
  );
}
