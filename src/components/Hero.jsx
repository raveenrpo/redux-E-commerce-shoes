import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Elevate Your Style with Every Step
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">
              Discover our latest collection of premium footwear designed to
              blend comfort with cutting-edge fashion. From sleek sneakers to
              elegant dress shoes, our curated selection ensures you find the
              perfect pair for every occasion. Step into unparalleled quality
              and style—explore our exclusive range now and transform your
              wardrobe.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to={"/collection"}>
              <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="w-full sm:w-1/2"
        src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></img>
    </div>
  );
};

export default Hero;
