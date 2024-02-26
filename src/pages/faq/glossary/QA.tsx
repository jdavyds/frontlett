"use client";
import { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { glossaries } from "../../utils/Glossaries";
import bg from "@/assets/hero-contact.png";
import StickyBox from "react-sticky-box";
import Image from "next/image";
import notfound from "@/assets/notfound.png";

export default function QA() {
  const [name, setName] = useState("A-C");
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const allGlossaryItems = glossaries.flatMap((glossary) => glossary.list);
  const filteredGlossaryItems = allGlossaryItems.filter((item) =>
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function handleUpClick(id: string) {
    const reaction = liked ? "unlike" : "like";

    const response = await fetch("/faq/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        reaction,
      }),
    });
    setLiked(!liked);

    const data = await response.json();
    fetchFaqs();

  }
  async function handleDownClick(id: string) {
    const reaction = disliked ? "undislike" : "dislike";

    const response = await fetch("/glossary/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        reaction,
      }),
    });
    setDisliked(!disliked);

    const data = await response.json();
    fetchFaqs();
  }

  const fetchFaqs = async () => {
    const response = await fetch("/faq/api", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };
  const [faqsDetails, setFaqsDetails] = useState<unknown[]>([]);
  useEffect(() => {
    const getFaqs = async () => {
      const data = await fetchFaqs();
      setFaqsDetails(data);
    };

    getFaqs();
  }, [liked, disliked]);

  return (
    <main
      className="bg-top bg-blend-overlay bg-no-repeat bg-opacity-50 backg"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="px-5 md:px-20 py-10 pt-40 flex flex-col justify-center items-center gap-10">
        <h3 className="text-2xl md:text-[40px] text-secondary leading-normal font-[700] uppercase">
          Finance Glossary
        </h3>
        <input
          type="text"
          className="rounded-full w-full md:w-1/2 h-14 bg-white border px-5 poppins"
          placeholder="Enter a search keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3.5fr] px-5 md:px-20 py-10 gap-20 relative">
        <StickyBox offsetTop={20} offsetBottom={20}>
          <aside
            className={`sticky top-0 flex md:flex-col gap-5 overflow-x-scroll snap uppercase h-fit md:pr-10`}
          >
            {glossaries.map((glossary, index) => (
              <div
                key={index}
                className={`${
                  glossary.name === name
                    ? "font-[800] py-2 w-fit border-b-4 border-[#212121] cursor-pointer"
                    : "cursor-pointer"
                } transition-all ease-in-out duration-700`}
                onClick={() => setName(glossary.name)}
              >
                {glossary.name}
              </div>
            ))}
          </aside>
        </StickyBox>
        <main className="flex flex-col gap-10">
          {searchTerm === "" ? (
            glossaries
              .filter((glossary) => glossary?.name === name)
              .map((glossary, index) => (
                <section
                  key={index}
                  id={glossary.name}
                  className="md:w-3/4 flex flex-col gap-5"
                >
                  <h2 className="text-xl font-[700] uppercase">
                    {glossary.name}
                  </h2>
                  <ul className="w-full flex flex-col gap-4">
                    {glossary.list.map((info, index) => (
                      <nav
                        className="bg-white w-full py-2 md:py-4 px-4 md:px-7 flex flex-col gap-3 leading-relaxed transition ease-in-out duration-1000 h-fit rounded-lg border border-[#0000001A]"
                        key={index}
                      >
                        <div className="flex justify-between items-center cursor-pointer gap-3">
                          <span className="poppins text-lg text-[#212121] font-[500]">
                            {info?.word}
                          </span>
                        </div>
                        <div className="overflow-clip flex flex-col gap-2">
                          <p className={`poppins text-[#4D4D4D]`}>
                            {info?.definition}
                          </p>
                          <nav className="flex gap-3 text-xs md:text-base poppins">
                            <span className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex items-center justify-center poppins">
                              Was this helpful?
                            </span>
                            <span
                              className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex gap-2 items-center justify-center poppins"
                              onClick={(e) => {
                                e.preventDefault();
                                handleUpClick(glossary.name + index.toString());
                              }}
                            >
                              <FaThumbsUp className="text-[#029B2C]" />{" "}
                              {(
                                faqsDetails as {
                                  faqId: string;
                                  likes: number;
                                }[]
                              ).filter(
                                (list) =>
                                  (list as { faqId: string })?.faqId ===
                                  glossary.name + index.toString()
                              )?.[0]?.likes
                                ? (
                                    faqsDetails as {
                                      faqId: string;
                                      likes: number;
                                    }[]
                                  ).filter(
                                    (list) =>
                                      (list as { faqId: string })?.faqId ===
                                      glossary.name + index.toString()
                                  )?.[0]?.likes
                                : 0}
                            </span>
                            <span
                              className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex gap-2 items-center justify-center poppins"
                              onClick={(e) => {
                                e.preventDefault();
                                handleDownClick(
                                  glossary.name + index.toString()
                                );
                              }}
                            >
                              <FaThumbsDown className="text-[#FF3030]" />{" "}
                              {(
                                faqsDetails as {
                                  faqId: string;
                                  dislikes: number;
                                }[]
                              ).filter(
                                (list) =>
                                  (list as { faqId: string })?.faqId ===
                                  glossary.name + index.toString()
                              )?.[0]?.dislikes
                                ? (
                                    faqsDetails as {
                                      faqId: string;
                                      dislikes: number;
                                    }[]
                                  ).filter(
                                    (list) =>
                                      (list as { faqId: string })?.faqId ===
                                      glossary.name + index.toString()
                                  )?.[0]?.dislikes
                                : 0}
                            </span>
                          </nav>
                        </div>
                      </nav>
                    ))}
                  </ul>
                </section>
              ))
          ) : filteredGlossaryItems.length > 0 ? (
            filteredGlossaryItems.map((item, index) => (
              <nav
                className="md:w-3/4 py-2 md:py-4 px-4 md:px-7 flex flex-col gap-3 leading-relaxed transition ease-in-out duration-1000 h-fit rounded-lg border border-[#0000001A]"
                key={index}
              >
                <div className="flex justify-between items-center cursor-pointer gap-3">
                  <span className="poppins text-lg text-[#212121] font-[500]">
                    {item?.word}
                  </span>
                </div>
                <div className="overflow-clip flex flex-col gap-2">
                  <p className={`poppins text-[#4D4D4D]`}>{item?.definition}</p>
                  <nav className="flex gap-3 text-xs md:text-base poppins">
                    <span className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex items-center justify-center poppins">
                      Was this helpful?
                    </span>
                    <span className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex gap-2 items-center justify-center poppins">
                      <FaThumbsUp className="text-[#029B2C]" /> 0
                    </span>
                    <span className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex gap-2 items-center justify-center poppins">
                      <FaThumbsDown className="text-[#FF3030]" /> 0
                    </span>
                  </nav>
                </div>
              </nav>
            ))
          ) : (
            <div className="md:w-3/4 py-2 md:py-4 px-4 md:px-7 flex flex-col gap-10 text-center items-center justify-center">
              <Image src={notfound} alt="Not found" className="" />
              <p>Sorry no result found!</p>
            </div>
          )}
        </main>
      </div>
    </main>
  );
}
