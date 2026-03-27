import React from "react";

const InnovationSection = () => {
    return (
        <section className="w-max-[80%] px-4 py-12 flex flex-col items-center">

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
                Innovation Through <span className="italic text-red-500">Engineering</span>
            </h2>

            {/* YouTube Video */}
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden">

                <div className="relative w-full pb-[56.25%]"> {/* 16:9 ratio */}

                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                        src="https://www.youtube.com/embed/Re6e4qZnkuo"
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>

            </div>
        </section>
    );
};

export default InnovationSection;