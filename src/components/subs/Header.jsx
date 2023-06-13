import { useState } from 'react';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.svg';
import ham from '../../assets/x.svg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-[9999] bg-white text-[#404040] shadow-md px-5 md:px-20 py-5 flex justify-center items-center ">
      <img
        src={open ? ham : menu}
        alt=""
        onClick={() => setOpen(!open)}
        className="block md:hidden transition-all duration-1000 ease-in-out mr-auto"
      />
      <NavLink to="/" className="mr-auto">
        <img
          src={logo}
          alt=""
          className="h-14 md:h-16 object-cover"
        />
      </NavLink>
      <nav
        className={`${
          open
            ? ' left-0 top-20  py-5  bg-white '
            : ' top-[-900%] left-0'
        } absolute md:static  w-full z-[999999999] md:w-[unset] flex flex-col md:flex-row shadow-md md:shadow-none  gap-10 items-center transition-all duration-1000 ease-in-out overflow-y-scroll snap text-sm font-[400] mr-auto`}
      >
        <NavLink className="hover:text-[#063B5A]" to="/">
          ABOUT VIRTUALTING
        </NavLink>
        <NavLink className="hover:text-[#063B5A]" to="/">
          HOW IT WORKS
        </NavLink>
        <NavLink
          className="hover:text-[#063B5A]"
          to="#"
          onClick={() => setMore(!more)}
        >
          JOBS & TALENTS
          <FontAwesomeIcon
            icon={more ? faChevronDown : faChevronUp}
          />
        </NavLink>
        <NavLink className="hover:text-[#063B5A]" to="/">
          PLANS & PRICING
        </NavLink>
        <NavLink className="hover:text-[#063B5A]" to="/">
          USE CASES
        </NavLink>
        <NavLink className="hover:text-[#063B5A]" to="/">
          FAQ
        </NavLink>
      </nav>
      <nav className="flex gap-5 items-center">
        <button>Login</button>
        <button className="px-8 h-10 bg-primary text-white font-[600] rounded-md">
          Register
        </button>
      </nav>
      <div
        className={`absolute top-10 md:top-24 px-3 md:px-10 left-0 w-full h-fit z-[-900] text-[18px] transition-all duration-1000 ease-in-out  ${
          more ? 'translate-y-0' : 'translate-y-[-200%]'
        }`}
      >
        <div className="bg-white flex flex-col gap-4 text-sm px-4 md:px-10 py-5  rounded-xl backdrop-blur-sm shadow-md text-[#1A3047B2]">
          <nav className="flex flex-col gap-2">
            <b className="text-primary">Frontlett Designers</b>
            <ul className="grid grid-cols-4 gap-y-1 gap-x-5">
              <li>Adobe Illustrator Experts</li>
              <li>Android Designers</li>
              <li>Product Designers</li>
              <li>SaaS Designers</li>
              <li>Freelance Designers</li>
              <li>Graphic Designers</li>
              <li>UX Designers</li>
              <li className="text-primary">
                View More Freelance Designers
              </li>
            </ul>
          </nav>
          <nav className="flex flex-col gap-2">
            <b className="text-primary">Frontlett Finance Experts</b>
            <ul className="grid grid-cols-4 gap-y-1 gap-x-5">
              <li>Business Plan Consultants</li>
              <li>Data Analysis Consultants</li>
              <li>FP&A Managers</li>
              <li>Fundraising Consultants</li>
              <li>M&A Consultants</li>
              <li>Market Research Analysts</li>
              <li>Restructuring Consultants</li>
              <li className="text-primary">
                View More Freelance Finance Experts
              </li>
            </ul>
          </nav>
          <nav className="flex flex-col gap-2">
            <b className="text-primary">Frontlett Project Managers</b>
            <ul className="grid grid-cols-4 gap-y-1 gap-x-5">
              <li>Agile Project Managers</li>
              <li>Agile Coaches</li>
              <li>IT Project Managers</li>
              <li>JIRA Experts</li>
              <li>Project Management Consultants</li>
              <li>Scrum Masters</li>
              <li>Virtual Project Managers</li>
              <li className="text-primary">
                View More Freelance Project Managers
              </li>
            </ul>
          </nav>
          <nav className="flex flex-col gap-2">
            <b className="text-primary">Frontlett Product Managers</b>
            <ul className="grid grid-cols-4 gap-y-1 gap-x-5">
              <li>Business Analysts</li>
              <li>Contract Product Managers</li>
              <li>Freelance Product</li>
              <li>Managers Product Consultants</li>
              <li>Product Management Consultants</li>
              <li>Product Owners</li>
              <li>Remote Product Managers</li>
              <li className="text-primary">
                View More Freelance Product Managers
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
