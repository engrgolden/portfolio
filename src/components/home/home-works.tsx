import Project from "../shared/project";
import { worksData } from "../../utils/data";

export default function HomeWorks() {
  return (
    <section className="">
      <h1 className="header1 mb-6">Works</h1>
      <div className="flex flex-col w-full xxs:grid xxs:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 justify-self-center">
        {worksData.map((work) => (
          <Project showStack={false} {...work} key={work.id} />
        ))}
      </div>
    </section>
  );
}
