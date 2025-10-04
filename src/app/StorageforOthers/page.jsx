import Footar from "@/components/footar/Footar"
import StorageforOthersContactUs from "@/components/StorageforOthersContactUs/StorageforOthersContactUs"
import Title from "@/components/Title/Title"
import imgCard1 from "@/imgg/servis11.png"
import img2 from "@/imgg/StorageforOthers.png"
import img3 from "@/imgg/StorageforOthers2.png"
import Image from "next/image"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconCol from "@/imgg/icon/call-calling2.png"

export default function StorageforOthers() {
  return (
    <>
    <div className="bg-gray-400 mt-[90px]">
        <div className="StorageforOtherspart1 px-[187px] py-[64px] flex items-center justify-between">
            <div className="space-y-[32px]">
                <h2 className=" text-[47px] font-bold text-white  ">التخزين للغير 3PL</h2>
                <p className=" text-[24px] text-white max-w-[576px] ">نوفر لك خدمات التخزين بحسب المساحات التي ترغب بها (تخزين الارفف/ تخزين الطبليات)</p>
                <button className="btn border-white hover:bg-black hover:border-black">احجز مساحتك الان</button>
            </div>
            <div className="">
                <Image src={imgCard1} width={250} height={286} />
            </div>
        </div>
    </div>
    <div className="">
        <div className="px-[187px] py-[64px]">
            <Title text={"مساحات تخزينية متعددة تلبي جميع إحتياجاتكم"}/>
            <Image src={img2} className="w-full h-auto pb-[64px]" />
            <div className=" space-y-10">
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">📦 تخزين السلع التجارية بأمان وفعالية!</h3>
                    <p className="text-[24px] font-[500]">حلاً موثوقًا لتخزين سلعك التجارية بأمان وفعالية؟ لا داعي للقلق، نقدم لك خدمات تخزين استثنائية تلبي احتياجات عملك.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">📦 تخزين متخصص:</h3>
                    <p className="text-[24px] font-[500]">نحن نقدم تخزينًا متخصصًا لمستحضرات التجميل والمنتجات الطبية والغذائية ، حيث يتم توفير ظروف مثالية للحفاظ على جودة المنتجات.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">📦 مستودعات مرخصة من هيئة الغذاء والدواء : </h3>
                    <p className="text-[24px] font-[500]">تفتخر مستودعاتنا بالامتثال الكامل لمعايير هيئة الغذاء والدواء، مما يعني أن كل مستحضر يخضع لظروف تخزين صحية وآمنة، تحميه من التلف وتحافظ على جودته.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">🌈 تنوع الخدمات:</h3>
                    <p className="text-[24px] font-[500]">نقدم خدمات متعددة تشمل تخزين السلع الكبيرة والصغيرة، والمواد الحساسة، والبضائع الفنية. بغض النظر عن نوع سلعك، يمكننا تلبية احتياجات التخزين الخاصة بك.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">🔐 أمان على مر الساعة: </h3>
                    <p className="text-[24px] font-[500]">توفر منشآتنا أمانًا على مدار الساعة، حيث يتم مراقبة الموقع بأحدث تقنيات الأمان.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">💡 تخزين فعال ومنظم: </h3>
                    <p className="text-[24px] font-[500]">تتيح لك مساحات التخزين لدينا استخدام المساحة بشكل فعّال وتنظيم سلعك بطريقة تسهم في زيادة الإنتاجية.</p>
                </div>
            </div>
            <Image src={img3} className="w-full h-auto pb-[64px]" />
            <div className="space-y-10">
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">🌟 خدمة مخصصة:</h3>
                    <p className="text-[24px] font-[500]">فهما لاحتياجات عملائنا الفريدة، نقدم خدمة مخصصة تتناسب مع متطلباتك. سواء كنت تحتاج إلى مساحة صغيرة أو مستودع كبير، فإننا نقدم الحلول الملائمة.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">📈 تحسين الكفاءة التشغيلية: </h3>
                    <p className="text-[24px] font-[500]">تحتاج عملك إلى تشغيله بكفاءة، وتخزين فعال يلعب دورًا هاماً في تحقيق ذلك. نحن هنا لندعمك في تحقيق أقصى استفادة من مساحة التخزين الخاصة بك.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">🤝 شراكة طويلة الأمد: </h3>
                    <p className="text-[24px] font-[500]">نحن نؤمن ببناء علاقات قائمة على الثقة مع عملائنا. نسعى لتقديم خدمات تخزين ممتازة تجعلنا شركاء طويلة الأمد في نجاح عملك.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">🔄 خيارات تأجير مرنة: </h3>
                    <p className="text-[24px] font-[500]">نحن ندرك أن احتياجات الأعمال قد تتغير، لذا نقدم خيارات تأجير مرنة تتيح لك ضبط حجم المساحة والفترة وفقًا لتطور أعمالك.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">💼 تأجير قصير المدى:</h3>
                    <p className="text-[24px] font-[500]">إذا كنت بحاجة إلى تخزين مؤقت للسلع أو البضائع، يمكنك الاستفادة من خيارات تأجير قصيرة المدى التي تتيح لك الدفع فقط عندما تكون بحاجة إلى الخدمة.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">📆 تأجير طويل المدى:</h3>
                    <p className="text-[24px] font-[500]">للأعمال التي تتطلب تخزينًا دائمًا، نقدم خيارات تأجير طويلة المدى بأسعار تنافسية. استمتع بالتخزين الآمن لفترات طويلة دون القلق بشأن التكاليف الزائدة.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">📈 ترقية الحجم بسهولة: </h3>
                    <p className="text-[24px] font-[500]">مع تطور عملك، يمكنك ترقية حجم التخزين الخاص بك بسهولة. نحن هنا لدعم نمو عملك وتلبية متطلبات تخزينك.</p>
                </div>
                <div className="">
                    <h3 className=" text-[24px] font-[500] ">🌍 تغطية واسعة: </h3>
                    <p className="text-[24px] font-[500]">نحن متاحون في مناطق متعددة، مما يسمح لك بالوصول إلى خدماتنا بسهولة أينما كنت.</p>
                </div>
            </div>

        </div>
    </div>
    <StorageforOthersContactUs/>
    <Footar/>
          <div className="icon space-y-5 fixed end-5 bottom-10">
          
          <div className="size-[48px] bg-emerald-400 cursor-pointer rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-[24px]"/>
          </div>
          <div className="size-[48px] bg-black cursor-pointer rounded-full flex justify-center items-center">
            <Image src={iconCol} width={24} height={24}/>
          </div>
      </div>
    </>
  )
}
