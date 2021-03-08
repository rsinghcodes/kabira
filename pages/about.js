import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>Home | About</title>
      </Head>
      <div className="flex justify-center items-center w-screen h-screen">
        This is About Page.
      </div>
    </>
  );
}
