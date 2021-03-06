import React from "react";

export default function Image(props) {
  const { src, alt } = props;
  return <img className="w-full rounded lg:h-44 h-full" alt={alt} src={src} />;
}
