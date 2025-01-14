// Places.js
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

const categories = [
  { name: "Cafes", },
  { name: "Museums" },
  { name: "Churches" },
  { name: "Walls" },
]

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

            {/* Remove the comment nalang kapag kumpleto na yung image.
            {categories.map((category, index) => (
              <button
                className="py-2 px-5 bg-green-400 border border-black rounded duration-300 hover:scale-105 hover:shadow-lg"
                type="button"
              >
                {category.name}
              </button>
            ))} */}

          </div>
        </div>
        <Image src="/assets/places-image.svg" height={400} width={400} alt="Location image" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

        <div className="w-widthCard flex space-x-8 p-8 bg-bgCard rounded-xl">
          
          <Image src="/assets/locations/fort-santiago.svg" width={180} height={180} alt="Fort Santiago" />
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-placeTitle font-bold">Fort Santiago</h1>
              <h2 className="text-placeDesc">One of the oldest place inside of Intramuros. You’ll see a bridge and you’ll see a sign that says intramuros.</h2>
            </div>
            <button className="w-full rounded-xl text-white py-2 bg-buttonCard" type="button"> Know more </button>
          </div>
        </div>

      </div>
    </div>
  );
}
