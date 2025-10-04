import Title from "../Title/Title";
import imgCard1 from "@/imgg/call-calling.png";
import imgCard2 from "@/imgg/car icon.png";
import imgCard3 from "@/imgg/shield icon.png";
import line from "@/imgg/Line 5.png";
import Image from "next/image";

export default function HomePart3() {
  return (
    <>
    <div className="container mx-auto py-[64px] space-y-20">
        <Title text={"كيف يجعل ميدان التخزين الامر سهلاً"}/>

        <div className="grid grid-cols-8 gap-10 items-center">
            <div className="col-span-8 md:col-span-3 lg:col-span-2 rounded-3xl p-[24px] border-4 border-gray-200 hover:border-orange-400 flex gap-7 flex-col justify-center items-center hover:bg-orange-400 group transition-colors duration-500">
                <div className="size-30 rounded-xl flex justify-center items-center bg-gray-200">
                    <Image src={imgCard1} width={56} height={56} className="w-15 h-auto"/>
                </div>
                <h3 className="text-3xl font-bold group-hover:text-white transition-colors duration-500">اتصل ببنا</h3>
                <p className="text-gray-400 text-center text-[16px] group-hover:text-white transition-colors duration-500">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
            </div>
            <div className="col-span-8 md:col-span-2 lg:col-span-1">
                    <Image src={line} width={80} height={0} className="mx-auto -rotate-90 md:rotate-0" />
            </div>
            <div className="col-span-8 md:col-span-3 lg:col-span-2 rounded-3xl p-[24px] border-4 border-gray-200 hover:border-orange-400 flex gap-7 flex-col justify-center items-center hover:bg-orange-400 group transition-colors duration-500">
                <div className="size-30 rounded-xl flex justify-center items-center bg-gray-200">
                    <Image src={imgCard2} className="w-15 h-auto"/>
                </div>
                <h3 className="text-3xl font-bold group-hover:text-white transition-colors duration-500"> شحنه لنا</h3>
                <p className="text-gray-400 text-center text-lg group-hover:text-white transition-colors duration-500">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
            </div>
            <div className="col-span-8 md:col-span-2 lg:col-span-1 ">
                    <Image src={line} width={80} height={0} className="mx-auto -rotate-90 md:rotate-0 md:hidden lg:block"/>
            </div>
            <div className="col-span-8 md:col-span-3 lg:col-span-2 rounded-3xl p-[24px] border-4 border-gray-200 hover:border-orange-400 flex gap-7 flex-col justify-center items-center hover:bg-orange-400 group transition-colors duration-500">
                <div className="size-30 rounded-xl flex justify-center items-center bg-gray-200">
                    <Image src={imgCard3} className="w-15 h-auto"/>
                </div>
                <h3 className="text-3xl font-bold group-hover:text-white transition-colors duration-500">  نحافظ عليه آمن</h3>
                <p className="text-gray-400 text-center text-lg group-hover:text-white transition-colors duration-500">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
            </div>



        </div>
    </div>
    </>
  )
}
