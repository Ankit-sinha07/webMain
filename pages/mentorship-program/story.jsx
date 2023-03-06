import React from "react";
import Navbar from "../../components/mentorship-program/Navbar.jsx";
import Main from "../../components/mentorship-program/story/story.jsx";
import MentorShipForm from "../../components/Forms/MentorShipForm";
import Footer from "../../components/mentorship-program/Footer.jsx";
import Head from "next/head.js";
export default function Story() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-black" style={{ fontFamily: "Lato" }}>
        <Navbar />
        <Main />
        <div
          id="book-mentor"
          className="px-4 420:px-12 sm:px-24 md:px-48 py-20 sm:py-44"
        >
          <MentorShipForm />
        </div>
        <Footer />
      </div>
    </>
  );
}
