import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import NavigationOverlay from "@/components/navigation/NavigationOverlay";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // optional for Tailwind custom font variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oderemi Boluwatife | Full-Stack Developer",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-next-hide-badge>
      <body className={`${poppins.variable} font-poppins antialiased `}>
        <div className="bg-theme-900 w-screen h-[100dvh] mdlg:p-4 lg:py-4 lg:px-12 ">
          <section className="w-full h-full flex relative pt-16 mdlg:pt-0 shadow-2xl">
            <div className="w-full h-full flex">
              <input
                type="checkbox"
                className="peer hidden"
                id="desktopTransformations"
              />
              <div className="hidden mdlg:block w-72 peer-checked:w-20 animate-config h-full"></div>
              <div className="flex-1 overflow-scroll hide-scrollbar  bg-[linear-gradient(to_bottom,#1e1e28e6_0%_,#1e1e28_50%_,#1e1e28_100%_),url('/landscape.jpg')] bg-cover bg-no-repeat bg-center ">
                <div>{children}</div>
                <footer className="bg-theme-50 h-12 w-full px-8 flex items-center ">
                  <p>© 2025 Boluwatife Oderemi</p>
                </footer>
              </div>

              <div className="hidden mdlg:block w-20 peer-checked:w-72 animate-config h-full"></div>
            </div>
            <NavigationOverlay />
          </section>
        </div>
      </body>
    </html>
  );
}
