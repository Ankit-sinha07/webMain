import React from "react";

export default function DetailsForm({ details, setDetails }) {
  return (
    <div className="bg-white text-black p-2 sm:p-8 rounded-xl h-full">
      <div className="text-center text-[#6776FF] text-2xl mb-4 font-bold">
        Enter your Details
      </div>
      <div className="flex gap-4 sm:gap-20">
        <div className="mb-4">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className="text-black w-full bg-white border-2 p-1 rounded-md"
            placeholder="Enter First Name"
            onInput={(e) =>
              setDetails({ ...details, firstName: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="text-black w-full bg-white border-2 p-1 rounded-md"
            placeholder="Enter Last Name"
            onChange={(e) =>
              setDetails({ ...details, lastName: e.target.value })
            }
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          className="text-black w-full bg-white border-2 p-1 rounded-md"
          placeholder="Enter Your Email Address"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobileNo.">Mobile No.</label>
        <input
          id="mobileNo."
          type="tel"
          className="text-black w-full bg-white border-2 p-1 rounded-md"
          placeholder="Enter Your Mobile Number"
          onChange={(e) => setDetails({ ...details, mobileNo: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          className="text-black w-full bg-white border-2 p-1 rounded-md"
          placeholder="Enter Your Country of Residence"
          onChange={(e) => setDetails({ ...details, country: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <div className="mb-1">Exam you want a Mentor for</div>
        <span className="mr-4">
          <input
            type="radio"
            name="same2"
            className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
            onClick={(e) => {
              if (e.target.checked) {
                setDetails({ ...details, mentorFor: "JEE" });
              }
            }}
          />
          <span>JEE</span>
        </span>
        <span>
          <input
            type="radio"
            name="same2"
            className="bg-white border-2 mr-2 rounded-md accent-white invert checked:invert-1"
            onClick={(e) => {
              if (e.target.checked) {
                setDetails({ ...details, mentorFor: "NEET" });
              }
            }}
          />
          <span>NEET</span>
        </span>
      </div>
    </div>
  );
}
