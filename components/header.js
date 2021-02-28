import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function header() {
  const [className, setClassName] = useState("md:px-20 md:py-10");

  const handleSidebar = () => {
    console.log("Hello");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setClassName("md:px-12 md:py-5 shadow-lg bg-white");
      } else {
        setClassName("md:px-20 md:py-10");
      }
    });
  });

  return (
    <header
      className={`flex justify-between items-center px-4 py-4 w-screen z-10 fixed duration-500 ${className}`}
    >
      <div className="flex items-center">
        <Image src="/logo.png" alt="Kabira's Logo" width={31} height={31} />
        <span className="hidden md:inline-block md:ml-2 text-lg md:text-3xl">
          |
        </span>
        <h1 className="hidden md:inline-block md:text-3xl font-semibold md:ml-2">
          Kabira
        </h1>
      </div>
      <img
        src="/menu.svg"
        alt="menu navbar"
        className="md:hidden inline-block cursor-pointer w-9"
        onClick={handleSidebar}
      />
      <ul className="hidden md:flex">
        <li className="mr-7">
          <Link href="/">
            <a className="font-semibold">Home</a>
          </Link>
        </li>
        <li className="mr-7">
          <Link href="/">
            <a className="font-semibold">Our Services</a>
          </Link>
        </li>
        <li className="mr-7">
          <Link href="/hello">
            <a className="font-semibold">Jobs</a>
          </Link>
        </li>
        <li className="mr-7">
          <Link href="/">
            <a className="font-semibold">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="font-semibold">Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
