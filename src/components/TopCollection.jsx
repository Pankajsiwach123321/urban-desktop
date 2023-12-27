import React, { useState } from "react";
import dragon from "../assets/images/jozo-658139cf22ed9.webp";
import dargonbg from "../assets/images/surfing-658139d2d645a.webp";
import pxn from "../assets/images/pxn-658139d1da624.webp";
import bgpxn from "../assets/images/phanton-658139d1542f5.webp";
import rangore from "../assets/images/ragnarok-658139d222fd3.webp";
import bgrangore from "../assets/images/game.webp";
const myinfo = [
  {
    id: 1,
    bgdargon: dargonbg,
    img: dragon,
    para1: " Jozo Gators",
    para2: "1.1K",
  },
  {
    id: 2,
    bgdargon: bgpxn,
    img: pxn,
    para1: "PXN: Ghost Division",
    para2: "10K",
  },
  {
    id: 3,
    bgdargon: bgrangore,
    img: rangore,
    para1: "Ragnarok Meta",
    para2: "7.8K",
  },
  {
    id: 4,
    bgdargon: bgpxn,
    img: dragon,
    para1: " Jozo Gators",
    para2: "1.1K",
  },
  {
    id: 5,
    bgdargon: bgrangore,
    img: pxn,
    para1: "PXN: Ghost Division",
    para2: "10K",
  },
  {
    id: 6,
    bgdargon: dargonbg,
    img: rangore,
    para1: "Ragnarok Meta",
    para2: "7.8K",
  },
];
const TopCollection = () => {
  const [show, setshow] = useState(3);
  function showme() {
    if (show === 3) {
      setshow(6);
    } else {
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
          Top Collections
        </h2>
        <span className="flex items-center gap-3">
          <p className="text-[#4F4F4F] font-Inter text-xs font-semibold">
            {show === 3 ? "View All" : "View less"}
          </p>
          <span href="#" className=" cursor-pointer" onClick={showme}>
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

export default TopCollection;
