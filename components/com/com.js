import React, { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "./images/1.png";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.png";
import Image4 from "./images/4.png";
import Image5 from "./images/5.png";
import Image6 from "./images/6.png";

const data = [Image1, Image2, Image3, Image4, Image5, Image6];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = data.length;
  useEffect(() => {
    const func = () => {
      setCurrent((current) => {
        if (current === length - 1) {
          return 0;
        }
        return current + 1;
      });
    };
    const id = setInterval(func, 10000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="container flex flex-col">
    <div className="flex flex-col md:flex-row items-center my-12">
      <div className="h-[260px] mobile:h-[300px] 600:h-[400px] lg:h-[500px] grid place-items-center">
        {data.map((image, index) => {
          if (index === current) {
            return (
              <div
                className={`rounded-3xl w-[260px] h-[260px] mobile:w-[300px] mobile:h-[300px] 600:w-[400px] 600:h-[400px] lg:w-[500px] lg:h-[500px] grid place-items-center mb-24 opacity-0 ${
                  index === current ? "opacity-100" : ""
                } ${index === current ? "scale-90" : ""}`}
                style={{ transition: "ease 1s" }}
                key={index}
              >
                {index === current && (
                  <Image src={image} alt="Carrer Vyas" objectFit="contain" />
                )}
              </div>
            );
          } else {
            return <div key={index}></div>;
          }
        })}
      </div>




         <div class="sm:w-2/3 sm:pl-8 flex justify-center sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mr-4 pt-4 sm:mt-0 text-center sm:text-left">
         <h1 >className</h1> 
        </div>


      <div className="container flex flex-col">
    <div className="flex flex-col md:flex-row items-center 2xl:ml-[580px] my-12">
      <div className="h-[260px] mobile:h-[300px] 600:h-[400px] lg:h-[500px] grid place-items-center">
        {data.map((image, index) => {
          if (index === current) {
            return (
              <div
                className={`rounded-3xl w-[260px] h-[260px] mobile:w-[300px] mobile:h-[300px] 600:w-[400px] 600:h-[400px] lg:w-[500px] lg:h-[500px] grid place-items-center mb-24 opacity-0 ${
                  index === current ? "opacity-100" : ""
                } ${index === current ? "scale-90" : ""}`}
                style={{ transition: "ease 1s" }}
                key={index}
              >
                {index === current && (
                  <Image src={image} alt="Carrer Vyas" objectFit="contain" />
                )}
              </div>
            );
          } else {
            return <div key={index}></div>;
          }
        })}
      </div>
      
  </div>
  </div>
  </div>
  </div>
  );
}