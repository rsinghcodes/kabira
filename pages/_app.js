import "../styles/globals.css";
import Header from "../components/header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Header />
      <main className="overflow-hidden">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
