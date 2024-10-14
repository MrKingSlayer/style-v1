"use client";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoMdArrowForward } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { IoIosArrowRoundBack } from "react-icons/io";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const Authentication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const [text, setText] = useState("");
  const [results, setResults] = useState([{ notFound: false }]);
  const [marker, setMarker] = useState(null);
  const [center, setCenter] = useState([51.42047, 35.729054]);

  const steps = [
    "انتخاب مالکیت",
    "تکمیل اطلاعات",
    "انتخاب ادرس",
    "ارسال مدارک",
  ];

  useEffect(() => {
    const search = (params: any) => {
      return fetch(`https://map.ir/search/v2/`, {
        method: "POST",
        headers: {
          "x-api-key":
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2M2I0MzY4N2Y2OGM4MTM5NDJkNTAzNDZkZjhmYTlmZTcyMjg2MDdjOTUzYWRjYWQ2ODgwZTIyNmE1ZjhjZWRlYmI2NDJkNDA4OGQ5YWU1In0.eyJhdWQiOiIyNzgyMCIsImp0aSI6ImI2M2I0MzY4N2Y2OGM4MTM5NDJkNTAzNDZkZjhmYTlmZTcyMjg2MDdjOTUzYWRjYWQ2ODgwZTIyNmE1ZjhjZWRlYmI2NDJkNDA4OGQ5YWU1IiwiaWF0IjoxNzE4OTIzNDkwLCJuYmYiOjE3MTg5MjM0OTAsImV4cCI6MTcyMTUxNTQ5MCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.DUpoy-iIWyQDwdhisX9KQHMDWEseaSpTSv70hqiUQm_RcpcqifWs2tknwq09rE53GeKjmxglYcpTG_3qL93t4sAr6JveG6lJhGTIbkAmcBQ-tWlsqRApOhiPBS_txHktwG3o1s8Em3hiZIzKSNrgheRWpy7umwGfIYz97o-5FC6USUEl4i5TFcBVY9lNvVzaVrPb0VFgHwShT8wzw3D3NdAfI68WmQ8DmiDT8TSbSmTVkiQ2zi4Jo_rwg15rjDkd82L0mLye3U1g4kKNsFXmlAXSYx1niRCvm7M810lIevoF1FlGOQUgKFme_J0zeR1Fp53f6s1c8Dd0XQt2izU9Aw",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
    };

    if (text.length > 1) {
      const params: any = {};
      const options: any = { text };
      for (let key in options) {
        if (options[key] !== null && options[key] !== "") {
          params[key] = options[key];
        }
      }
      console.log(params);

      search(params)
        .then((data) => data.json())
        .then((data) => {
          if (data["odata.count"] > 0) {
            setResults(data.value);
          } else {
            setResults([{ notFound: true }]);
          }
        });
    } else if (text.length === 0) {
      setResults([]);
    }
    console.log(results);
  }, [text]);

  return (
    <div className="w-full max-w-5xl h-full mx-auto flex flex-col items-center justify-center">
      <div className="w-full flex justify-between items-start py-2">
        <div className="flex items-center justify-center w-8 h-8 rounded bg-slate-100">
          <IoMdArrowForward />
        </div>
        <div className="flex justify-between w-full">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {currentStep === 1 && (
        <div className="w-full flex flex-col">
          <div className="my-10">
            <Label>انتخاب مالکیت شخص</Label>
            <p className="text-sm">
              شماره خود را وارد کنید تا کد فعال سازی برایتان پیامک شود.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:flex-nowrap cursor-pointer">
            <div className="border border-primary p-4 w-full sm:w-1/2 rounded">
              <Label>شخص حقیقی</Label>
              <p className="text-xs">
                شخص حقیقی، فردی است که دارای مشخصاتی مانند: نام ،نام خانوادگی،کد
                ملی ‌و... می‌باشد و الزاما کد اقتصادی یا شرکت ندارد!
              </p>
            </div>
            <div className="border border-slate-200 p-4 w-full sm:w-1/2 rounded contain-paint">
              <Label>شخص حقوقی</Label>
              <p className="text-xs">
                شخص حقوقی، یک موسسه یا شرکت است که به صورت قانونی ثبت شده است و
                مشخصاتی مانند: شماره ثبت،کد شناسایی، و کد اقتصادی و... دارد!
              </p>
            </div>
          </div>
          {!complete && (
            <Button
              className="primary text-white mr-auto my-4"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === steps.length ? (
                <span>Finish</span>
              ) : (
                <span>بعدی</span>
              )}
              <IoIosArrowRoundBack className="text-3xl" />
            </Button>
          )}
        </div>
      )}

      {currentStep === 2 && (
        <Card className="w-full border-none shadow-none">
          <CardHeader className="my-4">
            <CardTitle>وارد کردن اطلاعات حقیقی</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="name">نام فروشگاه</Label>
                  <Input id="name" />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="w-full">
                    <Label htmlFor="name">نام</Label>
                    <Input id="name" />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="name">نام خانوادگی</Label>
                    <Input id="name" />
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="name">کد ملی</Label>
                  <Input id="name" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="name">تاریخ تولد</Label>
                  <Input id="name" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="framework">جنسیت</Label>
                  <Select dir="rtl">
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="مرد" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="bg-white">
                      <SelectItem value="next">مرد</SelectItem>
                      <SelectItem value="sveltekit">زن</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="name">شماره شبا</Label>
                  <Input id="name" placeholder="IR" className="text-left" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {!complete && (
              <Button
                className="w-full primary text-white mr-auto my-4"
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev + 1);
                }}
              >
                {currentStep === steps.length ? (
                  <span>Finish</span>
                ) : (
                  <span>تایید</span>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      )}

      {currentStep === 3 && (
        <div className="flex flex-col justify-center items-center w-full relative my-5">
          <div className=" z-10 absolute top-5 w-4/5">
            <Command
              className="rounded-lg border shadow-md bg-white"
              onChange={(e: any) => setText(e.target.value)}
            >
              <CommandInput
                placeholder="جست و جوی مبدا"
                className="px-2"
                value={text}
              />
              <CommandList>
                <CommandEmpty>نتیجه ای یافت نشد</CommandEmpty>
                <div className="w-full h-0">
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <span>Launch</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <span>Mail</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </div>
              </CommandList>
            </Command>
          </div>
          {/* <Mapir
            center={[51.42047, 35.729054]}
            Map={Map}
            className="max-w-5xl max-h-[70vh] w-full"
          ></Mapir> */}
          <Button className="text-white absolute bottom-4 w-4/5">
            ثبت موقعیت مکانی
          </Button>
        </div>
      )}
    </div>
  );
};

export default Authentication;
