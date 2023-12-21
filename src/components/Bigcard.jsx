import React, { useRef } from "react";
import bigimg from "../assets/images/main-315-658139d022e83.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function BigCard() {
  const first = React.useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="xl:max-h-[351px] sm:max-h-[361px] sm:pt-[26px] sm:pe-7 sm:pb-11 sm:ps-8 p-3 bg-white bg-[url(./assets/images/createbg-658139cdc2dea.webp)] rounded-[18px]">
        <div className="flex justify-end items-center gap-[22px]">
          <a href="#" onClick={() => first?.current?.slickPrev()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.084 2L7.916 2C4.377 2 2 4.276 2 7.665L2 16.335C2 19.724 4.377 22 7.916 22L16.084 22C19.622 22 22 19.723 22 16.334L22 7.665C22 4.276 19.622 2 16.084 2Z"
                fill="url(#paint0_linear_33_679)"
              />
              <path
                d="M11.145 7.72082L7.38003 11.4688C7.09703 11.7508 7.09703 12.2498 7.38003 12.5328L11.145 16.2808C11.439 16.5728 11.914 16.5718 12.206 16.2778C12.498 15.9838 12.498 15.5098 12.204 15.2168L9.72703 12.7498H16.082C16.497 12.7498 16.832 12.4138 16.832 11.9998C16.832 11.5858 16.497 11.2498 16.082 11.2498L9.72703 11.2498L12.204 8.78382C12.351 8.63682 12.424 8.44482 12.424 8.25182C12.424 8.06082 12.351 7.86882 12.206 7.72282C11.914 7.42982 11.439 7.42882 11.145 7.72082Z"
                fill="url(#paint1_linear_33_679)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_33_679"
                  x1="27.1316"
                  y1="0.550725"
                  x2="-3.72395"
                  y2="16.9337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC881" />
                  <stop offset="1" stopColor="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_679"
                  x1="19.3117"
                  y1="6.85051"
                  x2="4.89007"
                  y2="15.076"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC881" />
                  <stop offset="1" stopColor="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a href="#" onClick={() => first?.current?.slickNext()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M7.916 22H16.084C19.623 22 22 19.724 22 16.335V7.665C22 4.276 19.623 2 16.084 2H7.916C4.378 2 2 4.277 2 7.666L2 16.335C2 19.724 4.378 22 7.916 22Z"
                fill="url(#paint0_linear_33_676)"
              />
              <path
                d="M12.855 16.2792L16.62 12.5312C16.903 12.2492 16.903 11.7502 16.62 11.4672L12.855 7.71918C12.561 7.42718 12.086 7.42818 11.794 7.72218C11.502 8.01618 11.502 8.49018 11.796 8.78318L14.273 11.2502H7.91797C7.50297 11.2502 7.16797 11.5862 7.16797 12.0002C7.16797 12.4142 7.50297 12.7502 7.91797 12.7502H14.273L11.796 15.2162C11.649 15.3632 11.576 15.5552 11.576 15.7482C11.576 15.9392 11.649 16.1312 11.794 16.2772C12.086 16.5702 12.561 16.5712 12.855 16.2792Z"
                fill="url(#paint1_linear_33_676)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_33_676"
                  x1="-3.13158"
                  y1="23.4493"
                  x2="27.724"
                  y2="7.06634"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC881" />
                  <stop offset="1" stopColor="#DA8517" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_33_676"
                  x1="4.68833"
                  y1="17.1495"
                  x2="19.1099"
                  y2="8.92402"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC881" />
                  <stop offset="1" stopColor="#DA8517" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
        <div className="row sm:mt-7 mt-4 flex-col-reverse sm:flex-row">
          <div className="sm:w-6/12 w-full px-3 mt-6 sm:mt-0">
            <p className=" bg-browngradiant text-transparent bg-clip-text text-base font-medium font-Inter leading-tight">
              Create MetroVerse Genesis
            </p>
            <p className=" text-[#7C7C7C] sm:max-w-[283px] text-xs font-medium font-Inter pt-8">
              physical claim for issue #1 now live. please check that the token
              is available for claim via website
            </p>
            <button className=" px-4 py-2  bg-browngradiant rounded-[22px] shadow-buttonmy justify-center items-center gap-1 inline-flex text-white text-sm font-medium font-Inter leading-tight hover:shadow-sm duration-300 mt-8">
              Explorer Now
            </button>
            <div className="rounded-[7px] border border-orange-300   px-[14px] max-w-[299px] flex flex-wrap xl:flex-nowrap items-center  justify-around mt-4">
              <div className=" xl:border-r-[1px] border-r-[#FFC780] text-center pt-3 pb-2 pe-3 pl-1">
                <p className=" bg-browngradiant text-transparent bg-clip-text text-xs font-bold font-Inter leading-tight">
                  24.8K
                </p>
                <p className="text-zinc-500 text-[10px] font-medium font-Inter leading-tight">
                  Items
                </p>
              </div>
              <div className=" xl:border-r-[1px] border-r-[#FFC780] text-center pt-3 pb-2 pe-3 pl-1">
                <p className=" bg-browngradiant text-transparent bg-clip-text text-xs font-bold font-Inter leading-tight">
                  4,1K
                </p>
                <p className="text-zinc-500 text-[10px] font-medium font-Inter leading-tight">
                  Owners
                </p>
              </div>
              <div className=" xl:border-r-[1px] border-r-[#FFC780] text-center pt-3 pb-2 pe-3 pl-1">
                <p className=" bg-browngradiant text-transparent bg-clip-text text-xs font-bold font-Inter leading-tight">
                  0.221
                </p>
                <p className="text-zinc-500 text-[10px] font-medium font-Inter leading-tight">
                  Floor Price
                </p>
              </div>
              <div className="  text-center pt-3 pb-2">
                <p className=" bg-browngradiant text-transparent bg-clip-text text-xs font-bold font-Inter leading-tight">
                  43.1K
                </p>
                <p className="text-zinc-500 text-[10px] font-medium font-Inter leading-tight">
                  Volume Traded
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-6/12 w-full  px-3 ">
            <Slider ref={first} {...settings}>
              <div className="px-1">
                <img
                  src={bigimg}
                  alt="bigimg"
                  className="w-full min-h-[307px] max-h-[307px]  h-full rounded-[18px] "
                />
              </div>
              <div className="px-1">
                <img
                  src={bigimg}
                  alt="bigimg"
                  className="w-full min-h-[307px] max-h-[307px]  h-full rounded-[18px] "
                />
              </div>
              <div className="px-1">
                <img
                  src={bigimg}
                  alt="bigimg"
                  className="w-full min-h-[307px] max-h-[307px]  h-full rounded-[18px] "
                />
              </div>
              <div className="px-1">
                <img
                  src={bigimg}
                  alt="bigimg"
                  className="w-full min-h-[307px] max-h-[307px]  h-full rounded-[18px] "
                />
              </div>
              <div className="px-1">
                <img
                  src={bigimg}
                  alt="bigimg"
                  className="w-full min-h-[307px] max-h-[307px]  h-full rounded-[18px] "
                />
              </div>
              <div>
                <img
                  src={bigimg}
                  alt="bigimg"
                  className="w-full min-h-[307px] max-h-[307px]  h-full rounded-[18px] object-cover "
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
