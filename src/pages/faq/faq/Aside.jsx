import { useEffect, useState, useRef } from "react";
import { faqs } from "../../../utils/Faqs";

export default function Aside() {
  const [activeId, setActiveId] = useState("");
  const observer = useRef(null);

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
  }, [observer]);

  return (
    <aside
      className={`flex md:flex-col overflow-x-scroll snap gap-5 md:gap-10 uppercase h-fit md:pr-10`}
    >
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${
            faq.name === activeId
              ? "font-[800] border-l-4 border-tertiary text-tertiary"
              : ""
          } px-3  cursor-pointer`}
          onClick={() => {
            const element = document.getElementById(faq.name);
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {faq.name}
        </div>
      ))}
    </aside>
  );
}
