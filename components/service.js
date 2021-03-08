import React from "react";
import ServiceIcon from "./Reusables/ServiceIcon";

export default function service() {
  return (
    <div
      className="md:h-24 md:w-4/5 w-screen h-14 py-4 flex justify-around items-center bg-white shadow-xl md:rounded-md"
      style={{ transform: "translateY(-1.8rem)" }}
    >
      <ServiceIcon src="/sofa.png" alt="Sofa Making" />
      <ServiceIcon src="/bed.png" alt="Bed Making" />
      <ServiceIcon src="/interiorDesign.png" alt="Interior Design" />
      <ServiceIcon src="/godrej.png" alt="Almirah Making" />
      <ServiceIcon src="/window.png" alt="Window Design" />
      <ServiceIcon src="/PaintRoller.png" alt="Wall Painting" />
    </div>
  );
}
