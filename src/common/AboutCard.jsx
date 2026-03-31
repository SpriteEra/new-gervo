import React from "react";
import { CalendarCheck2 } from "lucide-react";

const NewsCard = ({ image, title, date }) => {
  return (
    <div className="w-full max-w-[335px] p-3 bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-xl hover:shadow-lg transition duration-300">
      
      {/* Image */}
      <div className="w-full h-44 rounded-md overflow-hidden">
        <img
          src={image}
          alt="card"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-3 pt-4 flex flex-col gap-2">
        
        {/* Date Row */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <CalendarCheck2 size={18} />
          <span>{date}</span>
        </div>

        {/* Title */}
        <h2 className="text-sm sm:text-base font-medium text-black leading-snug">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default NewsCard;