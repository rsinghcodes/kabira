import Head from "next/head";
import Bigbanner from "../components/bigbanner";
import Service from "../components/service";
import Title from "../components/title";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kabira | Home</title>
      </Head>
      <Bigbanner source="1.jpg" alt="Big banner" />
      <div className="w-screen md:px-12">
        <Service />
        <Title className="block text-center" value="Our Furniture Works" />
      </div>
    </>
  );
}
