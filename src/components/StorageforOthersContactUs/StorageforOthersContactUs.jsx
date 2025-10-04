
import img from "@/imgg/StorageforOthersContactUs.png"
import Image from "next/image"
import Form from "../Form/Form"
export default function StorageforOthersContactUs() {
  return (
    <>
    <div className=" bg-black/30">
        <div className="HomeContactUs">
            <div className=" max-w-[800px] mx-auto text-center py-[64px] space-y-[40px]  ">
                <h2 className=" text-[25px] lg:text-[47px] font-semibold text-white ">تواصل مع أحد خبراء ميدان التخزين</h2>
                <p className="text-[20px] lg:text-[22px] font-[500] text-white ">كلم أحد خبرائنا وشاركنا احتياجاتك عشان نعرف أفضل طريقة لمساعدتك. حول مشكلة التخزين وإدارة المخزون الى ميزة تنافسية اليوم!</p>
                <button className="btn border-white hover:bg-black hover:border-black">احجز مساحتك الان</button>
            </div>
        </div>
    </div>
    <div className="">
        <div className="py-[64px] grid grid-cols-2 gap-[20px] items-center">
            <div className="col-span-2 lg:col-span-1 lg:p-20 ">
                <Form/>
            </div>
            <div className="col-span-2 lg:col-span-1 ps-[87px] hidden lg:block">
                <Image src={img} className="w-[95%] h-auto"/>
            </div>
            
        </div>
    </div>
    </>
  )
}

