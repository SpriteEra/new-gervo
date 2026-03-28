import React from 'react'
import Hero from '../components/Hero';
import AboutHome from '../components/AboutHome';
import StatsSection from '../common/StatsSection';
import OurProduct from '../components/OurProduct';
import OurServices from '../components/OurServices';
import ChooseUs from '../components/ChooseUs';
import OurClients from '../components/OurClients';
import BlogUpdates from '../components/BlogUpdates';
import ProcessAndTestimonials from '../components/ProcessAndTestimonials';
import Footer1 from '../components/Footer1';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutHome />
            <StatsSection />
            <OurProduct />
            <OurServices />
            <ChooseUs />
            <OurClients />
            <ProcessAndTestimonials />
            <BlogUpdates />
            <Footer1 />
        </div>
    )
}

export default Home