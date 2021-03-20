import React from "react";
import Link from "next/link";
import ServiceIcon from "./Reusables/ServiceIcon";

const servicesImg = [
  { src: "/sofa.png", alt: "Sofa Making" },
  { src: "/interiorDesign.png", alt: "Interior Design" },
  { src: "/bed.png", alt: "Bed Making" },
  { src: "/godrej.png", alt: "Almirah Making" },
  { src: "/window.png", alt: "Window Design" },
  { src: "/PaintRoller.png", alt: "Wall Painting" },
];

export default function service() {
  return (
    <div
      className="md:h-24 md:w-4/5 w-screen h-14 py-4 flex justify-around items-center bg-white shadow-xl md:rounded-md"
      style={{ transform: "translateY(-1.8rem)" }}
    >
      {/* {servicesImg.map((serviceImg) => {
        <Link href="/services">
          <a>
            <ServiceIcon src={serviceImg.src} alt={serviceImg.alt} />
          </a>
        </Link>;
      })} */}
      <Link href="/services">
        <a>
          <ServiceIcon src="/sofa.png" alt="Sofa Making" />
        </a>
      </Link>
      <Link href="/services">
        <a>
          <ServiceIcon src="/interiorDesign.png" alt="Interior Design" />
        </a>
      </Link>
      <Link href="/services">
        <a>
          <ServiceIcon src="/bed.png" alt="Bed Making" />
        </a>
      </Link>
      <Link href="/services">
        <a>
          <ServiceIcon src="/godrej.png" alt="Almirah Making" />
        </a>
      </Link>
      <Link href="/services">
        <a>
          <ServiceIcon src="/window.png" alt="Window Design" />
        </a>
      </Link>
      <Link href="/services">
        <a>
          <ServiceIcon src="PaintRoller.png" alt="Wall Painting" />
        </a>
      </Link>
    </div>
  );
}
