import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex flex-col bg-white text-[#1A3047B2] gap-5 md:gap-20 px-5 md:px-20 pt-20">
      <div className="flex flex-col gap-10 md:grid grid-cols-5 ">
        <nav className="flex flex-col gap-3 md:gap-5">
          <b className="font-[500] md:font-[800] text-lg">Products</b>
          <ul className="flex flex-col gap-3">
            <Link to="/virtualt" className="hover:text-primary w-fit">
              Frontlett Talent Suite
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Frontlett Hire
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Frontlett Nurture
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Frontlett Analytics
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Talent Cloud Connect
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Plans and Pricing
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Ecosystem
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Lever for Startups
            </Link>
          </ul>
        </nav>
        <nav className="flex flex-col gap-3 md:gap-5">
          <b className="font-[500] md:font-[800] text-lg">Products</b>
          <ul className="flex flex-col gap-3">
            <Link to="/" className="hover:text-primary w-fit">
              About Us
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Customers
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Press
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Careers
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Events
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Contact Us
            </Link>
          </ul>
        </nav>
        <nav className="flex flex-col gap-3 md:gap-5">
          <b className="font-[500] md:font-[800] text-lg">
            Resources
          </b>
          <ul className="flex flex-col gap-3">
            <Link to="/" className="hover:text-primary w-fit">
              Resources center
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Blog
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Inside Frontlett Blog
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Frontlett Engineering Blog
            </Link>
          </ul>
        </nav>
        <nav className="flex flex-col gap-3 md:gap-5">
          <b className="font-[500] md:font-[800] text-lg">Support</b>
          <ul className="flex flex-col gap-3">
            <Link to="/" className="hover:text-primary w-fit">
              Help Center
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Product Status
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Support
            </Link>
            <Link to="/" className="hover:text-primary w-fit">
              Submit a ticket
            </Link>
          </ul>
        </nav>
        <nav className="flex flex-col gap-3 md:gap-5">
          <b className="font-[500] md:font-[800] text-lg">Contact</b>
          <nav className="px-8 h-12 bg-[#1A30472E] text-[#1A3047] flex justify-center items-center rounded-md">
            080 123 4567 89{' '}
          </nav>
          <b className="font-[500] md:font-[800] text-lg">
            Follow us
          </b>
          <nav className="flex gap-1 items-center text-lg">
            <span className="rounded-[50%] h-10 w-10 border flex justify-center items-center">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="rounded-[50%] h-10 w-10 border flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="rounded-[50%] h-10 w-10 border flex justify-center items-center">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="rounded-[50%] h-10 w-10 border flex justify-center items-center">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span className="rounded-[50%] h-10 w-10 border flex justify-center items-center">
              <FontAwesomeIcon icon={faYoutube} />
            </span>
          </nav>
          <p className="text-[#1279E0]">Join Our Community</p>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="h-10 rounded-md px-5 bg-[#1279E01A] text-[#1A304766]"
            />
            <input
              type="text"
              placeholder="Your email"
              className="h-10 rounded-md px-5 bg-[#1279E01A] text-[#1A304766]"
            />
            <button className="bg-[#1279E0] rounded-md h-10 px-5 text-white">
              Subscribe
            </button>
          </form>
        </nav>
      </div>
      <div className="text-sm py-4 border-t border-white flex justify-between items-center">
        <span>
          Copyright ©️2020 Frontlett Ltd. All rights reserved.
        </span>
        <nav className="flex gap-1 items-center">
          <Link to="/" className="">
            Privacy & Legal Policies
          </Link>{' '}
          |{' '}
          <Link to="/" className="">
            About Ads
          </Link>
          |
          <Link to="/" className="">
            Do Not Sell My Personal Information
          </Link>
          |
          <Link to="/" className="">
            Cookie Preferences
          </Link>
        </nav>
      </div>
    </footer>
  );
}
