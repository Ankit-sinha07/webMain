import React, { useEffect } from "react";
import queryData from "./queryData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import LeftArrow from "./Elements/LeftArrow";
import RightArrow from "./Elements/RightArrow";
import Image from "next/image";
import side1 from "./side1.svg";
import side2 from "./side2.svg";
import side3 from "./side3.svg";
import side4 from "./side4.png";
import side5 from "./side5.svg";
import of from "./of.svg";
import side6 from "./side6.svg";
import { TbExternalLink } from 'react-icons/tb';
import Link from "next/link";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1250 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

const QueryComponent = ({ query }) => {
  return (
    <div className="flex shadow-lg border-[1px] flex-col w-[270px] lg:w-[360px] h-[424px] lg:h-[360px] 700:mx-4">
      <div className="w-full flex items-center px-6 h-[80px] bg-[#6776FF]">
        <div className="rounded-full bg-white px-[5px] mr-4">
          <Image src={query.askedBy.image} width="64px" height="64px" />
        </div>
        <div className="flex flex-col text-2xl w-full text-white">
          <p className="text-base">{query.askedBy.name}</p>
          <p className="text-xs opacity-80">{query.askedBy.class}</p>
        </div>
        <div className="text-sm bg-white px-4 py-1 rounded-md text-[#6776FF]">
          {query.askedBy.board}
        </div>
      </div>
      <div>
        <h1 className="text-sm mt-4 text-[#6776FF] px-4 line-clamp-2">
          {query.title}
        </h1>
        <h1 className="text-xs mt-4 px-4 line-clamp-[16] lg:line-clamp-[12]">
          {query.query}
        </h1>
      </div>
    </div>
  );
};

export default function QueriesAskedByYou() {
  const carouselRef = useRef(null);
  let intervalId;

  return (
  <div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-3 flex-row justify-center">
    <Image className="sm:hidden " src={of} alt="student carrer vyas" width={60} height={80} />
      <h1 class="sm:text-3xl text-2xl font-bold title-font mr-2 mt-5 text-gray-900">Our Offerings</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
          <Image className="sm:hidden" src={side1} alt="student carrer vyas" width={270} height={280} />
          </div>
          <h2 class="text-lg text-emerald-600 font-bold title-font mb-2">24x7 Chat Support</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex amet, soluta nihil rerum quam animi obcaecati similique? Ullam, nesciunt.</p>
          <a class="text-emerald-500 inline-flex items-center mt-2 md:mb-2 lg:mb-0 underline">Check it out How? <TbExternalLink className="w-6 h-4"/></a>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <div class="w-14 h-10 inline-flex items-center justify-center rounded-full mb-2">
          <Image className="sm:hidden" src={side2} alt="student carrer vyas" width={270} height={280} />
          </div>
          <h2 class="text-lg text-emerald-600 font-bold title-font mb-2">Personalized Sessions</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex amet, soluta nihil rerum quam animi obcaecati similique? Ullam, nesciunt.</p>
          <a class="text-emerald-500 inline-flex items-center mt-2 md:mb-2 lg:mb-0 underline">Check it out How? <TbExternalLink className="w-6 h-4"/></a>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
        <div class="w-16 h-10 inline-flex items-center justify-center rounded-full mb-2">
          <Image className="sm:hidden" src={side3} alt="student carrer vyas" width={270} height={280} />
          </div>
          <h2 class="text-lg text-emerald-600 font-bold title-font mb-2">Connect to Mentor</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex amet, soluta nihil rerum quam animi obcaecati similique? Ullam, nesciunt.</p>
          <a class="text-emerald-500 inline-flex items-center mt-2 md:mb-2 lg:mb-0 underline">Check it out How? <TbExternalLink className="w-6 h-4"/></a>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
          <Image className="sm:hidden w-24" src={side4} alt="student carrer vyas" width={90} height={140} />
          </div>
          <h2 class="text-lg text-emerald-600 font-bold title-font mb-2">Exclusive Community</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex amet, soluta nihil rerum quam animi obcaecati similique? Ullam, nesciunt.</p>
          <a class="text-emerald-500 inline-flex items-center mt-2 md:mb-2 lg:mb-0 underline cursor-pointer">Check it out How? <TbExternalLink className="w-6 h-4"/></a>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
          <Image className="sm:hidden" src={side5} alt="student carrer vyas" width={270} height={280} />
          </div>
          <h2 class="text-lg text-emerald-600 font-bold title-font mb-2">Doubt Solving</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex amet, soluta nihil rerum quam animi obcaecati similique? Ullam, nesciunt.</p>
          <a class="underline text-emerald-500 inline-flex items-center mt-2 md:mb-2 lg:mb-0">Check it out How? <TbExternalLink className="w-6 h-4"/></a>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
          <Image className="sm:hidden" src={side6} alt="student carrer vyas" width={270} height={280} />
          </div>
          <h2 class="text-lg text-emerald-600 font-bold title-font mb-2">Study Groups</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex amet, soluta nihil rerum quam animi obcaecati similique? Ullam, nesciunt.</p>
          <a class="underline text-emerald-500 inline-flex items-center mt-2 md:mb-2 lg:mb-0">Check it out How? <TbExternalLink className="w-6 h-4"/></a>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-black bg-white border-2 border-black bo py-2 px-8 focus:outline-none hover:bg-orange-100 rounded-lg text-lg">Registor For this Mentorship Program Now!</button>
  </div>
</section>
  </div>
    
  );
}
