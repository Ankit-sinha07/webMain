import React from "react";
import Navbar from "../../../components/mentorship-program/Navbar.jsx";
import Footer from "../../../components/mentorship-program/Footer.jsx";
import Main from "../../../components/mentorship-program/pay/Main.jsx";
import { initializeFirebase } from "../../../components/Firebase/index.js";

export default function pay(props) {
  initializeFirebase();
  return (
    <div className="bg-black">
      <Navbar />
      <Main {...props} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const pricingData = [
    {
      planFor: "Group Mentoring",
      planType: "Basic",
      planShortDesc: "Group based Mentoring in Group of 4 JEE/NEET Aspirants",
      orignalPrice: ["999", "2999", "5999"],
      discountedPrice: ["399", "999", "1999"],
      whatsIncluded: [
        "4 Group Mentoring Session",
        "1-2 Individual Mentoring Session",
        "Doubt solving by mentor",
        "24x7 Chat Support",
        "Community Support",
        "Toppers RoadMap",
      ],
      razorPayLinks: [
        "/mentorship-program/pay?course=0&duration=0",
        "/mentorship-program/pay?course=0&duration=1",
        "/mentorship-program/pay?course=0&duration=2",
      ],
    },
    {
      planFor: "Personal",
      planType: "Pro",
      planShortDesc:
        "1 on 1 Mentorship Program with Personalized IIT/AIIMS Mentor.",
      orignalPrice: ["1999", "5999", "11999"],
      discountedPrice: ["699", "1799", "3499"],
      whatsIncluded: [
        "Personal IIT/AIIMS Mentor",
        "Mock Test Analysis",
        "Progress Track",
        "Parents-Mentor Meet",
        "24x7 Chat Support",
        "Toppers RoadMap",
        "Exclusive Community Access",
        "Doubt Solving by Mentor",
      ],
      razorPayLinks: [
        "/mentorship-program/pay?course=1&duration=0",
        "/mentorship-program/pay?course=1&duration=1",
        "/mentorship-program/pay?course=1&duration=2",
      ],
    },
  ];

  try {
    const { course, duration, code } = context.query;
    const courseData = pricingData[course];
    const orignalPrice = courseData.orignalPrice[duration];
    const discountedPrice = courseData.discountedPrice[duration];
    return {
      props: { courseData, orignalPrice, discountedPrice, code: code || null },
    };
  } catch (e) {
    return {
      props: { error: true },
    };
  }
}
