import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Options from "@/components/Options";
import Card from "@/components/Card";
import BannerSliding from "@/components/BannerSliding";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className="">
      <Navbar />
      <BannerSliding />

      <Options />
      <SectionTitle title="محبوب ترین ها" more>
        <Card />
      </SectionTitle>

      <SectionTitle title="با مام استایل فروشت رو چند برابر کن">
        <div className="w-full shadow-md border rounded-md">
          <div>
            <Image
              src="/banner/Frame 1.png"
              alt=""
              width={1264}
              height={1264}
            />
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="text-sm max-w-[200px]">
              <a href="product-detail.html">
                با ثبت فروشگاهت در مام استایل فروشت رو چند برابر کن
              </a>
            </div>
            <div>
              <a
                href="product.html"
                className="text-[#2196f3] border border-[#2196f3] inline-block py-1 px-4 text-sm my-2"
              >
                ثبت فروشگاه
              </a>
            </div>
          </div>
        </div>
      </SectionTitle>

      <SectionTitle title="جدید ترین ها" more>
        <Card />
      </SectionTitle>

      <SectionTitle title="با مام استایل فروشت رو چند برابر کن">
        <div className="w-full shadow-md border rounded-md mb-20">
          <div>
            <Image
              src="/banner/banner2.PNG"
              alt=""
              width={1264}
              height={1264}
            />
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="text-sm max-w-[200px]">
              <a href="product-detail.html">
                با ثبت فروشگاهت در مام استایل فروشت رو چند برابر کن
              </a>
            </div>
            <div>
              <a
                href="product.html"
                className="text-[#2196f3] border border-[#2196f3] inline-block py-1 px-4 text-sm my-2"
              >
                ثبت فروشگاه
              </a>
            </div>
          </div>
        </div>
      </SectionTitle>

      <Footer />
    </div>
  );
};

export default MainContent;
