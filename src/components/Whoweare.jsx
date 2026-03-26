import React from "react";
import whoweare from "../../public/Images/whoweare.png";

const Whoweare = () => {
    return (
        <section className="w-full flex justify-center items-center flex-col px-4 md:px-10 lg:px-20 py-16">

            {/* Top Heading */}
            <div className="text-center mb-10 max-w-[80%]">

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
            <div className="grid max-w-[90%] lg:grid-cols-2 gap-10 items-center">

                {/* Left Text */}
                <div className=" text-sm md:text-base lg:text-lg leading-relaxed">

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
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={whoweare}
                        alt="German R&D Team"
                        className="w-full max-w-md md:max-w-lg rounded-tr-[80px] object-cover"
                    />
                </div>

            </div>

            {/* Container */}
            <div className="w-full mt-24 max-w-[80%] bg-[#E6F7EA] rounded-[10px_100px] px-6 md:px-12 py-9 text-center">

                {/* Heading */}
                <h2 className="text-xl md:text-2xl font-bold text-black">
                    Mission & Vision
                </h2>

                {/* Green Line */}
                <div className="w-24 md:w-36 h-1 bg-green-600 mx-auto mt-1 mb-4"></div>

                {/* Content */}
                <p className="text-sm lg:px-20 md:text-base lg:text-lg text-black leading-relaxed">
                    To deliver world-class recycling and shredding solutions that promote
                    environmental sustainability, optimize resource recovery, and improve
                    industrial efficiency through innovation and advanced engineering.
                </p>

                <p className="mt-0 lg:px-20 text-sm md:text-base lg:text-lg text-black leading-relaxed">
                    To become a global leader in sustainable waste processing and biomass
                    energy solutions by continuously advancing technology and empowering
                    industries with reliable and eco-friendly systems.
                </p>

            </div>
        </section>
    );
};

export default Whoweare;