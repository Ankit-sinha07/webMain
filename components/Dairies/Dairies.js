import Card from "./Card";
import Link from "next/link";
import groq from "groq";
import Image from "next/image";
import of from "./of.svg"
import side1 from "./side1.png";
import client from "../client";
import { useEffect } from "react";
import { useState } from "react";

async function getPosts() {
  const posts = await client.fetch(groq`
    *[_type == "post"]
  `);
  return posts;
}

export default function Dairies() {
  const [postData, setpostData] = useState([]);

  useEffect(() => {
    let postarr = [];
    getPosts().then((posts) => {
      posts.forEach(async (post) => {
        if (post?.categories !== undefined) {
          const cat = await client.fetch(groq`
            *[_type == "category" && _id == "${post.categories[0]._ref}"]
          `);

          cat.forEach((c) => {
            if (c.title == "College Diaries") {
              postarr.push(post);
            }
          });

          setpostData(postarr.slice(0, 6));
        }
      });
    });
  }, []);

  return (
    <div className="flex items-center flex-col pt-6 pb-2 w-full">
      <div class="flex flex-wrap w-full flex-row justify-center">
    <Image className="sm:hidden" src={of} alt="student carrer vyas" width={60} height={80} />
      <h1 class="sm:text-4xl text-2xl font-bold title-font mr-2 mt-5 text-gray-900">Readers Digest</h1>
    </div>
      <p className="grid ml-4 place-items-center font-semibold text-lg text-emerald-600 my-3 px-2">
        Get the Proper Package of Information about each and every College 🔥
      </p>
      <div
        className="grid gap-2 w-full place-items-center justify-center"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(0, max(350px, 100%/4)))",
        }}
      >
        {postData.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Link href="/diaries">
        <button className="mb-8 rounded-md text-black h-[4.5rem] w-60 bg-white border-2 border-black hover:bg-orange-200 my-2">
          join Our Community
        </button>
      </Link>
    </div>
  );
}
