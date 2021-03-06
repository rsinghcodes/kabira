import React from "react";
import ServiceIcon from "./Reusables/ServiceIcon";

export default function service() {
  return (
    <div
      className="h-24 flex justify-around items-center bg-white shadow-xl rounded-md"
      style={{ transform: "translateY(-1.8rem)" }}
    >
      <ServiceIcon src="/Armchair.png" alt="Sofa Making" />
      <ServiceIcon src="/Bed.png" alt="Bed Making" />
      <ServiceIcon src="/Design.png" alt="Interior Design" />
      <ServiceIcon src="/Closet.png" alt="Almirah Making" />
      <ServiceIcon src="/OpenWindow.png" alt="Window Design" />
    </div>
  );
}
