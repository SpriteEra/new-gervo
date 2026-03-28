import Feedback1 from './Feedback1.jsx';
import map from '../assets/map.png';
import Footer2 from './Footer2.jsx';

export default function Feedback12() {
    return (
        <div className="w-full flex flex-col">
        <div className="min-h-screen w-full flex flex-col items-center text-center justify-start px-4 sm:px-6 md:px-10 py-10 gap-2  bg-white">

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-bold text-center text-black">
                Let's Bring Your Vision to Life
            </h1>

            {/* Paragraph */}
            <p className="text-center text-gray-600  sm:text-base md:text-sm mx-auto leading-relaxed nowarpe">
                Get in touch with our experts to design high-performance shredding and recycling systems built for your specific production requirements.
            </p>

            {/* Form Section */}
            <div className="w-full max-w-6xl my-6   bg-green-100 border-2 border-green-500 rounded-xl overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <Feedback1 />
            </div>

            {/* Map Section */}
            <div className="w-full max-w-6xl my-6 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <img
                    src={map}
                    alt="Map"
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
                />
            </div>

        </div>
        <Footer2/>
        </div>
    );
}
