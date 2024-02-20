import { useSelector } from "react-redux";
import Footer from "../../../layout/Footer";
import Header from "../../../layout/Header";
import ScrollToTop from "../../../layout/Scroll";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboard/virtualt/result");
  };
  const [state, setState] = useState({
    pressure: "",
    remote: "",
    internet: "",
    about: "",
  });

  return (
    <main className="flex flex-col bg-[#AFAFAF1A]">
      <ScrollToTop />
      <Header />
      <div className="py-10 md:py-20 px-5 md:px-20 flex flex-col  items-center gap-10 text-center">
        <h3 className="font-bold text-2xl md:text-[40px]">Readiness Quiz</h3>
        <p className="md:w-1/3">
          Lorem ipsum dolor sit amet consectet tempor dolor sit amet Lorem ipsum
          dolor sit amet consectet tempor dolor sit amet
        </p>
      </div>
      <form
        className="flex flex-col gap-10 md:w-1/2 mx-auto my-10"
        onSubmit={handleSubmit}
      >
        <div className="w-full bg-white flex flex-col md:grid grid-cols-2 gap-10 rounded-2xl shadow-2xl px-5 md:px-20 py-10 md:py-20">
          <h1 className="text-secondary font-bold text-2xl md:text-3xl">
            Test
          </h1>

          <div className="flex flex-col gap-3 col-span-2">
            <span>1. Do you work well under pressure?</span>
            <label className="flex flex-col gap-5 col-span-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="border rounded-md bg-inherit h-4 w-4"
                  value="yes"
                  name="pressure"
                  onChange={(e) =>
                    setState({ ...state, pressure: e.target.value })
                  }
                />
                <span>Employer?</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="border rounded-md bg-inherit h-4 w-4"
                  value="employee"
                  name="pressure"
                  onChange={(e) =>
                    setState({ ...state, pressure: e.target.value })
                  }
                />
                <span>Employee?</span>
              </div>
            </label>
          </div>

          <div className="flex flex-col gap-3 col-span-2">
            <span>
              2. Have you had any remote working opportunity in the past?
            </span>
            <label className="flex flex-col gap-5 col-span-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="border rounded-md bg-inherit h-4 w-4"
                  value="yes"
                  name="remote"
                  onChange={(e) =>
                    setState({ ...state, remote: e.target.value })
                  }
                />
                <span>Yes</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="border rounded-md bg-inherit h-4 w-4"
                  value="no"
                  name="remote"
                  onChange={(e) =>
                    setState({ ...state, remote: e.target.value })
                  }
                />
                <span>No</span>
              </div>
            </label>
          </div>

          <div className="flex flex-col gap-3 col-span-2">
            <span>
              3. Do you have a stable internet connection at your location?
            </span>
            <label className="flex flex-col gap-5 col-span-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="border rounded-md bg-inherit h-4 w-4"
                  value="yes"
                  name="internet"
                  onChange={(e) =>
                    setState({ ...state, internet: e.target.value })
                  }
                />
                <span>Yes</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="border rounded-md bg-inherit h-4 w-4"
                  value="no"
                  name="internet"
                  onChange={(e) =>
                    setState({ ...state, internet: e.target.value })
                  }
                />
                <span>No</span>
              </div>
            </label>
          </div>
          <label className="flex flex-col gap-2 col-span-2">
            <span>4. Tell us about your last remote engagement?</span>
            <textarea
              className="w-full border rounded-md bg-inherit h-32 px-5 py-5"
              onChange={(e) => setState({ ...state, about: e.target.value })}
            />
          </label>
        </div>
        <div className="flex justify-between items-center gap-5">
          <button
            type="button"
            className="w-fit border text-[#00000087] border-[#00000087] bg-inherit font-medium rounded-md flex justify-center items-center px-10 h-12"
          >
            Clear
          </button>
          <button
            type="submit"
            className={`w-fit bg-primary font-medium text-white rounded-md flex justify-center items-center px-10 ml-auto h-12
        ${loading ? "animate-pulse duration-500 cursor-not-allowed" : ""}`}
          >
            Continue
          </button>
        </div>
      </form>
      <Footer />
    </main>
  );
}
