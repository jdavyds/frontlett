/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import icon1 from "../../assets/cicon1.svg";
import icon2 from "../../assets/cicon2.svg";
import icon3 from "../../assets/cicon3.svg";
export default function Contacts() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-5 md:gap-14 md:grid grid-cols-3 md:-mt-[10%]">
        <Single
          icon={icon1}
          title="Employers or Virtualts"
          text="Do need help with issues related to talents, jobs or employers? We are here to help."
          action="Contact Rep"
        />
        <Single
          icon={icon2}
          title="Help and Support"
          text="We are happy to answer your questions and help with whatever details you need."
          action="Get Support"
        />
        <Single
          icon={icon3}
          title="Blog"
          text="Keep up to date with our latest company info, updates, news and other useful resources."
          action="Go to Blog"
        />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center text-center py-10">
        <h3 className="text-xl md:text-2xl font-bold">
          General communications
        </h3>
        <p className="text-xl text-[#00000087]">
          For general enquiries and feedback, kindly email{" "}
          <span className="text-primary inline"> hello@frontlett.com</span>
        </p>
      </div>
    </main>
  );
}

const Single = ({ icon, title, text, action }) => {
  return (
    <div className="flex flex-col gap-10 items-center w-full">
      <div className="w-full text-center px-5 md:px-10 pb-10 flex flex-col gap-10 rounded-2xl shadow-[0_0_10px_0_rgb(0,0,0,0.1)] justify-center items-center bg-white">
        <figure className="rounded-[50%] w-28 h-28 p-3 -translate-y-1/3 bg-white shadow-[0_0_10px_0_rgb(0,0,0,0.1)] flex justify-center items-center">
          <img src={icon} alt="" className="w-16 h-16" />
        </figure>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-[#00000087] text-lg">{text}</p>
      </div>
      <button className="bg-primary rounded-md min-h-10 h-10 w-ffit px-10 text-white">
        {action}
      </button>
    </div>
  );
};
