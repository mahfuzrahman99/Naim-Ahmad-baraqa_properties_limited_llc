import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Banner from "./home/Banner";
import ContactUs from "./home/ContactUs";
import WhyCoosUs from "./home/WhyCoosUs";

export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <WhyCoosUs />
      </div>
      <div className=" my-4 md:my-12">
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
