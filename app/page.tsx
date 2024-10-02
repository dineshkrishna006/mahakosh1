// import Accordin from "@/components/accordin";
import Category from "@/components/category";
import HeadlessUICarousel from "@/components/headlesscarousel";
import Navbar from "@/components/navbar";
import Section2 from "@/components/section2";


export default function Home() {
  return (
    <div className="w-[100vw]">
      <Navbar />
      <HeadlessUICarousel/>
      <p>hello</p>
      <Section2 />
      <Category/>
      {/* <Accordin/> */}
    </div>
  );
}
