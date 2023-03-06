import Lines2 from "../Elements/Lines2";
import Lines from "../Elements/Lines";
import side1 from "./side1.svg";
import Image from "next/image";
import side2 from "./side2.svg";
import BackImage from "./LandingPage.png";
import Check from "./check.png";
import styles from "./Main.module.css";
import Modal from "../../components/Modal/Modal";
import MentorShipForm from "../Forms/MentorShipForm.js";
import { useEffect, useState } from "react";
import { useRef } from "react";

const CheckIcon = () => <Image src={Check} width={26} height={26} />;

const CrossIcon = () => (
  <svg
    className="relative float-right"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9998 28.3334C22.3636 28.3334 28.3332 22.3639 28.3332 15.0001C28.3332 7.63628 22.3636 1.66675 14.9998 1.66675C7.63604 1.66675 1.6665 7.63628 1.6665 15.0001C1.6665 22.3639 7.63604 28.3334 14.9998 28.3334Z"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 11L11 19"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 11L19 19"
      stroke="#6776FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Main() {
  const [showMentorShipModal, setShowMentorShipModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(false);
  function changeColor(action) {
    setCurrent(action);
    let timeout = setTimeout(() => changeColor(!action), 1000);
    return timeout;
  }
  useEffect(() => {
    let timeout = changeColor(true);
    return () => clearTimeout(timeout);
  }, []);
  const ref = useRef(null);

  useEffect(() => {
    const myFunc = async () => {
      fetch(
        "https://api.rebrandly.com/v1/links/e977c7a681454f2f8a100b73a0afc01d",
        {
          headers: { apikey: "913893d23e3f4814b84bfa2c961466b6" },
        }
      )
        .then(async (res) => {
          const link = (await res.json())["destination"];
          if (link === "https://www.careervyas.com/") {
            return;
          }
          ref.current.src = link;
          setShowModal(true);
        })
        .catch((e) => console.log(e));
    };
    myFunc();
  }, []);

  return (
    <div>
      <Modal
        modalState={[showModal, setShowModal]}
        className="grid place-items-center w-full"
      >
        <div className="flex flex-col z-50 bg-white p-4">
          <div onClick={() => setShowModal(false)} className="cursor-pointer">
            <CrossIcon />
          </div>
          <div className="w-[90vw] max-w-[500px] relative">
            <img
              ref={ref}
              layout="fill"
              src=""
              alt="ModalImage"
              objectFit="contain"
            />
          </div>
          <a
            href="https://rebrand.ly/posterlink"
            target="_blank"
            className="bg-[#FFB11B] px-2 py-1 rounded-lg text-sm w-fit text-center mx-auto mt-4"
            rel="noreferrer"
          >
            OR CLICK HERE TO GET STARTED
          </a>
        </div>
      </Modal>
      <Modal
        modalState={[showMentorShipModal, setShowMentorShipModal]}
        className="w-full grid place-items-center"
      >
        <div className="z-50 bg-[#1c1c1c] w-3/4 p-6">
          <div
            onClick={() => setShowMentorShipModal(false)}
            className="cursor-pointer"
          >
            <CrossIcon />
          </div>
          <MentorShipForm />
        </div>
      </Modal>
      <div
        className={`hidden pl-10 h-[800px] pt-14 lg:flex bg-no-repeat bg-cover relative ${styles.slanted} overflow-hidden`}
        style={{
          backgroundImage: `url(${BackImage.src})`,
        }}
      >
        <Lines2
          className={"absolute top-16 left-0 w-24 lg:w-36 -translate-y-1/4"}
        />
        <div className="relative w-1/2 pl-6">
          <div className="text-[#333333]">
            <p className="mb-4 font-bold text-lg">
              Get Personal Guidance from our Expert Mentors
            </p>
            <h1 className="font-bold text-6xl leading-tight">
              One Stop Solution to all your Career & College Queries
            </h1>
          </div>
          <div className="text-2xl my-8">
            <p className="text-2xl tracking-normal font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span> and{" "}
              <span className="text-blue-700"> College </span>
            </p>
          </div>
          <div className="flex flex-row">
            <div className="relative flex flex-col">
              <button
                className="hover:animate-bounce shadow-xl rounded-md w-96 py-4 bg-[#FFB11B] font-extrabold"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMentorShipModal(true);
                }}
                id={styles.animateBounce2}
              >
                <svg
                  className="absolute -top-4 -left-4"
                  width="98"
                  height="33"
                  viewBox="0 0 98 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.25124"
                    y="14.419"
                    width="94"
                    height="18"
                    rx="3.5"
                    transform="rotate(-8 1.25124 14.419)"
                    fill={current ? "#FF1B1B" : "#FFB11B"}
                  />
                  <path
                    d="M13.4157 17.529L14.6303 26.1713L13.5838 26.3184L12.3692 17.6761L13.4157 17.529ZM16.5606 17.087L17.7752 25.7293L16.7287 25.8764L15.5141 17.2341L16.5606 17.087ZM18.3168 17.7869L18.1863 16.8585L24.6681 15.9476L24.7985 16.876L22.0809 17.2579L23.1651 24.9719L22.1185 25.1189L21.0344 17.405L18.3168 17.7869ZM29.5218 19.1986L29.6523 20.127L25.8713 20.6584L25.7408 19.73L29.5218 19.1986ZM34.1755 14.6114L35.222 14.4643L36.0903 20.6422C36.1678 21.1936 36.1323 21.6763 35.9839 22.0902C35.8355 22.504 35.5911 22.8368 35.2507 23.0883C34.9102 23.3398 34.4896 23.5008 33.9888 23.5712C33.5162 23.6376 33.0835 23.6109 32.6909 23.4911C32.2978 23.3685 31.9733 23.1616 31.7172 22.8705C31.4611 22.5795 31.3021 22.2131 31.24 21.7714L32.2697 21.6267C32.3041 21.8715 32.3946 22.0768 32.5413 22.2427C32.6903 22.4053 32.8789 22.5222 33.1069 22.5935C33.335 22.6647 33.5855 22.6811 33.8583 22.6428C34.1594 22.6005 34.4065 22.5012 34.5997 22.345C34.7929 22.1887 34.9271 21.9805 35.0025 21.7203C35.0802 21.4569 35.094 21.1466 35.0437 20.7893L34.1755 14.6114ZM38.5339 22.8119L37.3193 14.1696L42.5351 13.4365L42.6656 14.3649L38.4963 14.9509L38.9067 17.871L42.8059 17.323L42.9364 18.2514L39.0372 18.7994L39.45 21.7364L43.6867 21.141L43.8172 22.0694L38.5339 22.8119ZM45.636 21.8138L44.4214 13.1714L49.6372 12.4384L49.7677 13.3668L45.5984 13.9527L46.0088 16.8729L49.908 16.3249L50.0385 17.2533L46.1393 17.8013L46.5521 20.7383L50.7888 20.1429L50.9193 21.0712L45.636 21.8138ZM54.3867 11.3578L53.0558 22.0964L52.1443 22.2245L53.4752 11.4859L54.3867 11.3578ZM62.6123 10.6149L63.8269 19.2572L62.8141 19.3995L57.1511 13.2758L57.0667 13.2877L58.0203 20.0733L56.9738 20.2203L55.7592 11.578L56.772 11.4357L62.4543 17.5739L62.5387 17.562L61.5826 10.7596L62.6123 10.6149ZM65.921 18.9629L64.7064 10.3206L69.9222 9.58752L70.0527 10.5159L65.8834 11.1019L66.2938 14.022L70.193 13.474L70.3235 14.4024L66.4243 14.9504L66.8371 17.8874L71.0738 17.292L71.2043 18.2204L65.921 18.9629ZM73.0231 17.9648L71.8085 9.32242L77.0243 8.58939L77.1548 9.51777L72.9855 10.1037L73.3959 13.0239L77.2951 12.4759L77.4256 13.4043L73.5264 13.9523L73.9392 16.8893L78.1759 16.2939L78.3064 17.2222L73.0231 17.9648ZM78.5684 9.31909L78.4379 8.39072L84.9197 7.47976L85.0502 8.40814L82.3326 8.79008L83.4167 16.504L82.3702 16.6511L81.286 8.93716L78.5684 9.31909Z"
                    fill="white"
                  />
                  <rect
                    x="1.25124"
                    y="14.419"
                    width="94"
                    height="18"
                    rx="3.5"
                    transform="rotate(-8 1.25124 14.419)"
                    stroke="white"
                  />
                </svg>
                Book Free Mentorship Session
              </button>
              <div className="flex text-lg font-extrabold mt-4">
                <div className="max-h-[26px] w-[26px] h-[26px]">
                  <CheckIcon />
                </div>
                <span className="ml-4 text-2xl mr-2">50+ </span>Mentorship
                Session Done
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative w-1/2">
          <div className="absolute lg:-top-16 2xl:top-0 lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[600px] lg:right-44 xl:right-64 2xl:right-36">
            <Lines className="absolute top-[12%] z-10 lg:-right-[25%] xl:-right-[10%] 2xl:right-[28%]" />
            <Image src={side1} alt="student carrer vyas" />
            <div className="bg-white absolute top-[60%] -left-20 min-w-[120px] w-fit px-4 py-2 rounded-md shadow-md font-extrabold">
              1 on 1 Mentorship
            </div>
            <div className="bg-white absolute top-[35%] left-36 min-w-[120px] w-fit px-4 py-2 rounded-md shadow-md font-extrabold">
              Peer 2 Peer Learning
            </div>
          </div>
          <div className="absolute lg:top-32 xl:top-0 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] right-0">
            <Image src={side2} alt="students carrer vyas" layout="fill" />
            <div className="bg-white absolute top-[60%] left-1/3 min-w-[120px] w-fit px-4 py-2 rounded-md shadow-md font-extrabold">
              Get your Doubt Solved
            </div>
            <div className="bg-white absolute top-[90%] left-2/3 min-w-[120px] w-fit px-4 py-2 rounded-md shadow-md font-extrabold">
              Know Your College
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:hidden bg-no-repeat bg-cover w-full h-full"
        style={{
          backgroundImage: `url(${BackImage.src})`,
        }}
      >
        <div className="flex items-center flex-col w-full relative">
          <h1 className="m-2 font-bold text-4xl text-center">
            One Stop Solution to all your Career & College Queries
          </h1>
          <div className="flex items-center py-3 px-7 h-8 rounded-3xl w-fit">
            <p className="text-sm sm:text-md text-center font-semibold align-middle">
              # Bridging the gap between{" "}
              <span className="text-blue-700">School</span>
              and <span className="text-blue-700"> College </span>{" "}
            </p>
          </div>
          <div className="gap-2 absolute z-10 top-52 mobile:top-40 600:top-32 flex flex-col items-center justify-center pt-6">
            <div className="relative flex flex-col mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMentorShipModal(true);
                }}
                className="hover:animate-bounce shadow-xl rounded-md py-1 px-2 sm:w-96 sm:py-4 bg-[#FFB11B] font-extrabold"
                id={styles.animateBounce2}
              >
                <svg
                  className="absolute -top-5 sm:-top-4 -left-4"
                  width="98"
                  height="33"
                  viewBox="0 0 98 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.25124"
                    y="14.419"
                    width="94"
                    height="18"
                    rx="3.5"
                    transform="rotate(-8 1.25124 14.419)"
                    fill={current ? "#FF1B1B" : "#FFB11B"}
                  />
                  <path
                    d="M13.4157 17.529L14.6303 26.1713L13.5838 26.3184L12.3692 17.6761L13.4157 17.529ZM16.5606 17.087L17.7752 25.7293L16.7287 25.8764L15.5141 17.2341L16.5606 17.087ZM18.3168 17.7869L18.1863 16.8585L24.6681 15.9476L24.7985 16.876L22.0809 17.2579L23.1651 24.9719L22.1185 25.1189L21.0344 17.405L18.3168 17.7869ZM29.5218 19.1986L29.6523 20.127L25.8713 20.6584L25.7408 19.73L29.5218 19.1986ZM34.1755 14.6114L35.222 14.4643L36.0903 20.6422C36.1678 21.1936 36.1323 21.6763 35.9839 22.0902C35.8355 22.504 35.5911 22.8368 35.2507 23.0883C34.9102 23.3398 34.4896 23.5008 33.9888 23.5712C33.5162 23.6376 33.0835 23.6109 32.6909 23.4911C32.2978 23.3685 31.9733 23.1616 31.7172 22.8705C31.4611 22.5795 31.3021 22.2131 31.24 21.7714L32.2697 21.6267C32.3041 21.8715 32.3946 22.0768 32.5413 22.2427C32.6903 22.4053 32.8789 22.5222 33.1069 22.5935C33.335 22.6647 33.5855 22.6811 33.8583 22.6428C34.1594 22.6005 34.4065 22.5012 34.5997 22.345C34.7929 22.1887 34.9271 21.9805 35.0025 21.7203C35.0802 21.4569 35.094 21.1466 35.0437 20.7893L34.1755 14.6114ZM38.5339 22.8119L37.3193 14.1696L42.5351 13.4365L42.6656 14.3649L38.4963 14.9509L38.9067 17.871L42.8059 17.323L42.9364 18.2514L39.0372 18.7994L39.45 21.7364L43.6867 21.141L43.8172 22.0694L38.5339 22.8119ZM45.636 21.8138L44.4214 13.1714L49.6372 12.4384L49.7677 13.3668L45.5984 13.9527L46.0088 16.8729L49.908 16.3249L50.0385 17.2533L46.1393 17.8013L46.5521 20.7383L50.7888 20.1429L50.9193 21.0712L45.636 21.8138ZM54.3867 11.3578L53.0558 22.0964L52.1443 22.2245L53.4752 11.4859L54.3867 11.3578ZM62.6123 10.6149L63.8269 19.2572L62.8141 19.3995L57.1511 13.2758L57.0667 13.2877L58.0203 20.0733L56.9738 20.2203L55.7592 11.578L56.772 11.4357L62.4543 17.5739L62.5387 17.562L61.5826 10.7596L62.6123 10.6149ZM65.921 18.9629L64.7064 10.3206L69.9222 9.58752L70.0527 10.5159L65.8834 11.1019L66.2938 14.022L70.193 13.474L70.3235 14.4024L66.4243 14.9504L66.8371 17.8874L71.0738 17.292L71.2043 18.2204L65.921 18.9629ZM73.0231 17.9648L71.8085 9.32242L77.0243 8.58939L77.1548 9.51777L72.9855 10.1037L73.3959 13.0239L77.2951 12.4759L77.4256 13.4043L73.5264 13.9523L73.9392 16.8893L78.1759 16.2939L78.3064 17.2222L73.0231 17.9648ZM78.5684 9.31909L78.4379 8.39072L84.9197 7.47976L85.0502 8.40814L82.3326 8.79008L83.4167 16.504L82.3702 16.6511L81.286 8.93716L78.5684 9.31909Z"
                    fill="white"
                  />
                  <rect
                    x="1.25124"
                    y="14.419"
                    width="94"
                    height="18"
                    rx="3.5"
                    transform="rotate(-8 1.25124 14.419)"
                    stroke="white"
                  />
                </svg>
                Book Free Mentorship Session
              </button>
              <div className="flex text-md font-extrabold mt-1">
                <CheckIcon />
                <span className="ml-4 mr-2">50+ </span>Mentorship Session Done
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-[1.5rem] mt-24 mobile:mt-24 flex flex-row w-full">
          <div className="w-[400px] relative">
            <Image src={side1} alt="student carrer vyas" objectFit="cover" />
            <div className="z-10 absolute top-[25%] 600:top-[50%] left-[80%] bg-white w-[90px] 420:w-[180px] rounded-md shadow-md text-[8px] 420:text-base font-extrabold px-1 420:px-2">
              1 on 1 Mentorship
            </div>
            <div className="z-10 absolute top-[40%] 600:top-[30%] md:top-[35%] left-[60%] bg-white w-[90px] 420:w-[180px] rounded-md shadow-md text-[8px] 420:text-base font-extrabold px-1 420:px-2">
              Peer 2 Peer Learning
            </div>
          </div>

          <div className="w-[500px] relative">
            <Image src={side2} alt="students carrer vyas" objectFit="cover" />
            <div className="z-10 absolute top-[55%] 600:top-[65%] md:top-[80%] md:-left-[10%] bg-white w-fit rounded-md shadow-md text-[8px] 420:text-base font-extrabold px-1 420:px-2">
              Get your Doubt Solved
            </div>
            <div className="z-10 absolute top-[70%] 600:top-[40%] md:top-[65%] left-[20%] bg-white w-[90px] 420:w-[180px] rounded-md shadow-md text-[8px] 420:text-base font-extrabold px-1 420:px-2">
              Know Your College
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
