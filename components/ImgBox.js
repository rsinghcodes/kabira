import Image from "./Reusables/Image";

export default function ImgBox(props) {
  const { className, children } = props;
  return (
    <>
      <style jsx>{`
        .imgBox::-webkit-scrollbar {
          overflow: hidden;
        }
      `}</style>
      <div
        className={`imgBox w-full flex justify-start items-center overflow-y-hidden overflow-x-scroll ${className}`}
      >
        {children}
      </div>
    </>
  );
}
