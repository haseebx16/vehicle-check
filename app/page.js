import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Included from "./Components/Included";
import World from "./Components/World";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Included/>
      <World/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
