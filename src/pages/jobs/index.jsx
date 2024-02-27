import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Aside from "./Aside";
import logo1 from "../../assets/jobs/logo1.png";
import logo2 from "../../assets/jobs/logo2.png";
import logo3 from "../../assets/jobs/logo3.png";
import logo4 from "../../assets/jobs/logo4.png";
import logo5 from "../../assets/jobs/logo5.png";
import logo6 from "../../assets/jobs/logo6.png";
import { FaHeart, FaPlus, FaSearch, FaShareAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";
import hero from "../../assets/hero.jpg";

const users = [
  {
    img: logo1,
    name: "Trype Inc 1",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo2,
    name: "Jane Doe 2",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo3,
    name: "Trype Inc 3",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo4,
    name: "Trype Inc 4",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo5,
    name: "Jane Doe 5",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo3,
    name: "Trype Inc 6",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo1,
    name: "Trype Inc 7",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo2,
    name: "Jane Doe 8",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo4,
    name: "Trype Inc 9",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo5,
    name: "Trype Inc 10",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo6,
    name: "Jane Doe 11",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo1,
    name: "Trype Inc 12",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo2,
    name: "Trype Inc 13",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo3,
    name: "Jane Doe 14",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
  {
    img: logo4,
    name: "Trype Inc 15",
    position: "Software Developer",
    location: "16, Adebisi Adele, Isolo, Lagos",
    type: "Full Time",
    level: "Senior Level",
    slots: 2,
    experience: 4,
    salary: "N200,000",
    about: (
      <div className="flex flex-col gap-5">
        <b>About Company</b>
        <p>
          Dan Co. is building the platform for modern recruiting. Our All-in-One
          recruitment platform empowers recruiters to source and engage with
          candidates at scale, and gives talent leaders analytics and end-to-end
          visibility into the recruiting funnel.
        </p>
        <p>
          We employ people who are superb at their jobs and are a reliable,
          friendly bunch who leave egos out of the equation. We are dreamers and
          problem solvers. We are passionate about our craft from the first meta
          tag down to the last pixel and we believe sweating the small stuff is
          what makes a beautiful product that delights our users.
        </p>
      </div>
    ),
  },
];
export default function Index() {
  const [active, setActive] = useState(users[0]);
  const [input, setInput] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleJobAdd = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setJobs([...jobs, input.toLowerCase()]);
      setInput("");
    }
  };

  const handleJobRemove = (jobToRemove) => {
    const updatedJobs = jobs.filter((job) => job !== jobToRemove);
    setJobs(updatedJobs);
  };

  return (
    <main className="bg-[#f7f7f7]">
      <ScrollToTop />
      <Header />
      <section className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10">
        <div className="flex items-center bg-white rounded-lg">
          <button className="px-5">
            <FaSearch className="text-2xl text-primary" />
          </button>
          <label className="flex gap-1 w-full items-center relative">
            <input
              type="text"
              className="w-full h-14 bg-inherit px-5 poppins outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleJobAdd}
              className="text-lg text-gray-400 px-2"
            >
              <FaPlus />
            </button>
            <nav className="flex flex-col gap-1 absolute right-20">
              {jobs.map((job, index) => (
                <p
                  key={index}
                  className="flex items-center justify-between gap-1 rounded px-4 py-1 border bg-inherit"
                >
                  <span className="text-primary">{job}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleJobRemove(job);
                    }}
                    className="text-sm text-primary px-1"
                  >
                    <FaTimes />
                  </button>
                </p>
              ))}
            </nav>
          </label>

          <input
            type="text"
            className="border-l border-collapse w-fit h-14 bg-inherit px-10 poppins"
            placeholder="Enter location"
          />
          <button className="px-8 h-14 min-w-fit bg-primary text-white font-[600] rounded-md">
            Find Job
          </button>
        </div>
        <section className="flex flex-col md:grid grid-cols-[1fr_3.2fr] gap-10">
          <Aside />
          <div className="w-full flex flex-col md:grid grid-cols-[1fr_2fr] gap-10">
            <div className="flex flex-col gap-5 md:gap-7">
              {users.map((user, i) => (
                <Single
                  key={i}
                  img={user.img}
                  name={user.name}
                  position={user.position}
                  location={user.location}
                  type={user.type}
                  level={user.level}
                  slots={user.slots}
                  experience={user.experience}
                  salary={active.salary}
                  about={user.about}
                  setActive={setActive}
                  active={active}
                />
              ))}
            </div>
            <div className="rounded-xl bg-white shadow-lg">
              <img
                src={hero}
                alt=""
                className="w-full h-[300px] object-cover rounded-t-xl"
              />
              <div className="p-10 flex flex-col gap-5">
                <nav className="flex justify-between items-center">
                  <img
                    src={active.img}
                    alt=""
                    className="-translate-y-1/2 translate-x-1/2 scale-[2]"
                  />
                  <button className="px-8 h-10 w-fit bg-primary text-white font-[600] rounded-md">
                    Apply
                  </button>
                </nav>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between gap-5 items-center">
                    <nav className="flex gap-2 items-center">
                      <b className="text-xl text-[#1A3047]">
                        {active.position}
                      </b>
                      <span className="bg-[#C4C4C438] px-4 py-1 rounded text-primary">
                        {active.slots} Slots
                      </span>
                    </nav>
                    <nav className="flex gap-2 items-center">
                      <button
                        className={`border-[#C4C4C4] border bg-inherit rounded h-7 w-7 ml-auto flex justify-center items-center`}
                      >
                        <FaHeart className={`text-[#C4C4C4]`} />
                      </button>
                      <button
                        className={`border-[#C4C4C4] border bg-inherit rounded h-7 w-7 ml-auto flex justify-center items-center`}
                      >
                        <FaShareAlt className={`text-[#C4C4C4]`} />
                      </button>
                    </nav>
                  </div>
                  <div className="flex justify-between gap-5 items-center text-sm">
                    <nav className="flex gap-2 items-center">
                      <span className="text-primary text-base">
                        {active.name}
                      </span>{" "}
                      <span>{active.location}</span>
                    </nav>
                    <nav className="flex gap-2 items-center">
                      <span className="">Posted 8 Days ago</span>{" "}
                      <b>12 Applicants</b>
                    </nav>
                  </div>
                </div>

                <div className="rounded-xl border grid grid-cols-4 text-[#00000087]">
                  <div className="flex flex-col gap-2 p-4">
                    <span className="text-[#C4C4C4]">Experience</span>
                    <b>Min. {active.experience} Years</b>
                  </div>
                  <div className="flex flex-col gap-2 p-4 border-x">
                    <span className="text-[#C4C4C4]">Work Level</span>
                    <b>{active.level}</b>
                  </div>
                  <div className="flex flex-col gap-2 p-4 border-r">
                    <span className="text-[#C4C4C4]">Virtualt Type</span>
                    <b>{active.type}</b>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <span className="text-[#C4C4C4]">Virtualt Salary</span>
                    <b>{active.salary}</b>
                  </div>
                </div>
                <div className="text-[#00000087]">{active.about}</div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}

const Single = ({ ...info }) => {
  return (
    <div
      className={`flex flex-col gap-5 rounded-xl shadow-xl p-5 transition-all ease-in-out duration-300 ${
        info.active.name === info.name ? "bg-primary text-white" : "bg-white"
      }`}
      onClick={() => info.setActive(info)}
    >
      <nav className="flex gap-2 relative">
        <img src={info.img} alt="" className="h-12 w-12" />
        <div className="flex flex-col gap-2">
          <span
            className={`
          ${info.active.name === info.name ? "text-white" : "text-primary"}`}
          >
            {info.name}
          </span>
          <b>{info.position}</b>
          <span>{info.location}</span>
        </div>
        <button
          className={`border-[#C4C4C4] border bg-inherit rounded h-7 w-7 ml-auto flex justify-center items-center`}
        >
          <FaHeart
            className={`
          ${info.active.name === info.name ? "text-white" : "text-[#C4C4C4]"}
          `}
          />
        </button>
      </nav>
      <div className="flex gap-2 items-center justify-evenly">
        <span
          className={`px-4 py-1 rounded
        ${
          info.active.name === info.name
            ? "text-white bg-[#C4C4C438]"
            : "text-tertiary bg-[#C4C4C438]"
        }
        `}
        >
          {info.type}
        </span>
        <span
          className={`px-4 py-1 rounded
        ${
          info.active.name === info.name
            ? "text-white bg-[#C4C4C438]"
            : "text-primary bg-[#C4C4C438]"
        }
        `}
        >
          {info.level}
        </span>
        <span
          className={`px-4 py-1 rounded ${
            info.active.name === info.name
              ? "text-white bg-[#C4C4C438]"
              : "text-primary bg-[#C4C4C438]"
          }`}
        >
          {info.slots} Slots
        </span>
        <span>4d</span>
      </div>
    </div>
  );
};
