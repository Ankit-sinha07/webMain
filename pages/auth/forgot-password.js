import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ForgotPasswordComponent from "../../components/Auth/ForgotPassword";
import Footer from "../../components/Footer/Footer";

export default function SignIn() {
  return (
    <>
      <Navbar background="#FFFFFF" />
      <ForgotPasswordComponent />
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  return {
    props: { redirect: context.query["redirect"] || null }, // will be passed to the page component as props
  };
}
