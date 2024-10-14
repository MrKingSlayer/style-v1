"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { BannerSliderElements } from "./type";

const BannerSliding = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        575: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {BannerSliderElements.map(({ src, tag, title, description, id }) => (
        <SwiperSlide key={id}>
          <div className="w-full mt-16">
            <div
              className="bg-cover bg-center h-full w-full text-left"
              style={{ backgroundImage: `url('${src}` }}
            >
              <div className="p-4">
                <span className="block mb-3 text-[#2196f3] font-bold">
                  {tag}
                </span>
                <h2 className="font-extrabold text-3xl">{title}</h2>
                <p>{description}</p>
                <a
                  href="product.html"
                  className="bg-[#2196f3] text-white inline-block py-1 px-8 text-sm my-4"
                >
                  خرید
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSliding;
