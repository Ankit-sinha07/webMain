import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Team/Main";
import Head from "next/head";

export default function Team() {
  return (
    <>
      <Head>
        <title>Career Vyas Team</title>
        <meta name="description" content="Members of CareerVyas Community" />
        <meta name="title" content="Career Vyas Team" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
