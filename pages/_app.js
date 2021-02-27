import "../styles/globals.css";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
