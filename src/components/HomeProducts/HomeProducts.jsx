import Title from "../Title/Title";
import imgCard1 from "@/imgg/HomeProducts1.png"
import imgCard2 from "@/imgg/HomeProducts2.png"
import imgCard3 from "@/imgg/HomeProducts3.png"
import imgCard4 from "@/imgg/HomeProducts4.png"
import Image from "next/image";

export default function HomeProducts() {
  return (
    <div className="bg-gray-500">
    <div className=" HomeProducts py-[64px]">
        <div className=" container">
            <div className="text-center">
                <Title text={"منتجات يمكنك تخزينها مع ميدان التخزين"}/>
            </div>
            <div className="grid grid-cols-12 gap-[20px]">
                <div className="col-span-12 md:col-span-6 lg:col-span-3 p-[16px] rounded-[16px] bg-white border-2 border-transparent hover:border-orange-500 hover:text-orange-500">
                    <Image src={imgCard1} className="w-full h-auto rounded-[16px]"/>
                    <p className="mt-[20px] text-[16px] text-center font-semibold ">مستحضرات تجميل</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 p-[16px] rounded-[16px] bg-white border-2 border-transparent hover:border-orange-500 hover:text-orange-500">
                    <Image src={imgCard2} className="w-full h-auto rounded-[16px]"/>
                    <p className="mt-[20px] text-[16px] text-center font-semibold ">المواد الغذائية والمكملات الغذائية </p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 p-[16px] rounded-[16px] bg-white border-2 border-transparent hover:border-orange-500 hover:text-orange-500">
                    <Image src={imgCard3} className="w-full h-auto rounded-[16px]"/>
                    <p className="mt-[20px] text-[16px] text-center font-semibold ">الادوية البشرية والبيطرية </p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 p-[16px] rounded-[16px] bg-white border-2 border-transparent hover:border-orange-500 hover:text-orange-500 ">
                    <Image src={imgCard4} className="w-full h-auto rounded-[16px]"/>
                    <p className="mt-[20px] text-[16px] text-center font-semibold ">الاضافات العلفية  </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
