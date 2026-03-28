import React from 'react'
import AboutHero from '../components/AboutTop'
import Whoweare from '../components/Whoweare'
import StatsSection from '../common/StatsSection'
import ChooseUs from '../components/ChooseUs'
import OurServices from '../components/OurServices'
import ProcessAndTestimonials from '../components/ProcessAndTestimonials'
import InnovationSection from '../components/InnovationSection'
import Footer1 from '../components/Footer1'
import TextDesign from '../components/TextDesign'
const About = () => {
    return (
        <div>
            <AboutHero />
            <Whoweare />
            <StatsSection />
            <ChooseUs />
            <OurServices />
            <ProcessAndTestimonials />
            <InnovationSection />
            <Footer1 />
            <TextDesign />
        </div>
    )
}

export default About