import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import icon1 from "../../assets/user.png";
import icon2 from "../../assets/envelope.png";
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="min-h-[50vh] bg-secondary text-white py-10 md:py-24 px-5 md:px-20 flex flex-col  items-center gap-10 text-center">
        <h3 className="font-bold text-2xl md:text-[40px]">
          Create a Frontlett account
        </h3>
      </div>
      <div className="md:-translate-y-1/3 w-full flex justify-center gap-10 md:gap-16">
        <div className="bg-white md:w-[27%] flex flex-col items-center gap-8 rounded-2xl shadow-2xl px-5 md:px-10 py-10 md:py-20">
          <img src={icon1} alt="" />
          <h3 className="text-xl">Virtualt</h3>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet <br /> consectet tempor dolor sit amet
          </p>
          <Link
            to="/onboard/virtualt"
            className="bg-primary rounded-md min-h-10 h-10 w-fit px-10 text-white flex justify-center items-center"
          >
            Work
          </Link>
        </div>
        <div className="bg-white md:w-[27%] flex flex-col items-center gap-8 rounded-2xl shadow-2xl px-5 md:px-10 py-10 md:py-20">
          <img src={icon2} alt="" />
          <h3 className="text-xl">Employer</h3>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet <br /> consectet tempor dolor sit amet
          </p>
          <Link
            to="/onboard/employer"
            className="bg-primary rounded-md min-h-10 h-10 w-fit px-10 text-white flex justify-center items-center"
          >
            Hire
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center text-center py-10">
        <p className="text-xl text-[#00000087]">
          Trusted by thousands of businesses and employees
        </p>
        <div className="flex justify-center items-center gap-10">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
