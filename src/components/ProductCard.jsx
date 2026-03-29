// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ imageSrc, titleText, buttonText, linkPath }) => {
//   return (
//     <div className="flex flex-col items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
//       <div className="w-full h-56 flex items-center justify-center mb-6 overflow-hidden">
//         <img 
//           src={imageSrc} 
//           alt={titleText} 
//           className="max-h-full max-w-full object-contain" 
//         />
//       </div>
      
//       <h3 className="text-lg font-bold text-center text-gray-900 mb-5 leading-tight min-h-[3rem] flex items-center justify-center">
//         {titleText}
//       </h3>
      
//       <Link 
//         to={linkPath} 
//         className="bg-[#EF3A3A] hover:bg-red-600 text-white py-2 px-6 rounded-sm text-sm font-semibold flex items-center gap-2 transition-colors italic"
//       >
//         {buttonText} 
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//         </svg>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageSrc, titleText, buttonText, linkPath }) => {
  return (
    <div className="relative w-full max-w-[374px] h-[450px] bg-white rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.1)] mx-auto overflow-hidden">
      
      {/* Image Container - Matching Top: 0px, width 326px, centered */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[326px] h-[287px] flex items-center justify-center">
        <img 
          src={imageSrc} 
          alt={titleText} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      
      {/* Title Text - Matching Top: 305px, Font Size: 22px, Line Height: 33px */}
      <h3 className="absolute top-[305px] left-1/2 -translate-x-1/2 w-[299px] h-[66px] m-0 font-['Poppins',sans-serif] font-medium text-[22px] leading-[33px] text-center text-black flex items-center justify-center">
        {titleText}
      </h3>
      
      {/* Button Wrapper - Matching Top: 389px, Width: 170px, Height: 35px */}
      <Link 
        to={linkPath} 
        className="absolute top-[389px] left-1/2 -translate-x-1/2 w-[170px] h-[35px] group block"
      >
        {/* Slanted Background to match visual design & #EB3223 color */}
        <div className="absolute inset-0 bg-[#EB3223] border border-[#EB3223] skew-x-[-15deg] group-hover:bg-red-700 transition-colors"></div>
        
        {/* Button Content - Text (17px) & Icon */}
        <div className="absolute inset-0 flex items-center justify-center gap-[6px]">
          <span className="font-['Poppins',sans-serif] font-medium text-[17px] leading-[26px] text-white">
            {buttonText}
          </span>
          {/* lucide/arrow-up-right */}
          <svg 
            className="w-5 h-5 text-white" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </Link>
      
    </div>
  );
};

export default ProductCard;