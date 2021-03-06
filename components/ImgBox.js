import Image from "./Reusables/Image";

export default function ImgBox(props) {
  const { className, children } = props;
  return (
    <div
      className={`grid md:gap-6 md:grid-cols-4 justify-center grid-cols-1 gap-4 md:px-0 px-5 ${className}`}
    >
      {children}
    </div>
  );
}
