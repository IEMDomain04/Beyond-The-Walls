"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 bg-orange-50 px-6 md:px-10 shadow-md">
      {/* Logo Section */}
      <Link href={"/"}><div className="flex items-center space-x-3 cursor-pointer">
        <Image src="/assets/wall-icon.svg" width={40} height={40} alt="Wall icon" />
        <h1 className="text-xl font-semibold max-sm:text-base">Beyond the Walls</h1>
      </div>
      </Link>

      {/* Links Section */}
      <div className="hidden md:flex items-center space-x-10">
        <Link
          className="text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200"
          href={"/places"}
        >
          Places
        </Link>
      </div>

      {/* Buttons Section */}
      <div className="hidden md:flex items-center space-x-5">
        <button
          className="py-2 px-5 rounded-xl text-white bg-blue-800 cursor-pointer duration-200 hover:bg-blue-600"
          type="button"
          onClick={() => handleNavigation('/admin')}
        >
          Sign in
        </button>
        <button
          className="py-2 px-5 rounded-xl border border-solid border-blue-800 cursor-pointer duration-200 hover:bg-blue-300"
          type="button"
        >
          Register
        </button>
      </div>

      {/* Burger Menu for Smaller Screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded bg-orange-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-orange-50 flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
          <Link
            className="text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200"
            href={"/"}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200"
            href={"/about"}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-lg font-semibold cursor-pointer py-1 px-3 rounded hover:bg-orange-200 duration-200"
            href={"/places"}
            onClick={() => setIsMenuOpen(false)}
          >
            Places
          </Link>
          <button
            className="py-2 px-5 rounded-xl text-white bg-blue-800 cursor-pointer duration-200 hover:bg-blue-600"
            type="button"
          >
            Sign in
          </button>
          <button
            className="py-2 px-5 rounded-xl border border-solid border-blue-800 cursor-pointer duration-200 hover:bg-blue-300"
            type="button"
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
