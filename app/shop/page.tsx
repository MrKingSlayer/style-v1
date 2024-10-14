import HeadsUp from "@/components/HeadsUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import { CiImageOn } from "react-icons/ci";

const Shop = () => {
  return (
    <div className="w-full max-w-5xl h-full mx-auto flex flex-col items-center justify-center">
      {/* <div className="w-full  h-full">
        <HeadsUp title="ثبت فروشگاه" />
      </div>

      <div className="w-full my-8">
        <div className="my-10">
          <Label>به دوسما خوش آمدید!</Label>
          <p className="text-sm">
            {" "}
            شماره خود را وارد کنید تا کد فعال سازی برایتان پیامک شود.
          </p>
        </div>
        <Input
          type="email"
          id="email"
          placeholder="مثلا ۰۹۱۳۷۶۳۴۵۶۷"
          className="my-2"
        />

        <Link href="/shop/verification">
          <Button className="w-full primary text-white">ثبت فروشگاه</Button>
        </Link>
      </div>

      <Accordion type="single" collapsible className="w-full my-16">
        <AccordionItem value="item-1">
          <AccordionTrigger>چرا در مای شاپ فروشنده شویم؟ </AccordionTrigger>
          <AccordionContent>
            -صرفه‌جویی در زمان و هزینه با امکان استفاده از ارسال سریع
          </AccordionContent>
          <AccordionContent>-امکان ارسال به همه مناطق کشور</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>چگونه در مای شاپ فروشنده شویم؟ </AccordionTrigger>
          <AccordionContent>
            -در مای شاپ ثبت‌نام و مدارک خود را بارگذاری کنید
          </AccordionContent>
          <AccordionContent>
            -محصولات خود را از طریق سیستم فروشندگان مای شاپ اضافه کنید
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}

      {/* Submit product */}

      <div className="w-full  h-full">
        <HeadsUp title="ثبت محصول" />
      </div>

      <div className="w-full max-w-xs md:max-w-sm my-8">
        <div className="w-full">
          <Link
            href="/"
            className="flex justify-between items-center border-b-slate-600 border-b py-2"
          >
            <Label>دسته بندی</Label>
            <span>+</span>
          </Link>
        </div>

        <div className="w-full">
          <div className="mt-4">
            <Label className="text-base">عکس محصول</Label>
          </div>
          <div className="py-2 text-xs">
            <p>افزودن عکس محصول آگهی شما را تا ۳ برابر افزایش میدهد</p>
          </div>
          <div className="flex justify-start items-start gap-x-2">
            <div className="order-2">
              <Image
                src={"/static/upload.png"}
                width={300}
                height={300}
                alt="upload-product"
              />
              <p className="text-xs text-center my-2 leading-5">
                فرمت عکس ها (jpg,jpeg,png) *{" "}
                <span className="block ">سایز عکس ها (30*40)</span>
              </p>
            </div>
            <div className="order-1 flex items-center flex-col gap-y-2">
              <div className="bg-slate-100 p-2 rounded">
                <CiImageOn className="text-xl" />
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <CiImageOn className="text-xl" />
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <CiImageOn className="text-xl" />
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <CiImageOn className="text-xl" />
              </div>
              <div className="bg-primary flex rounded justify-center items-center w-full p-2">
                <span className="text-white ">+</span>
              </div>
            </div>
          </div>

          <form action="">
            <div className="my-5">
              <div className="my-2">
                <Label className="text-lg">عنوان محصول</Label>
              </div>
              <div className="text-sm">
                <p>
                  لطفا عنوان محصولی که میخواهید نمایش ذاده شود را وارد کنید{" "}
                </p>
              </div>
              <Input
                type="email"
                id="email"
                placeholder="مثلا شلوار کارگو"
                className="my-2"
              />
            </div>
            <div>
              <div className="my-2">
                <Label className="text-base">توضیحات محصول</Label>
              </div>
              <div className="text-xs">
                <p>
                  لطفا عنوان محصولی که میخواهید نمایش ذاده شود را وارد کنید{" "}
                </p>
              </div>
              <Input
                type="email"
                id="email"
                placeholder="مثلا شلوار کارگو"
                className="my-2"
              />
            </div>
          </form>

          <div className="my-4">
            <Button className="w-full text-white">ثبت محصول</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
