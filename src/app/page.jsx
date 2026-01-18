import Banner from "@/Components/Banner";
import PopularFood from "@/Components/PopularFood";
import Reviews from "@/Components/Reviews";
import SpecialOffer from "@/Components/SpecialOffer";
import WhyChoose from "@/Components/WhyChoose";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <WhyChoose></WhyChoose>
      <PopularFood></PopularFood>
      <SpecialOffer></SpecialOffer>
      <Reviews></Reviews>
    </>
  );
}
