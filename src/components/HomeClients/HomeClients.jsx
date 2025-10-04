import Title from "../Title/Title";
import logo1 from "@/imgg/HomeClients1.png";
import logo2 from "@/imgg/HomeClients2.png";
import logo3 from "@/imgg/HomeClients3.png";
import logo4 from "@/imgg/HomeClients4.png";
import logo5 from "@/imgg/HomeClients5.png";
import logo6 from "@/imgg/HomeClients6.png";
import logo7 from "@/imgg/HomeClients7.png";
import Image from "next/image";

export default function HomeClients() {
  return (
    <>
    <div  className=" bg-[#F7F7F7] ">
        <div className="container py-[64px]">
            <div className="text-center">
                <Title text={"عملاء وثقو بخدمتنا"}/>
            </div>
            <div class="w-full overflow-x-auto scrollbar-hide">
                <div  class="flex gap-[32px] *:w-[208px] *:h-[112px] *:flex *:items-center *:justify-center *:bg-white *:shrink-0 *:rounded-[24px] p-8 ">
                    <div class="">
                        <Image src={logo7} width={109} height={45}/>
                    </div>
                    <div class="">
                        <Image src={logo6} width={109} height={45}/>
                    </div>
                    <div class="">
                        <Image src={logo5} width={109} height={45}/>
                    </div>
                    <div class="">
                        <Image src={logo4} width={109} height={45}/>
                    </div>
                    <div class="">
                        <Image src={logo3} width={109} height={45}/>
                    </div>
                    <div class="">
                        <Image src={logo2} width={109} height={45}/>
                    </div>
                    <div class="">
                        <Image src={logo1} width={109} height={45}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
