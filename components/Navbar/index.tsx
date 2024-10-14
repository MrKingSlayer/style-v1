import Image from "next/image";
import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import Sidebar from "../Sidebar";

const Navbar = () => {
  return (
    <header className="w-full min-h-16 fixed top-0 z-10 px-6 py-1 bg-white shadow-md">
      <div className="h-full">
        <div className="flex items-center justify-between min-h-16 h-full">
          <div className="text-3xl cursor-pointer">
            <Link href={"/store"}>
              <IoBagHandleOutline />
              <span className="bg-primary text-white rounded-full text-sm w-3 h-3 p-3 absolute top-2 transform translate-x-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src={"/logo.svg"}
              width={115}
              height={115}
              alt=""
              className="mx-auto"
            />
          </div>
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
