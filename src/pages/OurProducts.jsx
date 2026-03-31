import React from 'react';
import AboutHero from '../components/AboutTop';
import ProductCard from '../components/ProductCard';
import StatsSection from '../common/StatsSection';
import TextDesign from '../components/TextDesign';
import Footer1 from '../components/Footer1';

const OurProducts = () => {
  const industrialSolutions = [
    {
      id: 1,
      imageSrc: '/Images/i.png', 
      titleText: 'HM-Series Hammer Mill (1.5-5 TPH)',
      buttonText: 'Know More',
      linkPath: '/products/hm-series'
    },
    {
      id: 2,
      imageSrc: '/Images/j.png',
      titleText: 'Industrial Dust Collector System',
      buttonText: 'Know More',
      linkPath: '/products/dust-collector'
    },
    {
      id: 3,
      imageSrc: '/Images/k.png', 
      titleText: 'PM-Series Biomass Pellet Mill (1.5-3 TPH)',
      buttonText: 'Know More',
      linkPath: '/products/pm-series'
    },
    {
      id: 4,
      imageSrc: '/Images/l.png',
      titleText: 'Industrial Biomass Shredder (2 - 10 TPH)',
      buttonText: 'Know More',
      linkPath: '/products/biomass-shredder'
    },
    {
      id: 5,
      imageSrc: '/Images/e.png',
      titleText: 'Magnetic Metal Separator (Metal Scanner)',
      buttonText: 'Know More',
      linkPath: '/products/metal-separator'
    },
    {
      id: 6,
      imageSrc: '/Images/f.png',
      titleText: 'Integrated Conveyor System',
      buttonText: 'Know More',
      linkPath: '/products/conveyor-system'
    }
  ];

  const otherEquipments = [
    {
      id: 7,
      imageSrc: '/Images/g.png', 
      titleText: 'Conveyer Belt',
      buttonText: 'Know More',
      linkPath: '/products/conveyer-belt'
    },
    {
      id: 8,
      imageSrc: '/Images/h.png', 
      titleText: 'Metal Separator with Integrated Conveyer',
      buttonText: 'Know More',
      linkPath: '/products/metal-separator-conveyer'
    }
  ];

  return (
    <div className="w-full flex flex-col font-['Poppins',sans-serif]">
      
      <div className="w-full bg-[#f8f9fa] pb-20">
        <AboutHero 
          text1="Our Products" 
          text2="Delivering advanced shredder and recycling machinery designed for performance, durability, and environmental responsibility." 
        />

        <div className="max-w-[1186px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">
          
          <div className="text-center mb-12 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[1px] w-12 bg-[#EB3223]"></div>
              <span className="text-[#EB3223] font-medium text-sm">Our Product</span>
              <div className="h-[1px] w-12 bg-[#EB3223]"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Industrial Shredding <span className="text-[#EB3223] italic">Solutions</span>
            </h2>
            <p className="mt-4 max-w-3xl text-sm text-gray-600 mx-auto px-4">
              Delivering high-performance shredder and recycling machinery designed for efficiency, durability, and long-term industrial performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] justify-items-center">
            {industrialSolutions.map((item) => (
              <ProductCard
                key={item.id}
                imageSrc={item.imageSrc}
                titleText={item.titleText}
                buttonText={item.buttonText}
                linkPath={item.linkPath}
              />
            ))}
          </div>

          <div className="text-center mb-12 mt-20 md:mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Other <span className="text-[#EB3223] italic">Equipments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-4xl mx-auto justify-items-center">
            {otherEquipments.map((item) => (
              <ProductCard
                key={item.id}
                imageSrc={item.imageSrc}
                titleText={item.titleText}
                buttonText={item.buttonText}
                linkPath={item.linkPath}
              />
            ))}
          </div>
        
        </div>
      </div>
      
     
      <StatsSection />
    
      <section className="w-full bg-[#FFFFFF] py-16 lg:py-[120px] px-6 sm:px-8 lg:px-10">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[80px]">

          {/* Text Content */}
          <div className="w-full lg:w-[602px] flex flex-col">
            <div className="flex items-center gap-[10px] mb-[15px]">
              <div className="h-[2px] w-[56px] bg-[#FFCC00]"></div>
              <span className="text-[#000000] font-[600] text-[16px] md:text-[18px] leading-[27px]">
                Industrial Innovation
              </span>
            </div>

            <h2 className="text-[32px] md:text-[40px] lg:text-[50px] leading-[40px] md:leading-[50px] lg:leading-[60px] font-[700] text-[#EB3223] mb-[20px] max-w-full lg:max-w-[549px]">
              Built on Quality. Driven by Innovation.
            </h2>

            <p className="text-[#000000] text-[15px] md:text-[17px] leading-[24px] md:leading-[26px] font-[400]">
              At Grevo Global, quality is the foundation of everything we build and innovation drives the way we engineer solutions. Our team combines advanced technology, precision manufacturing, and industry expertise to develop reliable machinery and integrated plant systems that deliver long-term performance and sustainable results for modern industries.
            </p>
          </div>

         
          <div className="w-full lg:w-[554px] h-[280px] sm:h-[350px] lg:h-[371px]">
            <img
              src="/Images/b.jpg"
              alt="Industrial Innovation"
              className="w-full h-full object-cover rounded-[60px_10px_10px_60px] lg:rounded-[120px_10px_10px_120px] shadow-sm"
            />
          </div>

        </div>
      </section>

     
      <TextDesign />
      <Footer1 />
      
    </div>
  );
};

export default OurProducts;