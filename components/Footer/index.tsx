"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { BsShopWindow } from "react-icons/bs";
import { TbCategoryPlus } from "react-icons/tb";
import { FiShoppingBag, FiUser } from "react-icons/fi";

interface FooterOptions {
  title: string;
  link: string;
  icon: JSX.Element;
}

const FooterElements: FooterOptions[] = [
  {
    title: "فروشگاه",
    link: "/shop",
    icon: <BsShopWindow />,
  },
  {
    title: "بازار",
    link: "/products",
    icon: <FiShoppingBag />,
  },
  {
    title: "خانه",
    link: "/",
    icon: <IoHomeOutline />,
  },
  {
    title: "دسته بندی",
    link: "/category",
    icon: <TbCategoryPlus />,
  },
  {
    title: "حساب کاربری",
    link: "/login",
    icon: <FiUser />,
  },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="w-full fixed bottom-0 z-10 bg-white shadow-inner">
      <footer className="w-full flex justify-between items-center py-4 px-2">
        {FooterElements.map(({ title, icon, link }) => {
          const isActive = pathname === link;
          return (
            <Link
              href={link}
              className={`w-1/4 text-center block text-2xl ${
                isActive ? "text-primary" : "text-gray-800"
              }`}
              key={title}
            >
              <div className="flex flex-col items-center">
                <div className="text-2xl">{icon}</div>
                <span className="block text-sm mt-2">{title}</span>
              </div>
            </Link>
          );
        })}
      </footer>
    </div>
  );
};

export default Footer;
