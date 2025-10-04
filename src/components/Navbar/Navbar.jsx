"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logoimg from "@/imgg/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);

  function toggleOpen() {
    setmenuOpen(!menuOpen);
  }
  const pathname = usePathname();

  return (
    <header dir="rtl" className=" fixed w-full top-0 start-0 z-50 bg-white py-2">
      <div className="container flex justify-between items-center">
        {/* logo */}
        <div className="flex gap-3 items-center">
          <Image src={logoimg}
          width={200}  />
        </div>
        {/* links */}
        <ul className="hidden lg:flex gap-[48px] items-center ">
          <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:start-1/2 before:translate-x-1/2 before:h-1 before:bg-orange-500 "><Link className={ pathname === "/" ? "text-[20px] font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-[20px] font-normal text-[#666]"} href="/"> الرئيسيه </Link></li>
          <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:start-1/2 before:translate-x-1/2 before:h-1 before:bg-orange-500 "><Link className={ pathname === "/WhoWeAre" ? "text-[20px] font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-[20px] font-normal text-[#666]"} href="/WhoWeAre"> من نحن </Link></li>
          <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:start-1/2 before:translate-x-1/2 before:h-1 before:bg-orange-500 "><Link className={ pathname === "/Services" ? "text-[20px] font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-[20px] font-normal text-[#666]"} href="/Services">  خدماتنا </Link></li>
          <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:start-1/2 before:translate-x-1/2 before:h-1 before:bg-orange-500 "><Link className={ pathname === "/Contactus" ? "text-[20px] font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-[20px] font-normal text-[#666]"} href="/Contactus"> تواصل معنا </Link></li>
        </ul>
        <div className=" items-center gap-5 hidden lg:flex">
          <div className=" size-10 rounded-full flex justify-center items-center btn p-0">
            En
          </div>
          <button className="btn"> احجز الان</button>
        </div>
        {/* toggle button */}
        <button
          onClick={toggleOpen}
          className="lg:hidden bg-orange-500 text-white text-2xl p-2 rounded"
        >
          {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>

      {/* mobile menu overlay */}
{menuOpen && (
  <>
    <div
      onClick={toggleOpen}
      className="fixed inset-0 z-30 bg-black/50 cursor-pointer"
    ></div>
    <div className="animate-slide-in offcanvas fixed top-0 end-0  bg-white h-screen z-40 p-5 transition-transform duration-500">
      <div className="flex flex-col gap-5  pb-2 border-b-2 border-gray-200">
        <button className="btn hover:bg-orange-600 hover:text-black" onClick={toggleOpen}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
          {/* links */}
        <ul className="flex flex-col gap-5 *:cursor-pointer *:hover:text-orange-500 *:text-xl *:font-semibold *:text-black">
          <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:h-1 before:bg-orange-500 "><Link className={ pathname === "/" ? "text-xl font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-xl font-semibold text-black"} href="/"> الرئيسيه </Link></li>
          <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:h-1 before:bg-orange-500 "><Link className={ pathname === "/WhoWeAre" ? "text-xl font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-xl font-semibold text-black"} href="/WhoWeAre"> من نحن </Link></li>
          <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:h-1 before:bg-orange-500 "><Link className={ pathname === "/Services" ? "text-xl font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-xl font-semibold text-black"} href="/Services">  خدماتنا </Link></li>
          <li className="relative before:absolute before:w-0 before:-bottom-3 hover:before:w-10 before:transition-all before:duration-300 before:h-1 before:bg-orange-500 "><Link className={ pathname === "/Contactus" ? "text-xl font-semibold text-orange-500" :"cursor-pointer hover:text-orange-500 text-xl font-semibold text-black"} href="/Contactus"> تواصل معنا </Link></li>
        </ul>
        <div className=" items-center gap-2 flex">
          <div className=" size-10 rounded-full flex justify-center items-center btn p-0">
            En
          </div>
        <button className="btn px-2"> احجز الان</button>
        </div>
      </div>
    </div>
  </>
)}

    </header>
  );
}
