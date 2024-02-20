import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import ham from "../assets/x.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";

function useOnHoverOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mouseover", listener);
    return () => {
      document.removeEventListener("mouseout", listener);
    };
  }, [ref, handler]);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  // const [more, setMore] = useState(false);
  const user = useSelector((state) => state.user.userDetails);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <header className="sticky top-0 left-0 z-[9999] bg-white text-[#404040] shadow-md px-5 md:px-20 py-5 flex justify-center items-center ">
      <img
        src={open ? ham : menu}
        alt=""
        onClick={() => setOpen(!open)}
        className="block md:hidden transition-all duration-1000 ease-in-out mr-auto"
      />
      <NavLink to="/" className="mr-auto">
        <img src={logo} alt="" className="h-14 md:h-16 object-cover" />
      </NavLink>
      <nav
        className={`${
          open ? " left-0 top-20  py-5  bg-white " : " top-[-900%] left-0"
        } absolute md:static  w-full z-[999999999] md:w-[unset] flex flex-col md:flex-row shadow-md md:shadow-none  gap-10 items-center transition-all duration-1000 ease-in-out overflow-y-scroll snap font-[400] mr-auto`}
      >
        <NavLink className="hover:text-[#063B5A]" to="/about">
          Who we are
        </NavLink>
        <NavLink className="hover:text-[#063B5A]" to="/who-we-serve">
          Who we serve
        </NavLink>
        <NavLink className="hover:text-[#063B5A]" to="/what-we-do">
          What we do
        </NavLink>
        <NavLink className="hover:text-[#063B5A]" to="/faq">
          FAQ
        </NavLink>
        {/* <NavLink
          className="hover:text-[#063B5A]"
          to="#"
          onClick={() => setMore(!more)}
        >
          JOBS & TALENTS
          {more ? (
            <FaChevronDown className="inline ml-1" />
          ) : (
            <FaChevronUp className="inline ml-1" />
          )}
        </NavLink> */}
        <div
          className="py-2 px-3 w-full md:w-[unset] md:px-0 md:py-0 flex flex-col items-start"
          ref={dropdownRef}
        >
          <button
            className=""
            onMouseOver={() => setMenuDropDownOpen(true)}
            onClick={() => setMenuDropDownOpen(!isMenuDropDownOpen)}
          >
            Pricing
          </button>
          {isMenuDropDownOpen && (
            <div className="flex flex-col items-start gap-1 absolute  pt-6 text-tertiary">
              <ul className="rounded shadow-md flex flex-col bg-white p-5 gap-5">
                <Link
                  className="hover:underline hover:text-primary cursor-pointer"
                  to="/employer-pricing"
                >
                  Employer Pricing
                </Link>
                <Link
                  className="hover:underline hover:text-primary cursor-pointer"
                  to="/virtualt-pricing"
                >
                  Virtualt Pricing
                </Link>
              </ul>
            </div>
          )}
        </div>
        <NavLink className="hover:text-[#063B5A]" to="/contact-us">
          Contact
        </NavLink>
      </nav>
      {Object.keys(user).length !== 0 ? (
        <button
          className="px-8 h-10 bg-primary text-white font-[600] rounded-md"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      ) : (
        <nav className="flex gap-5 items-center">
          <button>Login</button>
          <button
            className="px-8 h-10 bg-primary text-white font-[600] rounded-md"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </nav>
      )}
      {/* <div
        className={`absolute top-10 md:top-24 flex justify-center px-3 md:px-10 left-0 w-full h-fit z-[-900] text-[18px] transition-all duration-1000 ease-in-out  ${
          more ? "translate-y-0" : "translate-y-[-200%]"
        }`}
      >
        <More />
      </div> */}
    </header>
  );
}

// const More = () => {
//   return (
//     <div className="bg-white w-3/4 flex flex-col gap-4 text-sm px-4 md:px-10 py-5  rounded-xl backdrop-blur-sm shadow-md text-[#1A3047B2]">
//       <nav className="flex flex-col gap-2">
//         <b className="text-primary">Frontlett Designers</b>
//         <ul className="grid grid-cols-4 gap-y-1 gap-x-5">
//           <li className="cursor-pointer">Adobe Illustrator Experts</li>
//           <li className="cursor-pointer">Android Designers</li>
//           <li className="cursor-pointer">Product Designers</li>
//           <li className="cursor-pointer">SaaS Designers</li>
//           <li className="cursor-pointer">Freelance Designers</li>
//           <li className="cursor-pointer">Graphic Designers</li>
//           <li className="cursor-pointer">UX Designers</li>
//           <li className="text-primary cursor-pointer">
//             View More Freelance Designers
//           </li>
//         </ul>
//       </nav>
//       <nav className="flex flex-col gap-2">
//         <b className="text-primary">Frontlett Finance Experts</b>
//         <ul className="grid grid-cols-4 gap-y-1 gap-x-5">
//           <li className="cursor-pointer">Business Plan Consultants</li>
//           <li className="cursor-pointer">Data Analysis Consultants</li>
//           <li className="cursor-pointer">FP&A Managers</li>
//           <li className="cursor-pointer">Fundraising Consultants</li>
//           <li className="cursor-pointer">M&A Consultants</li>
//           <li className="cursor-pointer">Market Research Analysts</li>
//           <li className="cursor-pointer">Restructuring Consultants</li>
//           <li className="text-primary cursor-pointer">
//             View More Freelance Finance Experts
//           </li>
//         </ul>
//       </nav>
//       <nav className="flex flex-col gap-2">
//         <b className="text-primary">Frontlett Project Managers</b>
//         <ul className="grid grid-cols-4 gap-y-1 gap-x-5">
//           <li className="cursor-pointer">Agile Project Managers</li>
//           <li className="cursor-pointer">Agile Coaches</li>
//           <li className="cursor-pointer">IT Project Managers</li>
//           <li className="cursor-pointer">JIRA Experts</li>
//           <li className="cursor-pointer">Project Management Consultants</li>
//           <li className="cursor-pointer">Scrum Masters</li>
//           <li className="cursor-pointer">Virtual Project Managers</li>
//           <li className="text-primary cursor-pointer">
//             View More Freelance Project Managers
//           </li>
//         </ul>
//       </nav>
//       <nav className="flex flex-col gap-2">
//         <b className="text-primary">Frontlett Product Managers</b>
//         <ul className="grid grid-cols-4 gap-y-1 gap-x-5">
//           <li className="cursor-pointer">Business Analysts</li>
//           <li className="cursor-pointer">Contract Product Managers</li>
//           <li className="cursor-pointer">Freelance Product</li>
//           <li className="cursor-pointer">Managers Product Consultants</li>
//           <li className="cursor-pointer">Product Management Consultants</li>
//           <li className="cursor-pointer">Product Owners</li>
//           <li className="cursor-pointer">Remote Product Managers</li>
//           <li className="text-primary cursor-pointer">
//             View More Freelance Product Managers
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };
