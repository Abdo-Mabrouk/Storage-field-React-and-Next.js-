import Title from "../Title/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function HomeQuestions() {
  return (
    <>
    <div className="">
        <div className="container py-[64px]">
            <div className="">
                <Title text={"الأسئلة الشائعة"}/>
            </div>
            <Accordion type="single" collapsible className=" space-y-[16px] text-start">
                <AccordionItem className="px-[20px] py-[16px] rounded-[24px] bg-[#F7F7F7] border-0 " value="item-1">
                    <AccordionTrigger className="text-[24px] font-[500] text-black hover:no-underline ">هل توفرون توصيل ؟</AccordionTrigger>
                    <AccordionContent className="text-[#333] text-[20px] font-[500] py-[32px] px-[16px] rounded-b-[16px] bg-white ">
                        أكيد، تقدر تختار الأغراض وتحدد أنك حاب تستلمها من المستودع، وبيكون الطلب جاهز للتحميل عند وصولك                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-[20px] py-[16px] rounded-[24px] bg-[#F7F7F7] border-0 " value="item-2">
                    <AccordionTrigger className="text-[24px] font-[500] text-black hover:no-underline ">هل توصلون الى خارج الرياض ؟ </AccordionTrigger>
                    <AccordionContent className="text-[#333] text-[20px] font-[500] py-[32px] px-[16px] rounded-b-[16px] bg-white ">
                        أكيد، تقدر تختار الأغراض وتحدد أنك حاب تستلمها من المستودع، وبيكون الطلب جاهز للتحميل عند وصولك                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-[20px] py-[16px] rounded-[24px] bg-[#F7F7F7] border-0 " value="item-3">
                    <AccordionTrigger className="text-[24px] font-[500] text-black hover:no-underline ">وين مستودعاتكم ؟ </AccordionTrigger>
                    <AccordionContent className="text-[#333] text-[20px] font-[500] py-[32px] px-[16px] rounded-b-[16px] bg-white ">
                        أكيد، تقدر تختار الأغراض وتحدد أنك حاب تستلمها من المستودع، وبيكون الطلب جاهز للتحميل عند وصولك                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-[20px] py-[16px] rounded-[24px] bg-[#F7F7F7] border-0 " value="item-4">
                    <AccordionTrigger className="text-[24px] font-[500] text-black hover:no-underline ">هل اقدر ارسل احد يستلم الاغراض ؟ </AccordionTrigger>
                    <AccordionContent className="text-[#333] text-[20px] font-[500] py-[32px] px-[16px] rounded-b-[16px] bg-white ">
                        أكيد، تقدر تختار الأغراض وتحدد أنك حاب تستلمها من المستودع، وبيكون الطلب جاهز للتحميل عند وصولك                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-[20px] py-[16px] rounded-[24px] bg-[#F7F7F7] border-0 " value="item-5">
                    <AccordionTrigger className="text-[24px] font-[500] text-black hover:no-underline ">كيف طريقة تجهيزكم للمستودعات ؟ </AccordionTrigger>
                    <AccordionContent className="text-[#333] text-[20px] font-[500] py-[32px] px-[16px] rounded-b-[16px] bg-white ">
                        أكيد، تقدر تختار الأغراض وتحدد أنك حاب تستلمها من المستودع، وبيكون الطلب جاهز للتحميل عند وصولك                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

    </div>
    </>
  )
}
