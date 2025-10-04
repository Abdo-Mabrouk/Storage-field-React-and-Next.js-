import Title from "../Title/Title";
import imgCard1 from "@/imgg/servis11.png"
import imgCard2 from "@/imgg/servis22.png"
import imgCard3 from "@/imgg/servis33.png"
import imgCard4 from "@/imgg/servis44.png"
import imgCard5 from "@/imgg/servis55.png"
import imgCard6 from "@/imgg/servis66.png"
import Image from "next/image";
import Link from "next/link";

export default function HomeServis() {
  return (
    <>
    <div className=" container p-5 lg:p-[64px] my-[64px] space-y-[64px] bg-[#F2F2F2] rounded-[32px]">
        <div className="text-center">
            <Title text={"خدماتنا في ميدان التخزين"}/>
        </div>
        <div className="grid grid-cols-12 gap-[24px]">
            <div className="CardServis space-y-5 group bg-repeat hover:border-orange-500 col-span-12 md:col-span-6 lg:col-span-4 p-[24px] border-2 border-gray-200 rounded-3xl">
                <Image src={imgCard1} width={144} height={380} />
                <h2 className="text-2xl font-semibold ">التخزين للغير 3PL</h2>
                <p className="text-[16px] text-[#666]">نوفر لك خدمات التخزين بحسب المساحات التي ترغب بها (تخزين الارفف/ تخزين الطبليات)</p>
                <button className="btn group-hover:bg-orange-500 group-hover:border-orange-500 w-full border-[#CCC] hover:border-orange-500"> <Link href="/StorageforOthers">عرض المزيد</Link> </button>
            </div>
            <div className="CardServis space-y-5 group bg-white hover:border-orange-500 col-span-12 md:col-span-6 lg:col-span-4 p-[24px] border-2 border-gray-200 rounded-3xl">
                <Image src={imgCard2} width={144} height={380} className="" />
                <h2 className="text-2xl font-semibold ">المتاجر الإلكترونية</h2>
                <p className="text-[16px] text-[#666]">خدمات متكاملة لخدمة المتاجر الاكترونية ادارة الطلبات - تجهيز طلبات - تغليف الطلبات - الشحن</p>
                <button className="btn group-hover:bg-orange-500 group-hover:border-orange-500 w-full border-[#CCC] hover:border-orange-500"> عرض المزيد</button>
            </div>
            <div className="CardServis space-y-5 group bg-white hover:border-orange-500 col-span-12 md:col-span-6 lg:col-span-4 p-[24px] border-2 border-gray-200 rounded-3xl">
                <Image src={imgCard3} width={144} height={380} />
                <h2 className="text-2xl font-semibold ">التخزين الذاتي</h2>
                <p className="text-[16px] text-[#666]">نوفر خدمات التخزين الذاتي للشركات بمستوى عالٍ من الأمان، ونمنحها التحكم الكامل في ممتلكاتها.</p>
                <button className="btn group-hover:bg-orange-500 group-hover:border-orange-500 w-full border-[#CCC] hover:border-orange-500"> عرض المزيد</button>
            </div>
            <div className="CardServis space-y-5 group bg-white hover:border-orange-500 col-span-12 md:col-span-6 lg:col-span-4 p-[24px] border-2 border-gray-200 rounded-3xl">
                <Image src={imgCard4} width={144} height={380} />
                <h2 className="text-2xl font-semibold ">مساحات عمل مشتركة</h2>
                <p className="text-[16px] text-[#666]">نوفر مساحات مكتبية داخل مستودعاتنا للاستخدام من قبل الشركات.</p>
                <button className="btn group-hover:bg-orange-500 group-hover:border-orange-500 w-full border-[#CCC] hover:border-orange-500"> عرض المزيد</button>
            </div>
            <div className="CardServis space-y-5 group bg-white hover:border-orange-500 col-span-12 md:col-span-6 lg:col-span-4 p-[24px] border-2 border-gray-200 rounded-3xl">
                <Image src={imgCard5} width={144} height={380} />
                <h2 className="text-2xl font-semibold ">هيئة الغذاء والدواء SFDA</h2>
                <p className="text-[16px] text-[#666]">نوفر خدمة ترخيص المنشأت الطبية والتجميلية والغذائية و ترخيص المستودعات .</p>
                <button className="btn group-hover:bg-orange-500 group-hover:border-orange-500 w-full border-[#CCC] hover:border-orange-500"> عرض المزيد</button>
            </div>
            <div className="CardServis space-y-5 group bg-white hover:border-orange-500 col-span-12 md:col-span-6 lg:col-span-4 p-[24px] border-2 border-gray-200 rounded-3xl">
                <Image src={imgCard6} width={144} height={380} />
                <h2 className="text-2xl font-semibold "> استشارات الاعمال</h2>
                <p className="text-[16px] text-[#666]">نعمل مع عملائنا من اجل فهم الاحتياجات والرغبات الخاصة بفريق عملهم وزبائنهم.</p>
                <button className="btn group-hover:bg-orange-500 group-hover:border-orange-500 w-full border-[#CCC] hover:border-orange-500"> عرض المزيد</button>
            </div>
        </div>
    </div>
    </>
  )
}
