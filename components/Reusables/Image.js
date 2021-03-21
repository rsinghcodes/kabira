import React from "react";

export default function Image(props) {
  const { src, alt } = props;
  return (
    <>
      <style jsx>{`
        .img {
          width: 300px;
          height: 200px;
          margin: 0 0.5rem;
          border-radius: 5px;
        }
      `}</style>
      <img className="img" alt={alt} src={src} />
    </>
  );
}
