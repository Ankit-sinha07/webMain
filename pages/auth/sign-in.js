import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SignInComponent from "../../components/Auth/SignIn";
import Footer from "../../components/Footer/Footer";

export default function SignIn({ redirect }) {
  return (
    <>
      <Navbar background="#FFFFFF" />
      <SignInComponent redirect={redirect} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { redirect: context.query["redirect"] || null }, // will be passed to the page component as props
  };
}
