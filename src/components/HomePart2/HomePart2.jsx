import Image from "next/image";
import Img from "@/imgg/Asset 3 1.png";
import Abouthestorage from "../Abouthestorage/Abouthestorage";

export default function HomePart2() {
  return (
    <>
    <div className="HomePart2 bg-no-repeat my-20">
        <div className=" container py-[64px]">
        <div className="grid grid-cols-6 items-center gap-10">
            <div className="col-span-6 lg:col-span-3 hidden lg:block">
                <Image src={Img}  className="w-[80%] h-auto"/>
            </div>
            <Abouthestorage/>
        </div>
    </div>
    </div>
    </>
  )
}
