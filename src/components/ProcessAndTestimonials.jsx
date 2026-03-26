import React from 'react';
import {
  ClipboardList,
  DraftingCompass,
  Compass,
  Factory,
  ShieldCheck,
  Truck,
  Headphones,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import halftoneImg from '/Images/halftone.png';


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
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          body { font-family: 'Poppins', sans-serif; }
        `}
      </style>


      <div className="hidden xl:block relative mx-auto w-[1188px] h-[371px]">

        <svg
          className="absolute left-0 top-[85px] w-[1188px] h-[204px] overflow-visible"
          viewBox="0 0 1188 204"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <path
            d="M 0 102 
               A 99 102 0 0 1 198 102 
               A 99 102 0 0 0 396 102 
               A 99 102 0 0 1 594 102 
               A 99 102 0 0 0 792 102 
               A 99 102 0 0 1 990 102 
               A 99 102 0 0 0 1188 102"
            stroke="#EB3223"
            strokeWidth="4"
            strokeLinecap="butt"
          />

        </svg>


        <div className="absolute left-0 top-[85px] w-[1188px] h-[204px] flex">
          {steps.map((step, i) => {
            const isUp = i % 2 === 0;
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative w-[198px] h-full flex justify-center">


                {!isUp && (
                  <div className="absolute -top-[25px] w-full text-center text-[#000000] font-normal text-[15px] leading-[23px]">
                    {step.title}
                  </div>
                )}


                <div
                  className={`absolute top-[32px] w-[140px] h-[140px] bg-[#00AD28] flex items-center justify-center shadow-[0px_0px_6px_rgba(0,0,0,0.15)] overflow-hidden z-10
                    ${isUp ? 'rounded-t-[150px] rounded-b-[5px]' : 'rounded-b-[150px] rounded-t-[5px]'}
                  `}
                >

                  <div
                    className={`absolute inset-0 z-10 pointer-events-none ${isUp ? '' : 'rotate-180'}`}
                    style={{
                      backgroundImage: `url(${halftoneImg})`,
                      backgroundSize: "100% 20%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center bottom",
                      opacity: 0.35,
                      mixBlendMode: "overlay",
                      filter: "brightness(0) invert(1)",
                      maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
                      WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
                    }}
                  />
                  <Icon size={46} strokeWidth={1.5} className="text-white relative z-20" />
                </div>


                {isUp && (
                  <div className="absolute top-[176px] w-full text-center text-[#000000] font-normal text-[15px] leading-[23px]">
                    {step.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>


      <div className="xl:hidden relative mx-auto w-[320px] h-[980px] mt-4">


        <svg
          className="absolute left-0 top-0 w-[320px] h-[980px] z-0 overflow-visible"
          viewBox="0 0 320 980"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <path
            d="
               M 160 20 
               A 100 75 0 0 1 160 170
               A 100 75 0 0 0 160 320
               A 100 75 0 0 1 160 470
               A 100 75 0 0 0 160 620
               A 100 75 0 0 1 160 770
               A 100 75 0 0 0 160 920
            "
            stroke="#EB3223"
            strokeWidth="4"
            strokeLinecap="round"
          />


        </svg>


        {steps.map((step, i) => {

          const isRightSide = i % 2 === 0;


          const centerY = 20 + (i * 150) + 75;
          const boxTop = centerY - 55;

          const Icon = step.icon;

          return (
            <div key={step.id} className="absolute w-full h-[110px]" style={{ top: `${boxTop}px` }}>


              <div
                className={`absolute top-1/2 -translate-y-1/2 w-[130px] px-2 text-[#000000] font-bold text-[14px] leading-[20px] flex items-center
                   ${isRightSide ? 'left-[10px] justify-end text-right' : 'right-[10px] justify-start text-left'}
                 `}
              >
                {step.title}
              </div>


              <div
                className={`absolute h-[110px] w-[90px] bg-[#00AD28] flex items-center justify-center shadow-md overflow-hidden z-10
                   ${isRightSide ? 'left-[160px] rounded-r-[70px] rounded-l-[4px]' : 'right-[160px] rounded-l-[70px] rounded-r-[4px]'}
                 `}
              >

                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    backgroundImage: `url(${halftoneImg})`,
                    backgroundSize: "auto 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: isRightSide ? "left center" : "right center",
                    filter: "brightness(0) invert(1) opacity(0.35)",
                    maskImage: isRightSide
                      ? 'linear-gradient(to right, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 80%)'
                      : 'linear-gradient(to left, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: isRightSide
                      ? 'linear-gradient(to right, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 80%)'
                      : 'linear-gradient(to left, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 80%)',
                  }}
                />
                <Icon size={36} strokeWidth={1.5} className="text-white relative z-20" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="w-full max-w-[1512px] mx-auto py-10 px-4 flex flex-col items-center relative">


      <div className="flex items-center gap-3 mb-2">
        <div className="w-[58px] h-0 border-[1px] border-[#EB3223]"></div>
        <span className="text-[#EB3223] font-semibold text-[18px] leading-[27px]">Client Testimonials</span>
        <div className="w-[58px] h-0 border-[1px] border-[#EB3223]"></div>
      </div>
      <h2 className="text-[#000000] font-semibold text-[40px] leading-[60px] text-center mb-1">
        What Our Clients <span className="text-[#EB3223]">Say</span>
      </h2>
      <p className="text-[#4E5E6A] font-normal text-[15px] leading-[22px] text-center mb-20">
        Real feedback from customers who trusted us with their spaces.
      </p>


      <div className="relative w-full max-w-[1188px] mx-auto flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-10">

        <button className="absolute cursor-pointer -left-4 top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-[0px_0px_8px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#EB3223] hover:scale-105 transition-transform z-20 hidden xl:flex">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        <div className="relative w-full max-w-[343px] h-[266px] bg-[#fdf3f2] border border-[#EB3223] rounded-[10px] flex flex-col items-center pt-[65px] pb-6 px-6 mt-[45px] xl:mt-0">
          <div className="absolute -top-[45px] w-[90px] h-[90px] bg-white rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <div className="relative">
              <span className="text-[#005197] font-bold text-[22px] italic tracking-tight">praj</span>
              <div className="absolute -top-[8px] right-0 flex">
                <div className="w-[8px] h-[8px] bg-[#00AD28] transform skew-x-12"></div>
                <div className="w-[8px] h-[8px] bg-[#F58220] transform -skew-x-12"></div>
              </div>
            </div>
          </div>
          <p className="font-normal text-[14px] leading-[22px] text-center text-[#000000] mb-auto">
            Their e-waste recycling system helped us recover valuable materials efficiently. The automation and PLC control system are easy to operate and highly effective.
          </p>
          <div className="bg-[#EB3223] rounded-[30px] py-[6px] px-6 flex flex-col items-center justify-center w-[250px]">
            <span className="font-semibold text-[15px] text-white">Mr. Sandeep Singh</span>
            <span className="font-normal text-[11px] text-white">Manager, Reliance Industries</span>
          </div>
        </div>


        <div className="relative w-full max-w-[433px] h-[310px] bg-[#eefaf1] border-[2px] border-[#00AD28] rounded-[10px] flex flex-col items-center pt-[80px] pb-8 px-10 z-10 shadow-lg">
          <div className="absolute -top-[60px] w-[120px] h-[120px] bg-white rounded-full shadow-[0px_0px_12px_rgba(0,0,0,0.15)] flex items-center justify-center">
            <div className="border-[2px] border-[#005197] rounded flex flex-col items-center px-[8px] py-[2px]">
              <span className="bg-[#005197] text-white text-[9px] font-bold px-[10px] py-[1px] mb-[2px]">ए पी सी पी एल</span>
              <span className="text-[#005197] text-[18px] font-black tracking-wider leading-none">APCPL</span>
            </div>
          </div>
          <p className="font-medium text-[16px] leading-[25px] text-center text-[#000000] mb-auto">
            Their e-waste recycling system helped us recover valuable materials efficiently. The automation and PLC control system are easy to operate and highly effective.
          </p>
          <div className="bg-[#00AD28] rounded-[30px] py-[10px] px-8 flex flex-col items-center justify-center w-[296px]">
            <span className="font-semibold text-[17px] text-white">Mr. Pradeep Singh</span>
            <span className="font-normal text-[12px] text-white">Manager, Indian Oil Corporation</span>
          </div>
        </div>


        <div className="relative w-full max-w-[343px] h-[266px] bg-[#fdf3f2] border border-[#EB3223] rounded-[10px] flex flex-col items-center pt-[65px] pb-6 px-6 mt-[45px] xl:mt-0">
          <div className="absolute -top-[45px] w-[90px] h-[90px] bg-white rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <div className="relative">
              <span className="text-[#005197] font-bold text-[22px] italic tracking-tight">praj</span>
              <div className="absolute -top-[8px] right-0 flex">
                <div className="w-[8px] h-[8px] bg-[#00AD28] transform skew-x-12"></div>
                <div className="w-[8px] h-[8px] bg-[#F58220] transform -skew-x-12"></div>
              </div>
            </div>
          </div>
          <p className="font-normal text-[14px] leading-[22px] text-center text-[#000000] mb-auto">
            Their e-waste recycling system helped us recover valuable materials efficiently. The automation and PLC control system are easy to operate and highly effective.
          </p>
          <div className="bg-[#EB3223] rounded-[30px] py-[6px] px-6 flex flex-col items-center justify-center w-[250px]">
            <span className="font-semibold text-[15px] text-white">Mr. Sandeep Singh</span>
            <span className="font-normal text-[11px] text-white">Manager, Reliance Industries</span>
          </div>
        </div>


        <button className="absolute cursor-pointer -right-4 top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-[0px_0px_8px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#EB3223] hover:scale-105 transition-transform z-20 hidden xl:flex">
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>

      <div className="flex xl:hidden gap-6 mt-12">
        <button className="w-[50px] h-[50px] cursor-pointer bg-white rounded-full shadow-[0px_0px_8px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#EB3223]">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <button className="w-[50px] h-[50px] cursor-pointer bg-white rounded-full shadow-[0px_0px_8px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#EB3223]">
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  );
}

export default function ProcessAndTestimonials() {
  const stepsData = [
    { id: 1, title: 'Requirement Analysis', icon: ClipboardList },
    { id: 2, title: 'Machine Design', icon: Compass },
    { id: 3, title: 'Precision Manufacturing', icon: Factory },
    { id: 4, title: 'Quality Testing', icon: ShieldCheck },
    { id: 5, title: 'Installation & Commissioning', icon: Truck },
    { id: 6, title: 'After-Sales Support', icon: Headphones },
  ];

  return (
    <div className="w-full bg-white font-['Poppins'] min-h-screen py-16 overflow-hidden text-[#000000]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap');
          body { font-family: 'Poppins', sans-serif; }
        `}
      </style>


      <section className="px-4 max-w-[1512px] mx-auto flex flex-col items-center mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-[58px] h-0 border-[1px] border-[#EB3223]"></div>
          <span className="text-[#EB3223] font-semibold text-[18px] tracking-wide">Our Process</span>
          <div className="w-[58px] h-0 border-[1px] border-[#EB3223]"></div>
        </div>
        <h2 className="font-bold text-[40px] leading-[60px] text-center mb-3">
          How We Deliver <span className="text-[#EB3223] italic font-semibold">Excellence</span>
        </h2>
        <p className="text-[#4E5E6A] font-normal text-[15px] text-center max-w-[900px]">
          A systematic and result-driven approach to designing, manufacturing, and installing high-performance biomass processing plants.
        </p>
      </section>

      <ProcessWave steps={stepsData} />

      <Testimonials />

    </div>
  );
}