export default function ImgBox(props) {
  const imagesyd = [
    {
      id: 1,
      name: "ImageOne",
      imgSrc: "/1.jpg",
    },
    {
      id: 2,
      name: "ImageTwo",
      imgSrc: "/1.jpg",
    },
    {
      id: 3,
      name: "ImageThree",
      imgSrc: "/1.jpg",
    },
    {
      id: 4,
      name: "ImageFour",
      imgSrc: "./1.jpg",
    },
  ];

  const { className } = props;
  return (
    <div
      className={`grid md:gap-6 md:grid-cols-4 justify-center grid-cols-1 gap-4 md:px-0 px-5 ${className}`}
    >
      <img className="w-full rounded lg:h-44" alt="test" src="/1.jpg" />
      <img className="w-full rounded lg:h-44" alt="test" src="/2.jpg" />
      <img className="w-full rounded lg:h-44" alt="test" src="/3.jpg" />
      <img className="w-full rounded lg:h-44" alt="test" src="/4.jpg" />
    </div>
  );
}
