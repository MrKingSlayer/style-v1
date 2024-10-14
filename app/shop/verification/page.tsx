"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import HeadsUp from "@/components/HeadsUp";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Verification = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-full max-w-5xl h-full mx-auto flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl h-full mx-auto flex flex-col items-center justify-center">
        <div className="w-full  h-full">
          <HeadsUp title="تایید شماره" />
        </div>

        <div className="w-full my-8">
          <div className="my-10 flex items-end justify-between">
            <div>
              <Label>به دوسما خوش آمدید!</Label>
              <p className="text-sm">
                کد فعال سازی به شماره ۰۹۱۳۸۷۴۵۳۲۳ ارسال شد.
              </p>
            </div>
            <Link href="/shop" className="text-sky-500 text-sm font-light">
              <span>تغیر شماره</span>
            </Link>
          </div>
          <div className="space-y-2 my-4" dir="ltr">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup className="flex justify-between w-full">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="text-xs text-center">
              <span>ارسال دوباره کد تایید تا ۰۰:۳۳</span>
            </div>
            <Link href="/shop/verification/authentication">
              <Button className="w-full primary text-white">تایید</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
