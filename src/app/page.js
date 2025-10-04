import HeroSection from "@/components/HeroSection/HeroSection";
import HomeBusinessFeatures from "@/components/HomeBusinessFeatures/HomeBusinessFeatures";
import HomeClients from "@/components/HomeClients/HomeClients";
import HomeContactUs from "@/components/HomeContactUs/HomeContactUs";
import HomePart2 from "@/components/HomePart2/HomePart2";
import HomePart3 from "@/components/HomePart3/HomePart3";
import HomeProducts from "@/components/HomeProducts/HomeProducts";
import HomeQuestions from "@/components/HomeQuestions/HomeQuestions";
import HomeServis from "@/components/HomeServis/HomeServis";
import FootarDark from "@/components/FootarDark/FootarDark";

export default function Home() {
  return (
    <>
      <div className="">
        <HeroSection/>
        <HomePart2  />
        <HomePart3/>
        <HomeServis/>
        <HomeProducts/>
        <HomeBusinessFeatures/>
        <HomeClients/>
        <HomeQuestions/>
        <HomeContactUs/>
        <FootarDark/>
      </div>
    </>
  );
}
