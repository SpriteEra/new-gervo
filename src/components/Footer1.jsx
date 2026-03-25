import { FaCheck, FaStar, FaPhoneAlt,FaTelegramPlane  } from "react-icons/fa";
import gear from "../assets/settings.png";
import ess from "../assets/ess.png";

export default function Footer1() {
    return (
        <>
        <div className="relative w-full bg-[#24813F] py-16 sm:px-4">
  {/* Image on top with partial opacity */}
  <img
    src={ess}
    alt="Overlay Image"
    className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
  />

  {/* Optional content */}
  <div className="relative z-10 text-white text-center items-center p-4 flex flex-col ">
    <h1 className='text-white font-bold text-lg max-w-sm sm:max-w-md md:max-w-xl'>Ready to Upgrade Your Waste Processing System?</h1>
        <p className="max-w-sm sm:max-w-md md:max-w-xl gap-2 text-sm sm:text-base py-1">Let our esperts design a customized shredder and recycling solution that fits your production capacity and business objectives.</p>
        <div className='flex flex-col sm:flex-row sm:gap-6 sm:items-left items-left gap-4 py-6'>
            <div className='flex items-center' >
                <FaCheck className="text-white" />
                <span>500+ Projects Completed</span>
            </div>
            <div className='flex items-center'>
                <FaStar className="text-white" />
                <span>4.9/5 Average Rating</span>
            </div>
            <div className='flex items-center'>
                <FaTelegramPlane className="text-white" />
                <span>100% Customer Satisfaction</span>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center gap-2'> 
            <button className='bg-yellow-400 px-10 py-1 hover:bg-yellow-500 font-semibold rounded transition'>Get Free Quote</button>
            <button className='bg-white px-8 py-1 hover:bg-white-500 text-black font-semibold rounded flex items-center gap-2 transition '>
                <FaPhoneAlt className="text-black" />
                <span>+91 7896541230</span>
            </button>
        </div>
                 
      {/* Top Left */}
      <div className="absolute top-16 left-20 hidden sm:block">
      <div className="relative w-20 h-20">

      {/* Big Gear */}
      <img
        src={gear}
        alt="big gear"
        className="w-14 h-14"
      />

      {/* Small Gear */}
      <img
        src={gear}
        alt="small gear"
        className="w-6 h-6 absolute top-1 right-1"
      />

    </div>
    </div>

      {/* Bottom Right */}
      <div className="absolute bottom-14 right-12 hidden sm:block">
      <div className="relative w-20 h-20">

      {/* Big Gear */}
      <img
        src={gear}
        alt="big gear"
        className="w-14 h-14"
      />

      {/* Small Gear */}
      <img
        src={gear}
        alt="small gear"
        className="w-6 h-6 absolute top-1 right-1"
      />

    </div>
      </div>

  </div>
</div>

</>
    );
}