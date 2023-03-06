import React from "react";
//import line4 from "./line 4.svg";
import side1 from "./side1.png";
import line5 from "./line5.png";
import line4 from "./line4.png";
import line1 from "./line1.png";
import line2 from "./line2.png";
import line3 from "./line3.png";
import line6 from "./line6.png";
import line7 from "./line7.png";
import line8 from "./line8.png";
import line9 from "./line9.png";
import line10 from "./line10.png";
import line11 from "./line11.png";
import line12 from "./line12.png";
import Image from "next/image";
const Plans = () => {
  return (
    <div>
      <section class="bg-white ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <Image className="sm:hidden" src={side1} alt="student carrer vyas" width={380} height={60} />
            <p class="mb-5 font-bold text-m text-black">
              🚀LAUNCH YOUR CAREER PROJECTILE START YOUR MENTORSHIP TODAY 🚀
            </p>
            <h1 className="text-4xl text-bold text-[#119DA4]">
              {"Let's"} make it your Best Investment
            </h1>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-white rounded-lg border shadow xl:p-8 text-black">
              <Image
                className=""
                src={line1}
                alt="student carrer vyas"
                width={320}
                height={100}
              />
              <p className="mt-1 text-[#119DA4] ">
                Group based Mentoring in group of
              </p>
              <p className="mr-24 text-[#119DA4]">4 JEE/NEET Aspirants</p>
              <div class="flex justify-center items-baseline my-8">
                <Image
                  className="mt-1"
                  src={line4}
                  alt="student carrer vyas"
                  width={300}
                  height={50}
                />
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <p className="text-[#119DA4] font-extrabold text-lg">
                  {"What's"} included
                </p>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size: <span class="font-semibold">1 developer</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support: <span class="font-semibold">6 months</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates: <span class="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 border-[#119DA4] shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-[#119DA4] rounded-lg border shadow xl:p-8 text-black">
              <Image
                className="mt-1"
                src={line2}
                alt="student carrer vyas"
                width={320}
                height={100}
              />
              <p className="text-[#D9DBE9] ">
                Group based Mentoring in group of
              </p>
              <p className="mr-24 text-[#D9DBE9]">4 JEE/NEET Aspirants</p>
              <div class="flex justify-center items-baseline my-8">
                <Image
                  className="mt-1"
                  src={line5}
                  alt="student carrer vyas"
                  width={300}
                  height={50}
                />
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <p className="text-[#D9DBE9] font-extrabold text-lg">
                  {"What's"} included
                </p>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#D9DBE9] rounded-full text-[#119DA4]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#D9DBE9] rounded-full text-[#119DA4]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#D9DBE9] rounded-full text-[#119DA4]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size: <span class="font-semibold">1 developer</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#D9DBE9] rounded-full text-[#119DA4]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support: <span class="font-semibold">6 months</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#D9DBE9] rounded-full text-[#119DA4]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates: <span class="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-white rounded-lg border shadow xl:p-8 text-black">
              <Image
                className="mt-1"
                src={line3}
                alt="student carrer vyas"
                width={320}
                height={100}
              />
              <p className="text-[#119DA4] ">
                Group based Mentoring in group of
              </p>
              <p className="mr-24 text-[#119DA4]">4 JEE/NEET Aspirants</p>
              <div class="flex justify-center items-baseline my-8">
                <Image
                  className="mt-1"
                  src={line6}
                  alt="student carrer vyas"
                  width={300}
                  height={50}
                />
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <p className="text-[#119DA4] font-extrabold text-lg">
                  {"What's"} included
                </p>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size: <span class="font-semibold">1 developer</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support: <span class="font-semibold">6 months</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 bg-[#119DA4] rounded-full text-[#D9DBE9]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates: <span class="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 border-[#119DA4] shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>


            <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-white rounded-lg border shadow xl:p-1 text-black">
              <Image
                className="mt-1"
                src={line1}
                alt="student carrer vyas"
                width={320}
                height={110}
              />
              
              <div class=" mt-20 p-4">
                              <div class="flex items-center mr-4 mb-2">
                                  <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" class="opacity-0 absolute h-8 w-8" />
                                  <div class="bg-[#D9DBE9] border-2 rounded-md border-[#D9DBE9] w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#119DA4]">
                                      <svg class="fill-current hidden w-3 h-3 text-[#119DA4] pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                          <g fill="none" fill-rule="evenodd">
                                              <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                              </g>
                                          </g>
                                      </svg>
                                  </div>
                                  <label for="A3-yes" class="select-none"><Image
                className="mt-1"
                src={line8}
                alt="student carrer vyas"
                width={320}
                height={100}
              /></label>
              </div>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 border-[#119DA4] shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
                              </div>   
                          
              </div>
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-[#119DA4] rounded-lg border shadow xl:p-1 text-black">
              <Image
                className="mt-1"
                src={line2}
                alt="student carrer vyas"
                width={320}
                height={110}
              />
              
              <div class=" mt-20 p-4">
                              <div class="flex items-center mr-4 mb-2">
                                  <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" class="opacity-0 absolute h-8 w-8" />
                                  <div class="bg-[#D9DBE9] border-2 rounded-md border-[#D9DBE9] w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#119DA4]">
                                      <svg class="fill-current hidden w-3 h-3 text-[#119DA4] pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                          <g fill="none" fill-rule="evenodd">
                                              <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                              </g>
                                          </g>
                                      </svg>
                                  </div>
                                  <label for="A3-yes" class="select-none"><Image
                className="mt-1"
                src={line7}
                alt="student carrer vyas"
                width={320}
                height={100}
              /></label>
              </div>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
                              </div>   
                          
              </div>
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-white rounded-lg border shadow xl:p-1 text-black">
              <Image
                className="mt-1"
                src={line3}
                alt="student carrer vyas"
                width={320}
                height={110}
              />
              
              <div class=" mt-20 p-4">
                              <div class="flex items-center mr-4 mb-2">
                                  <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" class="opacity-0 absolute h-8 w-8" />
                                  <div class="bg-[#D9DBE9] border-2 rounded-md border-[#D9DBE9] w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#119DA4]">
                                      <svg class="fill-current hidden w-3 h-3 text-[#119DA4] pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                          <g fill="none" fill-rule="evenodd">
                                              <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                              </g>
                                          </g>
                                      </svg>
                                  </div>
                                  <label for="A3-yes" class="select-none"><Image
                className="mt-1"
                src={line9}
                alt="student carrer vyas"
                width={320}
                height={100}
              /></label>
              </div>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 border-[#119DA4] shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
                              </div>   
                          
              </div>


              <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-white rounded-lg border shadow xl:p-1 text-black">
              <Image
                className="mt-1"
                src={line1}
                alt="student carrer vyas"
                width={320}
                height={110}
              />
              
              <div class=" mt-20 p-4">
                              <div class="flex items-center mr-4 mb-2">
                                  <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" class="opacity-0 absolute h-8 w-8" />
                                  <div class="bg-[#D9DBE9] border-2 rounded-md border-[#D9DBE9] w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#119DA4]">
                                      <svg class="fill-current hidden w-3 h-3 text-[#119DA4] pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                          <g fill="none" fill-rule="evenodd">
                                              <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                              </g>
                                          </g>
                                      </svg>
                                  </div>
                                  <label for="A3-yes" class="select-none"><Image
                className="mt-1"
                src={line10}
                alt="student carrer vyas"
                width={340}
                height={120}
              /></label>
              </div>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 border-[#119DA4] shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
                              </div>   
                          
              </div>
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-[#119DA4] rounded-lg border shadow xl:p-1 text-black">
              <Image
                className="mt-1"
                src={line2}
                alt="student carrer vyas"
                width={320}
                height={110}
              />
              
              <div class=" mt-20 p-4">
                              <div class="flex items-center mr-4 mb-2">
                                  <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" class="opacity-0 absolute h-8 w-8" />
                                  <div class="bg-[#D9DBE9] border-2 rounded-md border-[#D9DBE9] w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#119DA4]">
                                      <svg class="fill-current hidden w-3 h-3 text-[#119DA4] pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                          <g fill="none" fill-rule="evenodd">
                                              <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                              </g>
                                          </g>
                                      </svg>
                                  </div>
                                  <label for="A3-yes" class="select-none"><Image
                className="mt-1"
                src={line11}
                alt="student carrer vyas"
                width={320}
                height={100}
              /></label>
              </div>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
                              </div>   
                          
              </div>
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-white rounded-lg border shadow xl:p-1 text-black">
              <Image
                className="mt-1"
                src={line3}
                alt="student carrer vyas"
                width={320}
                height={110}
              />
              
              <div class=" mt-20 p-4">
                              <div class="flex items-center mr-4 mb-2">
                                  <input type="checkbox" id="A3-yes" name="A3-confirmation" value="yes" class="opacity-0 absolute h-8 w-8" />
                                  <div class="bg-[#D9DBE9] border-2 rounded-md border-[#D9DBE9] w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-[#119DA4]">
                                      <svg class="fill-current hidden w-3 h-3 text-[#119DA4] pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                          <g fill="none" fill-rule="evenodd">
                                              <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                              </g>
                                          </g>
                                      </svg>
                                  </div>
                                  <label for="A3-yes" class="select-none"><Image
                className="mt-1"
                src={line12}
                alt="student carrer vyas"
                width={320}
                height={100}
              /></label>
              </div>
              <a
                href="#"
                class=" bg-primary-600 rounded-full  hover:bg-[#119DA4] hover:text-white border-2 border-[#119DA4] shadow-xl focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center  text-[#119DA4] bg-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
                              </div>   
                          
              </div>


              </div>
              </div>
      </section>
    </div>
  );
};

export default Plans;
