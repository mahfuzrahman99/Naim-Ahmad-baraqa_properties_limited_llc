import Image from "next/image";
import Banner from "./home/Banner";
import WhyCoosUs from "./home/WhyCoosUs";
import ContactUs from "./home/ContactUs";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="">
    <div>
        {/* <Navbar/> */}
    </div>
    <div>
        <Banner/>
    </div>
    <div>
        <WhyCoosUs/>
    </div>
    <div className=" my-4 md:my-12">
        <ContactUs/>
    </div>
    <div>
        <Footer/>
    </div>
    </main>
  );
}
