import Head from "next/head";
import Bigbanner from "../components/bigbanner";
import WorkBox from "../components/workBox";
import Title from "../components/title";
import SubTitle from "../components/subTitle";
import RecentWorks from "../components/recentWorks";
import Testimonial from "../components/testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kabira | Home</title>
      </Head>
      <Bigbanner />
      <div className="w-screen flex flex-col justify-center items-center md:px-12">
        <WorkBox
          title="Our Furniture Works"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgOneSrc="/1.jpg"
          imgOneAlt="test"
          imgTwoSrc="/2.jpg"
          imgTwoAlt="test"
          imgThreeSrc="/3.jpg"
          imgThreeAlt="test"
          imgFourSrc="/4.jpg"
          imgFourAlt="test"
        />
        <WorkBox
          title="Interior Works"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgOneSrc="/5.jpg"
          imgOneAlt="test"
          imgTwoSrc="/6.jpg"
          imgTwoAlt="test"
          imgThreeSrc="/7.jpg"
          imgThreeAlt="test"
          imgFourSrc="/8.jpg"
          imgFourAlt="test"
        />
        <Title className="block text-center mt-14" value="Recent Works" />
        <SubTitle
          className="block text-center mt-2"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <hr className="my-6 z-50" />
        <RecentWorks />
        <Title className="block text-center mt-14" value="Testimonials" />
        <SubTitle
          className="block text-center mt-2"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Testimonial />
      </div>
    </>
  );
}
