import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Glogo from "/Images/Glogo.png";
import Revlogo from "/Images/RevLogo.png";
import { NavLink } from "react-router";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [active,setActive] = useState("Home");
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/our-products" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="w-full sticky top-0 left-0 bg-white shadow-md z-50">
      <div className=" mx-auto flex items-center justify-between px-4 md:px-10 h-[70px] md:h-[90px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Glogo} // replace with your icon
            alt="logo"
            className="h-10 md:h-16"
          />
          <img
            src={Revlogo} // replace with your text logo
            alt="logo"
            className="h-5 md:h-8"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `text-[18px] font-medium transition ${isActive
                  ? "text-red-600 font-semibold"
                  : "text-black hover:text-red-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA Button */}
          <button className="cursor-pointer bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isOpen ? (
            <X
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white w-full px-6 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[400px] py-4" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-[16px] font-medium transition ${isActive
                  ? "text-red-600 font-semibold"
                  : "text-black hover:text-red-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-red-600 cursor-pointer text-white py-2 rounded-full mt-2">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;