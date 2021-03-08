import React from "react";

export default function ServiceIcon(props) {
  const { src, alt } = props;
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={src} alt={alt} className="w-8" />
      <p className="hidden md:block text-sm mt-1">{alt}</p>
    </div>
  );
}
