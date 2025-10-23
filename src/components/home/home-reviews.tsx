"use client";

import Slider from "../UIElements/slider";
import StarRating from "../UIElements/star-rating";
import { recommendationsData } from "../../utils/data";

function Homerecommendations() {
  return (
    <section className=" my-4">
      <header>
        <h2 className="header1 ">Recommendations</h2>
      </header>
      <div className="w-full mx-auto my-2">
        <Slider
          slides={recommendationsData.map((recommendationsData, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-3 bg-theme-100 p-8 shadow-lg`}
              >
                <div>
                  <h3 className="header2 ">{recommendationsData.name}</h3>
                  <h5 className="medium font-extralight italic">
                    {recommendationsData.jobTitle}
                  </h5>
                </div>
                <p className="text-xs text-gray-400">
                  {recommendationsData.recommendation}
                </p>
                <div className="bg-theme-500 inset-shadow-sm w-fit p-1 px-3 rounded-full">
                  <StarRating rating={recommendationsData.stars} size={12} />
                </div>
              </div>
            );
          })}
        />
      </div>
    </section>
  );
}

export default Homerecommendations;
