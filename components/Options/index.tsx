import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { OptionsElements } from "./types";

const Options = () => {
  return (
    <div className="my-8 px-6">
      <div className="flex items-center justify-between  flex-wrap">
        {OptionsElements.map(({ src, description }) => (
          <Link
            key={description}
            href="/"
            className="flex w-1/5 flex-col gap-2 bg-slate-100 items-center justify-center"
          >
            <Card className="border-none bg-none border-0 text-center ">
              <CardContent className="p-1">
                <Image
                  alt={description}
                  src={src}
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </CardContent>
              <CardFooter className="p-1 justify-center">
                <CardDescription>{description}</CardDescription>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Options;
