import Aside from "./Aside";
import QA from "./QA";
// import StickyBox from "react-sticky-box";
import { useStickyBox } from "react-sticky-box";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

export default function Index() {
  const stickyRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
    bottom: true,
  });

  return (
    <main className="bg-top bg-blend-overlay bg-no-repeat flex flex-col bg-opacity-50 ">
      <Header />
      <div className="px-5 md:px-20 py-10 md:py-40 flex flex-col justify-center  gap-10 bg-primary">
        <h3 className="text-2xl md:text-[40px] text-white leading-normal font-[700]">
          How can we help you?
        </h3>
        <input
          type="text"
          className="rounded-lg w-full md:w-1/2 h-14 bg-white border px-5 poppins"
          placeholder="Enter a search keyword"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] px-5 md:px-20 py-10 gap-20">
        <aside ref={stickyRef} className="shadow-r">
          <Aside />
        </aside>
        <QA />
      </div>
      <Footer />
    </main>
  );
}
