import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
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
      <main className="flex">
        {/* SIDEBAR */}
        <Sidebar />
        {/* FEED */}
        <Feed />
        {/* WIDGETS */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);
  return { props: { session } };
}
