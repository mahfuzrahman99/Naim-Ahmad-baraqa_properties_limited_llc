"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SearchDemo from "@/components/ui/SearchDemo";
import { getDemos } from "@/utils/fetchData";
import { useEffect, useState } from "react";
import DemoOneCard from "./DemoOneCard";
import AOS from "aos";
import "aos/dist/aos.css";


const OurWorks = () => {
  const [demos, setDemos] = useState();
  const [searchedDemo, setSearchedDemo] = useState(null);

  const demosToDisplay = searchedDemo || demos;

  useEffect(() => {
    getDemos().then((data) => setDemos(data));
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="md:flex justify-center md:justify-between max-w-5xl mx-auto md:mt-16 md:mb-6">
        <div className="hidden md:block">{/* this div for flex between */}</div>
        <SearchDemo demos={demos} setSearchedDemo={setSearchedDemo} />
      </div>
      <div className="max-w-5xl mx-auto">
        {demosToDisplay?.map((demo) => (
          <DemoOneCard key={demo.id} demo={demo} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default OurWorks;
