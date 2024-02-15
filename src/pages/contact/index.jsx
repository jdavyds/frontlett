import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Contacts from "./Contacts";
import Hero from "./Hero";


export default function Index() {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <Hero />
      <Contacts />
      <Footer />
    </main>
  );
}
