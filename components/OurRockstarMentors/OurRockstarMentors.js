import React, { useState } from "react";
import Modal from "../Modal/Modal";
import mentorsData from "./data";
import Link from "next/link";
import Image from "next/image";
import side1 from "./Images/side1.png"
import of from "./of.svg"
import { useEffect } from "react";
const MentorCard = ({ mentorData }) => {
  return (
    <div className="w-[200px] mr-8 h-fit">
      <div className="w-[200px] my-4 flex flex-col items-center justify-center">
        <div className="w-[120px] h-[120px] rounded-full border-2 border-[#6776FF] overflow-hidden">
          <Image src={mentorData.image} width={120} height={120} />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center">
          <h1 className="font-semibold text-sm">{mentorData.name}</h1>
          <h1 className="text-[#6776FF] font-extrabold text-[8px] mb-2">
            {mentorData.college.toUpperCase()}
          </h1>
          <h1 className="px-2 bg-[#6776FF] text-white text-[8px] rounded-sm">
            {mentorData.role}
          </h1>
        </div>
      </div>
    </div>
  );
};
const CrossIcon = () => (
  <svg
    className="relative float-right"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9998 28.3334C22.3636 28.3334 28.3332 22.3639 28.3332 15.0001C28.3332 7.63628 22.3636 1.66675 14.9998 1.66675C7.63604 1.66675 1.6665 7.63628 1.6665 15.0001C1.6665 22.3639 7.63604 28.3334 14.9998 28.3334Z"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 11L11 19"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 11L19 19"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function OurRockstarMentors() {
  let scroll = 1;
  function pageScroll() {
    const container = document.getElementById("scrollContainer");
    if (
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 50
    ) {
      container.scrollBy(-1, 0);
      scroll = -1;
    }
    if (container.scrollLeft === 50) {
      scroll = 1;
    }
    container.scrollBy(scroll, 0);
    return setTimeout(pageScroll, 20);
  }
  useEffect(() => {
    let timeout = pageScroll();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="bg-white flex flex-col py-12">
      <div class="flex flex-wrap w-full mb-3 flex-row justify-center">
    <Image className="sm:hidden" src={of} alt="student carrer vyas" width={60} height={80} />
      <h1 class="sm:text-4xl text-2xl font-bold title-font mr-2 mt-5 text-gray-900">Our Mentors</h1>
    </div>

        <div
          id="scrollContainer"
          className="overflow-x-scroll flex 2xl:justify-center scrollbar-hide"
        >
          {mentorsData.map((mentorData, index) => (
            <MentorCard mentorData={mentorData} key={index} />
          ))}
        </div>
        <Link href="/mentorship-program#book-mentor">
          <div className="cursor-pointer w-full grid place-items-center mt-8">
            <div className="p-3 border-2 border-black rounded-xl bg-white hover:bg-orange-100 text-center font-extrabold">
              Connect Now
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
