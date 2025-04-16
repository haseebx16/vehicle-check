import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Included from "./Components/Included";
import World from "./Components/World";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import CustomerSupport from "./Components/CustomerSupport";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Included/>
      <World/>
      <Testimonials/>
      <CustomerSupport/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}
