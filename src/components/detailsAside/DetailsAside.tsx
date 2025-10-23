import DetailsAsideHeader from "./DetailsAsideHeader";
import DetailsAsideContent from "./DetailsAsideContent";
import DetailsAsideFooter from "./DetailsAsideFooter";

export default function DetailsAside({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  return (
    <div style={{ width, height }} className={"relative "}>
      <DetailsAsideHeader />
      <DetailsAsideContent />
      <DetailsAsideFooter />
    </div>
  );
}
