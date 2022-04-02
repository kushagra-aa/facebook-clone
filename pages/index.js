import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
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
        <Feed posts={posts} />
        {/* WIDGETS */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return { props: { session, posts: docs } };
}
