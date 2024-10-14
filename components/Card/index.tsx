"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { FavoriteClothesElements } from "./types";

const Card = () => {
  return (
    <Swiper modules={[Pagination]} slidesPerView={2} spaceBetween={12}>
      {FavoriteClothesElements.map(
        ({ src, category, title, price, off, badge, id }) => (
          <SwiperSlide key={id}>
            <div className="w-full shadow-md border border-gray-200">
              <div className="h-full w-full relative">
                <div className="relative">
                  <a href="product-detail.html">
                    <Image
                      src={src}
                      alt="image"
                      className="w-full"
                      width={500}
                      height={500}
                    />
                  </a>
                  <a className="absolute top-2 right-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2196f3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </a>
                </div>
                <div className="p-2.5">
                  <span className="text-sm font-thin">{category}</span>
                  <h6 className="font-medium text-sm">
                    <a href="product-detail.html">{title}</a>
                  </h6>
                  <h6 className="text-[#2196f3] font-semibold">
                    {off}
                    <del className="text-gray-800 pl-2">{price}</del>
                  </h6>
                </div>
                <div className="absolute text-sm font-extralight p-1 bg-black flex items-center text-white top-0 left-0">
                  <span className="badge badge-secondary">{badge}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Card;
