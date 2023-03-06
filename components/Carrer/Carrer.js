import Card from "./Card";
import Lines1 from "../Elements/Lines1";
import side1 from "./images/side1.png";
import side2 from "./images/side2.png";
import side3 from "./images/side3.png";
import side4 from "./images/side4.png";
import Lines from "../Elements/Lines";
import EllipseSide from "../Elements/EllipseSide";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import Image from "next/image";

const data = [
  {
    title: "Cohort Shala",
    content:
      "Peer to Peer Learning Platform to connect you with  with aspiring IITians, NITians, AIIMSonians.",
  },
  {
    title: "Content Libraries",
    content:
      "A curated database of colleges, courses, and career profiles that address admission-related queries.",
  },
  {
    title: "Mentoring and Guidance",
    content:
      "Connect you with experienced mentors who can answer all your queries related to IIT JEE/ NEET.",
  },
  {
    title: "College Vyas",
    content:
      "Personalised Sessions to assist students in determining the best career option for them.",
  },
];

export default function Carrer() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center py-20
    relative overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row items-center ">
        <div className="lg:w-1/2">
          <Carousel />
        </div>
        <div class="container mx-1">
  <section class="mb-32 text-gray-800 text-center">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">
      <div class="mb-12 lg:mb-0 relative">
      <Image className="sm:hidden flex i rounded-xl" src={side1} alt="student carrer vyas" width={100} height={90} />
        <h5 class="text-lg font-medium text-blue-600 font-bold mb-4">350+</h5>
        <h6 class="font-medium text-gray-500">Total Live Hours</h6>
      </div>

      <div class="mb-12 lg:mb-0 relative">
      <Image className="sm:hidden rounded-xl" src={side2} alt="student carrer vyas" width={100} height={90} />
        <h5 class="text-lg font-medium text-blue-600 font-bold mb-4">300+</h5>
        <h6 class="font-medium text-gray-500">Total Live Hours</h6>

      </div>

      <div class="mb-12 md:mb-0 relative">
      <Image className="sm:hidden rounded-xl" src={side3} alt="student carrer vyas" width={100} height={90} />
        <h5 class="text-lg font-medium text-blue-600 font-bold mb-4">350+</h5>
        <h6 class="font-medium text-gray-500">Total Live Hours</h6>

      </div>

      <div class="relative">
      <Image className="sm:hidden rounded-xl" src={side4} alt="student carrer vyas" width={100} height={90} />
        <h5 class="text-lg font-medium text-blue-600 font-bold mb-4">500+</h5>
        <h6 class="font-medium text-gray-500">Total Live Hours</h6>
      </div>
    </div>
  </section>

  
</div>
      </div>
      
    </div>
  );
}
