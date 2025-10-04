import icon1 from "@/imgg/icon/call-calling3.png"
import icon2 from "@/imgg/icon/sms.png"
import icon3 from "@/imgg/icon/location.png"
import Image from "next/image"
export default function Contactuspart2() {
  return (
    <>
    <div className=" container rounded-[48px] shadow-2xl py-[64px] px-[32px] my-[45px] space-y-[64px]">
        <div className="">
            <h2 className=" text-[20px] lg:text-[33px] text-black font-bold text-center mx-auto">نحن في <span className="text-orange-500">ميدان التخزين</span> نعلم أنك على وشك اتخاذ قرار مهم لنشاطك التجاري.<br className=" hidden lg:block"/>خدمة العملاء جاهزة لتقديم يد العون والمساعدة لك خلال هذا الوقت</h2>
        </div>
        <div className="grid grid-cols-6 gap-[20px] ">
            <div className="col-span-6 md:col-span-3 lg:col-span-2 p-[16px] rounded-[24px] bg-[#FAFAFA] flex flex-col items-center justify-center gap-[32px] ">
                <div className="size-[64px] rounded-full border-[1px] border-[#E6E6E6] bg-white flex justify-center items-center">
                    <Image src={icon1} width={32} height={32} className=""/>
                </div>
                <p className=" text-[24px] text-black font-bold text-center ">+966 55448669  - 9223331156</p>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2 p-[16px] rounded-[24px] bg-[#FAFAFA] flex flex-col items-center justify-center gap-[32px] ">
                <div className="size-[64px] rounded-full border-[1px] border-[#E6E6E6] bg-white flex justify-center items-center">
                    <Image src={icon2} width={32} height={32} className=""/>
                </div>
                <p className=" text-[24px] text-black font-bold text-center ">info@GGHHGG.com</p>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2 p-[16px] rounded-[24px] bg-[#FAFAFA] flex flex-col items-center justify-center gap-[32px] ">
                <div className="size-[64px] rounded-full border-[1px] border-[#E6E6E6] bg-white flex justify-center items-center">
                    <Image src={icon3} width={32} height={32} className=""/>
                </div>
                <p className=" text-[24px] text-black font-bold text-center">حي الشعلة شارع زهير بن قيس</p>
            </div>
        </div>
    </div>
    </>
  )
}
