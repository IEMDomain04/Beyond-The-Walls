import Navbar from "@/components/Navbar";
import Homepage from "@/components/Home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-orange-50">
        <Navbar />
        <Homepage />
      </div>
    </>
  );
}
