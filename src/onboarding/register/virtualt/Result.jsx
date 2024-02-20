import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../layout/Footer";
import Header from "../../../layout/Header";
import ScrollToTop from "../../../layout/Scroll";

export default function Result() {
  const navigate = useNavigate();
  return (
    <main>
      <ScrollToTop />
      <Header />
      {/* <div className="min-h-[70vh] bg-light-bg py-10 md:py-24 px-5 md:px-20 flex flex-col  items-center gap-10 text-center">
        <h3 className="font-bold text-2xl md:text-[40px] md:w-1/2 text-tertiary leading-normal">
          Congratulations!
        </h3>
        <p className="md:w-1/2 text-2xl">
          <b className="inline"> Your score is 75% </b> which qualifies you for
          the next steps. Your profile would be verified in the next few hours
          so you can start to enjoy opportunities on Frontlett.
        </p>
        <Link
          to="/"
          className="w-fit border text-[#00000087] border-[#00000087] bg-inherit font-medium rounded-md flex justify-center items-center px-10 h-12"
        >
          OKAY
        </Link>
      </div> */}
      <div className="min-h-[70vh] bg-light-bg py-10 md:py-24 px-5 md:px-20 flex flex-col  items-center gap-10 text-center">
        <h3 className="font-bold text-2xl md:text-[40px] md:w-1/2 text-tertiary leading-normal">
          Oops!
        </h3>
        <p className="md:w-1/2 text-2xl">
          <b className="inline"> Your score is 45% </b>
          which is below the acceptance mark. You have 2 more attempts to try.
          So try again
        </p>
        <nav className="flex items-center gap-5">
          <Link
            to="/"
            className="w-fit border text-[#00000087] border-[#00000087] bg-inherit font-medium rounded-md flex justify-center items-center px-10 h-12"
          >
            View Performance
          </Link>
          <button
            type="submit"
            onClick={() => navigate("/onboard/virtualt/quiz")}
            className={`w-fit bg-primary font-medium text-white rounded-md flex justify-center items-center px-10 ml-auto h-12`}
          >
            Try Again
          </button>
        </nav>
      </div>
      <Footer />
    </main>
  );
}
