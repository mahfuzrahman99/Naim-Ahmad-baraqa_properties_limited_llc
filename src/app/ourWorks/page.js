import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SearchDemo from "@/components/ui/SearchDemo";
import { getDemos } from "@/utils/fetchData";
import "aos/dist/aos.css";
import AllDemos from "./AllDemos";

const OurWorks = async () => {
  const demos = await getDemos();

  return (
    <div>
      <Navbar />
      <div className="md:flex justify-center md:justify-between max-w-5xl mx-auto md:mt-16 md:mb-6">
        <div className="hidden md:block">{/* this div for flex between */}</div>
        <SearchDemo demos={demos} />
      </div>
      <AllDemos demos={demos} />
      <Footer />
    </div>
  );
};

export default OurWorks;
