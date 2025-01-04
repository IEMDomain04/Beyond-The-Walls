// Places.js
"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebaseConfig";
import Navbar from "@/components/Navbar";

// Define Place interface for TypeScript
interface Place {
  id: string;
  place: string;
  description: string;
}

// Define PlaceCard component
interface PlaceCardProps {
  place: string;
  description: string;
}

function PlaceCard({ place, description }: PlaceCardProps) {
  return (
    <div className="card border rounded shadow p-4 m-4 bg-white">
      <h3 className="text-lg font-bold">{place}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default function Places() {
  // Define the type of `places` state to be an array of `Place` objects
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Places"));
        const placesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // Ensure that Firestore document data matches the expected shape
        }));

        setPlaces(placesData as Place[]); // Cast to `Place[]` if necessary
      } catch (error) {
        console.error("Error fetching places: ", error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="text-center my-20">
        <h2 className="text-xl max-sm:text-base">Your Guide to Must-See Places</h2>
        <h1 className="text-5xl font-bold tracking-wide max-sm:text-3xl">
          Places Beyond Intramuros
        </h1>
      </div>

      <div className="flex justify-center space-x-10">
        <button
          className="py-3 px-10 bg-green-400 border border-black rounded hover:scale-110 hover:bg-green-600"
          type="button"
        >
          Cafe
        </button>
        <button
          className="py-3 px-10 bg-green-400 border border-black rounded hover:scale-110 hover:bg-green-600"
          type="button"
        >
          Museum
        </button>
        <button
          className="py-3 px-10 bg-green-400 border border-black rounded hover:scale-110 hover:bg-green-600"
          type="button"
        >
          Churches
        </button>
        <button
          className="py-3 px-10 bg-green-400 border border-black rounded hover:scale-110 hover:bg-green-600"
          type="button"
        >
          Billiards
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {places.map((place) => (
          <PlaceCard
            key={place.id} // Ensure we have a unique key for each item
            place={place.place || "Unknown Place"} // Default value if `place` is undefined
            description={place.description || "No description available"} // Default value
          />
        ))}
      </div>
    </div>
  );
}
