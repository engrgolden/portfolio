import HomeContact from "@/components/home/home-contact";
import HomeGetInTouch from "@/components/home/home-get-in-touch";
import Contact from "@/components/shared/contact";
import HomeReviews from "@/components/home/home-reviews";
import HomeServices from "@/components/home/home-services";
import HomeWorks from "@/components/home/home-works";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 m-7 mb-0">
      <Contact header="Discover my amazing art space!" showImage showDynamic />
      <HomeServices />
      <HomeWorks />
      <HomeReviews />
      <HomeContact />
      <HomeGetInTouch />
    </div>
  );
}
