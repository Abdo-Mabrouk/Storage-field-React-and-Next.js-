import Footar from "@/components/footar/Footar";
import HomeServis from "@/components/HomeServis/HomeServis";
import ServicesClients from "@/components/ServicesClients/ServicesClients";
import ServicesProducts from "@/components/ServicesProducts/ServicesProducts";
import StorageforOthersContactUs from "@/components/StorageforOthersContactUs/StorageforOthersContactUs";
import TitlePage from "@/components/TitlePage/TitlePage";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import iconCol from "@/imgg/icon/call-calling2.png"

export default function Services() {
  return (
    < > 
      <TitlePage text={" الخدمات "}/>
      <HomeServis/>
      <ServicesProducts/>
      <ServicesClients/>
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
