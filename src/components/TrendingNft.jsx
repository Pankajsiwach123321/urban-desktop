import React, { useState } from "react";
import Noryoz from "../assets/images/naryoz-658139d075751.webp";
import bgNoryoz from "../assets/images/watersea-658139d33ee60.webp";
import Bored from "../assets/images/bored-658139cca8969.webp";
import bgBored from "../assets/images/adeclub.webp";
import Boryoku from "../assets/images/baryoku-658139cad73b5.webp";
import bgBoryoku from "../assets/images/dragonz.webp";
const myinfo = [
  {
    id: 1,
    bgdargon: bgNoryoz,
    img: Noryoz,
    para1: " Jozo Gators",
    para2: "1.1K",
  },
  {
    id: 2,
    bgdargon: bgBored,
    img: Bored,
    para1: "PXN: Ghost Division",
    para2: "10K",
  },
  {
    id: 3,
    bgdargon: bgBoryoku,
    img: Boryoku,
    para1: "Ragnarok Meta",
    para2: "7.8K",
  },
  {
    id: 4,
    bgdargon: bgBored,
    img: Noryoz,
    para1: " Jozo Gators",
    para2: "1.1K",
  },
  {
    id: 5,
    bgdargon: bgBoryoku,
    img: Bored,
    para1: "PXN: Ghost Division",
    para2: "10K",
  },
  {
    id: 6,
    bgdargon: bgNoryoz,
    img: Boryoku,
    para1: "Ragnarok Meta",
    para2: "7.8K",
  },
];
const TrendingNft = () => {
  const [show, setshow] = useState(3);
  function showme() {
    if (show == 3) setshow(6);
    else {
      setshow(3);
    }
  }
  const myown = myinfo.slice(0, show).map((myinfo) => (
    <div
      className="md:w-4/12 sm:w-6/12 w-full px-3 sm:mt-4 mt-3"
      key={myinfo.id}
    >
      <div
        style={{ backgroundImage: `url(${myinfo.bgdargon})` }}
        className={`shadow-carditems w-full h-full pt-[62px] pb-2 flex flex-col justify-end items-center rounded-[18px] relative z-[1] overflow-hidden  bg-no-repeat bg-cover object-cover`}
      >
        <img
          src={myinfo.img}
          alt="dragon"
          className=" border-[2px] rounded-md"
        />
        <p className="text-white text-center font-Inter text-base font-semibold">
          {myinfo.para1}
        </p>
        <p className="text-[11px] font-Inter font-normal text-center text-white">
          {myinfo.para2}
        </p>
        <div className="w-full h-[69px] absolute bottom-0 left-0 -z-[1]  backdrop-blur-sm bg-[#6A6A6A] bg-opacity-70"></div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="sm:pt-[66px] pt-5 flex items-center justify-between">
        <h2 className="text-[#4F4F4F] font-Inter text-base font-semibold">
          Trendings NFTs
        </h2>
        <span className="flex items-center gap-3">
          <p className="text-[#4F4F4F] font-Inter text-xs font-semibold">
            {show == 3 ? "Marketplace" : "Marketplace-less"}
          </p>
          <span className=" cursor-pointer" onClick={showme}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.167 7.81706L3.16699 7.81706"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335"
                stroke="#130F26"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>
      <div className="row justify-center">{myown}</div>
    </div>
  );
};

export default TrendingNft;
