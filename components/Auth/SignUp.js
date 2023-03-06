import React from "react";
import Image from "next/image";
import Link from "next/link";
import BackImage from "./BackImage.png";
import Cartoon from "./cartoon.png";
import Logo from "./logo.png";
import { signUpWithEmail, signInWithGoogle } from "../Firebase/auth";
import { useRouter } from "next/router";

export default function SignUp({ redirect }) {
  const router = useRouter();
  const onSuccessfullSignUp = () => {
    router.push(redirect || "/auth/sign-in");
  };
  return (
    <div
      className="flex flex-col md:flex-row gap-4 px-4 items-center py-24 lg:px-24 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BackImage.src})`,
      }}
    >
      <div className="md:w-1/2">
        <Image src={Cartoon} objectFit="contain" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-4 justify-center items-center">
        <Image src={Logo} objectFit="contain" />
        <div className="flex flex-col bg-white border-2 shadow-inner p-6 text-[#6776FF]">
          <h2 className="self-center text-4xl font-bold mb-2">Sign Up</h2>
          <h4 className="text-xl font-bold">
            Welcome! Excited to have You with Us
          </h4>

          <div className="flex flex-col my-4">
            <label className="text-black" for="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="bg-white border-[1px] border-[#6776ff] border-opacity-70 rounded-md pl-4 py-1 mb-4"
              placeholder="Enter Your Name"
            />
            <label className="text-black" for="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-white border-[1px] border-[#6776ff] border-opacity-70 rounded-md pl-4 py-1 mb-4"
              placeholder="Enter Email"
            />
            <label className="text-black" for="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="bg-white border-[1px] border-[#6776ff] border-opacity-70 rounded-md pl-4 py-1"
              placeholder="Enter Your Password"
            />
          </div>

          <button
            className="text-white bg-[#6776ff] w-fit px-24 self-center py-2 rounded-sm"
            onClick={() =>
              signUpWithEmail(
                document.getElementById("name").value,
                document.getElementById("email").value,
                document.getElementById("password").value,
                onSuccessfullSignUp
              )
            }
          >
            SIGN UP
          </button>

          <p className="text-center text-black mt-2">
            Already have an account?
            <Link
              href={
                redirect
                  ? {
                      pathname: "/auth/sign-in",
                      query: { redirect: redirect },
                    }
                  : "/auth/sign-in"
              }
            >
              <span className="text-[#6776ff] cursor-pointer font-bold ml-1">
                Sign In
              </span>
            </Link>
          </p>
          <div className="text-center text-black font-bold text-xl">OR</div>
          <button
            type="button"
            className="w-fit mt-2 login-with-google-btn self-center"
            onClick={() => signInWithGoogle(onSuccessfullSignUp)}
          >
            Sign in With Google
          </button>
        </div>
      </div>
    </div>
  );
}
