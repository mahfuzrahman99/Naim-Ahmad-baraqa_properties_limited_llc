import React from "react";
import Image from "next/image";
import navLogo from "@/assets/logo.png";

const Banner = () => {
  return (
    <div
      className="hero  h-[35vh] md:h-[80vh] shadow-xl shadow-[#a59fcd]"
      style={{
        backgroundImage: "url(https://i.ibb.co/3SxXgtL/Untitled-design.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-50 h-[50vh] md:h-[80vh]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="">
            <Image className=" rounded-lg" src={navLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
