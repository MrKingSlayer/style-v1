import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import HeadsUp from "@/components/HeadsUp";
import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full h-full mx-auto flex flex-col items-center justify-center">
      <div className="w-full max-w-xs md:max-w-sm h-full">
        <HeadsUp title="ورود به حساب کاربری" />
        <Image
          src="/static/login.PNG"
          alt=""
          width={350}
          height={350}
          className="w-full"
        />
      </div>
      <div className="grid w-full max-w-xs md:max-w-sm items-center gap-1.5">
        <Label htmlFor="email" className="text-lg">
          ورود به حساب کاربری
        </Label>
        <h2>لطفا برای ورود به برنامه شماره تلفن خود را وارد کنید</h2>
        <Input
          type="email"
          id="email"
          placeholder="مثلا ۰۹۱۳۷۶۳۴۵۶۷"
          className="my-2"
        />
        <Link href="/login/verification">
          <Button className="w-full text-white">تایید</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
