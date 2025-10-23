import DetailsAside from "../detailsAside/DetailsAside";
import DesktopOverlayClient from "./DesktopOverlayClient";
import MobileOverlay from "./MobileOverlay";

export default function NavigationOverlay() {
  return (
    <>
      <input type="checkbox" className="peer hidden" id="navOverlayPointer" />
      <div className="hidden mdlg:flex absolute z-20 top-0 left-0 w-full h-full peer-[:not(:checked)]:pointer-events-none">
        <div className="z-3 flex-none  pointer-events-auto">
          <DetailsAside width={"288px"} height={"100%"} />
        </div>
        <DesktopOverlayClient />
      </div>
      <div className="mdlg:hidden absolute z-20 top-0 left-0 w-screen h-[100dvh] overflow-hidden peer-[:not(:checked)]:pointer-events-none">
        <MobileOverlay />
      </div>
    </>
  );
}
