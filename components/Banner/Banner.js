
import Image from "next/image";
import Bolt from "./Elements/bolt";
import Img from "./images/img.png";
import side1 from "./side1.svg";
import side2 from "./images/side2.png";
import side3 from "./images/side3.png";
import side4 from "./images/side4.png";
import side5 from "./images/side5.png";
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

export default function Banner() {
  return (
    <body>
<div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2  mt-72">
    <div class="col-span-4 w-full h-full ">
    <div class="w-full h-full rounded-md p-2 md:pl-4">
            <Image className="sm:hidden" src={side1} alt="student carrer vyas" width={180} height={90} />
    <h1 class="text-black text-xl font-medium py-2 scroll-smooth">Explore Your Options</h1>
            <p class=" text-black sm:text-sm text-xs">{"India's"} First Peer to Peer Learning Platform with students across India having Conversation with a dedicated Community Manager.</p>
        <button class="flex mx-auto mt-4 ml-1 text-black bg-white border-2 border-black py-1 px-4 focus:outline-none hover:bg-orange-100 rounded-lg text-lg">Connect Now</button>
        </div>
    </div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-emerald-500"></div>
        <div class="absolute w-6 h-6 rounded-full bg-emerald-200 z-10 text-emerald-700 text-center">1</div>
    </div>

    <div class="col-span-4 w-full h-full"></div>
    <div class="col-span-4 w-full h-full "></div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-emerald-500"></div>
        <div class="absolute w-6 h-6 rounded-full bg-emerald-200 z-10 text-emerald-700 text-center">2</div>
    </div>
    <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full rounded-md p-2 md:pl-4">
            <Image className="sm:hidden" src={side2} alt="student carrer vyas" width={200} height={190} />
            <h1 class="text-emerald-700 text-xl font-medium py-2">Meet Your Peers</h1>
            <p class="text-emerald-700 sm:text-sm text-xs">{"India's"} First Peer to Peer Learning Platform with students across India having Conversation with a dedicated Community Manager.</p>
            <button class="flex mx-auto mt-4 ml-1 text-black bg-white border-2 border-black py-1 px-4 focus:outline-none hover:bg-orange-100 rounded-lg text-lg">Connect Now</button>
        </div>
    </div>

    <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full rounded-md p-2 md:pl-4">
            <Image className="sm:hidden" src={side3} alt="student carrer vyas" width={250} height={190} />
            <h1 class="text-emerald-700 text-xl font-medium py-2">Meet Your Peers</h1>
            <p class="text-emerald-700 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
            <button class="flex mx-auto mt-4 ml-1 text-black bg-white border-2 border-black py-1 px-4 focus:outline-none hover:bg-orange-100 rounded-lg text-lg">Connect Now</button>
        </div>
    </div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-emerald-500"></div>
        <div class="absolute w-6 h-6 rounded-full bg-emerald-200 z-10 text-emerald-700 text-center">3</div>
    </div>

    <div class="col-span-4 w-full h-full"></div>
    <div class="col-span-4 w-full h-full"></div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-emerald-500"></div>
        <div class="absolute w-6 h-6 rounded-full bg-emerald-200 z-10 text-emerald-700 text-center">4</div>
    </div>
    <div class="col-span-4 w-full h-full ">
        <div class="w-full h-full rounded-md p-2 md:pl-4">
            <Image className="sm:hidden" src={side4} alt="student carrer vyas" width={290} height={190} />
            <h1 class="text-emerald-700 text-xl font-medium py-2">Meet Your Peers</h1>
            <p class="text-emerald-700 sm:text-sm text-xs">{"India's"} First Peer to Peer Learning Platform with students across India having Conversation with a dedicated Community Manager.</p>
            <button class="flex mx-auto mt-4 ml-1 text-black bg-white border-2 border-black py-1 px-4 focus:outline-none hover:bg-orange-100 rounded-lg text-lg">Connect Now</button>
        </div>
    </div>

    <div class="col-span-4 w-full h-full items-center">
        <div class="w-full h-full rounded-md p-2 md:pl-4 mt-6">
            <Image className="sm:hidden" src={side5} alt="student carrer vyas" width={600} height={290} />
            <button class="flex mx-auto mt-4 lg:ml-48 md:ml-1 text-black bg-white border-2 border-black py-1 px-4 focus:outline-none hover:bg-orange-100 rounded-lg text-lg">Let Start Your Journey to Your Dream College</button>
        </div>
    </div>
    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
        <div class="h-full w-1 bg-emerald-500"></div>
        <div class="absolute w-6 h-6 rounded-full bg-emerald-200 z-10 text-emerald-700 text-center"></div>
    </div>
    <div class="col-span-4 w-full h-full"></div>
   </div>
</body>
    
  );
}
