import React from 'react';
import { CalendarDays } from 'lucide-react';

import firstImg from '/Images/first.jpg';
import secondImg from '/Images/second.jpg';
import thirdImg from '/Images/third.jpg';
export default function BlogUpdates() {
  const blogPosts = [
    {
      id: 1,
      image: thirdImg,
      date: '13 February 2026',
      title: 'Delhi Metro Golden Line (Silver line) route details, stations and construction status',
    },
    {
      id: 2,
      image: secondImg,
      date: '13 February 2026',
      title: 'Delhi Metro Golden Line (Silver line) route details, stations and construction status',
    },
    {
      id: 3,
      image: firstImg,
      date: '13 February 2026',
      title: 'Delhi Metro Golden Line (Silver line) route details, stations and construction status',
    }
  ];

  return (
    <section className="relative w-full font-['Poppins'] py-16 overflow-hidden bg-[rgba(35,142,235,0.1)]">


      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '33px 33px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1512px] mx-auto px-4 flex flex-col items-center">


        <div className="flex items-center gap-3 mb-2">
          <div className="w-[58px] h-0 border-[1.5px] border-[#EB3223]"></div>
          <span className="text-[#EB3223] font-semibold text-[18px] leading-[27px]">Our Blogs</span>
          <div className="w-[58px] h-0 border-[1.5px] border-[#EB3223]"></div>
        </div>

        <h2 className="text-[#000000] font-bold text-[32px] md:text-[40px] leading-[1.2] md:leading-[60px] text-center mb-3">
          Insights & Industry <span className="text-[#EB3223] italic">Updates</span>
        </h2>

        <p className="text-[#222222] font-normal text-[14px] md:text-[15px] leading-[22px] text-center max-w-[960px] mb-12">
          Stay updated with the latest news, industry insights, and advancements in biomass processing and industrial plant engineering.
        </p>


        <div className="w-full max-w-[1187px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] xl:gap-[49px] mb-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[10px] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] flex flex-col p-[12px] hover:-translate-y-1 transition-transform duration-300"
            >

              <div className="w-full h-[180px] rounded-[5px] overflow-hidden mb-5">
                <img
                  src={post.image}
                  alt="Blog thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>


              <div className="flex flex-col px-1 pb-2">
                <div className="flex items-center gap-2 mb-2 text-[#000000]">
                  <CalendarDays size={18} strokeWidth={1.5} />
                  <span className="font-normal text-[15px] xl:text-[16px] leading-[24px]">
                    {post.date}
                  </span>
                </div>

                <h3 className="font-medium text-[15px] xl:text-[16px] leading-[24px] text-[#000000]">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>


        <button className="bg-[#EB3223] hover:bg-red-700 transition-colors rounded-[5px] w-[137px] h-[40px] flex items-center justify-center shadow-sm">
          <span className="font-medium text-[16px] xl:text-[18px] text-white">
            View All
          </span>
        </button>

      </div>
    </section>
  );
}