import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import Link from "next/link";
import Image from "next/image";

export default function Card({ post }) {
  const imageProps = useNextSanityImage(client, post.mainImage);

  return (
    <Link href={`/content/${post.slug.current}`}>
      <div className="h-96 mobile:w-[330px] w-[270px] hover:bg-orange-200 rounded-lg my-2 flex flex-col items-center bg-white hover:shadow-xl cursor-pointer shadow-sm shadow-white p-2">
        <Image
          src={imageProps.src}
          width="260"
          height="150"
          alt="Career Vyas Blogs"
          className="w-1/3 aspect-[75%] object-contain h-full rounded-md"
        />

        <div className="w-1/2 h-20 mx-1 ">
          <div className="font-bold text-sm mb-1 my-1 line-clamp-2">
            {post.title}
          </div>
          <p className="text-gray-700 text-xs line-clamp-4">Class X</p>
          <p className="text-gray-700 text-xs line-clamp-4">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
