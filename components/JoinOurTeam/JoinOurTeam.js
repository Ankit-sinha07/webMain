import React from "react";
import { useState } from "react";
import BackImage from "./main.png";

export default function JoinOurTeam() {
  const [animate, setAnimate] = useState(false);

  return (
    <div className="relative pt-12 flex flex-col items-center justify-center font-extrabold bg-[#EBEDFF]">
      <div className="z-10 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">Join Our Team 🚀🚀</h1>
        <p className="mt-4 text-xl md:text-3xl lg:text-4xl">
          Help us to bridge the Gap from School to College
        </p>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/1pl5We-xqOu_8NAkQWVg9QaRsOc5aqYjXZxSLqeZ05s8/viewform?edit_requested=true",
              "_blank"
            )
          }
          className={`w-[200px] md:w-80 bg-[#2F43FD] text-white mt-12 py-4 px-4 rounded-lg text-lg`}
          onMouseEnter={() => setAnimate(true)}
          onMouseLeave={() => setAnimate(false)}
        >
          Hiring Mentors
        </button>
      </div>
      <div
        className={`absolute z-30 top-80 420:top-72 600:top-80 700:top-[21rem] md:top-96 w-16 600:w-20 700:w-24 lg:w-40 ${
          animate ? "animate-bounce" : ""
        }`}
      >
        <svg
          className="-rotate-45"
          viewBox="0 0 122 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.0484 90.6953C32.1015 89.816 33.1546 88.9162 34.1875 88.0368C34.8558 87.4642 35.2609 86.7485 35.3824 85.8487V85.8282L35.4027 85.726L35.3824 85.6237V85.6033C35.2204 84.274 34.4508 83.3538 33.2154 83.0266C32.8914 82.9448 32.5673 82.9039 32.2433 82.9039C31.3117 82.9039 30.4408 83.272 29.5497 84.0286C25.965 87.1166 22.3196 90.2249 18.8159 93.2311C15.5147 96.0532 12.1123 98.9571 8.75042 101.84C6.78593 103.538 4.84169 105.297 2.95821 106.994L2.85695 107.076C2.35064 107.526 1.86458 107.975 1.35827 108.425C-0.484707 110.082 0.14312 111.554 0.669684 112.29C1.54054 113.476 2.53291 113.722 3.20124 113.722C3.74806 113.722 4.31513 113.558 4.86194 113.231C5.44927 112.883 5.97583 112.454 6.36063 112.106C7.87956 110.757 9.41875 109.407 10.8769 108.098L10.8972 108.078C13.5908 105.685 16.3653 103.231 19.1399 100.838C23.0284 97.4847 26.9776 94.1309 30.8054 90.8793L31.0484 90.6953Z"
            fill="#6776FF"
          />
          <path
            d="M10.1073 87.6074H10.2288C11.0794 87.546 11.7478 87.2802 12.3149 86.8098C17.5805 82.3313 21.874 78.6708 25.8232 75.2761C27.0384 74.2331 27.2814 72.8834 26.4713 71.6769C25.8232 70.7157 24.8916 70.1841 23.8588 70.1841C23.5347 70.1841 23.2107 70.2454 22.8664 70.3476C22.2993 70.5317 21.6917 70.8793 21.1044 71.3701C18.1071 73.9059 15.0894 76.4622 12.1731 78.9571C10.8364 80.1023 9.4795 81.2474 8.14284 82.3926C7.04921 83.3129 6.70492 84.5194 7.19098 85.7055C7.65678 86.8712 8.68966 87.546 10.1073 87.6074Z"
            fill="#6776FF"
          />
          <path
            d="M42.4505 91.4519C42.2885 91.4315 42.1062 91.411 41.9442 91.411C41.0531 91.411 40.2025 91.7587 39.3519 92.454C35.2811 95.7669 31.8787 98.5481 28.4156 101.411C26.9776 102.597 27.0384 103.845 27.3624 104.663C27.7067 105.542 28.4763 106.626 30.3193 106.708H30.4003C31.2307 106.687 31.98 106.38 32.6888 105.808C34.39 104.417 36.071 103.027 37.7722 101.636L37.914 101.513C39.9392 99.8568 41.9645 98.2004 43.9897 96.5235C45.0226 95.6851 45.3871 94.5399 45.0023 93.3947C44.6985 92.638 44.0505 91.6769 42.4505 91.4519Z"
            fill="#6776FF"
          />
          <path
            d="M117.445 0H117.425C115.197 0 112.787 0.102249 109.81 0.306748C104.99 0.654397 100.697 1.55419 96.6461 3.06748C93.2032 4.35583 89.9223 6.07362 86.7629 7.73006C85.3857 8.44581 83.9681 9.20245 82.5504 9.89775C81.9023 10.2249 81.2542 10.5317 80.6062 10.8384C77.1227 12.5153 73.5178 14.2536 70.4597 16.8916C64.2422 22.2495 58.9563 27.4438 54.2982 32.7812C54.1767 32.9243 54.0552 33.0675 53.9337 33.2106C52.7793 34.5603 51.7869 35.7055 50.3085 35.7055C49.9237 35.7055 49.4984 35.6237 49.0528 35.4806C48.9313 35.4397 48.7895 35.4192 48.6275 35.4192C48.4858 35.4192 48.3642 35.4397 48.263 35.4601C48.2225 35.4601 48.1617 35.4806 48.1415 35.4806C47.6351 35.501 47.1491 35.5215 46.6428 35.5624C41.9037 35.7873 37.0026 36.0327 32.223 36.9939C26.8359 38.0982 20.6791 39.6115 15.5552 43.8241C12.1326 46.6258 8.91243 49.8159 5.69229 53.5583C3.80881 55.7464 1.6823 58.2209 0.487409 61.3701C-0.282184 63.3947 -0.140417 65.0307 0.912711 66.3804C1.80382 67.546 3.07972 68.1595 4.55815 68.1595C4.98346 68.1595 5.42901 68.0982 5.85431 67.9959C10.9984 66.7894 16.2843 65.8078 21.388 64.8671C22.8056 64.6012 24.2841 64.3354 25.722 64.0695C26.1068 63.9877 26.4106 63.9673 26.6738 63.9673C27.2409 63.9673 27.7675 64.1309 28.4156 64.908C32.1015 69.3456 36.476 73.3129 40.3443 76.8303C43.7264 79.8978 46.744 83.456 49.6604 86.8916C51.0983 88.589 52.597 90.3476 54.1159 92.0245C54.359 92.2904 54.4805 92.5971 54.3387 93.272C53.9539 94.8875 53.5894 96.5235 53.2248 98.0982C52.4957 101.309 51.7261 104.642 50.8755 107.873C50.7135 108.507 50.511 109.162 50.3085 109.796C49.7819 111.554 49.2351 113.354 49.1541 115.297C49.0933 116.626 49.5186 117.853 50.349 118.712C51.1388 119.55 52.2527 120 53.4679 120C53.7311 120 53.9944 119.98 54.2577 119.939C55.4931 119.755 56.688 119.325 57.8019 118.691C62.8853 115.849 67.118 111.943 71.371 107.853C75.0975 104.274 77.8518 100 79.4923 95.1738C82.0441 87.7505 83.4213 79.6728 83.8061 69.7546C83.8061 69.6115 83.8061 69.4683 83.8061 69.3252C83.7858 68.8139 83.8061 68.6708 84.0693 68.4663C87.9173 65.5419 91.3805 62.3517 94.2766 59.6524C94.8639 59.1002 95.4715 58.5276 96.0588 57.9959C99.9068 54.4376 103.897 50.7362 106.631 45.9305C109.851 40.2454 113.071 34.6217 115.805 29.8773C120.22 22.1881 121.253 13.7423 121.941 5.74642V5.70552L121.962 5.46012C121.962 5.29652 121.982 5.11247 121.982 4.94888C122.083 3.29243 121.759 2.08589 120.99 1.24744C120.22 0.408998 119.066 0 117.445 0ZM45.5694 42.1063C43.8074 43.681 42.1467 45.1738 40.567 46.7689C38.6836 48.6708 36.6178 50.4499 34.6331 52.1677C32.5066 54.0082 30.3193 55.8896 28.3143 57.955C27.7877 58.5072 27.0789 58.6094 26.3093 58.7321L26.2485 58.7526C19.4842 59.8773 12.6794 61.1656 5.97583 62.6176C6.86694 60.5931 8.30486 58.8957 9.70228 57.2597C13.1249 53.272 16.2236 50.1841 19.464 47.5665C23.3524 44.4376 27.9295 43.0879 33.6002 42.0041C37.995 41.1861 42.41 40.7566 47.1288 40.6953C46.6023 41.1861 46.0757 41.6564 45.5694 42.1063ZM86.2161 13.9673C87.2895 13.4356 88.3628 12.8834 89.3957 12.3517C95.7347 9.07975 102.276 5.70552 109.77 5.54192C111.066 5.52147 112.382 5.39877 113.658 5.27607C114.509 5.19427 115.4 5.11247 116.271 5.07157C116.332 5.07157 116.372 5.07157 116.433 5.07157C116.716 5.07157 116.777 5.13292 116.777 5.13292C116.797 5.15337 116.858 5.25562 116.838 5.70552C116.534 10.5112 115.967 14.3967 115.056 17.8937C113.962 22.1472 112.362 25.8078 110.175 29.1207C109.506 30.1227 108.879 31.2474 108.109 32.7403C108.008 32.9448 107.947 33.0266 107.906 33.0675C107.866 33.047 107.785 33.0061 107.603 32.8425C105.031 30.5521 102.418 28.2413 99.8663 26.0123L98.0233 24.3763C95.2082 21.9018 92.3931 19.4274 89.5375 16.8916L86.2161 13.9673ZM63.4928 87.7914C67.0775 84.3558 70.6419 80.7771 74.1051 77.3006L74.1456 77.2597C75.6038 75.7873 77.1227 74.274 78.6214 72.7812C77.7911 81.7587 76.6974 89.8364 72.9507 97.2597C72.2216 98.6912 70.9862 100.736 67.8066 103.824C64.3839 107.137 60.6372 110.552 56.364 113.19C55.7969 113.538 55.2703 113.865 54.6222 114.049C56.3032 107.812 57.9031 101.922 59.0575 95.8078C59.6044 92.6994 61.022 90.1636 63.4928 87.7914ZM72.7482 71.4928C68.2927 75.7669 63.6751 80.2045 59.4221 84.8466V84.8671C58.2879 86.1145 57.5386 86.9325 57.093 86.9325C56.6475 86.9325 55.9184 86.0123 54.9868 84.8262C51.0173 79.775 46.3592 75.2965 41.8429 70.9611C40.2835 69.4683 38.6836 67.9346 37.1241 66.4008C36.9013 66.1963 36.6988 65.9714 36.476 65.7669L36.4355 65.726C35.3824 64.683 34.2888 63.6196 33.2964 62.4949C32.8711 62.0245 32.4053 61.4928 32.4053 61.2474C32.4255 61.0225 32.9521 60.5317 33.4179 60.1022C34.4103 59.2025 35.4432 58.3027 36.4355 57.4438C37.7722 56.2781 39.1696 55.0716 40.4658 53.8241C42.4708 51.8814 44.5568 49.9386 46.5618 48.0573C51.1186 43.8037 55.8171 39.407 60.0702 34.6421C65.032 29.1002 70.6622 22.8425 77.6088 18.4663C79.2492 17.4438 80.3226 16.7485 81.0922 16.7485C81.8618 16.7485 82.6112 17.3824 84.3934 18.9571L84.5554 19.1002C89.1122 23.1493 93.7703 27.2188 98.2663 31.1452L98.3878 31.2474C100.454 33.047 102.58 34.9284 104.686 36.7485C104.929 36.953 105.152 37.1779 105.395 37.4029C105.415 37.4233 105.456 37.4642 105.476 37.4847C105.476 37.4847 105.476 37.5051 105.456 37.5051C105.355 37.7096 105.274 37.8937 105.193 38.0573C102.033 43.865 98.1245 48.8548 93.2234 53.3333C90.7526 55.6033 88.1198 57.8119 85.5883 59.9387C82.3276 62.6789 78.986 65.501 75.8671 68.5072C74.814 69.5092 73.7608 70.5317 72.7482 71.4928Z"
            fill="#6776FF"
          />
          <path
            d="M88.4034 38.9162C87.573 36.5849 85.8921 34.6421 83.2795 33.0061C80.991 31.5746 78.4189 30.8589 75.5836 30.8589C75.3 30.8589 75.0367 30.8589 74.7532 30.8793C74.5912 30.8793 74.4089 30.8793 74.2469 30.8793C73.1128 30.8793 71.9381 30.8998 70.7432 31.4724C67.5838 32.9857 65.0928 35.1943 63.3308 38.0164C61.2651 41.3497 60.8195 44.4581 61.9941 47.3006C63.0473 49.8364 64.8295 52.1268 66.9965 53.7219C69.366 55.4806 72.1204 56.4008 74.9557 56.4008C76.1304 56.4008 77.3253 56.2372 78.5202 55.9305C81.1935 55.2147 83.2795 54.2127 84.8794 52.8425C86.7224 51.2679 87.9578 49.1411 88.5451 46.5644C89.1932 43.5583 89.1527 41.0429 88.4034 38.9162ZM82.996 42.9652C83.0365 46.3599 81.7606 48.6094 79.067 49.8569C77.5075 50.5726 76.1304 50.9202 74.8342 50.9202C73.295 50.9202 71.9179 50.4294 70.642 49.407C68.4142 47.6483 67.0168 45.91 67.4421 43.2106C67.8066 40.818 71.1888 37.2393 73.5786 36.7076C74.4089 36.5235 75.1988 36.4417 75.9278 36.4417C77.629 36.4417 79.148 36.9121 80.5657 37.8937C82.4491 39.182 83.2187 40.7771 82.996 42.8834V42.9652Z"
            fill="#6776FF"
          />
        </svg>
      </div>
      <img
        className="relative 420:-top-20 w-screen max-h-[500px]"
        src={BackImage.src}
      />
    </div>
  );
}
