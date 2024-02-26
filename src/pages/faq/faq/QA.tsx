"use client";
import { useEffect, useState, useRef } from "react";
import { faqs } from "../../utils/Faqs";
import { FaPlus, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { list } from "postcss";

export default function QA() {
  const [activeId, setActiveId] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    });

    faqs.forEach((faq) => {
      const element = document.getElementById(faq.name);
      if (element) observer.current?.observe(element);
    });

    return () => {
      faqs.forEach((faq) => {
        const element = document.getElementById(faq.name);
        if (element) observer.current?.unobserve(element);
      });
    };
  }, []);

  const [activeIndices, setActiveIndices] = useState(new Set());
  const handleButtonClick = (faqName: string, index: number) => {
    const key = `${faqName}-${index}`;
    if (activeIndices.has(key)) {
      activeIndices.delete(key);
    } else {
      activeIndices.add(key);
    }
    setActiveIndices(new Set(activeIndices));
  };

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
    <main className="flex flex-col gap-10">
      {faqs.map((faq, index) => (
        <section
          key={index}
          id={faq.name}
          className="md:w-3/4 flex flex-col gap-5"
        >
          <h2 className="text-xl font-[700] uppercase">
            0{index + 1} {faq.name}
          </h2>
          <ul className="w-full flex flex-col gap-4">
            {faq.list.map((info, index) => (
              <nav
                className="bg-white w-full py-2 md:py-4 px-4 md:px-7 flex flex-col gap-3 leading-relaxed transition ease-in-out duration-1000 h-fit rounded-lg border border-[#0000001A]"
                key={index}
              >
                <div
                  className="flex justify-between items-center cursor-pointer gap-3"
                  onClick={() => handleButtonClick(faq.name, index)}
                >
                  <span className="poppins text-lg text-[#212121] font-[500]">
                    {info.question}
                  </span>
                  <button className={`flex justify-center items-center`}>
                    <FaPlus
                      className={`text-[#787878] transition-all ease-in-out duration-1000 ${
                        activeIndices.has(`${faq.name}-${index}`)
                          ? "rotate-45"
                          : ""
                      }`}
                    />
                  </button>
                </div>
                <AnimatePresence>
                  {activeIndices.has(`${faq.name}-${index}`) && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-clip flex flex-col gap-2"
                    >
                      <p className={`poppins text-[#4D4D4D]`}>
                        {activeIndices.has(`${faq.name}-${index}`) &&
                          info.answer}
                      </p>
                      <nav className="flex gap-3 text-xs md:text-base poppins">
                        <span className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex items-center justify-center poppins">
                          Was this helpful?
                        </span>
                        <span
                          className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex gap-2 items-center justify-center poppins"
                          onClick={(e) => {
                            e.preventDefault();
                            handleUpClick(faq.name + index.toString());
                          }}
                        >
                          <FaThumbsUp className="text-[#029B2C]" />
                          {(
                            faqsDetails as {
                              faqId: string;
                              likes: number;
                            }[]
                          ).filter(
                            (list) =>
                              (list as { faqId: string })?.faqId ===
                              faq.name + index.toString()
                          )?.[0]?.likes
                            ? (
                                faqsDetails as {
                                  faqId: string;
                                  likes: number;
                                }[]
                              ).filter(
                                (list) =>
                                  (list as { faqId: string })?.faqId ===
                                  faq.name + index.toString()
                              )?.[0]?.likes
                            : 0}
                        </span>
                        <span
                          className="rounded bg-[#F2F2F2] text-[#212121] cursor-pointer h-8 px-3 flex gap-2 items-center justify-center poppins"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDownClick(faq.name + index.toString());
                          }}
                        >
                          <FaThumbsDown className="text-[#FF3030]" />
                          {(
                            faqsDetails as {
                              faqId: string;
                              dislikes: number;
                            }[]
                          ).filter(
                            (list) =>
                              (list as { faqId: string })?.faqId ===
                              faq.name + index.toString()
                          )?.[0]?.dislikes
                            ? (
                                faqsDetails as {
                                  faqId: string;
                                  dislikes: number;
                                }[]
                              ).filter(
                                (list) =>
                                  (list as { faqId: string })?.faqId ===
                                  faq.name + index.toString()
                              )?.[0]?.dislikes
                            : 0}
                        </span>
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
