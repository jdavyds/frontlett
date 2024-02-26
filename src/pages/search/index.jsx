import { FaSearch, FaStar } from "react-icons/fa";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Aside from "./Aside";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

const users = [
  {
    img: user1,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user2,
    name: "Jane Doe",
    position: "Software Developer",
    years: 3,
    rating: 4.5,
  },
  {
    img: user3,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user1,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user2,
    name: "Jane Doe",
    position: "Software Developer",
    years: 3,
    rating: 4.5,
  },
  {
    img: user3,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user1,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user2,
    name: "Jane Doe",
    position: "Software Developer",
    years: 3,
    rating: 4.5,
  },
  {
    img: user3,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user1,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user2,
    name: "Jane Doe",
    position: "Software Developer",
    years: 3,
    rating: 4.5,
  },
  {
    img: user3,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user1,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
  {
    img: user2,
    name: "Jane Doe",
    position: "Software Developer",
    years: 3,
    rating: 4.5,
  },
  {
    img: user3,
    name: "John Doe",
    position: "Software Developer",
    years: 5,
    rating: 4.5,
  },
];
export default function Index() {
  return (
    <main className="bg-[#f7f7f7]">
      <ScrollToTop />
      <Header />
      <section className="px-5 md:px-20 py-10 md:py-20 flex flex-col md:grid grid-cols-[1fr_3fr] gap-10">
        <Aside />
        <div className="flex flex-col gap-10 w-full">
          <label className="flex h-12 w-full rounded-lg">
            <input
              type="text"
              placeholder="Search for a virtualt"
              className="bg-white rounded-l-lg text-[#00000075]  h-full w-full"
            />
            <button className="h-full min-w-fit rounded-r-lg px-5 bg-primary text-white flex justify-center items-center text-2xl">
              <FaSearch />
            </button>
          </label>
          <div className="flex flex-col md:grid grid-cols-3 gap-10">
            {users.map((user, i) => (
              <Single
                key={i}
                img={user.img}
                name={user.name}
                position={user.position}
                years={user.years}
                rating={user.rating}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const Single = ({ ...info }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-3xl bg-white">
        <img src={info?.img} alt="" className="w-full object-cover" />
        <div className="p-5 flex flex-col gap-4">
          <nav className="flex gap-2 justify-between">
            <nav className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">{info?.name}</h1>
              <p className="text-sm text-[#0000004A]">{info?.position}</p>
            </nav>
            <nav className="flex flex-col gap-1">
              <span className="flex gap-1 items-center"></span>
              <p className="text-xs text-[#0000004A]">(Amount of slots)</p>
            </nav>
          </nav>
          <div className="flex justify-between items-center gap-2">
            <span className="text-primary">
              {info?.years} years of experience
            </span>
            <span className="text-[#D10021AD]">
              {info?.rating} <FaStar className="inline" />
            </span>
          </div>
        </div>
      </div>
      <nav className="flex flex-wrap md:grid grid-cols-2 gap-5 items-center">
        <button
          type="button"
          className="w-fit border text-primary bg-inherit font-medium rounded-md flex justify-center items-center px-10 h-12"
        >
          View Profile
        </button>
        <button
          type="submit"
          className={`w-fit bg-primary font-medium text-white rounded-md flex justify-center items-center px-10 ml-auto h-12
        `}
        >
          Hire
        </button>
      </nav>
    </div>
  );
};
