"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { LuFilter } from "react-icons/lu";
import { FaLongArrowAltUp } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
import Image from "next/image";

const Products = () => {
  const router = useRouter();

  return (
    <div className="px-6  max-w-[1000px] mx-auto">
      <div className="flex justify-between items-center gap-x-6 py-2">
        <div
          className="flex items-center justify-center w-14 h-10 rounded bg-slate-100"
          onClick={() => router.back()}
        >
          <IoMdArrowForward className="text-3x" />
        </div>
        <div className="flex w-full items-center space-x-2 relative">
          <Input
            type="search"
            placeholder="جستجوی محصولات"
            className="text-center "
          />
          <div className="absolute top-1/2 -translate-y-2/4 left-0">
            <GoSearch className="text-3xl text-slate-500" />
          </div>
        </div>
        <div className="text-3xl ">
          <Link href={"/store"}>
            <IoBagHandleOutline />
            <span className="bg-primary text-white rounded-full text-sm w-3 h-3 p-3 absolute top-2 transform translate-x-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3.2}
        breakpoints={{
          575: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={12}
        className="my-4"
      >
        <SwiperSlide>
          <Link
            href={""}
            className="text-sm bg-primary text-white block text-center text-nowrap py-2 rounded-md"
          >
            بهترین پیشنهادات
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={""}
            className="text-sm bg-slate-100 block text-center text-nowrap py-2 rounded-md"
          >
            شلوار مردانه
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={""}
            className="text-sm bg-slate-100 block text-center text-nowrap py-2 rounded-md"
          >
            تیشرت مردانه
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={""}
            className="text-sm bg-slate-100 block text-center text-nowrap py-2 rounded-md"
          >
            زمستانه
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={""}
            className="text-sm bg-slate-100 block text-center text-nowrap py-2 rounded-md"
          >
            مردانه تابستانه
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={""}
            className="text-sm bg-slate-100 block text-center text-nowrap py-2 rounded-md"
          >
            بهترین پیشنهادات
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={""}
            className="text-sm bg-slate-100 block text-center text-nowrap py-2 rounded-md"
          >
            بهترین پیشنهادات
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center gap-4 justify-between my-8">
        <div className="w-2/4  shadow-md border border-gray-200">
          <div className="h-full w-full relative">
            <div className="relative">
              <a href="product-detail.html">
                <Image
                  src={"/static/dress1.png"}
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
              <span className="text-sm font-thin">T-Shirt</span>
              <h6 className="font-medium text-sm">
                <a href="product-detail.html">
                  مردانه یقه گرد با پرینت خاکستری مشکی
                </a>
              </h6>
              <h6 className="text-[#2196f3] font-semibold">
                $12.50
                <del className="text-gray-800 pl-2">$25.15</del>
              </h6>
            </div>
          </div>
        </div>

        <div className="w-2/4 shadow-md border border-gray-200">
          <div className="h-full w-full relative">
            <div className="relative">
              <a href="product-detail.html">
                <Image
                  src={"/static/dress2.png"}
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
              <span className="text-sm font-thin">T-Shirt</span>
              <h6 className="font-medium text-sm">
                <a href="product-detail.html">
                  مردانه یقه گرد با پرینت خاکستری مشکی
                </a>
              </h6>
              <h6 className="text-[#2196f3] font-semibold">
                $12.50
                <del className="text-gray-800 pl-2">$25.15</del>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between my-8">
        <div className="w-2/4  shadow-md border border-gray-200">
          <div className="h-full w-full relative">
            <div className="relative">
              <a href="product-detail.html">
                <Image
                  src={"/static/pic3.png"}
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
              <span className="text-sm font-thin">T-Shirt</span>
              <h6 className="font-medium text-sm">
                <a href="product-detail.html">
                  مردانه یقه گرد با پرینت خاکستری مشکی
                </a>
              </h6>
              <h6 className="text-[#2196f3] font-semibold">
                $12.50
                <del className="text-gray-800 pl-2">$25.15</del>
              </h6>
            </div>
          </div>
        </div>

        <div className="w-2/4 shadow-md border border-gray-200">
          <div className="h-full w-full relative">
            <div className="relative">
              <a href="product-detail.html">
                <Image
                  src={"/static/pic1.png"}
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
              <span className="text-sm font-thin">T-Shirt</span>
              <h6 className="font-medium text-sm">
                <a href="product-detail.html">
                  مردانه یقه گرد با پرینت خاکستری مشکی
                </a>
              </h6>
              <h6 className="text-[#2196f3] font-semibold">
                $12.50
                <del className="text-gray-800 pl-2">$25.15</del>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between my-8">
        <div className="w-2/4  shadow-md border border-gray-200">
          <div className="h-full w-full relative">
            <div className="relative">
              <a href="product-detail.html">
                <Image
                  src={"/static/dress1.png"}
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
              <span className="text-sm font-thin">T-Shirt</span>
              <h6 className="font-medium text-sm">
                <a href="product-detail.html">
                  مردانه یقه گرد با پرینت خاکستری مشکی
                </a>
              </h6>
              <h6 className="text-[#2196f3] font-semibold">
                $12.50
                <del className="text-gray-800 pl-2">$25.15</del>
              </h6>
            </div>
          </div>
        </div>

        <div className="w-2/4 shadow-md border border-gray-200">
          <div className="h-full w-full relative">
            <div className="relative">
              <a href="product-detail.html">
                <Image
                  src={"/static/pic3.png"}
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
              <span className="text-sm font-thin">T-Shirt</span>
              <h6 className="font-medium text-sm">
                <a href="product-detail.html">
                  مردانه یقه گرد با پرینت خاکستری مشکی
                </a>
              </h6>
              <h6 className="text-[#2196f3] font-semibold">
                $12.50
                <del className="text-gray-800 pl-2">$25.15</del>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full fixed bottom-0 right-0 z-10">
        <footer className="w-full mx-auto shadow-inner  max-w-[600px] border-t border-slate-300  bg-white py-2">
          <ul className="flex items-center justify-between">
            <li className="flex items-center justify-center gap-x-2 p-2 w-1/3">
              <span>جنسیت</span>
              <FaRegUser />
            </li>
            <li className="flex items-center justify-center gap-x-2 p-2 border-r border-l border-slate-300 w-1/3">
              <span>مرتب</span>
              <FaLongArrowAltUp />
            </li>
            <li className="flex items-center justify-center gap-x-2 p-2 w-1/3">
              <span>فیلتر</span>
              <LuFilter />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Products;
