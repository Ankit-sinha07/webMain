import React from "react";
import DetailsForm from "./DetailsForm.jsx";
import PaymentDetails from "./PaymentDetails.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { isValidRefferalCode } from "./firebaseFunctions";
import { toast } from "react-toastify";
const ThumbSVG = (props) => (
  <svg
    {...props}
    width="87"
    height="76"
    viewBox="0 0 87 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="87" height="76" fill="url(#pattern4)" />
    <defs>
      <pattern
        id="pattern4"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_311_564"
          transform="translate(-4.13477 -12.3994) scale(0.00514403 0.00587406)"
        />
      </pattern>
      <image
        id="image0_311_564"
        width="1063"
        height="4096"
      />
    </defs>
  </svg>
);

export default function Main({
  courseData,
  orignalPrice,
  discountedPrice,
  code,
  error,
}) {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    country: "",
    mentorFor: "",
  });
  const [prices, setPrices] = useState({
    orignalPrice: orignalPrice,
    discountedPrice: discountedPrice,
    refferalPrice: discountedPrice,
  });
  const [refferalCode, setRefferalCode] = useState(code);

  useEffect(() => {
    const myFunc = async () => {
      if (!courseData || !orignalPrice || !discountedPrice || error) return;
      if (!refferalCode) {
        setPrices({
          orignalPrice: orignalPrice,
          discountedPrice: discountedPrice,
          refferalPrice: discountedPrice,
        });
      }

      const [isValid, discount] = await isValidRefferalCode(refferalCode);
      if (isValid) {
        setPrices({
          orignalPrice: orignalPrice,
          discountedPrice: discountedPrice,
          refferalPrice: Math.floor((discountedPrice * (100 - discount)) / 100),
        });
        toast.success(`Refferal Code Applied - ${discount}% Discount`);
      } else {
        setRefferalCode(null);
        if (refferalCode !== null) toast.error("Invalid Refferal Code");
        setPrices({
          orignalPrice: orignalPrice,
          discountedPrice: discountedPrice,
          refferalPrice: discountedPrice,
        });
      }
    };
    myFunc();
  }, [refferalCode]);

  if (!courseData || !orignalPrice || !discountedPrice || error) {
    return (
      <div className="text-white text-2xl text-center">
        Error, Please Choose A Course From Below
      </div>
    );
  }
  return (
    <div className="py-8">
      <div
        className="text-white mx-12 sm:mx-20 lg:mx-44 my-8 px-5 py-7 sm:px-11 flex flex-col md:flex-row justify-between items-center rounded-[18px] gap-2"
        style={{
          background: "linear-gradient(180deg, #908FFF 0%, #6766FF 100%)",
        }}
      >
        <div className="flex items-center justify-center text-base sm:text-2xl font-bold">
          Have a Referral Code? Enter it here!
          <ThumbSVG className="hidden md:block mx-4" />
        </div>
        <div className="flex justify-center items-center">
          <input
            id="referralCodeInput"
            type="text"
            className="cursor-pointer text-center mt-6 420:m-0 bg-white h-fit py-4 text-[#6766FF] px-6 rounded-l-xl"
            style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1);" }}
          />
          <button
            onClick={() => {
              const code = document.getElementById("referralCodeInput").value;
              setRefferalCode(code);
            }}
            className="cursor-pointer text-center mt-6 420:m-0 bg-white h-fit py-4 text-[#6766FF] px-6 rounded-r-xl"
            style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1);" }}
          >
            OK
          </button>
        </div>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4 lg:gap-16 text-white px-4 sm:px-8 lg:px-16">
        <div className="md:w-1/2">
          <DetailsForm details={details} setDetails={setDetails} />
        </div>
        <div className="md:w-1/2">
          <PaymentDetails
            setUserDetails={setDetails}
            courseData={courseData}
            prices={prices}
            refferalCode={refferalCode}
            setRefferalCode={setRefferalCode}
            userDetails={details}
          />
        </div>
      </div>
    </div>
  );
}