import React from "react";
import AboutTop from "../../public/Images/AboutTop.png"; // update path if needed

const AboutHero = () => {
  return (
    <section
      className="w-full bg-[#24813F] relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={AboutTop}
          alt="background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Heading */}
        <h1 className="text-white font-semibold font-[Poppins] 
          text-2xl sm:text-3xl md:text-4xl lg:text-[35px]">
          About Us
        </h1>

        {/* Description */}
        <p className="text-white font-extralight font-[Poppins] 
          mt-4 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl
          text-sm sm:text-base md:text-lg ">
          Delivering advanced shredder and recycling machinery designed for
          performance, durability, and environmental responsibility.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;