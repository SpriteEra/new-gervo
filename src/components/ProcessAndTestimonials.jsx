import React, { useState } from 'react';
import {
  ClipboardList,
  Compass,
  Factory,
  ShieldCheck,
  Truck,
  Headphones,
  ChevronLeft,
  ChevronRight,
  DraftingCompass
} from 'lucide-react';
import halftoneImg from '/Images/halftone.png';

// --- ProcessWave Component (RESTORED FULL MOBILE & DESKTOP CODE) ---
function ProcessWave() {
  const steps = [
    { id: 1, title: 'Requirement Analysis', icon: ClipboardList },
    { id: 2, title: 'Machine Design', icon: DraftingCompass },
    { id: 3, title: 'Precision Manufacturing', icon: Factory },
    { id: 4, title: 'Quality Testing', icon: ShieldCheck },
    { id: 5, title: 'Installation & Commissioning', icon: Truck },
    { id: 6, title: 'After-Sales Support', icon: Headphones },
  ];

  return (
    <div className="w-full bg-white font-['Poppins'] py-16 overflow-hidden">
      {/* Desktop Wave */}
      <div className="hidden xl:block relative mx-auto w-[1188px] h-[371px]">
        <svg className="absolute left-0 top-[85px] w-[1188px] h-[204px] overflow-visible" viewBox="0 0 1188 204" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 102 A 99 102 0 0 1 198 102 A 99 102 0 0 0 396 102 A 99 102 0 0 1 594 102 A 99 102 0 0 0 792 102 A 99 102 0 0 1 990 102 A 99 102 0 0 0 1188 102" stroke="#EB3223" strokeWidth="4" />
        </svg>
        <div className="absolute left-0 top-[85px] w-[1188px] h-[204px] flex">
          {steps.map((step, i) => {
            const isUp = i % 2 === 0;
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative w-[198px] h-full flex justify-center">
                {!isUp && <div className="absolute -top-[25px] w-full text-center text-black text-[15px]">{step.title}</div>}
                <div className={`absolute top-[32px] w-[140px] h-[140px] bg-[#00AD28] flex items-center justify-center shadow-md overflow-hidden z-10 ${isUp ? 'rounded-t-[150px] rounded-b-[5px]' : 'rounded-b-[150px] rounded-t-[5px]'}`}>
                  <div className={`absolute inset-0 z-10 opacity-35 mix-blend-overlay brightness-0 invert ${isUp ? '' : 'rotate-180'}`} style={{ backgroundImage: `url(${halftoneImg})`, backgroundSize: "100% 20%", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }} />
                  <Icon size={46} strokeWidth={1.5} className="text-white relative z-20" />
                </div>
                {isUp && <div className="absolute top-[176px] w-full text-center text-black text-[15px]">{step.title}</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Wave (DITTO RESTORED) */}
      <div className="xl:hidden relative mx-auto w-[320px] h-[980px] mt-4">
        <svg className="absolute left-0 top-0 w-[320px] h-[980px] z-0 overflow-visible" viewBox="0 0 320 980" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 160 20 A 100 75 0 0 1 160 170 A 100 75 0 0 0 160 320 A 100 75 0 0 1 160 470 A 100 75 0 0 0 160 620 A 100 75 0 0 1 160 770 A 100 75 0 0 0 160 920" stroke="#EB3223" strokeWidth="4" strokeLinecap="round" />
        </svg>
        {steps.map((step, i) => {
          const isRightSide = i % 2 === 0;
          const centerY = 20 + (i * 150) + 75;
          const boxTop = centerY - 55;
          const Icon = step.icon;
          return (
            <div key={step.id} className="absolute w-full h-[110px]" style={{ top: `${boxTop}px` }}>
              <div className={`absolute top-1/2 -translate-y-1/2 w-[130px] px-2 text-black font-bold text-[14px] flex items-center ${isRightSide ? 'left-[10px] justify-end text-right' : 'right-[10px] justify-start text-left'}`}>
                {step.title}
              </div>
              <div className={`absolute h-[110px] w-[90px] bg-[#00AD28] flex items-center justify-center shadow-md overflow-hidden z-10 ${isRightSide ? 'left-[160px] rounded-r-[70px] rounded-l-[4px]' : 'right-[160px] rounded-l-[70px] rounded-r-[4px]'}`}>
                <div className="absolute inset-0 z-10 pointer-events-none brightness-0 invert opacity-35" style={{ backgroundImage: `url(${halftoneImg})`, backgroundSize: "auto 100%", backgroundRepeat: "no-repeat", backgroundPosition: isRightSide ? "left center" : "right center" }} />
                <Icon size={36} strokeWidth={1.5} className="text-white relative z-20" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Testimonials Component (MOBILE ARROWS ADDED ON CARD) ---
export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { id: 1, name: "Mr. Sandeep Singh", role: "Manager, Reliance Industries", company: "praj", type: "red" },
    { id: 2, name: "Mr. Pradeep Singh", role: "Manager, Indian Oil Corporation", company: "APCPL", type: "green" },
    { id: 3, name: "Mr. Sandeep Singh", role: "Manager, Reliance Industries", company: "praj", type: "red" },
    { id: 4, name: "Mr. Sandeep Singh", role: "Manager, Reliance Industries", company: "praj", type: "red" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const visibleCards = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="w-full max-w-[1512px] mx-auto py-10 px-4 flex flex-col items-center relative overflow-hidden">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-[58px] h-0 border-[1px] border-[#EB3223]"></div>
        <span className="text-[#EB3223] font-semibold text-[18px]">Client Testimonials</span>
        <div className="w-[58px] h-0 border-[1px] border-[#EB3223]"></div>
      </div>
      <h2 className="text-black font-semibold text-[40px] text-center mb-1">
        What Our Clients <span className="text-[#EB3223]">Say</span>
      </h2>
      <p className="text-[#4E5E6A] text-[15px] text-center mb-20">
        Real feedback from customers who trusted us with their spaces.
      </p>

      <div className="relative w-full flex items-center justify-center">
        {/* Desktop Left Arrow */}
        <button onClick={prevSlide} className="absolute left-0 2xl:left-10 top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-lg flex items-center justify-center text-[#EB3223] z-30 hidden xl:flex">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        <div className="flex items-center justify-center gap-6 xl:gap-12 transition-all duration-500 ease-in-out">
          {visibleCards.map((item, index) => {
            const isCenter = index === 1;
            return (
              <div key={`${item.id}-${index}`} className={`flex justify-center items-center ${!isCenter ? 'hidden xl:flex' : 'flex'}`}>
                {item.type === 'green' ? (
                  <div className="relative w-full max-w-[350px] xl:max-w-[433px] h-[310px] bg-[#eefaf1] border-[2px] border-[#00AD28] rounded-[10px] flex flex-col items-center pt-[80px] pb-8 px-6 shadow-lg z-10 xl:scale-110">
                    <div className="absolute -top-[60px] w-[120px] h-[120px] bg-white rounded-full shadow-md flex items-center justify-center">
                       <div className="border-[2px] border-[#005197] rounded flex flex-col items-center px-[8px] py-[2px]">
                         <span className="bg-[#005197] text-white text-[9px] font-bold px-[10px] py-[1px] mb-[2px]">ए पी सी पी एल</span>
                         <span className="text-[#005197] text-[18px] font-black tracking-wider leading-none">APCPL</span>
                       </div>
                    </div>
                    <p className="font-medium text-[15px] leading-[22px] text-center text-black mb-auto">Their e-waste recycling system helped us recover valuable materials efficiently. The automation and PLC control system are easy to operate and highly effective.</p>
                    
                    {/* Mobile Back Arrow */}
                    <button onClick={prevSlide} className="xl:hidden absolute -left-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full shadow-xl flex items-center justify-center text-[#EB3223] z-50">
                      <ChevronLeft size={24} strokeWidth={3} />
                    </button>

                    <div className="bg-[#00AD28] rounded-[30px] py-[10px] px-8 flex flex-col items-center justify-center w-full max-w-[280px]">
                      <span className="font-semibold text-[16px] text-white text-center">{item.name}</span>
                      <span className="font-normal text-[11px] text-white text-center">{item.role}</span>
                    </div>

                    {/* Mobile Next Arrow */}
                    <button onClick={nextSlide} className="xl:hidden absolute -right-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full shadow-xl flex items-center justify-center text-[#EB3223] z-50">
                      <ChevronRight size={24} strokeWidth={3} />
                    </button>
                  </div>
                ) : (
                  <div className="relative w-[343px] h-[266px] bg-[#fdf3f2] border border-[#EB3223] rounded-[10px] flex flex-col items-center pt-[65px] pb-6 px-6 xl:mt-8">
                    <div className="absolute -top-[45px] w-[90px] h-[90px] bg-white rounded-full shadow-sm flex items-center justify-center">
                      <div className="relative"><span className="text-[#005197] font-bold text-[22px] italic">praj</span></div>
                    </div>
                    <p className="font-normal text-[13px] leading-[20px] text-center text-black mb-auto">Their e-waste recycling system helped us recover valuable materials efficiently.</p>
                    <div className="bg-[#EB3223] rounded-[30px] py-[6px] px-6 flex flex-col items-center justify-center w-[230px]">
                      <span className="font-semibold text-[14px] text-white">{item.name}</span>
                      <span className="font-normal text-[10px] text-white">{item.role}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Right Arrow */}
        <button onClick={nextSlide} className="absolute right-0 2xl:right-10 top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-lg flex items-center justify-center text-[#EB3223] z-30 hidden xl:flex">
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}

export default function ProcessAndTestimonials() {
  return (
    <div className="w-full bg-white font-['Poppins'] min-h-screen py-16 overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>
      <section className="px-4 max-w-[1512px] mx-auto flex flex-col items-center mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-[58px] h-0 border-[1px] border-[#EB3223]"></div>
          <span className="text-[#EB3223] font-semibold text-[18px]">Our Process</span>
          <div className="w-[58px] h-0 border-[1px] border-[#EB3223]"></div>
        </div>
        <h2 className="font-bold text-[40px] text-center mb-3">How We Deliver <span className="text-[#EB3223] italic font-semibold">Excellence</span></h2>
        <p className="text-[#4E5E6A] text-[15px] text-center max-w-[900px]">A systematic approach to biomass processing plants.</p>
      </section>
      <ProcessWave />
      <Testimonials />
    </div>
  );
}
