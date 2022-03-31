import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>My Social</title>
        <meta
          name="description"
          content="My Social is a facebook clone that is a social media platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <Header />
      <main className="">
        {/* SIDEBAR */}
        {/* FEED */}
        {/* WIDGETS */}
      </main>
    </div>
  );
}
