"use client";
import { useEffect, useState, useRef } from "react";
import { glossaries } from "../../utils/Glossaries";

export default function Aside() {
  const [activeId, setActiveId] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    });

    glossaries.forEach((glossary) => {
      const element = document.getElementById(glossary.name);
      if (element) observer.current?.observe(element);
    });

    return () => {
      glossaries.forEach((glossary) => {
        const element = document.getElementById(glossary.name);
        if (element) observer.current?.unobserve(element);
      });
    };
  }, []);

  return (
    <aside className={`flex flex-col gap-5 uppercase h-fit pr-10`}>
      {glossaries.map((glossary, index) => (
        <div
          key={index}
          className={glossary.name === activeId ? "font-[800] py-2 w-fit border-b-4 border-[#212121] cursor-pointer" : "cursor-pointer"}
          onClick={() => {
            const element = document.getElementById(glossary.name);
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {glossary.name}
        </div>
      ))}
    </aside>
  );
}
