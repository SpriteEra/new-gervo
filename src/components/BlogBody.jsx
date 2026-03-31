import React from 'react'
import { Link, useParams } from "react-router-dom";
import AboutCard from "../common/AboutCard"
import { newsData } from '../utility/data';
export default function BlogBody() {
    
    return (
        <div>
            <div className='flex flex-col justify-center items-center px-4 pt-12 sm:pt-16 lg:pt-20'>
                <div className="flex items-center justify-center gap-[7px] w-full">
                    <div className="w-[58px] border-t-2 border-[#EB3223]"></div>
                    <p className="text-[#EB3223] font-semibold text-[18px]">
                        Our Blogs
                    </p>
                    <div className="w-[58px] border-t-2 border-[#EB3223]"></div>
                </div>

                <div className="flex flex-col items-center text-center px-4 mt-0">
                    <div className='flex flex-col md:flex-row gap-2'>
                        <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-black">
                            Insights & Industry
                        </h2>
                        <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[#EB3223] italic">
                            Updates
                        </h2>
                    </div>

                    <p className="mt-2 text-[14px] sm:text-[15px] text-[#4E5E6A] max-w-[1098px]">
                        Stay updated with the latest news, industry insights, and advancements in biomass processing and industrial plant engineering.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {
                        newsData.map((item, index) => (
                            <Link to={`/blogs/${index}`} style={{ textDecoration: 'none' }}>
                            <AboutCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                date={item.date}
                            />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
