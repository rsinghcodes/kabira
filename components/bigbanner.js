import Title from "./title";
import SubTitle from "./subTitle";

export default function bigbanner() {
  return (
    <div
      className="flex items-stretch bg-banner bg-cover w-screen relative"
      style={{ height: "80vh" }}
    >
      <div
        className="flex justify-end items-center flex-col w-full h-full pb-20"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <Title
          value="Convert your design into reality."
          className="text-gray-200 text-center"
        />
        <SubTitle
          className="mt-4 text-gray-200 text-center"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}
