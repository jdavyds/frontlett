"use client";
import { useEffect, useRef, useState } from "react";
import Aside from "./Aside";
import Book from "@/pages/home/Book";
import Subscribe from "@/layout/Subscribe";
import HeaderWhite from "@/layout/HeaderWhite";
import Footer from "@/layout/Footer";
import bg from "@/assets/hero-contact.png";
import QA from "./QA";
// import StickyBox from "react-sticky-box";
import { useStickyBox } from "react-sticky-box";

export default function Index() {
  const stickyRef = useStickyBox({
    offsetTop: 20,
    offsetBottom: 20,
    bottom: true,
  });

  return (
    <main className="bg-top bg-blend-overlay bg-no-repeat flex flex-col bg-opacity-50 backg"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <HeaderWhite />
      <div className="px-5 md:px-20 py-10 pt-40 flex flex-col justify-center items-center gap-10">
        <h3 className="text-2xl md:text-[40px] text-secondary leading-normal font-[700] uppercase text-center">
          Frequently asked questions (FAQs)
        </h3>
        <input
          type="text"
          className="rounded-full w-full md:w-1/2 h-14 bg-white border px-5 poppins"
          placeholder="Enter a search keyword"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_3fr] px-5 md:px-20 py-10 gap-20">
        <aside ref={stickyRef}>
          <Aside />
        </aside>
        <QA />
      </div>
      <Book />
      <Subscribe />
      <Footer />
    </main>
  );
}
