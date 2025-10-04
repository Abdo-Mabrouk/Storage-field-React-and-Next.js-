import Footar from "@/components/footar/Footar";
import HomePart3 from "@/components/HomePart3/HomePart3";
import StorageforOthersContactUs from "@/components/StorageforOthersContactUs/StorageforOthersContactUs";
import TitlePage from "@/components/TitlePage/TitlePage";
import WhoWeAreBusinessFeatures from "@/components/WhoWeAreBusinessFeatures/WhoWeAreBusinessFeatures";
import WhoWeArepart2 from "@/components/WhoWeArepart2/WhoWeArepart2";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import iconCol from "@/imgg/icon/call-calling2.png"


export default function WhoWeAre() {
  return (
    <>
      <TitlePage text={"من نحن"}/>
      <WhoWeArepart2/>
      <div className=" container py-[64px]">
        <div className=" bg-[#F7F7F7]  rounded-[32px] ">
        <HomePart3/>
        </div>
      </div>
      <WhoWeAreBusinessFeatures/>
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
