import React from "react";
import whoweare from "../../public/Images/whoweare.png";

const Whoweare = () => {
    return (
        <section className="w-full flex justify-center items-center flex-col px-4 md:px-10 lg:px-20 py-16">

            {/* Top Heading */}
            <div className="text-center mb-10 md:max-w-[80%]">

                {/* Who We Are */}
                <div className="flex items-center justify-center gap-1 mb-2">
                    <div className="w-12 border-t-2 border-red-500"></div>
                    <span className="text-red-500 font-bold text-sm md:text-base">
                        Who We Are
                    </span>
                    <div className="w-12 border-t-2 border-red-500"></div>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl md:text-4xl font-semibold text-black">
                    Driving Industrial <span className="italic text-red-500">Innovation</span>
                </h2>
            </div>

            {/* Content Section */}
            <div className="grid md:max-w-[90%] lg:grid-cols-2 gap-8 items-center">

                {/* Left Text */}
                <div className="order-2 lg:order-1 text-xs md:text-sm lg:text-base leading-relaxed">

                    <p>
                        <span className="text-green-600 font-semibold">
                            Grevo Global Pvt. Ltd.
                        </span>{" "}
                        engineers high-performance industrial waste management systems, advanced
                        shredding technology, biomass processing solutions, and complete turnkey
                        plant infrastructure for demanding global applications.
                    </p>

                    <p className="">
                        Our Germany-based R&D center focuses on torque-optimized drive
                        systems, cutter metallurgy, shaft dynamics, and structural load
                        engineering. Every system is designed around real mechanical
                        performance — not theoretical specifications.
                    </p>

                    <p className="">
                        Manufacturing in India ensures precision fabrication, controlled
                        quality standards, and scalable production capability for global
                        markets. We combine engineering depth with execution strength.
                    </p>
                </div>

                {/* Right Image */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <img
                        src={whoweare}
                        alt="German R&D Team"
                        className="w-full max-w-md md:max-w-lg rounded-tr-[80px] object-cover"
                    />
                </div>

            </div>

            <div className="flex justify-center">
                <div className="relative w-full mt-24 md:max-w-[80%]">

                    {/* Top-right curved glow */}
                    <div className="absolute -top-0 -right-0 w-40 h-40 bg-green-500 rounded-full pointer-events-none"></div>

                    {/* Bottom-left curved glow */}
                    <div className="absolute -bottom-0 -left-0 w-40 h-40 bg-green-500 rounded-full pointer-events-none"></div>

                    {/* Main Container */}
                    <div className="relative bg-[#E6F7EA] rounded-[10px_100px] px-6 md:px-12 py-9 text-center">

                        {/* Heading */}
                        <h2 className="text-xl md:text-2xl font-bold text-black">
                            Mission & Vision
                        </h2>

                        {/* Green Line */}
                        <div className="w-24 md:w-36 h-1 bg-green-600 mx-auto mt-1 mb-4"></div>

                        {/* Content */}
                        <p className="text-xs lg:px-18 md:text-sm lg:text-base text-black leading-relaxed">
                            To deliver world-class recycling and shredding solutions that promote
                            environmental sustainability, optimize resource recovery, and improve
                            industrial efficiency through innovation and advanced engineering.
                        </p>

                        <p className="mt-2 lg:px-20 text-xs md:text-sm lg:text-base text-black leading-relaxed">
                            To become a global leader in sustainable waste processing and biomass
                            energy solutions by continuously advancing technology and empowering
                            industries with reliable and eco-friendly systems.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whoweare;