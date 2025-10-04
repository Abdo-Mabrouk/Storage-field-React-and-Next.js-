"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faFacebook,  faLinkedinIn, faSnapchat,  faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"
import logo from "@/imgg/logo.png"
import TOQ from "@/imgg/TOQ LOGO 1.png"
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { usePathname } from "next/navigation"
import Link from "next/link";
function FootarDark() {
      const pathname = usePathname();
    
    return (
        <>
            <div className="bg-black" >
                <footer className=" FootarDark py-[64px]"  >
                <div className="container  grid grid-cols-6 gap-[131px] items-center">
                    <div className="lg:col-span-2 md:col-span-6 col-span-6 space-y-5">
                        <div className="flex flex-col p-5 justify-center items-start gap-10">
                        <Image src={logo} className=" w-[300px] lg:w-full h-auto"/>
                        <div className="text-white space-y-10">
                            <p className=" text-[16px] font-[500">ميدان التخزين مقرها في السعودية بمدينة الرياض، مرخص من هيئة الغذاء والدواء، تقوم بتقديم خدمات التخزين والدعم اللوجستي</p>
                            <ul className="flex justify-start items-center gap-[18px] ">
                                <li><a href="#" className=" size-[56px] md:size-[56px] text-white border-2 border-white rounded-full flex justify-center items-center hover:bg-orange-500 hover:border-orange-500 hover:transition-colors duration-400"><FontAwesomeIcon icon={faSnapchat} className="  text-lg md:text-[24px]" /></a></li>
                                <li><a href="#" className=" size-[56px] md:size-[56px] text-white border-2 border-white rounded-full flex justify-center items-center hover:bg-orange-500 hover:border-orange-500 hover:transition-colors duration-400"><FontAwesomeIcon icon={faFacebook} className=" text-lg md:text-[24px]"/></a></li>
                                <li><a href="#" className=" size-[56px] md:size-[56px] text-white border-2 border-white rounded-full flex justify-center items-center hover:bg-orange-500 hover:border-orange-500 hover:transition-colors duration-400"><FontAwesomeIcon icon={faLinkedinIn} className="   text-lg md:text-[24px]"/></a></li>
                                <li><a href="#" className=" size-[56px] md:size-[56px] text-white border-2 border-white rounded-full flex justify-center items-center hover:bg-orange-500 hover:border-orange-500 hover:transition-colors duration-400"><FontAwesomeIcon icon={faXTwitter} className=" text-lg md:text-[24px]"/></a></li>
                                <li><a href="#" className=" size-[56px] md:size-[56px] text-white border-2 border-white rounded-full flex justify-center items-center hover:bg-orange-500 hover:border-orange-500 hover:transition-colors duration-400"><FontAwesomeIcon icon={faYoutube} className="   text-lg md:text-[24px]"/></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 space-y-5 lg:px-20">
                        <p className="text-white text-[24px] mb-[48px] font-[500] ">روابط مختصره</p>
                        <ul className="flex flex-col gap-5 *:cursor-pointer *:hover:text-orange-500 *:text-xl *:font-semibold *:text-white">
                            <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:start-5 before:h-1 before:bg-orange-500 " ><Link className={ pathname === "/" ? "text-[20px] font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-[20px] font-semibold text-white"} href="/"> الرئيسيه </Link></li>
                            <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:start-5 before:h-1 before:bg-orange-500 " ><Link className={ pathname === "/WhoWeAre" ? "text-[20px] font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-[20px] font-semibold text-white"} href="/WhoWeAre"> من نحن </Link></li>
                            <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:start-5 before:h-1 before:bg-orange-500 " ><Link className={ pathname === "/Services" ? "text-[20px] font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-[20px] font-semibold text-white"} href="/Services">  خدماتنا </Link></li>
                            <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:start-5 before:h-1 before:bg-orange-500 " ><Link className={ pathname === "/Contactus" ? "text-[20px] font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-[20px] font-semibold text-white"} href="/Contactus"> تواصل معنا </Link></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 space-y-5 text-2xl md:text-start text-white">
                        <p className=" text-[24px] mb-[48px] font-[500]  text-start ">طرق التواصل</p>
                        <ul className=" space-y-10">
                            <li> <a className="text-white flex items-center text-lg md:text-xl " ><span className="mx-3 size-[40px] flex items-center justify-center border-2 border-gray-300 rounded-full"><FontAwesomeIcon icon={faPhoneVolume} className="text-white text-[16px]" /></span>966 55448669+ -  9223331156 </a></li>
                            <li> <a className="text-white flex items-center text-lg md:text-xl " ><span className="mx-3 size-[40px] flex items-center justify-center border-2 border-gray-300 rounded-full"><FontAwesomeIcon icon={faEnvelope} className="text-white text-[16px]" /></span>info@GGHHGG.com</a> </li>
                            <li> <a className="text-white flex items-center text-lg md:text-xl " ><span className="mx-3 size-[40px] flex items-center justify-center border-2 border-gray-300 rounded-full"><FontAwesomeIcon icon={faLocationDot} className="text-white text-[16px]" /></span> حي الشعلة شارع زهير بن قيس </a> </li>

                        </ul>
                    </div>
                </div>
                <div className="container mx-auto pt-[32px] text-white mt-[40px] border-t-4 border-white flex flex-col gap-5 lg:flex-row justify-between items-center">
                    <p className="text-[14px] "> جميع الحقوق محفوظة موقع شركة طوق لنظم المعلومات  @toq 2024  &copy; {new Date().getFullYear()}</p>
                    <p className="flex items-center gap-3 text-[14px]"> صنع فى TOQ <span><Image src={TOQ} className="w-auto h-auto"/></span></p>
                </div>
            </footer>
            </div>
        </>
    )
}

export default FootarDark
