import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Slider } from "infinite-react-carousel";
import hero from "../assets/hero.jpg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import ic1 from "../assets/icons/icon1.svg";
import ic2 from "../assets/icons/icon2.svg";
import ic3 from "../assets/icons/icon3.svg";
import ic4 from "../assets/icons/icon4.svg";
import ic5 from "../assets/icons/icon5.svg";
import ic6 from "../assets/icons/icon6.svg";
import ic7 from "../assets/icons/icon7.svg";
import ic8 from "../assets/icons/icon8.svg";
import ic9 from "../assets/icons/icon9.svg";
import ic10 from "../assets/icons/icon10.svg";
import ic11 from "../assets/icons/icon11.svg";
import ic12 from "../assets/icons/icon12.svg";
import client1 from "../assets/clients/client1.jpg";
import client2 from "../assets/clients/client2.jpg";
import client3 from "../assets/clients/client3.jpg";
import client4 from "../assets/clients/client4.jpg";
import client5 from "../assets/clients/client5.jpg";
import virtualt1 from "../assets/virtualts/virtualt1.jpg";
import virtualt2 from "../assets/virtualts/virtualt2.jpg";
import virtualt3 from "../assets/virtualts/virtualt3.jpg";
import virtualt4 from "../assets/virtualts/virtualt4.jpg";
import { useRef, useState } from "react";
import transform1 from "../assets/transform1.svg";
import transform2 from "../assets/transform2.svg";
import transform3 from "../assets/transform3.svg";
import transform4 from "../assets/transform4.svg";
import review1 from "../assets/reviews/review1.svg";
import review2 from "../assets/reviews/review2.svg";
import review3 from "../assets/reviews/review3.svg";
import partner1 from "../assets/partners/partner1.svg";
import partner2 from "../assets/partners/partner2.svg";
import partner3 from "../assets/partners/partner3.svg";
import partner4 from "../assets/partners/partner4.svg";
import partner5 from "../assets/partners/partner5.svg";
import partner6 from "../assets/partners/partner6.svg";
import dp1 from "../assets/dp1.svg";
import dp2 from "../assets/dp2.svg";
import dp3 from "../assets/dp3.svg";
import dp4 from "../assets/dp4.svg";
import dp5 from "../assets/dp5.svg";
import ReactPlayer from "react-player";
import wa from "../assets/wa.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaMoneyBill,
  FaSearch,
  FaStar,
  FaUserAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Home() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userDetails);
  const [pos, setPos] = useState(0);
  function scrollToStart() {
    const container = ref.current;
    container.scrollLeft = 0;
    setPos(0);
  }

  function scrollToMiddle() {
    const container = ref.current;
    const containerWidth = container.scrollWidth - container.clientWidth;
    const scrollOffset = containerWidth / 2;
    container.scrollLeft = scrollOffset;
    setPos(1);
  }

  function scrollToEnd() {
    const container = ref.current;
    const containerWidth = container.scrollWidth - container.clientWidth;
    container.scrollLeft = containerWidth;
    setPos(2);
  }

  const ref2 = useRef(null);
  const [pos2, setPos2] = useState(0);
  function scrollToStart2() {
    const container = ref2.current;
    container.scrollLeft = 0;
    setPos2(0);
  }

  function scrollToMiddle2() {
    const container = ref2.current;
    const containerWidth = container.scrollWidth - container.clientWidth;
    const scrollOffset = containerWidth / 2;
    container.scrollLeft = scrollOffset;
    setPos2(1);
  }

  function scrollToEnd2() {
    const container = ref2.current;
    const containerWidth = container.scrollWidth - container.clientWidth;
    container.scrollLeft = containerWidth;
    setPos2(2);
  }

  return (
    <main>
      <div className="flex text-xs gap-1 items-center justify-center text-[#00000087] py-1">
        <span className="flex items-center gap-1">
          Reach us on <img src={wa} alt="" /> Nigeria: 0700-STAFF-SHARE
          (0700-78233-74273) | 0800-555-333-111 (Ext. 1) | 0815-656-1293 (Glo
          Toll) |{" "}
        </span>
        <span className="text-primary">Salary Cost Calculator</span>
      </div>
      <Header />
      <section
        className="bg-cover bg-center bg-no-repeat min-h-[80vh] h-fit px-5 md:px-20 py-10 md:py-20 flex flex-col  gap-5 justify-center text-white relative -z-0"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <Slider autoplay={true} arrows={false}>
          <div>
            <div className="md:w-[45%] flex flex-col gap-4 md:gap-7">
              <h3 className="text-[21px] md:text-[40px] font-[600]">
                Looking to penetrate the market with little cost to pay for
                employee resources?
              </h3>
              <p className="md:text-xl">
                Frontlett effectively connects those who are highly skilled with
                those who need the services of a skilled workforce for a quarter
                of the cost of the price.
              </p>
              {Object.keys(user).length !== 0 ? (
                <button
                  className="px-10 h-10 bg-primary text-white font-[600] rounded-md w-fit"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>
              ) : (
                <nav className="flex gap-5 items-center">
                  <button>Login</button>
                  <button
                    className="px-8 h-10 bg-primary text-white font-[600] rounded-md"
                    onClick={() => navigate("/verify")}
                  >
                    Register
                  </button>
                </nav>
              )}
            </div>
          </div>
          <div>
            <div className="md:w-[45%] flex flex-col gap-4 md:gap-7">
              <h3 className="text-[21px] md:text-[40px] font-[600]">
                Looking to penetrate the market with little cost to pay for
                employee resources?
              </h3>
              <p className="md:text-xl">
                those who need the services of a skilled workforce for a those
                who need the services of the price
              </p>
              {Object.keys(user).length !== 0 ? (
                <button
                  className="px-10 h-10 bg-primary text-white font-[600] rounded-md w-fit"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>
              ) : (
                <nav className="flex gap-5 items-center">
                  <button>Login</button>
                  <button
                    className="px-8 h-10 bg-primary text-white font-[600] rounded-md"
                    onClick={() => navigate("/verify")}
                  >
                    Register
                  </button>
                </nav>
              )}
            </div>
          </div>
          <div>
            <div className="md:w-[45%] flex flex-col gap-4 md:gap-7">
              <h3 className="text-[21px] md:text-[40px] font-[600]">
                Looking to penetrate the market with little cost to pay for
                employee resources?
              </h3>
              <p className="md:text-xl">
                quarter of the price.those who need the services of the price
              </p>
              {Object.keys(user).length !== 0 ? (
                <button
                  className="px-10 h-10 bg-primary text-white font-[600] rounded-md w-fit"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>
              ) : (
                <nav className="flex gap-5 items-center">
                  <button>Login</button>
                  <button
                    className="px-8 h-10 bg-primary text-white font-[600] rounded-md"
                    onClick={() => navigate("/verify")}
                  >
                    Register
                  </button>
                </nav>
              )}
            </div>
          </div>
        </Slider>
        <div className="absolute bottom-0  mx-auto w-3/4 grid grid-cols-3  place-self-center translate-y-[50%] text-white">
          <nav className="px-8 py-4 flex gap-4 items-center rounded bg-[#9CBAE7]">
            <img src={icon1} alt="" />
            <p>Avoid redundancy. Share employees.</p>
          </nav>
          <nav className="px-8 py-4 flex gap-4 items-center rounded bg-[#80A4E9]">
            <img src={icon2} alt="" />
            <p>Make money from working for multiple employers.</p>
          </nav>
          <nav className="px-8 py-4 flex gap-4 items-center rounded bg-primary">
            <img src={icon3} alt="" />
            <p>Transform saved time and money into success.</p>
          </nav>
        </div>
      </section>
      <section className="bg-[#E5E5E5] px-5 md:px-20 py-28 flex flex-col gap-8 items-center text-center">
        <h3 className="text-[40px] font-[600] ">
          Are You Ready To Start Doing More With Less?
        </h3>
        <p className="text-light  ">
          Frontlett effectively connects those who are highly skilled with those
          who need the services of a skilled <br className="hidden md:block" />{" "}
          workforce for a quarter of the price.
        </p>
        <div className="w-full grid grid-cols-4 gap-5">
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic1} alt="" />
            <span>Project management</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic2} alt="" />
            <span>Client Appraisal</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic3} alt="" />
            <span> Reporting</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic4} alt="" />
            <span>User management</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic5} alt="" />
            <span>Resource Engagement Management</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic6} alt="" />
            <span>Resource Onboarding & Profile Management.</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic7} alt="" />
            <span>Timesheet management</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic8} alt="" />
            <span>Community Engagement</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic9} alt="" />
            <span>Client Onboarding Management</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic10} alt="" />
            <span>Resource Appraisal</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic11} alt="" />
            <span>Grievance & Redress Management.</span>
          </nav>
          <nav className="bg-white w-full p-5 flex flex-col justify-center items-center gap-5 rounded-md">
            <img src={ic12} alt="" />
            <span>Resource Cost Sharing Management.</span>
          </nav>
        </div>
        <Link
          to="verify"
          className="flex justify-center items-center h-12 px-10 bg-primary text-white rounded-md"
        >
          Register
        </Link>
      </section>
      <section className="px-5 md:px-20 py-10 flex flex-col gap-8 items-center text-center">
        <h3 className="text-[40px] font-[600] ">You Are In Good Hands</h3>
        <figure className="grid grid-cols-5 items-center">
          <img src={client1} alt="" className="object-cover" />
          <img src={client2} alt="" className="object-cover" />
          <img src={client3} alt="" className="object-cover" />
          <img src={client4} alt="" className="object-cover" />
          <img src={client5} alt="" className="object-cover" />
        </figure>
      </section>
      <section className="flex flex-col gap-10 justify-center items-center">
        <div
          className="flex gap-[2.5%] bg-primary py-14 px-1 w-full relative snap transition-all duration-1000 ease-in-out overflow-x-scroll snap"
          ref={ref}
        >
          <nav className="min-w-[20%] w-[20%] bg-white flex flex-col rounded-xl font-[500]">
            <img
              src={virtualt1}
              alt=""
              className="w-full object-cover rounded-xl"
            />
            <b className="mx-auto font-[600] text-lg border-b w-full flex justify-center py-3">
              Akeem Paul
            </b>
            <div className="flex flex-col gap-3 p-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="text-primary">UI Designer</span>
                <span>0-4 years (Exp.)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="flex items-center gap-1">
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                </span>
                <span>1 slot(s) left</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>Send to a friend</span>
                <span>Share</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <button className="px-5 h-10 bg-primary text-white font-[600] rounded-md">
                  Hire
                </button>
                <span className="flex justify-center">1 week ago</span>
              </div>
            </div>
          </nav>
          <nav className="min-w-[20%] w-[20%] bg-white flex flex-col rounded-xl font-[500]">
            <img
              src={virtualt2}
              alt=""
              className="w-full object-cover rounded-xl"
            />
            <b className="mx-auto font-[600] text-lg border-b w-full flex justify-center py-3">
              Rita Tora
            </b>
            <div className="flex flex-col gap-3 p-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="text-primary">Illustrator</span>
                <span>0-6 years (Exp.)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="flex items-center gap-1">
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                </span>
                <span>2 slot(s) left</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>Send to a friend</span>
                <span>Share</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <button className="px-5 h-10 bg-primary text-white font-[600] rounded-md">
                  Hire
                </button>
                <span className="flex justify-center">3 week ago</span>
              </div>
            </div>
          </nav>
          <nav className="min-w-[20%] w-[20%] bg-white flex flex-col rounded-xl font-[500]">
            <img
              src={virtualt3}
              alt=""
              className="w-full object-cover rounded-xl"
            />
            <b className="mx-auto font-[600] text-lg border-b w-full flex justify-center py-3">
              Olanna Adani
            </b>
            <div className="flex flex-col gap-3 p-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="text-primary">Content creator</span>
                <span>0-2 years (Exp.)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="flex items-center gap-1">
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                </span>
                <span>3 slot(s) left</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>Send to a friend</span>
                <span>Share</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <button className="px-5 h-10 bg-primary text-white font-[600] rounded-md">
                  Hire
                </button>
                <span className="flex justify-center">4 week ago</span>
              </div>
            </div>
          </nav>
          <nav className="min-w-[20%] w-[20%] bg-white flex flex-col rounded-xl font-[500]">
            <img
              src={virtualt4}
              alt=""
              className="w-full object-cover rounded-xl"
            />
            <b className="mx-auto font-[600] text-lg border-b w-full flex justify-center py-3">
              Quadri Salam
            </b>
            <div className="flex flex-col gap-3 p-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="text-primary">UI Designer</span>
                <span>0-5 years (Exp.)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="flex items-center gap-1">
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                </span>
                <span>1 slot(s) left</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>Send to a friend</span>
                <span>Share</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <button className="px-5 h-10 bg-primary text-white font-[600] rounded-md">
                  Hire
                </button>
                <span className="flex justify-center">6 week ago</span>
              </div>
            </div>
          </nav>
          <nav className="min-w-[20%] w-[20%] bg-white flex flex-col rounded-xl font-[500]">
            <img
              src={virtualt1}
              alt=""
              className="w-full object-cover rounded-xl"
            />
            <b className="mx-auto font-[600] text-lg border-b w-full flex justify-center py-3">
              Akeem Paul
            </b>
            <div className="flex flex-col gap-3 p-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="text-primary">UI Designer</span>
                <span>0-4 years (Exp.)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="flex items-center gap-1">
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                </span>
                <span>1 slot(s) left</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>Send to a friend</span>
                <span>Share</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <button className="px-5 h-10 bg-primary text-white font-[600] rounded-md">
                  Hire
                </button>
                <span className="flex justify-center">1 week ago</span>
              </div>
            </div>
          </nav>
          <nav className="min-w-[20%] w-[20%] bg-white flex flex-col rounded-xl font-[500]">
            <img
              src={virtualt2}
              alt=""
              className="w-full object-cover rounded-xl"
            />
            <b className="mx-auto font-[600] text-lg border-b w-full flex justify-center py-3">
              Rita Tora
            </b>
            <div className="flex flex-col gap-3 p-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="text-primary">Illustrator</span>
                <span>0-6 years (Exp.)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="flex items-center gap-1">
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                </span>
                <span>2 slot(s) left</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>Send to a friend</span>
                <span>Share</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <button className="px-5 h-10 bg-primary text-white font-[600] rounded-md">
                  Hire
                </button>
                <span className="flex justify-center">3 week ago</span>
              </div>
            </div>
          </nav>
          <nav className="min-w-[20%] w-[20%] bg-white flex flex-col rounded-xl font-[500]">
            <img
              src={virtualt3}
              alt=""
              className="w-full object-cover rounded-xl"
            />
            <b className="mx-auto font-[600] text-lg border-b w-full flex justify-center py-3">
              Olanna Adani
            </b>
            <div className="flex flex-col gap-3 p-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="text-primary">Content creator</span>
                <span>0-2 years (Exp.)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="flex items-center gap-1">
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                </span>
                <span>3 slot(s) left</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>Send to a friend</span>
                <span>Share</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <button className="px-5 h-10 bg-primary text-white font-[600] rounded-md">
                  Hire
                </button>
                <span className="flex justify-center">4 week ago</span>
              </div>
            </div>
          </nav>
          <nav className="min-w-[20%] w-[20%] bg-white flex flex-col rounded-xl font-[500]">
            <img
              src={virtualt4}
              alt=""
              className="w-full object-cover rounded-xl"
            />
            <b className="mx-auto font-[600] text-lg border-b w-full flex justify-center py-3">
              Quadri Salam
            </b>
            <div className="flex flex-col gap-3 p-4">
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="text-primary">UI Designer</span>
                <span>0-5 years (Exp.)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span className="flex items-center gap-1">
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-primary"></i>
                  <i className="w-4 h-4 rounded-[50%] bg-[#E5E5E5] border border-primary"></i>
                </span>
                <span>1 slot(s) left</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>Send to a friend</span>
                <span>Share</span>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <button className="px-5 h-10 bg-primary text-white font-[600] rounded-md">
                  Hire
                </button>
                <span className="flex justify-center">6 week ago</span>
              </div>
            </div>
          </nav>
        </div>
        <nav className="flex gap-5">
          <button
            className={`rounded-[50%] w-3 h-3 ${
              pos === 0 ? "bg-primary" : "bg-inherit border border-primary"
            }`}
            onClick={scrollToStart}
          ></button>
          <button
            className={`rounded-[50%] w-3 h-3 ${
              pos === 1 ? "bg-primary" : "bg-inherit border border-primary"
            }`}
            onClick={scrollToMiddle}
          ></button>
          <button
            className={`rounded-[50%] w-3 h-3 ${
              pos === 2 ? "bg-primary" : "bg-inherit border border-primary"
            }`}
            onClick={scrollToEnd}
          ></button>
        </nav>
        <button className="border border-light text-light px-5 h-12 bg-inherit rounded-md">
          Load More
        </button>
      </section>
      <section className="grid grid-cols-4 gap-5 px-5 md:px-20 py-10 md:py-20">
        <nav className="border flex flex-col text-center justify-center items-center gap-10 px-7 py-20 rounded-xl shadow">
          <FaSearch className="text-primary text-3xl" />
          <b className="font-[500] text-lg md:text-xl">Find the perfect job</b>
          <p>Lorem ipsum dolor sit amet consectet tempor dolor sit amet</p>
        </nav>
        <nav className="border flex flex-col text-center justify-center items-center gap-10 px-7 py-20 rounded-xl shadow">
          <FaUserAlt className="text-primary text-3xl" />
          <b className="font-[500] text-lg md:text-xl">Boost your career</b>
          <p>Lorem ipsum dolor sit amet consectet tempor dolor sit amet</p>
        </nav>
        <nav className="border flex flex-col text-center justify-center items-center gap-10 px-7 py-20 rounded-xl shadow">
          <FaStar className="text-primary text-3xl" />
          <b className="font-[500] text-lg md:text-xl">
            Be the perfect candidate
          </b>
          <p>Lorem ipsum dolor sit amet consectet tempor dolor sit amet</p>
        </nav>
        <nav className="border flex flex-col text-center justify-center items-center gap-10 px-7 py-20 rounded-xl shadow">
          <FaMoneyBill className="text-primary text-3xl" />
          <b className="font-[500] text-lg md:text-xl">Start earning</b>
          <p>Lorem ipsum dolor sit amet consectet tempor dolor sit amet</p>
        </nav>
      </section>
      <section className="px-5 md:px-20 py-10 flex flex-col gap-8 items-center text-center">
        <h3 className="text-[40px] font-[600] ">Transform</h3>
        <div className="grid grid-cols-2 justify-center items-center">
          <div className="h-24 w-24 rounded-[50%] absolute left-1/2 -translate-x-1/2  flex justify-center items-center bg-white">
            <span className="h-14 w-14 rounded-[50%] bg-[#58BB4D] text-white text-xl font-[700] absolute left-1/2 -translate-x-1/2  flex justify-center items-center">
              <FaArrowRight />
            </span>
          </div>
          <nav className="flex flex-col justify-center items-center gap-5 px-10 py-10 border-collapse border-r border-b border-[#C4C4C4]">
            <img src={transform1} alt="" className="h-24" />
            <span>Financial burden from paying redundant staff</span>
          </nav>
          <nav className="flex flex-col justify-center items-center gap-5 px-10 py-10 border-collapse border-l border-b border-[#C4C4C4]">
            <img src={transform2} alt="" className="h-24" />
            <span>Sharing staff with other employers</span>
          </nav>
          <nav className="flex flex-col justify-center items-center gap-5 px-10 py-10 border-collapse border-r border-t border-[#C4C4C4]">
            <img src={transform3} alt="" className="h-24" />
            <span>Not enough staff memebers</span>
          </nav>
          <nav className="flex flex-col justify-center items-center gap-5 px-10 py-10 border-collapse border-l border-t border-[#C4C4C4]">
            <img src={transform4} alt="" className="h-24" />
            <span>An organized company structure and team</span>
          </nav>
        </div>
      </section>
      <section className="bg-[#AFAFAF1A] px-5 md:px-20 py-20 flex flex-col gap-8 items-center text-center">
        <h3 className="text-[40px] font-[600] ">Customer Reviews</h3>
        <div className="grid grid-cols-3 items-center w-full text-yellow-500 text-xl">
          <figure className="flex flex-col gap-5 justify-center items-center">
            <img src={review1} alt="" className="h-20 w-2/3 object-contain" />
            <figcaption className="flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-5 justify-center items-center">
            <img src={review2} alt="" className="h-20 w-2/3 object-contain" />
            <figcaption className="flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-5 justify-center items-center">
            <img src={review3} alt="" className="h-20 w-2/3 object-contain" />
            <figcaption className="flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="px-5 md:px-20 py-10 flex flex-col gap-8 items-center text-center">
        <h3 className="text-[40px] font-[600] ">Testimonials</h3>
        <div className="grid grid-cols-[3fr_1fr] w-full gap-14 h-[70vh]">
          <div className="bg-red-400 w-full rounded-md">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${"T1qCP13J4Gg"}`}
              className="rounded-md min-h-full min-w-full"
            />
          </div>
          <div className="flex flex-col overflow-y-scroll pr-10 divide-y-2">
            <nav
              className={`flex p-4 gap-4 items-center ${"bg-[#1279E080] text-white rounded-md"}`}
            >
              <img src={dp1} alt="" className="h-16" />
              <p className="flex flex-col items-start gap-2 text-lg">
                <b>Linda Ogadi</b>
                <span className="">Nimbou</span>
              </p>
            </nav>
            <nav className={`flex p-4 gap-4 items-center`}>
              <img src={dp1} alt="" className="h-16" />
              <p className="flex flex-col items-start gap-2 text-lg">
                <b>Linda Ogadi</b>
                <span className="">Nimbou</span>
              </p>
            </nav>
            <nav className={`flex p-4 gap-4 items-center`}>
              <img src={dp1} alt="" className="h-16" />
              <p className="flex flex-col items-start gap-2 text-lg">
                <b>Linda Ogadi</b>
                <span className="">Nimbou</span>
              </p>
            </nav>
            <nav className={`flex p-4 gap-4 items-center`}>
              <img src={dp1} alt="" className="h-16" />
              <p className="flex flex-col items-start gap-2 text-lg">
                <b>Linda Ogadi</b>
                <span className="">Nimbou</span>
              </p>
            </nav>
            <nav className={`flex p-4 gap-4 items-center`}>
              <img src={dp1} alt="" className="h-16" />
              <p className="flex flex-col items-start gap-2 text-lg">
                <b>Linda Ogadi</b>
                <span className="">Nimbou</span>
              </p>
            </nav>
            <nav className={`flex p-4 gap-4 items-center`}>
              <img src={dp1} alt="" className="h-16" />
              <p className="flex flex-col items-start gap-2 text-lg">
                <b>Linda Ogadi</b>
                <span className="">Nimbou</span>
              </p>
            </nav>
            <nav className={`flex p-4 gap-4 items-center`}>
              <img src={dp1} alt="" className="h-16" />
              <p className="flex flex-col items-start gap-2 text-lg">
                <b>Linda Ogadi</b>
                <span className="">Nimbou</span>
              </p>
            </nav>
          </div>
        </div>
      </section>
      <section className=" bg-[#EBEBEB] py-14 flex flex-col gap-10 justify-center items-center">
        <div
          className="flex gap-[2%] px-1 w-full relative snap transition-all duration-1000 ease-in-out overflow-x-scroll snap"
          ref={ref2}
        >
          <nav className="min-w-[32%] w-[32%] bg-white flex flex-col gap-4 rounded-xl font-[500] p-5">
            <div className="flex justify-between items-center">
              <img src={dp1} alt="" className="h-14" />
              <img src={dp4} alt="" />
            </div>
            <q className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </q>
            <p className="flex gap-1">
              <b>Tony Stark,</b>
              <span className="text-[#000000A8]"> CEO Kofoundme.</span>
            </p>
          </nav>
          <nav className="min-w-[32%] w-[32%] bg-white flex flex-col gap-4 rounded-xl font-[500] p-5">
            <div className="flex justify-between items-center">
              <img src={dp2} alt="" className="h-14" />
              <img src={dp5} alt="" />
            </div>
            <q className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </q>
            <p className="flex gap-1">
              <b>Busayo Lawal,</b>
              <span className="text-[#000000A8]">Co-founder Ritten.</span>
            </p>
          </nav>
          <nav className="min-w-[32%] w-[32%] bg-white flex flex-col gap-4 rounded-xl font-[500] p-5">
            <div className="flex justify-between items-center">
              <img src={dp3} alt="" className="h-14" />
              <img src={dp4} alt="" />
            </div>
            <q className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </q>
            <p className="flex gap-1">
              <b>Busayo Lawal,</b>
              <span className="text-[#000000A8]">Co-founder Ritten.</span>
            </p>
          </nav>
          <nav className="min-w-[32%] w-[32%] bg-white flex flex-col gap-4 rounded-xl font-[500] p-5">
            <div className="flex justify-between items-center">
              <img src={dp1} alt="" className="h-14" />
              <img src={dp4} alt="" />
            </div>
            <q className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </q>
            <p className="flex gap-1">
              <b>Tony Stark,</b>
              <span className="text-[#000000A8]"> CEO Kofoundme.</span>
            </p>
          </nav>
          <nav className="min-w-[32%] w-[32%] bg-white flex flex-col gap-4 rounded-xl font-[500] p-5">
            <div className="flex justify-between items-center">
              <img src={dp2} alt="" className="h-14" />
              <img src={dp5} alt="" />
            </div>
            <q className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </q>
            <p className="flex gap-1">
              <b>Busayo Lawal,</b>
              <span className="text-[#000000A8]">Co-founder Ritten.</span>
            </p>
          </nav>
          <nav className="min-w-[32%] w-[32%] bg-white flex flex-col gap-4 rounded-xl font-[500] p-5">
            <div className="flex justify-between items-center">
              <img src={dp3} alt="" className="h-14" />
              <img src={dp4} alt="" />
            </div>
            <q className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </q>
            <p className="flex gap-1">
              <b>Busayo Lawal,</b>
              <span className="text-[#000000A8]">Co-founder Ritten.</span>
            </p>
          </nav>
          <nav className="min-w-[32%] w-[32%] bg-white flex flex-col gap-4 rounded-xl font-[500] p-5">
            <div className="flex justify-between items-center">
              <img src={dp1} alt="" className="h-14" />
              <img src={dp4} alt="" />
            </div>
            <q className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </q>
            <p className="flex gap-1">
              <b>Tony Stark,</b>
              <span className="text-[#000000A8]"> CEO Kofoundme.</span>
            </p>
          </nav>
        </div>
        <nav className="flex gap-5">
          <button
            className={`rounded-[50%] w-3 h-3 ${
              pos2 === 0 ? "bg-primary" : "bg-inherit border border-primary"
            }`}
            onClick={scrollToStart2}
          ></button>
          <button
            className={`rounded-[50%] w-3 h-3 ${
              pos2 === 1 ? "bg-primary" : "bg-inherit border border-primary"
            }`}
            onClick={scrollToMiddle2}
          ></button>
          <button
            className={`rounded-[50%] w-3 h-3 ${
              pos2 === 2 ? "bg-primary" : "bg-inherit border border-primary"
            }`}
            onClick={scrollToEnd2}
          ></button>
        </nav>
      </section>
      <section className="px-5 md:px-20 py-10 flex flex-col gap-8 items-center text-center">
        <h3 className="text-[40px] font-[600] ">Our Talent Partners</h3>
        <figure className="grid grid-cols-6 items-center justify-between gap-10 w-full">
          <img src={partner5} alt="" className="object-cover" />
          <img src={partner2} alt="" className="object-cover" />
          <img src={partner3} alt="" className="object-cover" />
          <img src={partner4} alt="" className="object-cover" />
          <img src={partner6} alt="" className="object-cover" />
          <img src={partner1} alt="" className="object-cover" />
        </figure>
      </section>
      <Footer />
    </main>
  );
}
