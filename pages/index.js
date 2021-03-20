import Head from "next/head";
import Bigbanner from "../components/bigbanner";
import Service from "../components/service";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import ImgBox from "../components/ImgBox";
import Image from "../components/Reusables/Image";

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
      <Bigbanner />
      <div className="w-screen flex flex-col justify-center items-center md:px-12">
        {/* <Service /> */}
        <Title
          className="block text-center mt-14"
          value="Our Furniture Works"
        />
        <SubTitle
          className="block text-center mt-2"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <hr className="my-6" />
        <ImgBox className="pt-4">
          <Image src="/1.jpg" alt="test" />
          <Image src="/2.jpg" alt="test" />
          <Image src="/3.jpg" alt="test" />
          <Image src="/4.jpg" alt="test" />
        </ImgBox>
        <Title className="block text-center mt-12" value="Interior Works" />
        <SubTitle
          className="block text-center mt-2"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <hr className="my-6" />
        <ImgBox>
          <Image src="/5.jpg" alt="test" />
          <Image src="/6.jpg" alt="test" />
          <Image src="/7.jpg" alt="test" />
          <Image src="/8.jpg" alt="test" />
        </ImgBox>
        <hr className="my-6" />
      </div>
    </>
  );
}
