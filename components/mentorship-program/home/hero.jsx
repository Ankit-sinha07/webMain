import Link from "next/link";
import React from "react";

export default function hero() {
  return (
    <div className="flex text-white items-center justify-center mt-16 flex-col lg:flex-row lg:px-8 xl:px-32 h-full">
      <div className="lg:w-1/2 flex flex-col justify-center mx-8 mb`-7">
        <div className="text-2xl mb-4">🚀🚀</div>
        <div className="text-2xl leading-9 sm:text-5xl sm:leading-[58px] mb-7">
          Skyrocket your <span className="text-[#6766FF]">JEE/NEET</span>{" "}
          preparation with Mentors from{" "}
          <span className="text-[#6766FF]">IITs and AIIMs</span>
        </div>
        <div className="text-[#979797] leading-7 sm:w-2/3">
          Bringing you the{" "}
          <span className="text-white mx-2">
            brightest minds from IITs and AIIMS
          </span>{" "}
          to make your dreams true
        </div>
        <div className="text-[#14FFEC] mt-12 mb-2">ABSOLUTELY FREE 😊</div>
        <Link href="#book-mentor">
          <div
            className="420:w-1/2 rounded-xl py-3 text-center cursor-pointer max-w-[300px]"
            style={{
              background:
                "linear-gradient(92.43deg, #6766FF 0%, #908FFF 97.66%)",
            }}
          >
            Book Your Session Now
          </div>
        </Link>
      </div>
      <div className="w-full px-6 lg:w-1/2 flex items-center justify-center h-full">
        <iframe
          className="overflow-hidden w-full h-[400px] max-w-[700px]"
          src="https://www.youtube.com/embed/P7mVptOciD0"
          title="All in one Mentorship Program | Achieve what you want with ease | by Career Vyas"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
