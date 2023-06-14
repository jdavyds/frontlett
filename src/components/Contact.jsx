import contact1 from '../assets/contact1.jpg';
import Header from './subs/Header';
import contact2 from '../assets/contact2.jpg';
import contact3 from '../assets/contact3.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import cancel from '../assets/x.svg';
export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <Header />
      <section className="h-[90vh] flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <div className="flex flex-col gap-3 md:gap-6 md:w-1/2 px-5 md:px-20 py-10">
          <h3 className="text-[20px] md:text-[48px] font-[500] md:leading-[60px] text-primary">
            Frontlett is creating the future of Africa’s HR structure
          </h3>
          <p className="text-light">
            Frontlett effectively connects those who are highly
            skilled with those who need the services of a skilled
            workforce for a quarter of the price.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <button
              className="bg-primary text-white px-10 h-10 rounded-lg font-[500] w-fit text-sm"
              onClick={() => setShowModal(true)}
            >
              Contact
            </button>
            <button className="border px-10 h-10 rounded-lg font-[500] w-fit border-primary text-primary text-sm">
              Get a quote
            </button>
          </div>
        </div>
        <figure className="md:w-1/2 flex justify-end h-full">
          <img
            src={contact1}
            alt=""
            className="object-cover w-full md:h-full"
          />
        </figure>
      </section>
      <section className="bg-[#AFAFAF0F] px-5 md:px-20 py-20 flex flex-col gap-8 items-center">
        <h3 className="text-[40px] font-[600] text-primary ">
          What we are trying to fix
        </h3>
        <div className="flex flex-wrap gap-10 justify-center">
          <nav className="min-w-[45%] w-[45%] rounded-md shadow-[0px_2px_4px_2px_rgba(18,121,224,0.1)] p-10 flex flex-col gap-8 bg-white  text-light">
            <b className="text-[#1A3047] text-[50px] font-[900]">
              11%
            </b>
            <p>
              Lorem ipsum dolor sit consiterie adcue c elict nadcr das
              finbus et fi caree misere sae dj asd. Lorem ipsum dolor
              sit consiterie adcue c elict nadcr das finbus et fi
              caree misere sae dj asd.
            </p>
          </nav>
          <nav className="min-w-[45%] w-[45%] rounded-md shadow-[0px_2px_4px_2px_rgba(18,121,224,0.1)] p-10 flex flex-col gap-8 bg-white  text-light">
            <b className="text-[#1A3047] text-[50px] font-[900]">
              20%
            </b>
            <p>
              Lorem ipsum dolor sit consiterie adcue c elict nadcr das
              finbus et fi caree misere sae dj asd. Lorem ipsum dolor
              sit consiterie adcue c elict nadcr das finbus et fi
              caree misere sae dj asd.
            </p>
          </nav>
          <nav className="min-w-[45%] w-[45%] rounded-md shadow-[0px_2px_4px_2px_rgba(18,121,224,0.1)] p-10 flex flex-col gap-8 bg-white  text-light">
            <b className="text-[#1A3047] text-[50px] font-[900]">
              19%
            </b>
            <p>
              Lorem ipsum dolor sit consiterie adcue c elict nadcr das
              finbus et fi caree misere sae dj asd. Lorem ipsum dolor
              sit consiterie adcue c elict nadcr das finbus et fi
              caree misere sae dj asd.
            </p>
          </nav>
        </div>
      </section>
      <section className="bg-[#AFAFAF0F] px-5 md:px-20 py-20 flex flex-col gap-8 items-center">
        <h3 className="text-[40px] font-[600] text-primary ">
          How we are trying to fix it
        </h3>
        <div className="flex flex-col gap-16">
          <nav className="grid grid-cols-2 gap-10 items-center text-light text-xl">
            <div className="flex flex-col gap-5 pr-10">
              <b className="text-primary text-2xl">Virtualting</b>
              <p>
                Lorem ipsum dolor sit consiterie adcue c elict nadcr
                das finbus et fi caree misere sae dj asd. Lorem ipsum
                dolor sit consiterie adcue c elict nadcr das finbus et
                fi caree misere sae dj asd.
              </p>
            </div>
            <figure className="">
              <img src={contact2} alt="" className="object-contain" />
            </figure>
          </nav>
          <nav className="grid grid-cols-2 gap-10 items-center text-light text-xl">
            <figure className="">
              <img src={contact3} alt="" className="object-contain" />
            </figure>
            <div className="flex flex-col gap-5 pl-10">
              <b className="text-primary text-2xl">Virtualting</b>
              <p>
                Lorem ipsum dolor sit consiterie adcue c elict nadcr
                das finbus et fi caree misere sae dj asd. Lorem ipsum
                dolor sit consiterie adcue c elict nadcr das finbus et
                fi caree misere sae dj asd.
              </p>
            </div>
          </nav>
        </div>
      </section>
      <section className="px-5 md:px-20 py-20 text-white bg-primary flex flex-col gap-8 justify-center items-center text-center">
        <b className="text-2xl leading-none">Get in touch with us</b>
        <p className="py-1 border-b">growth@frontlett.com</p>
        <div className="flex flex-col gap-2 items-center">
          <p>Copyright ©️2020 Frontlett Ltd. All rights reserved.</p>
          <nav className="flex gap-1 item">
            <Link to="/">Privacy & Legal Policies</Link>|
            <Link to=""> About Ads</Link>| Do Not Sell My Personal
            Information | Cookie Preferences
          </nav>
        </div>
      </section>
      {showModal && <Form setShowModal={setShowModal} />}
    </main>
  );
}

// eslint-disable-next-line react/prop-types
const Form = ({ setShowModal }) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    help: '',
  });

  return (
    <main className="fixed top-0 px-3 md:px-0 left-0 h-full w-full bg-[#1A304766] backdrop-blur-[3px] flex items-center  justify-center z-[999999999]">
      <div className="max-h-[85vh] md:max-h-[90vh] snap w-full rounded-lg md:w-[35%] h-[85vh] overflow-y-scroll snap z-50  flex flex-col justify-center items-center">
        <div className="w-full h-fit z-50 flex items-center overflow-x-hidden snap ">
          <div className="relative min-w-full w-full  flex flex-col gap-5 overflow-y-scroll snap  px-5 md:px-10 py-4 md:py-8 transition-all duration-1000 ease-in-out bg-white h-fit  rounded my-auto">
            <button
              className="absolute top-2 md:top-8 right-3 md:right-8 z-[99]"
              onClick={() => {
                setShowModal(false);
                console.log(state);
              }}
            >
              <img src={cancel} alt="" />
            </button>
            <h3 className="text-[20px] md:text-[25px] text-primary font-[500] mx-auto">
              Contact Us
            </h3>
            <form className="flex flex-col gap-10 text-[#1D1D1B] ">
              <label className="flex flex-col gap-1">
                <span className="font-[500]">
                  FULL NAME <i className="text-rd">*</i>
                </span>
                <input
                  type="text"
                  className="border-b border-[#00000087] bg-inherit h-10 md:h-12 placeholder:text-[#00000087] placeholder:text-sm"
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Your Full Name"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-[500]">
                  EMAIL ADDRESS <i className="text-rd">*</i>
                </span>
                <input
                  type="email"
                  className="border-b border-[#00000087] bg-inherit h-10 md:h-12 placeholder:text-[#00000087] placeholder:text-sm"
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                  placeholder="Your Email Address"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-[500]">
                  HOW MAY WE HELP? <i className="text-rd">*</i>
                </span>
                <input
                  type="text"
                  className="border-b border-[#00000087] bg-inherit h-10 md:h-12 placeholder:text-[#00000087] placeholder:text-sm"
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      help: e.target.value,
                    }))
                  }
                  placeholder="Your Message"
                />
              </label>
              <button className="bg-primary hover:opacity-80 text-white w-fit h-10 font-[500] transition-colors duration-1000 ease-in-out rounded mx-auto px-10">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
