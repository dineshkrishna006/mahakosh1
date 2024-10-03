// import Accordin from "@/components/accordin";
import Category from "@/components/category";
import HeadlessUICarousel from "@/components/headlesscarousel";
import Navbar from "@/components/navbar";
import Popularproducts from "@/components/popularproduct";
import Section2 from "@/components/section2";

export default function Home() {
  return (
    <div className="w-[100vw] flex flex-col ">
      <Navbar />
      <HeadlessUICarousel/>
      <Popularproducts/>
      <Section2 />
      <Category/>
      {/* <Accordin/> */}
    </div>
  );
}
