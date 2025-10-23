import { servicesData } from "../../utils/data";

function HomeServices() {
  return (
    <section className="flex flex-col gap-8">
      <header>
        <h2 className="header1 ">My Services</h2>
      </header>
      <div className="flex flex-col w-full xxs:grid xxs:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 justify-self-center">
        {servicesData.map((servicesData, index) => {
          return (
            <div key={index} className="bg-theme-100 p-8 shadow-2xl h-fit">
              <h3 className="header2 my-2">{servicesData.header}</h3>
              <p className="text-xs">{servicesData.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeServices;
