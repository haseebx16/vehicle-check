import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Included from "./Components/Included";
import World from "./Components/World";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Included/>
      <World/>
    </div>
  );
}
