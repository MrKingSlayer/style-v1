import Image from "next/image";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { GrFavorite } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";

interface SidebarOptions {
  title: string;
  icon: JSX.Element;
}

const SidebarElements: SidebarOptions[] = [
  {
    title: "پروفایل",
    icon: <FaRegUser />,
  },
  {
    title: "سبد خرید",
    icon: <IoBagHandleOutline />,
  },
  {
    title: "دسته بندی",
    icon: <TbCategory />,
  },
  {
    title: "کیف پول",
    icon: <IoWalletOutline />,
  },
  {
    title: "مورد علاقه ها",
    icon: <GrFavorite />,
  },

  {
    title: "پشتیبانی",
    icon: <BiSupport />,
  },
  {
    title: "خروج از حساب",
    icon: <PiSignOutBold />,
  },
];

const Sidebar = () => {
  return (
    <Sheet>
      <div className="text-3xl cursor-pointer">
        <SheetTrigger asChild>
          <CgMenuGridO />
        </SheetTrigger>
      </div>
      <SheetContent side={"left"}>
        <SheetHeader className="text-right flex flex-row items-center justify-between">
          <div className="flex items-center w-full gap-x-2 text-right">
            <div>
              <Image
                src={"/user-profile.jpeg"}
                alt="profile-image"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <SheetTitle>مهدی بهرامی</SheetTitle>
              <SheetDescription>۰۹۱۳۸۲۳۴۷۵۶</SheetDescription>
            </div>

            <Link href={"/"} className="text-3xl">
              <CiEdit />
            </Link>
          </div>
        </SheetHeader>

        <div className="my-6">
          {SidebarElements.map(({ title, icon }) => (
            <Link
              href={"/"}
              className="flex items-center justify-between py-4"
              key={title}
            >
              <div className="flex items-center gap-x-2 sm:gap-x-4">
                <div className="text-2xl">{icon}</div>
                <h3 className="text-base">{title}</h3>
              </div>
              <IoIosArrowBack />
            </Link>
          ))}
        </div>

        <SheetFooter className="absolute bottom-8 left-[24px]">
          <div>
            <h1 className="text-left">MyStyle Web App</h1>
            <span className="font-extralight text-sm block text-left">
              Version 1.0.0
            </span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
