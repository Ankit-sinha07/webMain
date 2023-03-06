import Card from "./Card";
import Image from "next/image";
import side1 from "./images/side1.png";
import mobile from "./images/mobile.png";
import play from "./images/play.svg";
import Bolt from "./Elements/Bolt";
import BlueRipple from "./images/blueripple.png";
import side2 from "./images/side2.png";
import side3 from "./images/side3.png";
import side12 from "./images/side12.png";
import side13 from "./images/side13.png";
import side4 from "./images/side4.png";
import sideP from "./images/side5-2.png";
import side11 from "./images/side11.png";
import g1 from "./images/g1.png";
import side5 from "./images/side5.png";
import of from "./of.svg"
import side7 from "./images/side7.png";
import side10 from "./images/side10.png";
import side8 from "./images/side8.png";
import iit from "./images/iit.svg";
import side6 from "./images/side6.png";
import Ellipse from "./Elements/Ellipse";
import Lines from "./Elements/Lines";
import Arrow from "./Elements/arrow";
import { motion } from "framer-motion";
import Link from "next/link";

const DownloadIcon = ({ icon }) => (
  <div className="cursor-pointer mix-blend-darken">
    <Image
      src={icon}
      alt="app carrer vyas"
      width={500}
      height={300}
      objectFit="cover"
    />
  </div>
);

export default function About() {
  return (
    <div>
      
      <div class="w-full h-full rounded-md mt-5 p-2 md:pl-1">
            <Image className="sm:hidden" src={side1} alt="student carrer vyas" width={680} height={390} />
        </div>
        <div class="mt-28 flex justify-center object-center w-full h-full rounded-md p-2 md:pl-1">
        <Image className="" src={side3} alt="student carrer vyas" width={290} height={60} />
            <Image className="sm:hidden" src={side2} alt="student carrer vyas" width={1080} height={390} />
        <Image className="" src={side4} alt="student carrer vyas" width={270} height={60} />
        </div>
        <p className="text-bold text-4xl flex justify-center" ># Bridging the gap between School to College </p>
        <div
        class="flex flex-col lg:flex-row justify-center items-center md:mx-6"
      >
        <Image className="sm:hidden mt-4" src={sideP} alt="student carrer vyas" width={880} height={690} />
        <div
          class="lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
        >
          <Image class="bg-[#0C7489] mx-auto mt-2 mb-4 w-36 h-36" src={side5} alt="Neil Avatar" width={5450} height={2550}/>
        </div>
        
      </div>
        <div class="bg-blue-700 bg-opacity-25">
      <section class="mt-4 text-gray-600 body-font">
  <div class=" container px-2 py-2 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
      </div>
    </div>
    <div class="flex flex-wrap w-full mb-3 flex-row justify-center">
    <Image className="sm:hidden" src={of} alt="student carrer vyas" width={60} height={80} />
      <h1 class="sm:text-4xl text-2xl font-bold title-font mr-2 mt-5 text-black">Our Mentors Come From</h1>
    </div>
    
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/6 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
        <Image class="h-40 hover:bg-orange-100 rounded-lg w-full object-cover object-center mb-6" src={iit} alt="content"width={100} height={120}/>
        </div>
      </div>
      <div class="xl:w-1/6 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
        <Image class="h-40 hover:bg-orange-100 rounded-lg w-full object-cover object-center mb-6" src={iit} alt="content"width={100} height={120}/>
        </div>
      </div>
      <div class="xl:w-1/6 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
          <Image class="h-40 hover:bg-orange-100 rounded-lg w-full object-cover object-center mb-6" src={iit} alt="content"width={100} height={120}/>
        </div>
      </div>
      <div class="xl:w-1/6 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
        <Image class="h-40 hover:bg-orange-100 rounded-lg w-full object-cover object-center mb-6" src={iit} alt="content"width={100} height={120}/>
        </div>
      </div>
      <div class="xl:w-1/6 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
        <Image class="h-40 hover:bg-orange-100 rounded-lg w-full object-cover object-center mb-6" src={iit} alt="content"width={100} height={120}/>
        </div>
      </div>
      <div class="xl:w-1/6 md:w-1/2 p-4">
        <div class="p-6 rounded-lg">
        <Image class="h-40 hover:bg-orange-100 rounded-lg w-full object-cover object-center mb-6" src={iit} alt="content"width={100} height={120}/>
        </div>
      </div>
      
    </div>
    
    </div>
</section>
  </div>
  <Link href="/mentorship-program#book-mentor">
          <div className="cursor-pointer w-full grid place-items-center mt-8">
            <div className="p-3 shadow-md border-2 border-black rounded-xl bg-white hover:bg-orange-100 text-center font-extrabold">
              Start your Journey Now
            </div>
          </div>
        </Link>
      <div class=" flex justify-center object-center w-full h-full rounded-md p-2 md:pl-1">
      <div class="container mx-auto">
      <div
        class="flex flex-col lg:flex-row justify-center items-center md:mx-6"
      >
        <Image className="sm:hidden" src={side11} alt="student carrer vyas" width={880} height={590} />
        <div
          class="lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
        >
          <Image class="bg-[#0C7489] mx-auto mt-2 mb-4 w-36 h-36" src={side12} alt="Neil Avatar" width={5450} height={2550}/>
        </div>
        
      </div>
      
    </div>
        </div>
        <div class="flex justify-center object-center w-full h-full rounded-md p-2 md:pl-1">
        <div
        class="flex flex-col lg:flex-row justify-center items-center md:mx-6"
      >
        <Image class="bg-[#0C7489] mt-2 mb-4 w-36 h-36" src={side7} alt="Neil Avatar" width={7450} height={3550}/>
        <div
          class="lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
        >
          
        </div>
        
      </div>
        </div>
        
        <div class="container my-24 px-6 mx-auto">
        <section class="bg-white ">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div>

    
    </div>
      {/*<div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400">
          <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={g1} alt="Neil Avatar" width={100} height={100}/>
              <p class="text-[#119DA4] font-bold">Shivam Mishra</p>
              <p class="text-[#119DA4] border-2 border-black p-1 rounded-lg shadow-lg hover:text-white hover:bg-black font-bold">Co-Founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                     
                  </li>
                  <li>
                      
                  </li>
                  <li>
                      
                  </li>
                  <li>
                       
                  </li> 
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
          <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={g1} alt="Neil Avatar" width={100} height={100}/>
              <p class="text-[#119DA4] font-bold">Garvit Gupta</p>
              <p class="text-[#119DA4] border-2 border-black p-1 rounded-lg shadow-lg hover:text-white hover:bg-black font-bold">Co-Founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                     
                  </li>
                  <li>
                      
                  </li>
                  <li>
                      
                  </li>
                  <li>
                       
                  </li> 
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
          <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={g1} alt="Neil Avatar" width={100} height={100}/>
              <p class="text-[#119DA4] font-bold">Garvit Gupta</p>
              <p class="text-[#119DA4] border-2 border-black p-1 rounded-lg shadow-lg hover:text-white hover:bg-black font-bold">Co-Founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                     
                  </li>
                  <li>
                      
                  </li>
                  <li>
                      
                  </li>
                  <li>
                       
                  </li> 
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
          <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={g1} alt="Neil Avatar" width={100} height={100}/>
              <p class="text-[#119DA4] font-bold">Garvit Gupta</p>
              <p class="text-[#119DA4] border-2 border-black p-1 rounded-lg shadow-lg hover:text-white hover:bg-black font-bold">Co-Founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                     
                  </li>
                  <li>
                      
                  </li>
                  <li>
                      
                  </li>
                  <li>
                       
                  </li> 
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
          <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={g1} alt="Neil Avatar" width={100} height={100}/>
              <p class="text-[#119DA4] font-bold">Garvit Gupta</p>
              <p class="text-[#119DA4] border-2 border-black p-1 rounded-lg shadow-lg hover:text-white hover:bg-black font-bold">Co-Founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                     
                  </li>
                  <li>
                      
                  </li>
                  <li>
                      
                  </li>
                  <li>
                       
                  </li> 
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
          <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={g1} alt="Neil Avatar" width={100} height={100}/>
              <p class="text-[#119DA4] font-bold">Garvit Gupta</p>
              <p class="text-[#119DA4] border-2 border-black p-1 rounded-lg shadow-lg hover:text-white hover:bg-black font-bold">Co-Founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                     
                  </li>
                  <li>
                      
                  </li>
                  <li>
                      
                  </li>
                  <li>
                       
                  </li> 
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
          <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={g1} alt="Neil Avatar" width={100} height={100}/>
              <p class="text-[#119DA4] font-bold">Garvit Gupta</p>
              <p class="text-[#119DA4] border-2 border-black p-1 rounded-lg shadow-lg hover:text-white hover:bg-black font-bold">Co-Founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                     
                  </li>
                  <li>
                      
                  </li>
                  <li>
                      
                  </li>
                  <li>
                       
                  </li> 
              </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
          <Image class="mx-auto mb-4 w-36 h-36 rounded-full" src={g1} alt="Neil Avatar" width={100} height={100}/>
              <p class="text-[#119DA4] font-bold">Garvit Gupta</p>
              <p class="text-[#119DA4] border-2 border-black p-1 rounded-lg shadow-lg hover:text-white hover:bg-black font-bold">Co-Founder</p>
              <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                     
                  </li>
                  <li>
                      
                  </li>
                  <li>
                      
                  </li>
                  <li>
                       
                  </li> 
              </ul>
          </div>
      </div>  */}
      <div class="container">
      <div
        class="flex flex-col lg:flex-row justify-center items-center py-12 mx-4 md:mx-6"
      >
        <div
          class="lg:w-1/2 flex flex-col justify-center items-center lg:items-start"
        >
          <div className="shadow-lg rounded-xl mb-9">
          <Image class="mx-auto mt-2 mb-4 w-36 h-36" src={side10} alt="Neil Avatar" width={450} height={150}/>
          </div>
          <Image className="sm:hidden" src={side8} alt="student carrer vyas" width={480} height={90} />
          <p className="mb-10 font-bold">The team that is working to create a difference and make it possible</p>
          <div class="w-full flex justify-center lg:justify-start">

          </div>
        </div>
        <div
          role="list"
          aria-label="Team members"
          class="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-12 gap-y-12 md:gap-x-12 mt-10 lg:mt-0 sm:w-auto w-full"
        >
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>

          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
          <div role="listitem" class="flex flex-col justify-center items-center">
            <Image
              src={g1}
              class="w-16 h-16"
              alt="display avatar"
              role="img"
              width={120}
              height={120}
              
            />
          <p class="flex text-xs text-[#119DA4] font-bold mt-1">Garvit Gupta</p>
          <p class="flex text-xs mt-1 rounded-md p-1 shadow-lg">Co-Founder</p>
          </div>
        </div>
        
      </div>
    </div>
    <Link href={"https://play.google.com/store/apps/details?id=com.careervyas.careervyas"} class="">
      <div>
    <Image className="cursor-pointer sm:hidden" src={side13} alt="student carrer vyas" />
    </div>
    </Link>
  </div>
</section>

</div>
      
    </div>
    
  );
}
