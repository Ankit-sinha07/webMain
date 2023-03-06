import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import logo from "./images/logo.svg";
import { signOut } from "../Firebase/auth";
import getSignedIn from "../../hooks/getSignedIn";

export default function Navbar({ background }) {
  const [signedIn, user] = getSignedIn();
  const pathname = useRouter().pathname;
  // Variables
  const navback = background || "#E2FBF5";
  const desktopNavbarLinks = [
    ["Community", "/com"],
    ["Free Session", "/mentorship-program"],
    ["Blog", "/blog"],
    [
      "We are Hiring",
      "https://docs.google.com/forms/d/1pl5We-xqOu_8NAkQWVg9QaRsOc5aqYjXZxSLqeZ05s8/viewform?edit_requested=true",
    ],
    ["About Us", "/about-us"],
    
    //["We are Hiring", "/mentorship-program"],
    
    //["Team", "/team"],
    //["Newsletter", "https://newsletter.careervyas.com/"],
    //["We ar", "/mentorship-program"],
    
  ];

  // Functions
  const handleClick = () => {
    const menubar = document.getElementById("menubar");
    if (menubar.style.display == "none") {
      menubar.style.display = "block";
    } else {
      menubar.style.display = "none";
    }
  };

  // Components
  const DesktopNavbarLink = ({ detailsArray }) => {
    const isLinkCurrentPage =
      pathname.split("/")[1] == detailsArray[1].substring(1);
    if (detailsArray[1] == "/mentorship-program") {
      return (
        <Link href={detailsArray[1]}>
          <div className="inline relative">
            
            
            <span
              className=" px-2 xl:px-4 py-9 text-sm md:text-l cursor-pointer hover:bg-orange-100 text-[#1A1A1A]"
              style={{
                textDecoration: isLinkCurrentPage ? "underline" : "none",
                fontWeight: isLinkCurrentPage ? "bold" : "0",
                ...detailsArray[2],
              }}
            >
              {detailsArray[0]}
            </span>
          </div>
        </Link>
      );
    }
    return (
      <Link href={detailsArray[1]}>

        <span
          className="px-2 xl:px-2 py-5 rounded-lg text-sm md:text-l cursor-pointer hover:bg-orange-100 text-[#1A1A1A] "
        >
          {detailsArray[0]}
        </span>
      </Link>
    );
  };

  const MobileNavbarLink = ({ detailsArray }) => {
    return (
      <Link href={detailsArray[1]}>
        <div
          className="font text-xl cursor-pointer hover:font-bold my-1 px-6"
          style={{ backgroundColor: detailsArray[2] }}
        >
          {detailsArray[0]}
        </div>
      </Link>
      
    );
  };
  const HamburgerIcon = () => {
    return (
      <svg
        onClick={handleClick}
        className="mr-2"
        width="45"
        height="25"
        viewBox="0 0 30 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          y1="1"
          x2="30"
          y2="1"
          stroke="black"
          strokeOpacity="0.74"
          strokeWidth="2"
        />
        <line
          y1="9"
          x2="30"
          y2="9"
          stroke="black"
          strokeOpacity="0.74"
          strokeWidth="2"
        />
        <line
          y1="17"
          x2="30"
          y2="17"
          stroke="black"
          strokeOpacity="0.74"
          strokeWidth="2"
        />
      </svg>
    );
  };

  const SignInButton = () => (
    <Link href="/auth/sign-in">
      <span className="sign-out-button w-fit mr-6 cursor-pointer">Sign In</span>
    </Link>
  );
  
  const SignOutButton = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          className={`${
            open ? "sign-out-button-cover" : ""
          } inline-flex flex-col absolute right-16 lg:right-auto lg:top-[1.4rem] z-50`}
          clicked={String(open)}
        >
          <span
            clicked={String(open)}
            className="sign-out-button w-fit z-50 flex items-center gap-1"
            onClick={() => setOpen(!open)}
          >
            Hi, {user.displayName}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: open ? "rotate(180deg)" : "" }}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#12151A"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          {open ? (
            <span
              className="sign-out-button w-full z-50"
              clicked={String(open)}
              onClick={signOut}
            >
              Sign Out
            </span>
          ) : null}
        </button>
        <button className="invisible">
          <span className="sign-out-button w-fit z-50">
            Hi, {user.displayName}
          </span>
        </button>
      </>
    );
  };

  return (
    <>
    
      <div
        className="flex h-[78px] shadow-xl md:h-[89px] justify-between flex-row items-center md:pr-4 lg:pr-12"
        
      >
        <Link href="/">
          <div className="relative h-[85px] w-[120px] md:ml-4 lg:ml-12">
            <Image src={logo} alt="Career Vyas logo" />
          </div>
        </Link>
        <div className="hidden items-center text-black lg:block">
          {desktopNavbarLinks.map((detailsArray, index) => (
            <DesktopNavbarLink key={index} detailsArray={detailsArray} />
          ))}
          {!signedIn ? <SignInButton /> : <SignOutButton />}
        </div>
        <div className="flex items-center lg:hidden">
          {!signedIn ? <SignInButton /> : <SignOutButton />}
          <HamburgerIcon />
        </div>
      </div>
      <div className="hidden" id="menubar">
        <div
          className="flex flex-col text-black bg-[#E2FBF5] "
          style={{ background: navback }}
        >
          {desktopNavbarLinks.map((detailsArray, index) => (
            <MobileNavbarLink key={index} detailsArray={detailsArray} />
          ))}
        </div>
      </div>
    </>
  );
}
