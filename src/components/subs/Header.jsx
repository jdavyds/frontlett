import logo from '../../assets/logo.svg';
// import { useState } from 'react';
// import menu from '../../assets/menu.svg';
// import ham from '../../assets/x.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  // const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-[9999] bg-white text-[#404040] shadow-md px-5 md:px-20 py-5 flex justify-center items-center ">
      {/* <img
        src={open ? ham : menu}
        alt=""
        onClick={() => setOpen(!open)}
        className="block md:hidden transition-all duration-1000 ease-in-out mr-auto"
      /> */}
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
        <NavLink className="hover:text-[#063B5A]" to="/virtualt">
          JOBS & TALENTS
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
    </header>
  );
}
