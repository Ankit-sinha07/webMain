import React from "react";
import { toast } from "react-toastify";
import { handleSuccessfulPayment } from "./firebaseFunctions.js";
import { getAuth } from "../../Firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router.js";

const verifyUserDetails = (userDetails, setUserDetails) => {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validateMobile = (mobile) => {
    return String(mobile).match(/^(0|91)?[6-9][0-9]{9}$/);
  };
  if (
    userDetails.firstName === "" ||
    userDetails.lastName === "" ||
    !validateEmail(userDetails.email) ||
    !validateMobile(userDetails.mobileNo) ||
    userDetails.country === "" ||
    userDetails.mentorFor === ""
  )
    return false;

  return true;
};
const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export default function PaymentButton({
  userDetails,
  setUserDetails,
  amount,
  refferalCode,
  courseData,
}) {
  const router = useRouter(null);
  const initializeAuth = () => {
    const auth = getAuth();
    if (auth == null) {
      setSignedIn(false);
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setSignedIn(true);
        } else {
          setSignedIn(false);
        }
      });
    }
  };
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    initializeAuth();
  }, []);

  const handleClick = async () => {
    if (!signedIn) {
      toast.error("Sign in to continue!");
      return;
    }
    if (!verifyUserDetails(userDetails, setUserDetails)) {
      toast.error("Fill Out The Details");
      return;
    }
    const res = await initializeRazorpay();
    if (!res) {
      toast.error("Razorpay Failed to load");
      return;
    }
    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount }),
    }).then((t) => t.json());
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      name: "CareerVyas",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "After Successful Payment, Our Team Will Contact You...",
      handler: function (response) {
        handleSuccessfulPayment(
          response,
          refferalCode,
          userDetails,
          courseData,
          response.amount || amount
        );
        toast.success("Payment Successfull");
        router.push({
          pathname: "/mentorship-program/pay/success",
          query: { email: userDetails.email },
        });
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <button
      className="bg-[#6776FF] w-fit self-center px-4 py-2 rounded-md text-white font-bold mt-4"
      onClick={handleClick}
    >
      PAY NOW
    </button>
  );
}
