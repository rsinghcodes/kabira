import Title from "./title";
import SubTitle from "./subTitle";

export default function bigbanner(props) {
  const { source, alt } = props;
  return (
    <div
      className="bg-banner bg-cover w-screen relative"
      style={{ height: "80vh" }}
    >
      {/* <img
        src={source}
        alt={alt}
        className="w-screen h-64 md:h-96 lg:min-h-75custom"
      /> */}
      <div
        className="flex justify-center items-center flex-col w-full h-full top-0 bottom-0 left-0 right-0"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <Title
          value="Convert your design into reality."
          className="text-gray-200"
        />
        <SubTitle
          className="mt-4 text-gray-200"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}
