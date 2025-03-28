import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../../layout/Footer";
import Header from "../../../layout/Header";

export default function Activate() {
  const { pathname } = useLocation();
  return (
    <main className="flex flex-col bg-[#AFAFAF1A]">
      <Header />
      <div className="py-10 md:py-20 px-5 md:px-20 flex flex-col  items-center gap-10 text-center">
        <h3 className="font-bold text-2xl md:text-[40px]">
          Activate Virtualt Profile
        </h3>
        <p className="md:w-1/3">
          Lorem ipsum dolor sit amet consectet tempor dolor sit amet Lorem ipsum
          dolor sit amet consectet tempor dolor sit amet
        </p>
      </div>
      <nav className="md:w-1/2 mx-auto bg-white flex md:grid grid-cols-4 gap-5 md:gap-10 rounded-2xl shadow-2xl mb-10 px-5 md:px-20 py-5 md:py-10">
        <nav className="flex items-center gap-4">
          <span
            className={`rounded flex items-center justify-center h-10 px-4 text-white ${
              pathname === "/onboard/virtualt/activate"
                ? "bg-primary"
                : "bg-[#C4C4C466]"
            }`}
          >
            1
          </span>
          <span className="">Personal Information</span>
        </nav>
        <nav className="flex items-center gap-4">
          <span
            className={`rounded flex items-center justify-center h-10 px-4 text-white ${
              pathname ===
              "/onboard/virtualt/activate/educational-information"
                ? "bg-primary"
                : "bg-[#C4C4C466]"
            }`}
          >
            2
          </span>
          <span className="">Education Information</span>
        </nav>
        <nav className="flex items-center gap-4">
          <span
            className={`rounded flex items-center justify-center h-10 px-4 text-white ${
              pathname === "/onboard/virtualt/activate/work-history"
                ? "bg-primary"
                : "bg-[#C4C4C466]"
            }`}
          >
            3
          </span>
          <span className="">Work History</span>
        </nav>
        <nav className="flex items-center gap-4">
          <span
            className={`rounded flex items-center justify-center h-10 px-4 text-white ${
              pathname === "/onboard/virtualt/activate/skill"
                ? "bg-primary"
                : "bg-[#C4C4C466]"
            }`}
          >
            4
          </span>
          <span className="">Skill</span>
        </nav>
      </nav>
      <div className="py-10">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
