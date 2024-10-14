"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

interface Props {
  title?: string;
}

const HeadsUp = ({ title }: Props) => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between items-center py-2">
      <div
        className="flex items-center justify-center w-8 h-8 rounded bg-slate-100"
        onClick={() => router.back()}
      >
        <IoMdArrowForward />
      </div>
      <h1 className="flex-1 text-center">{title}</h1>
    </div>
  );
};

export default HeadsUp;
