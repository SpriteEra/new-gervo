import facebook from "../assets/Facebook.png";
import insta from "../assets/Instagram.png";
import twitt from "../assets/X.png";
import youtube from "../assets/Youtube.png";
import glb from "../assets/GREVOFINAL.png";
import rect from '../assets/rect.png';
import { FaXTwitter } from "react-icons/fa6";
export default function Footer2() {
    return (
        <>
            <div className='bg-black text-white px-0 sm:px-40 py-5'>
                <div className="flex flex-wrap w-full gap-5 justify-center sm:justify-between">
                    {/* Logo + Description */}
                    <div className="flex flex-col min-w-[200px] sm:min-w-[250px] md:min-w-[300px] max-w-xs sm:max-w-xl sm:text-left">
                        {/* Mobile logo */}
                        <div className="flex items-center gap-2 mb-4 items-center justify-center sm:hidden">
                            <div className="flex items-center text-center gap-2">
                                <img
                                    alt="G Logo"
                                    src="/public/Images/Glogo.png"
                                    className="h-16 md:h-16 object-contain items-center filter brightness-0 invert"
                                />
                                <img
                                    alt="Rev Logo"
                                    src="/public/Images/RevLogo.png"
                                    className="h-8 md:h-8 object-contain items-center filter  brightness-0 invert"
                                />
                            </div>
                        </div>

                        {/**/}
                        <div className="hidden sm:flex items-center mb-4 justify-center sm:justify-start">
                            <img
                                src={glb}
                                alt="Grevo Logo"
                                className="w-24 sm:w-28 md:w-32 object-contain filter brightness-0 invert"
                            />
                        </div>
                        {/**/}
                        <p className="text-sm sm:text-base leading-relaxed text-center sm:text-left max-w-[250px] sm:max-w-md">
                            Engineering advanced shredder and recycling machines designed for
                            biomass, e-waste, and municipal solid waste processing.
                        </p>
                    </div>

                    {/* Quick Link + Legal */}
                    <div className="flex w-full sm:w-auto justify-center gap-5">
                        {/* Quick Links */}
                        <div className="min-w-[120px]">
                            <h1 className="text-sm sm:text-base font-normal hover:text-slate-250">Quick Link</h1>
                            <ul className="mt-2 space-y-1">
                                <li><a href="/Home" className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Home</a></li>
                                <li><a href="/About" className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">About</a></li>
                                <li><a href="/Services" className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Services</a></li>
                                <li><a href="/Products" className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Products</a></li>
                                <li><a href="/Contact" className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Contact</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="min-w-[120px]">
                            <h1 className="text-sm sm:text-base font-normal hover:text-slate-250">Legal</h1>
                            <ul className="mt-2 space-y-1">
                                <li><a className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Privacy Policy</a></li>
                                <li><a className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Terms & Condition</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                        <div className="min-w-[150px] sm:items-center text-center">
                            <h1 className="text-sm sm:text-base sm:text-center font-normal hover:text-slate-250">Contact</h1>
                            <ul className="mt-2 space-y-1 text-center sm:text-left">
                                <li className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">123, Green Avenue,</li>
                                <li className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Near City Center,</li>
                                <li className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Mumbai-400001, India</li>
                                <li className="text-slate-300 hover:text-slate-250 text-xs sm:text-sm font-medium hover:underline">Ph.No.:+91 7896541230 </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="text-slate-600 mx-6 sm:mx-0 my-2" />
                <div className="flex flex-col items-center">
                    <div className="flex flex-col text-center sm:flex-row sm:items-center sm:justify-between w-full mt-2">
                        {/* Left: Follow Us + Icons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 w-full mt-4">
                            <span className="text-lg font-light text-white">Follow Us:</span>

                            <span className="flex flex-row gap-3 items-center flex-wrap">
                                <a href="#" className="transform hover:scale-125 transition-transform duration-300">
                                    <img src={facebook} alt="Facebook" className="w-8 h-8" />
                                </a>
                                <a href="#" className="transform hover:scale-125 transition-transform duration-300">
                                    <img src={insta} alt="Instagram" className="w-8 h-8" />
                                </a>
                                <a href="#" className="transform hover:scale-125 transition-transform duration-300">
                                    <img src={twitt} alt="Twitter" className="w-8 h-8" />
                                </a>
                                <a href="#" className="transform hover:scale-125 transition-transform duration-300">
                                    <img src={youtube} alt="YouTube" className="w-8 h-8" />
                                </a>
                            </span>
                        </div>
                        <hr className="text-slate-600 sm:hidden mx-6 my-4" />
                        {/* Right: Footer Text */}
                        <p className="text-xs sm:text-base text-white font-medium text-center sm:text-right flex-shrink-0">
                            Design & Develop by SpriteEra IT Solutions
                        </p>
                        <hr className="text-slate-600 my-4 mx-6 sm:hidden" />
                    </div>
                    <span className="text-sm sm:text-base font-normal hover:text-slate-250 ">© 2026 Grevo Global. All Rights Reserved.</span>
                </div>
            </div>
        </>
    )
};






