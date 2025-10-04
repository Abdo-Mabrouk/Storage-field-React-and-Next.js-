"use client"
import { useState, useEffect } from "react";
import iconCol from "@/imgg/icon/call-calling2.png"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const words = ["اغذيتك ", "ادويتك ", "بضاعتك "]; // الكلمات اللي هتتبدل
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // يتغير كل ثانيتين
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className="HeroSection relative min-h-screen flex items-center bg-no-repeat  bg-size-[280px] bg-left-bottom lg:bg-size-[800px] lg:bg-left-bottom">
        <div className=" container space-y-5 lg:space-y-5">
            <p className=" text-2xl md:text-[49px] text-gray-400 font-[400]">هل تريد مستودع لوجيستى </p>
            <h2 className=" text-3xl lg:text-[69px] font-semibold py-6 overflow-hidden">
              لتخزين{" "}
              <span key={index}  className="inline-block w-[100px] md:w-[230px] font-bold text-orange-500 me-5 animate-slide">
                {words[index]}
              </span>
              !
            </h2>
            <p className=" text-lg lg:text-[24px] font-[500]">أسهل طريقة لحجز مستودعك وإدارة مخزونك</p>
          <button className="btn  bg-black hover:bg-orange-500 text-[20px] px-[32px] py-[15px] text-white ">
                احجز مساحتك الان
          </button>
        </div>
        <div className="icon space-y-5 fixed end-5 bottom-10">
            
            <div className="size-[48px] bg-emerald-400 cursor-pointer rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="text-white text-[24px]"/>
            </div>
            <div className="size-[48px] bg-black cursor-pointer rounded-full flex justify-center items-center">
              <Image src={iconCol} width={24} height={24}/>
            </div>
        </div>
        <FontAwesomeIcon icon={faArrowDown} bounce className="absolute text-xl font-normal end-1/2 text-orange-500 bottom-10"/>

    </div>

    </>
  )
}
