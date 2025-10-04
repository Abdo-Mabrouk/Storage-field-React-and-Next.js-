"use client"
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import icon1 from "@/imgg/icon/user.png"
import icon2 from "@/imgg/icon/sms.png"
import icon3 from "@/imgg/icon/call-calling.png"
import Image from "next/image";

export default function Form() {
    const phoneRegex = /^\+?[0-9]{10,14}$/;

    const schema = Yup.object({
        name: Yup.string()
            .required("الاسم لابد منه")
            .min(3, "يجب ان لا يقل عدد احرف الاسم عن 3 حروف"),
        email: Yup.string()
            .email("أدخل بريد إلكتروني صالح"),
        phone: Yup.string()
            .required("رقم الجوال لا بد منه")
            .matches(phoneRegex, " ادخل رقم جوال صالح"),
        message: Yup.string()
            .required("نص الرساله مطلوب")
            .min(20, "يجب ان لا يقل عدد احرف الرسالة عن 20 حروف"),
    });

let formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
    // هنا مكان إرسال البيانات
    await Swal.fire({
      title: "تم الإرسال بنجاح!",
      text: "سوف نتواصل معك قريبًا",
      icon: "success",
      confirmButtonText: "موافق",
    });

    // بعد ظهور الرسالة
    resetForm(); // بيفرغ كل الحقول
  },
});
  return (
    <>
    <div className=" w-full lg:w-[630px] p-5  lg:p-[48px] rounded-[32px] bg-[#F7F7F7] space-y-[32px] ">
        <div className=" space-y-[16px] ">
            <h2 className=" text-[25px] lg:text-[47px] font-bold"> تواصل مع <span className="text-orange-500">ميدان التخزين</span>  </h2>
            <p className=" text-[18px] lg:text-[20px] text-gray-400">نسعد بخدمتك بشكل أفضل من خلال التواصل معنا</p>
        </div>
        <form action="" className="space-y-[20px] " onSubmit={formik.handleSubmit}>
            <div className="space-y-[20px] ">
                <div className="name  space-y-[16px]">
                    <label htmlFor="name" className="text-[20px] text-black font-bold block ">الاسم</label>
                    <div className="relative">
                        <input type="text" name="name" id="name" placeholder="الاس" className="form-control " value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <Image src={icon1} width={24} height={24}  className=" absolute start-3 top-1/2 -translate-y-1/2 " />
                    </div>
                                {formik.errors.name && formik.touched.name ? (
                <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                * {formik.errors.name}
                </p>
            ) : (
                ""
            )}
                </div>
                <div className="space-y-[16px]">
                    <label htmlFor="email" className="text-[20px] text-black font-bold block ">البريد الالكتروني <span className="text-[16px] text-gray-400 ">( اختيارى )</span></label>
                    <div className="email relative">
                        <input type="email" name="email" id="email" placeholder="البريد الالكتروني" className="form-control " value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <Image src={icon3} width={24} height={24}  className=" absolute start-3 top-1/2 -translate-y-1/2 " />
                    </div>
                                {formik.errors.email && formik.touched.email ? (
                <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                * {formik.errors.email}
                </p>
            ) : (
                ""
            )}
                </div>
                <div className="space-y-[16px]">
                    <label htmlFor="phon" className="text-[20px] text-black font-bold block ">رقم الجوال</label>
                    <div className="tel relative">
                        <input type="tel" name="phone" id="phon" placeholder="رقم الجوال" className="form-control text-right " value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <Image src={icon2} width={24} height={24}  className=" absolute start-3 top-1/2 -translate-y-1/2 " />
                    </div>
                                {formik.errors.phone && formik.touched.phone ? (
                <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                * {formik.errors.phone}
                </p>
            ) : (
                ""
            )}
                </div>
                <div className="masg space-y-[16px]">
                    <label htmlFor="masg" className="text-[20px] text-black font-bold block ">ملاحظاتك </label>
                    <textarea name="message" rows="2" id="masg" placeholder="اكتب رسالتك هنا ..... " className="form-control " value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.message && formik.touched.message ? (
                <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                * {formik.errors.message}
                </p>
            ) : (
                ""
            )}
                </div>
            </div>
            <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
  className={`btn w-full text-[20px] text-center border-[#E6E6E6] ${
    !formik.isValid || !formik.dirty || formik.isSubmitting
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-orange-500 text-white cursor-pointer"
  }`}
            >
            {formik.isSubmitting ? "ارسل" : "ارسل"}
            </button>
        </form>
    </div>

    </>
  )
}
