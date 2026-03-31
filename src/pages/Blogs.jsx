import React from 'react'
import AboutHero from '../components/AboutTop'
import BlogBody from "../components/BlogBody"
const Blogs = () => {
    return (
        <div>
            <AboutHero text1={"Our Blogs"} text2={"Stay updated with the latest trends, innovations, and expert perspectives in biomass processing and industrial engineering"} />
            <BlogBody />
           
        </div>
    )
}

export default Blogs