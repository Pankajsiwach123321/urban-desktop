import React from "react";
import cet from "../assets/images/cet-658139cd5bbc7.webp";
import borde from "../assets/images/boredape-658139cd0e899.webp";
import solpunk from "../assets/images/solpunk-658139d26c4c0.webp";
import s from "../assets/images/only-S.png";
const myinfo = [
  {
    id:1,
    img: cet,
    name: "Cet #68821",
    para1: "Cets on Creck",
    para2: "250",
  },
  {
    id:2,
    img: borde,
    name: "Bored Ape #981",
    para1: "Bored Ape Solana Club",
    para2: "38",
  },
  {
    id:3,
    img: solpunk,
    name: "SolPunk #7803",
    para1: "SolPunks",
    para2: "15",
  },
];
const History = () => {
  const myown = myinfo.map((myinfo) => (
    <div className="flex items-center justify-between mb-3 gap-1" key={myinfo.id}>
      <div className="flex items-center gap-[11px]">
        <img src={myinfo.img} alt="cet" className=" rounded-[66px]" />
        <span>
          <p className="text-zinc-700 text-sm font-bold font-Inter leading-none">
            {myinfo.name}
          </p>
          <p className="text-zinc-700 text-xs font-normal font-Inter pt-[6px] leading-[13.92px]">
            {myinfo.para1}
          </p>
        </span>
      </div>
      <span className=" flex  gap-[2px]  items-center">
        <img src={s} alt="onlys" />
        <p className="text-zinc-700 text-xs font-normal font-Inter leading-[13.92px]">
          {myinfo.para2}
        </p>
      </span>
    </div>
  ));
  return (
    <div>
      <div className=" shadow-carditems pt-4 pb-7 px-[15px] xl:mt-[68px] lg:mt-[73px] mt-5 bg-white rounded-[18px]">
        <div className=" flex justify-between items-center mb-9">
          <p className="text-neutral-600 text-base font-medium font-Inter leading-tight">
            History
          </p>
          <div className=" border-[1px] border-[#A8A8A8] py-1 px-[10px] bg-transparent rounded-lg flex items-center justify-between">
            <select
              name="languages"
              id="lango"
              className="outline-none bg-transparent w-full font-rubik text-[#4F4F4F] text-xs font-normal font-Inter leading-[20px]"
            >
              <option value="B2B">Last Month</option>
              <option value="B2C">Last Week</option>
              <option value="DTC">Last Year</option>
              <option value="C2B">Last Day</option>
            </select>
          </div>
        </div>
        {myown}
        <button className=" px-4 py-[15px] mt-[73px]  bg-browngradiant rounded-[22px] shadow-buttonmy justify-center items-center gap-1 inline-flex text-white text-sm font-medium font-Inter leading-tight hover:shadow-sm duration-300 text-center w-full">
          Show All
        </button>
      </div>
    </div>
  );
};

export default History;
