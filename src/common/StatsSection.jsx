import React from "react";
import maskImg from "/Images/Maskgroup.png"
const stats = [
  { value: "1500+", label: "Machine Installed" },
  { value: "1200+", label: "Happy Client" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

const StatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A121A] via-[#325A8E] to-[#0A121A]" />

      {/* Left Mask */}
      <img
        src={maskImg}
        alt="mask"
        className="
          absolute 
          -left-20 -top-20 
          w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px]
          pointer-events-none
        "
      />

      {/* Right Mask */}
      <img
        src={maskImg}
        alt="mask"
        className="
          absolute 
          -right-20 -bottom-20 
          w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px]
          rotate-180 
          pointer-events-none
        
        "
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16">

        {/* Responsive Grid */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-y-10 
            gap-x-2
            md:gap-x-0 
            text-center
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h2
                className="
                  text-white 
                  font-medium 
                  text-3xl 
                  sm:text-4xl 
                  md:text-5xl 
                  leading-tight
                "
              >
                {item.value}
              </h2>

              <p
                className="
                  text-blue-400 
                  text-xs 
                  sm:text-sm 
                  md:text-base 
                  mt-1
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;