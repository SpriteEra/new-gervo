import ess from "../assets/ess.png";


export default function Feedback() {
    return (
        <div className="relative w-full bg-[#24813F] py-16 sm:px-4">

            {/* Background Image */}
            <img
                src={ess}
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />

            {/* Overlay (optional but recommended) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-white text-center flex flex-col items-center p-4">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Contact Us
                </h1>

                <p className="max-w-xl text-sm sm:text-base">
                    Connect with our engineering team for customized shredder and recycling solutions tailored to your operational needs.
                </p>
            </div>

        </div>
    );
}
           