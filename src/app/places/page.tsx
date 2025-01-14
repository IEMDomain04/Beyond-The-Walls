// Places.js
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Information from "@/database/PlacesInformation"; // Use default import

const categories = [
  { name: "Cafes" },
  { name: "Museums" },
  { name: "Churches" },
  { name: "Walls" },
];

export default function Places() {
  return (
    <div>
      <Navbar />

      <section className="flex w-full px-24 mb-12 space-x-10">
        <div>
          <div className="mt-10 mb-10">
            <h2 className="text-xl max-sm:text-base">Your Guide to Must-See Places</h2>
            <h1 className="text-5xl font-bold tracking-wide max-sm:text-3xl">
              Places Beyond Intramuros
            </h1>
          </div>

          <div className="flex space-x-5">
            <div className="flex items-center border bg-white border-black rounded-xl w-96">
              <input
                className="flex-grow px-4 py-2 outline-none rounded-xl"
                type="text"
                placeholder="Search place..."
              />
              <span className="px-3">
                <Image src="/assets/search-icon.svg" width={20} height={20} alt="Search Icon" />
              </span>
            </div>
          </div>
        </div>
        <Image src="/assets/places-image.svg" height={400} width={400} alt="Location image" />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {Information.map((place, index) => (
          <div key={index} className="flex p-6 bg-bgCard rounded-xl shadow-md space-x-6">
            <Image src={place.src} width={180} height={180} alt={place.title} />
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-placeTitle font-bold">{place.title}</h1>
                <h2 className="text-placeDesc">{place.description}</h2>
              </div>
              <button className="w-full rounded-xl text-white py-2 bg-buttonCard" type="button">
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}