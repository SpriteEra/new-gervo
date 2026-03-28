import React from 'react';
import { Check, Factory, Triangle, Wrench, Settings, Building2, Box, Cog } from 'lucide-react';

const Services = () => {
  const ourServicesData = [
    { title: "Argo-Residue Processing Units", image: "/Images/a.png" },
    { title: "Integrated Biomass Pellet Production System", image: "/Images/d.png" },
    { title: "Shredding Technology", image: "/Images/c.png" }
  ];

  const whatWeOfferData = [
    { icon: Factory, title: "Turnkey Project Solutions", description: "Complete biomass systems. Delivered ready to operate.", features: ["End-To-End System Integration", "Full Machinery Package Supply", "Factory-Tested Performance", "Quality-Assured Installation"] },
    { icon: Triangle, title: "Plant Design & Layout", description: "Optimized layout. Maximum output. Smart workflow.", features: ["Workflow Optimisation Studies", "Efficient Space Utilization", "Capacity Planning Analysis", "Cost-Effective Engineering Design"] },
    { icon: Wrench, title: "Service, Repair & Maintenance", description: "Reliable performance. Minimal downtime.", features: ["Preventive Maintenance Programs", "Expert Repair Services", "Performance Optimization", "Scheduled Service Support"] },
    { icon: Settings, title: "Installation & Commissioning", description: "Seamless setup. Verified performance.", features: ["Expert Installation Team", "Equipment Commissioning", "System Testing & Validation", "Complete Handover Documentation"] },
    { icon: Building2, title: "Plant Operation Guidance", description: "Optimize performance. Improve efficiency.", features: ["Operational Best Practices", "Process Optimization Support", "Troubleshooting Assistance", "Performance Monitoring Guidance"] },
    { icon: Box, title: "Raw Material Handling Guidance", description: "Better input. Better output.", features: ["Material Selection Advisory", "Storage Optimization", "Handling Procedure Training", "Quality Control Recommendations"] },
    { icon: Cog, title: "Spare Parts Support", description: "Genuine parts. Fast delivery. Zero compromise.", features: ["OEM Spare Parts Inventory", "Rapid Dispatch Service", "Quality-Certified Components", "Technical Selection Support"] }
  ];

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}
      </style>

      <section id="services" className="w-full overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
        
        <div className="bg-[#24813F] w-full py-[83px] px-4 flex flex-col items-center justify-center text-center">
          <h2 className="text-[#FFFFFF] text-[35px] font-[600] leading-[52px] mb-[4px]">
            Our Services
          </h2>
          <p className="text-[#FFFFFF] max-w-[898px] text-[18px] font-[300] leading-[27px]">
            Delivering advanced shredder and recycling machinery designed for performance, durability, and environmental responsibility.
          </p>
        </div>

        <div className="w-full bg-[#FFFFFF] pt-[140px] pb-[100px] px-5">
          <div className="max-w-[1188px] mx-auto">
            
            <div className="text-center mb-[57px]">
              <div className="flex items-center justify-center gap-[7px] mb-[15px]">
                <div className="h-0 w-[58px] border-[2px] border-[#EB3223]"></div>
                <span className="text-[#EB3223] font-[600] text-[18px] leading-[27px]">Our Services</span>
                <div className="h-0 w-[58px] border-[2px] border-[#EB3223]"></div>
              </div>
              
              <h3 className="text-[40px] leading-[60px] font-[600] text-[#000000] mb-[10px]">
                Advanced Engineering & Plant Solutions
              </h3>
              
              <p className="text-[#4E5E6A] max-w-[1003px] mx-auto text-[15px] leading-[22px] font-[400]">
                Delivering reliable industrial machinery, waste processing systems, and integrated biomass plant solutions for sustainable operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[33px]">
              {ourServicesData.map((service, index) => (
                <div key={index} className="bg-[#FFFFFF] rounded-[5px_70px_5px_5px] shadow-[0px_0px_20px_rgba(246,0,0,0.25)] flex flex-col overflow-hidden pb-[40px]">
                  <div className="w-full h-[269px] overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="px-4 pt-[20px] flex-grow flex items-center justify-center text-center">
                    <h4 className="text-[22px] font-[500] text-[#000000] leading-[33px] max-w-[320px]">
                      {service.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-[#FFFFFF] pt-[50px] pb-[120px] px-5">
          <div className="max-w-[1150px] mx-auto">
            
            <div className="text-center mb-[70px]">
              <div className="flex items-center justify-center gap-[7px] mb-[15px]">
                <div className="h-0 w-[58px] border-[2px] border-[#EB3223]"></div>
                <span className="text-[#EB3223] font-[600] text-[18px] leading-[27px]">What We Offer</span>
                <div className="h-0 w-[58px] border-[2px] border-[#EB3223]"></div>
              </div>
              
              <h3 className="text-[40px] leading-[60px] font-[600] text-[#000000] mb-[10px]">
                Delivering Complete Plant Lifecycle Solutions
              </h3>
              
              <p className="text-[#4E5E6A] max-w-[1048px] mx-auto text-[15px] leading-[22px] font-[400]">
                Delivering advanced engineering services, integrated plant solutions, and reliable industrial support for efficient and sustainable operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[35px] mb-[35px]">
              {whatWeOfferData.slice(0, 6).map((item, index) => (
                <div key={index} className="bg-[#FFFFFF] rounded-[5px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)] flex flex-col items-center p-[35px_27px] relative">
                  <div className="bg-[#00AD28] text-[#FFFFFF] rounded-[75px] w-[75px] h-[75px] flex items-center justify-center absolute top-[-37px]">
                    <item.icon size={37} strokeWidth={2} />
                  </div>
                  <h4 className="text-[20px] font-[600] text-[#000000] leading-[30px] text-center mt-[35px] mb-[1px]">
                    {item.title}
                  </h4>
                  <p className="text-[#666E81] text-[15px] leading-[22px] text-center font-[400] mb-[19px]">
                    {item.description}
                  </p>
                  <ul className="space-y-[10px] w-full flex flex-col items-start">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-[10px] text-[15px] text-[#000000] font-[500] leading-[22px] capitalize">
                        <div className="bg-[#00AD28] rounded-[30px] w-[25px] h-[25px] flex items-center justify-center flex-shrink-0">
                          <Check size={16} className="text-[#FFFFFF]" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[35px] mt-[70px]">
              <div className="hidden md:block col-span-1"></div>
              {whatWeOfferData.slice(6, 7).map((item, index) => (
                <div key={index} className="col-span-1 bg-[#FFFFFF] rounded-[5px] shadow-[0px_0px_10px_rgba(0,0,0,0.25)] flex flex-col items-center p-[35px_27px] relative">
                  <div className="bg-[#00AD28] text-[#FFFFFF] rounded-[75px] w-[75px] h-[75px] flex items-center justify-center absolute top-[-37px]">
                    <item.icon size={37} strokeWidth={2} />
                  </div>
                  <h4 className="text-[20px] font-[600] text-[#000000] leading-[30px] text-center mt-[35px] mb-[1px]">
                    {item.title}
                  </h4>
                  <p className="text-[#666E81] text-[15px] leading-[22px] text-center font-[400] mb-[19px]">
                    {item.description}
                  </p>
                  <ul className="space-y-[10px] w-full flex flex-col items-start">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-[10px] text-[15px] text-[#000000] font-[500] leading-[22px] capitalize">
                        <div className="bg-[#00AD28] rounded-[30px] w-[25px] h-[25px] flex items-center justify-center flex-shrink-0">
                          <Check size={16} className="text-[#FFFFFF]" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="hidden md:block col-span-1"></div>
            </div>
          </div>
        </div>

        <div className="w-full py-[80px]" style={{ background: "linear-gradient(90deg, #0A121A 0%, #26456C 25%, #325A8E 50%, #26456C 75%, #0A121A 100%)" }}>
          <div className="max-w-[972px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-[50px] md:gap-[145px]">
              
              <div className="flex flex-col items-center gap-[4px]">
                <h3 className="text-[#FFFFFF] text-[50px] font-[500] leading-[75px]">1500+</h3>
                <p className="text-[#238EEB] text-[18px] font-[500] leading-[27px]">Machine Installed</p>
              </div>
              
              <div className="flex flex-col items-center gap-[4px]">
                <h3 className="text-[#FFFFFF] text-[50px] font-[500] leading-[75px]">1200+</h3>
                <p className="text-[#238EEB] text-[18px] font-[500] leading-[27px]">Happy Client</p>
              </div>
              
              <div className="flex flex-col items-center gap-[4px]">
                <h3 className="text-[#FFFFFF] text-[50px] font-[500] leading-[75px]">98%</h3>
                <p className="text-[#238EEB] text-[18px] font-[500] leading-[27px]">Satisfaction</p>
              </div>
              
              <div className="flex flex-col items-center gap-[4px]">
                <h3 className="text-[#FFFFFF] text-[50px] font-[500] leading-[75px]">24/7</h3>
                <p className="text-[#238EEB] text-[18px] font-[500] leading-[27px]">Support</p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="w-full bg-[#FFFFFF] py-[120px] px-6 md:px-10">
          <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-center gap-[80px]">
            
            <div className="w-full md:w-[602px] flex flex-col">
              <div className="flex items-center gap-[10px] mb-[15px]">
                <div className="h-0 w-[56px] border-[1.5px] border-[#FFCC00]"></div>
                <span className="text-[#000000] font-[600] text-[18px] leading-[27px]">
                  Industrial Innovation
                </span>
              </div>
              
              <h2 className="text-[50px] leading-[60px] font-[700] text-[#EB3223] mb-[20px] max-w-[549px]">
                Built on Quality. Driven by Innovation.
              </h2>
              
              <p className="text-[#000000] text-[17px] leading-[26px] font-[400]">
                At Grevo Global, quality is the foundation of everything we build and innovation drives the way we engineer solutions. Our team combines advanced technology, precision manufacturing, and industry expertise to develop reliable machinery and integrated plant systems that deliver long-term performance and sustainable results for modern industries.
              </p>
            </div>

            <div className="w-full md:w-[554px] h-[371px]">
              <img
                src="/Images/b.jpg"
                alt="Industrial Innovation"
                className="w-full h-full object-cover rounded-[120px_10px_10px_120px]"
              />
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default Services;