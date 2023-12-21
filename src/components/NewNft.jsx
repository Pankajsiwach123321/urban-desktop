import React from "react";
import block1 from "../assets/images/block1-658139cb88095.webp";
import block2 from "../assets/images/block2-658139cbdca20.webp";
import block3 from "../assets/images/block3-658139cc490b8.webp";
import s from "../assets/images/only-S.png";

const myinfo = [
  {
    id: 1,
    img: block1,
    Name: "Metroverse Genesis",
    Unit: "Block #1460",
    Owner: (
      <>
        Owned by <span className="text-orange-300 font-bold ">BabyKee</span>
      </>
    ),
    Like: "1K",
    Amount: "21",
  },
  {
    id: 2,
    img: block2,
    Name: "Metroverse Genesis",
    Unit: "Block #1460",
    Owner: (
      <>
        Owned by <span className="text-orange-300 font-bold ">BabyKee</span>
      </>
    ),
    Like: "1K",
    Amount: "21",
  },
  {
    id: 3,
    img: block3,
    Name: "Metroverse Genesis",
    Unit: "Block #1460",
    Owner: (
      <>
        Owned by <span className="text-orange-300 font-bold ">BabyKee</span>
      </>
    ),
    Like: "1K",
    Amount: "21",
  },
];
const NewNft = () => {
  const myown = myinfo.map((myinfo) => (
    <div
      className="bg-white rounded-2xl pr-6 py-[9px] pl-[9px] mb-3"
      key={myinfo.id}
    >
      <div className=" flex  justify-between">
        <div className=" flex sm:flex-row flex-col  items-start w-full  gap-[11px]">
          <img
            src={myinfo.img}
            alt="block"
            className=" rounded-[10px] max-w-[104px] w-full"
          />
          <span>
            <p className="text-neutral-500 text-[7px] font-medium font-Inter leading-[8.12px]">
              {myinfo.Name}
            </p>
            <p className="text-zinc-700 text-sm font-bold  font-Inter leading-none pt-2">
              {myinfo.Unit}
            </p>
            <p className="text-neutral-500 text-[7px] font-medium  font-Inter leading-[8.12px] pt-2">
              {myinfo.Owner}
            </p>
            <div className="flex items-start gap-1 mt-4">
              <svg
                className=" cursor-pointer"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.9149 6.73221C1.19957 4.49888 2.03557 1.94621 4.38024 1.19088C5.61357 0.792881 6.9749 1.02755 8.00024 1.79888C8.97024 1.04888 10.3816 0.795548 11.6136 1.19088C13.9582 1.94621 14.7996 4.49888 14.0849 6.73221C12.9716 10.2722 8.00024 12.9989 8.00024 12.9989C8.00024 12.9989 3.06557 10.3135 1.9149 6.73221Z"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.667 3.4668C11.3803 3.69746 11.8843 4.33413 11.945 5.08146"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-gray-900 text-sm font-medium font-Inter leading-none">
                {myinfo.Like}
              </p>
            </div>
          </span>
        </div>
        <div className=" flex items-end gap-1 pb-1">
          <img src={s} alt="onlys" className="cursor-pointer" />
          <p className="text-gray-900 text-sm font-medium font-Inter leading-none">
            {myinfo.Amount}
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
        <h2 className="text-[#4F4F4F] font-Inter text-base font-semibold pb-4">
          New NFTs
        </h2>
        {myown}
      </div>
    </div>
  );
};

export default NewNft;
