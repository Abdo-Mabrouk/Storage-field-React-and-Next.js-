import Title from "../Title/Title";

export default function Abouthestorage() {
  return (
    <>
        <div className="col-span-6 lg:col-span-3 space-y-15 p-3">
            <Title text={"عن ميدان التخزين"}/>
            <ol className=" list-disc space-y-10 *:text-[24px]">
                <li>ميدان التخزين مقرها في السعودية بمدينة الرياض، مرخص من هيئة الغذاء والدواء، تقوم بتقديم خدمات التخزين والدعم اللوجستي</li>
                <li>و تقديم افضل المستودعات بمواصفات عالية ملائمة لجميع الشركات و الجهات الحكومية</li>
            </ol>
        </div>
    </>
  )
}
