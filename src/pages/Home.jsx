import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import StatsSection from '../common/StatsSection';
import OurProduct from '../components/OurProduct';
import OurServices from '../components/OurServices';
import ChooseUs from '../components/ChooseUs';
import OurClients from '../components/OurClients';
import BlogUpdates from '../components/BlogUpdates';
import ProcessAndTestimonials from '../components/ProcessAndTestimonials';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <StatsSection />
            <OurProduct />
            <OurServices />
            <ChooseUs />
            <OurClients />
            <ProcessAndTestimonials />
            <BlogUpdates />
        </div>
    )
}

export default Home