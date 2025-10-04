import Image from "next/image";
import Title from "../Title/Title";
import img2 from "@/imgg/icon/HomeBusinessFeatures icon.png"

export default function BusinessFeatures() {
  return (
        <div className="col-span-2 lg:col-span-1">
        <div>
            <Title text={"مميزات العمل مع ميدان التخزين"}/>
        </div>
        <ul className=" space-y-[24px]">
            <li className=" rounded-[24px] bg-[#FCF7F2] h-[64px] flex items-center justify-start gap-[16px] text-black px-[16px]">
                <span className=""><Image src={img2} width={32} height={32}/></span>
                <p className=" lg:text-[24px] font-[500]">نظام المراقبة</p>
            </li>
            <li className=" rounded-[24px] bg-[#FCF7F2] h-[64px] flex items-center justify-start gap-[16px] text-black px-[16px]">
                <span className=""><Image src={img2} width={32} height={32}/></span>
                <p className="lg:text-[24px] font-[500]">العقود المرنه الشهريه والسنوية</p>
            </li>
            <li className=" rounded-[24px] bg-[#FCF7F2] h-[64px] flex items-center justify-start gap-[16px] text-black px-[16px]">
                <span className=""><Image src={img2} width={32} height={32}/></span>
                <p className="lg:text-[24px] font-[500]">تصريح من هيئة الغذاء والدواء السعودية "للتخزين للغير"</p>
            </li>
            <li className=" rounded-[24px] bg-[#FCF7F2] h-[64px] flex items-center justify-start gap-[16px] text-black px-[16px]">
                <span className=""><Image src={img2} width={32} height={32}/></span>
                <p className="lg:text-[24px] font-[500]">مساحات تخزينية متعددة تلبي جميع إحتياجاتكم</p>
            </li>
        </ul>
    </div>
  )
}
