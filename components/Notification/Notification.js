import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import groq from "groq";
import client from "../client";
import React, { useRef } from "react";
import Image from "next/image";
import of from "./images/of.svg"
import LeftArrow from "./Elements/LeftArrow";
import RightArrow from "./Elements/RightArrow";
import Blue from "./images/blue.png";
import side1 from "./images/side1.png";
import Link from "next/link";
async function getPosts() {
  const posts = await client.fetch(groq`
    *[_type == "latestNotification"] | order(dateTime(_createdAt) desc)
  `);
  return posts;
}

export default function Notification() {
  const carouselRef = useRef(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1150 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1150, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="my-16 overflow-hidden bg-blue-300)">
      <div className="grid place-items-center"
      style={{
        backgroundImage: `url(${Blue.src})`,
      }}>
       <div class="flex flex-wrap w-full mb-3 flex-row justify-center">
    <Image className="sm:hidden" src={of} alt="student carrer vyas" width={60} height={80} />
      <h1 class="sm:text-4xl text-2xl font-bold title-font mr-2 mt-5 text-white">Latest {"Notification's"}</h1>
    </div>
      </div>

      <div className="h-full flex flex-row items-center justify-center px-2"
      style={{
        backgroundImage: `url(${Blue.src})`,
      }}>
      
        <LeftArrow
          className="cursor-pointer w-10 hidden 420:flex"
          onClick={() => {
            carouselRef.current.previous();
          }}
        />
        <div className="min-w-[350px] max-w-[1200px] w-[100%]">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true}
            focusOnSelect={true}
            arrows={false}
            draggable={false}
          >
            {posts.map((post) => (
              <Card key={post._id} post={post} />
            ))}
          </Carousel>
        </div>
        <RightArrow
          className="cursor-pointer w-10 hidden 420:flex"
          onClick={() => {
            carouselRef.current.next();
          }}
        />
      </div>
      <Link href="/mentorship-program#book-mentor">
          <div className="cursor-pointer w-full grid place-items-center mt-8">
            <div className="p-3 shadow-md border-2 border-black rounded-xl bg-white hover:bg-orange-100 text-center font-extrabold">
              Start your Journey Now
            </div>
          </div>
        </Link>
    </div>
  );
}
