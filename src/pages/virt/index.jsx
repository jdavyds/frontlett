import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Hero from "./Hero";
import Table from "./Table";

export default function Index() {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <Hero />
      <Table />
      <Footer />
    </main>
  );
}
