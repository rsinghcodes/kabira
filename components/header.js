import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: 1, src: "/", label: "Home" },
  { id: 2, src: "/services", label: "Our Services" },
  { id: 4, src: "/about", label: "About" },
];

export default function header() {
  const [className, setClassName] = useState("md:px-20 md:py-10");
  const [toggleNavbar, setToggleNavbar] = useState("-left-full md:left-0");
  const [iconCross, setIconCross] = useState("hidden");
  const [iconMenu, setIconMenu] = useState("inline-block");

  const handleSidebar = () => {
    if (toggleNavbar == "left-0") {
      setToggleNavbar("-left-full md:left-0");
      setIconCross("hidden");
      setIconMenu("inline-block");
    } else {
      setToggleNavbar("left-0");
      setIconCross("inline-block");
      setIconMenu("hidden");
    }
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
      className={`flex justify-between items-center px-4 py-3 w-screen z-10 fixed duration-500 ${className}`}
    >
      <Link href="/">
        <a className="flex items-center">
          <img
            src="/logo.png"
            alt="Kabira's Logo"
            className="w-7 md:hidden inline-block"
          />
          <h1 className="hidden md:inline-block md:text-3xl font-semibold md:ml-2">
            Kabira
          </h1>
        </a>
      </Link>
      <svg
        className={`h-8 w-8 md:hidden ${iconMenu} cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        onClick={handleSidebar}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <svg
        className={`h-8 w-8 cursor-pointer md:hidden ${iconCross}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        onClick={handleSidebar}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <ul
        className={`min-h-screen md:min-h-0 w-48 md:w-auto flex flex-col md:flex-row item-start md:items-center justify-start md:bg-transparent bg-white fixed md:relative top-0 ${toggleNavbar} duration-500 p-8 md:p-0 md:shadow-none shadow-lg`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="mb-8 md:mr-7 md:mb-0"
            onClick={handleSidebar}
          >
            <Link href={item.src}>
              <a className="md:font-normal font-medium">{item.label}</a>
            </Link>
          </li>
        ))}
        <li onClick={handleSidebar}>
          <Link href="/contact">
            <a className="md:font-normal font-medium">Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
