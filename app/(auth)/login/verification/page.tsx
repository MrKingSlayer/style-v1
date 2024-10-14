import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import HeadsUp from "@/components/HeadsUp";

const Verification = () => {
  return (
    <div className="w-full h-full mx-auto flex flex-col items-center justify-center">
      <div className="w-full max-w-xs md:max-w-sm h-full">
        <HeadsUp title="اعتبار سنجی" />
        <Image
          src="/static/verification.PNG"
          alt=""
          width={350}
          height={350}
          className="w-full"
        />
      </div>
      <div className="grid w-full max-w-xs md:max-w-sm items-center gap-1.5">
        <Label htmlFor="email" className="text-2xl">
          راستی آزمایی
        </Label>
        <h2>لطفا کد ارسال شده به</h2>
        <h2>
          شماره <strong>+98913982345</strong> وارد کنید.
        </h2>
        <Input
          type="email"
          id="email"
          placeholder="مثلا ۰۹۱۳۷۶۳۴۵۶۷"
          className="my-2"
        />

        <div className="text-center font-extralight">
          <span> شماره اشتباه است؟</span>
          <span className="text-primary font-medium"> تغیر شماره تلفن </span>
          <div className="font-light py-1">1:00</div>
        </div>

        <Button className="w-full text-white">تایید</Button>
      </div>
    </div>
  );
};

export default Verification;
