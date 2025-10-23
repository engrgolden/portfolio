import Contact from "../shared/contact";
import Project from "../shared/project";
import { worksData } from "../../utils/data";

export default function Portfolio() {
  return (
    <section className="m-7 mb-0">
      <h1 className="header1 mb-6">Works</h1>
      <div className="flex flex-col w-full xxs:grid xxs:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 justify-self-center">
        {worksData.map((work) => (
          <Project showStack {...work} key={work.id} />
        ))}
      </div>

      <Contact
        header={"Ready to order your Project?"}
        text={"Let's work together!"}
        showImage={false}
        showDynamic={false}
      />
    </section>
  );
}
