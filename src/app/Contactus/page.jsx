import Contactuspart2 from "@/components/Contactuspart2/Contactuspart2";
import Footar from "@/components/footar/Footar";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import StorageforOthersContactUs from "@/components/StorageforOthersContactUs/StorageforOthersContactUs";
import TitlePage from "@/components/TitlePage/TitlePage";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import iconCol from "@/imgg/icon/call-calling2.png"

export default function Contactus() {
  return (
  <>
  <div className="bg-[#FFF]">
    <TitlePage text={" تواصل معنا "}/>
    <Contactuspart2/>
    <StorageforOthersContactUs/>
    <GoogleMap/>
    <Footar/>
          <div className="icon space-y-5 fixed end-5 bottom-10">
          
          <div className="size-[48px] bg-emerald-400 cursor-pointer rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-[24px]"/>
          </div>
          <div className="size-[48px] bg-black cursor-pointer rounded-full flex justify-center items-center">
            <Image src={iconCol} width={24} height={24}/>
          </div>
      </div>
  </div>

    
  
  </>
  )
}
