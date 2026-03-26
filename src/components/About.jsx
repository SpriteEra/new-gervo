import img1 from '../../public/Images/img1.jpg';
import img2 from '../../public/Images/img2.jpg';
import prize from '../../public/Images/prize.png';

const About = () => {
    return (
        <div className="w-full py-10 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                    <div className="flex gap-4">

                        {/* LEFT COLUMN */}
                        <div className="flex flex-col gap-4 mt-10">
                            <div className="relative w-[140px] sm:w-[160px] md:w-[180px] aspect-[5/6] rounded-xl overflow-hidden">
                                <img src={img1} className="w-full h-full object-cover" />
                                <div className="absolute w-[60px] h-[60px] bg-[#EB3223] rotate-[-45deg] top-[-30px] left-[-30px] border-white border-4"></div>
                            </div>

                            <div className="relative w-[140px] sm:w-[160px] md:w-[180px] overflow-hidden bg-red-100 rounded-xl p-4">
                                <h1 className="text-lg font-bold text-red-600">14+</h1>
                                <p className="text-xs">Year of Excellence</p>
                                <div className="absolute top-1.5 right-1.5 w-6 h-6 bg-red-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="flex flex-col gap-4">
                            <div className="relative w-[140px] sm:w-[160px] md:w-[180px] overflow-hidden bg-green-100 rounded-xl p-4">
                                <h1 className="text-lg font-bold text-green-600">50+</h1>
                                <p className="text-xs">Product Variant</p>
                                <div className="absolute top-1.5 right-1.5 w-6 h-6 bg-green-500 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            </div>

                            <div className="relative w-[140px] sm:w-[160px] md:w-[180px] aspect-[5/6] rounded-xl overflow-hidden">
                                <img src={img2} className="w-full h-full object-cover" />
                            </div>

                            {/* FLOAT CARD */}
                            <div className="relative -top-10 -right-5 bg-white shadow-md rounded-xl px-4 py-3 flex items-center gap-3 w-fit mx-auto lg:ml-10">
                                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                    <img src={prize} className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">German</p>
                                    <p className="text-xs">Engineering</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="w-full flex flex-col order-1 lg:order-2 text-left">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-12 border-t-[3px] border-[#FFCC00]"></div>
                        <p className="text-xs sm:text-sm text-gray-500">
                            About Grevo Global
                        </p>
                    </div>

                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                        German Technology <br />
                        <span className="text-green-600">
                            Made for India
                        </span>
                    </h1>

                    <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
                        Grevo Global Pvt. Ltd. engineers high-performance industrial waste
                        management systems, advanced shredding technology, biomass processing
                        solutions, and complete turnkey plant infrastructure.
                    </p>

                    <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                        Our solutions handle the toughest shredding challenges across the globe,
                        delivering precision, durability, and unmatched performance.
                    </p>

                    <button className="mt-5 cursor-pointer text-sm border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition w-fit">
                        Learn More →
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About;