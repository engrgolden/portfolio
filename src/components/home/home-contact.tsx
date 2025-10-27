import Link from "next/link";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa6";

function HomeContact() {
  return (
    <section className="flex flex-col gap-8">
      <header>
        <h2 className="header1 ">Contact Information</h2>
      </header>
      <div className="flex flex-col w-full xxs:grid xxs:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 justify-self-center">
        <div className="bg-theme-100 p-8 shadow-lg flex-center flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <span className="header2">Country:</span>
            <span className="medium">Nigeria</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span className="header2">City:</span>
            <span className="medium">Abuja</span>
          </div>
        </div>
        <div className="bg-theme-100 p-8 shadow-lg flex-center flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <span>Email:</span>
            <span className="medium hover:text-white">
              oderemiboluwatife@gmail.com
            </span>
          </div>
          <div className="flex justify-between items-center w-full ">
            <span>Mobile:</span>
            <Link
              target="_blank"
              href="https://wa.me/2349071496878?text=Hi%20Boluwatife,%20I%27m%20interested%20in%20your%20services"
            >
              <span className="medium hover:text-white">+2349071496878</span>
            </Link>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>Resume:</span>
            <span className="medium font-bold flex gap-2 items-center hover:text-white">
              <Link target="_blank" href="https://bit.ly/engrgolden-cv">
                <p>VIEW RESUME</p>
              </Link>
              <FaDownload />
            </span>
          </div>
        </div>
        <div className="bg-theme-100 p-8 shadow-lg flex-center flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <span>Linkedin:</span>
            <span className="medium">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/boluwatife-oderemi/"
              >
                <FaLinkedin className=" w-4 h-4 hover:text-white" />
              </Link>
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>Github:</span>
            <span className="medium">
              <Link target="_blank" href="https://github.com/engrgolden">
                <FaGithub className=" w-4 h-4 hover:text-white" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
