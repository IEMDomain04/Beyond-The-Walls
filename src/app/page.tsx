import Navbar from "@/components/Navbar";
import Homepage from "@/components/Home";
import Image from "next/image";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <div className="bg-orange-50 overflow-x-hidden">
        <Navbar />
        <About />
      </div>
    </>
  );
}
