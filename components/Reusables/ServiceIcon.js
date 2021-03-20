import React from "react";

export default function ServiceIcon(props) {
  const { src, alt } = props;
  return (
    <div className="grid place-items-center">
      <img src={src} alt={alt} className="w-8" />
      <p className="text-sm mt-1">{alt}</p>
    </div>
  );
}
