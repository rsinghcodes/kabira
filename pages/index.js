import Head from "next/head";
import Bigbanner from "../components/bigbanner";
import Service from "../components/service";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import ImgBox from "../components/ImgBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kabira | Home</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        ></link>
      </Head>
      <Bigbanner source="1.jpg" alt="Big banner" />
      <div className="w-screen md:px-12">
        <Service />
        <Title className="block text-center mt-7" value="Our Furniture Works" />
        <SubTitle
          className="block text-center mt-2"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <hr className="my-6" />
        <ImgBox />
        <Title className="block text-center mt-14" value="Interior Works" />
        <SubTitle
          className="block text-center mt-2"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <hr className="my-6" />
        <ImgBox className="mb-6" />
        <hr className="my-6" />
      </div>
    </>
  );
}
