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
          <Image src="/logo.png" alt="Kabira's Logo" width={31} height={31} />
          <span className="hidden md:inline-block md:ml-2 text-lg md:text-3xl">
            |
          </span>
          <h1 className="hidden md:inline-block md:text-3xl font-semibold md:ml-2">
            Kabira
          </h1>
        </a>
      </Link>

      <img
        src="/menu.svg"
        alt="menu navbar"
        className={`md:hidden ${iconMenu} cursor-pointer w-7`}
        onClick={handleSidebar}
      />
      <img
        src="/cross.svg"
        alt="menu navbar"
        className={`md:hidden ${iconCross} cursor-pointer w-5`}
        onClick={handleSidebar}
      />
      <ul
        className={`h-screen w-3/5 md:h-0 flex flex-col md:flex-row items-center md:items-center justify-start md:bg-transparent bg-white fixed md:relative top-0 ${toggleNavbar} duration-500 p-8 md:p-0 shadow-lg`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="mb-8 md:mr-7 md:mb-0 border-b-2 md:border-b-0"
            onClick={handleSidebar}
          >
            <Link href={item.src}>
              <a className="font-semibold">{item.label}</a>
            </Link>
          </li>
        ))}
        <li className="border-b-2 md:border-b-0" onClick={handleSidebar}>
          <Link href="/contact">
            <a className="font-semibold">Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
