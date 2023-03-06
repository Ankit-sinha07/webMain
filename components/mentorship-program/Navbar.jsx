import Link from "next/link.js";
import React from "react";
import Logo from "./Logo.jsx";

export default function Navbar() {
  return (
    <div className="bg-[#212121] h-24 flex items-center justify-between px-6 900:px-12 text-white">
      <Link href="/">
        <Logo className="cursor-pointer bg-white rounded-full w-[80px] h-[80px]" />
      </Link>
      <div>
        <Link href="/mentorship-program#book-mentor">
          <span className="bg-[#6766FF] px-2 900:px-4 text-sm py-2 cursor-pointer">
            Book a Free Mentorship Session (IIT-JEE/NEET)
          </span>
        </Link>
      </div>
    </div>
  );
}
