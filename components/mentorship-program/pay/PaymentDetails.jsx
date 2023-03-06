import React from "react";
import PaymentButton from "./PaymentButton.jsx";

export default function PaymentDetails({
  courseData,
  prices,
  refferalCode,
  userDetails,
  setRefferalCode,
  setUserDetails,
}) {
  return (
    <div className="bg-white text-black p-2 sm:p-8 rounded-xl h-full flex flex-col justify-center">
      <div className="text-center text-[#6776FF] text-2xl mb-4 font-bold">
        Payment Details
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between font-bold text-lg border-b-2">
          <div>Product</div>
          <div>Subtotal</div>
        </div>
        <div className="flex justify-between font-bold text-lg border-b-2 opacity-60">
          <div className="max-w-[70%]">{courseData.planShortDesc}</div>
          <div>₹{prices.orignalPrice}</div>
        </div>
        <div className="flex justify-between font-bold text-lg border-b-2 opacity-60">
          <div className="max-w-[70%]">Discounted Price (Inclusice of GST)</div>
          <div>₹{prices.discountedPrice}</div>
        </div>
        {prices.discountedPrice - prices.refferalPrice ? (
          <div className="flex justify-between font-bold text-lg border-b-2 opacity-60">
            <div className="max-w-[70%]">Referral Discount</div>
            <div>- ₹{prices.discountedPrice - prices.refferalPrice}</div>
          </div>
        ) : null}
        <div className="flex justify-between font-bold text-lg border-b-2">
          <div className="max-w-[70%]">Total</div>
          <div>₹{prices.refferalPrice}</div>
        </div>
        <div className="flex justify-center font-bold text-lg mt-4 items-center">
          <div className="max-w-[70%] border-2 px-4 py-2 border-[#959aa171] text-[#959AA1]">
            {refferalCode || "NO REFFERAL CODE"}
          </div>
          {refferalCode ? (
            <button
              onClick={() => setRefferalCode(null)}
              className="max-w-[70%] bg-black text-white px-4 py-2 border-2 border-black"
            >
              REMOVE
            </button>
          ) : null}
        </div>
        <PaymentButton
          amount={prices.refferalPrice}
          userDetails={userDetails}
          refferalCode={refferalCode}
          setUserDetails={setUserDetails}
          courseData={courseData}
        />
      </div>
    </div>
  );
}
