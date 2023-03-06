import React from "react";
import Image from "next/image";
import ImagePointing from "./Images/ImagePointing.png";
import Link from "next/link";

const ThumbSVG = (props) => (
  <svg
    {...props}
    width="87"
    height="76"
    viewBox="0 0 87 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="87" height="76" fill="url(#pattern4)" />
    <defs>
      <pattern
        id="pattern4"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_311_564"
          transform="translate(-4.13477 -12.3994) scale(0.00514403 0.00587406)"
        />
      </pattern>
      <image
        id="image0_311_564"
        width="1063"
        height="4096"
      />
    </defs>
  </svg>
);
export default function Quiz() {
  return (
    <div className="text-white">
      <div className="relative mt-28 flex justify-center items-center lg:px-16 xl:px-32">
        <div className="hidden md:flex">
          <Image
            src={ImagePointing}
            width={400}
            height={400}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col w-full sm:w-2/3 mx-12">
          <div className="text-[#6766FF] font-bold text-4xl">
            Assess Your Preparation by giving Just a Small Quiz
          </div>
          <div className="text-base mt-8 leading-8 w-full sm:w-4/5">
            We have curated well researched Quiz to assess your Preparation.
            <br />
            Start it Now by clicking the Link below !!
          </div>
          <div className="mt-8">
            <div className="text-[#14FFEC] mb-2">ABSOLUTELY FREE 😀</div>
            <Link href="/mentorship-program/quiz">
              <div
                className="420:w-2/5 rounded-xl py-3 min-w-[200px] text-center cursor-pointer"
                style={{
                  background:
                    "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
                }}
              >
                Start Quiz Now
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="mx-12 sm:mx-20 lg:mx-44 mt-24 px-5 py-6 sm:px-11 sm:py-10 flex flex-col md:flex-row justify-between items-center rounded-[18px]"
        style={{
          background: "linear-gradient(180deg, #908FFF 0%, #6766FF 100%)",
        }}
      >
        <div className="flex flex-col">
          <div className="mb-4 text-base sm:text-2xl font-bold">
            Know the level of your Preparation
          </div>
          <div className="sm:font-bold text-xs sm:text-lg lg:w-2/3 leading-5 sm:leading-7">
            Give this exciting Quiz and know How much you are prepared for the
            D-Day.
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-row justify-center items-center">
          <ThumbSVG className="hidden 420:block scale-x-[-1] md:scale-x-[1] mx-4" />
          <Link href="/mentorship-program/quiz">
            <div
              className="cursor-pointer text-center mt-6 420:m-0 bg-white h-fit py-4 text-[#6766FF] px-6 rounded-xl"
              style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1);" }}
            >
              START YOUR TEST
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}