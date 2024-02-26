import Book from "@/pages/home/Book";
import Subscribe from "@/layout/Subscribe";
import HeaderWhite from "@/layout/HeaderWhite";
import Footer from "@/layout/Footer";
import QA from "./QA";

export default function Index() {
  return (
    <main className="flex flex-col">
      <HeaderWhite />
      <QA />
      <Book />
      <Subscribe />
      <Footer />
    </main>
  );
}
