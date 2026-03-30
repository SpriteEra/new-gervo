import React from "react";
import { CalendarCheck2, Share2 } from "lucide-react";
import { newsData, blogData } from "../utility/data";
import AboutCard from "../common/AboutCard";
import { Link, useParams } from "react-router-dom";

const BlogPage = () => {
    const id = useParams().id;
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            {/* Title */}
            <h1 className="text-xl md:text-2xl mr-5 font-semibold mb-4">
                {blogData[id].title}
            </h1>

            <div className="flex flex-row justify-between items-center mb-2">
                {/* Date */}
                <div className="flex items-center gap-0 text-sm text-gray-600 font-semibold gap-2 ">
                    <CalendarCheck2 size={18} />
                    <span>{blogData[id].time}, {blogData[id].date}</span>
                </div>
                <div className="flex flex-row items-center gap-2 px-2 py-1 border border-black/10 rounded-md hover:bg-gray-100 transition cursor-pointer">

                    {/* Lucide Icon */}
                    <Share2 size={12} />

                    {/* Text */}
                    <span className="text-sm">
                        Share
                    </span>
                </div>
            </div>

            {/* Image Card */}
            <div className="bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-xl p-2 mb-6">
                <img
                    src={blogData[id].image}
                    alt="blog"
                    className="w-full h-[200px] md:h-[500px] object-cover rounded-md"
                />
                <p className="text-gray-500 text-sm mt-1 text-center">
                    This image is taken by google.
                </p>
            </div>

            {/* Description */}
            <p className="text-gray-800 leading-relaxed mb-10">
                {blogData[id].description}
            </p>
            <div>
                {blogData[id].sections.map((item, index) => (
                    <div key={index}>
                        <h1  key={index} className="text-xl font-semibold mb-2">
                            {item.heading}
                        </h1>
                        <p   key={index} className="text-gray-800 leading-relaxed mb-4">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>

            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-t border-gray-300 pt-6">
                Related Articles
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {
                    newsData.slice(0, 3).map((item, index) => (
                        <Link to={`/blogs/${index}`} style={{ textDecoration: 'none' }} key={index}>
                            <AboutCard
                                image={item.image}
                                title={item.title}
                                date={item.date}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogPage;