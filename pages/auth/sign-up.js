import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SignUpComponent from "../../components/Auth/SignUp";
import Footer from "../../components/Footer/Footer";

export default function SignUp() {
  return (
    <>
      <Navbar background="#FFFFFF" />
      <SignUpComponent />
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  return {
    props: { redirect: context.query["redirect"] || null }, // will be passed to the page component as props
  };
}
