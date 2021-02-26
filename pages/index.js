import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={utilStyles.header}>
        <h1 className={utilStyles.headingXl}>Kabira</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/">
              <a>Our Services</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </header>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {/* <Image src="/1.jpg" width="100%" height="100%" /> */}
      </Layout>
    </>
  );
}
