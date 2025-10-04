import Image from "next/image";
import img from "@/imgg/HomeBusinessFeatures.png"
import BusinessFeatures from "../BusinessFeatures/BusinessFeatures";

export default function HomeBusinessFeatures() {
  return (
    <>
    <div className="">
        <div className=" container py-[64px]">
            <div className="grid grid-cols-2 gap-[20px] items-center">
                <BusinessFeatures/>
                <div className="col-soan-2 lg:col-span-1 p-[46px] hidden lg:block">
                    <Image src={img} className="w-full h-auto"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
