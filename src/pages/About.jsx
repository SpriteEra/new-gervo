import React from 'react'
import AboutHero from '../components/AboutTop'
import Whoweare from '../components/Whoweare'
import StatsSection from '../common/StatsSection'
import ChooseUs from '../components/ChooseUs'
import OurServices from '../components/OurServices'
import ProcessAndTestimonials from '../components/ProcessAndTestimonials'
import InnovationSection from '../components/InnovationSection'
const About = () => {
    return (
        <div>
            <AboutHero />
            <Whoweare/>
            <StatsSection/>
            <ChooseUs/>
            <OurServices/>
            <ProcessAndTestimonials/>
            <InnovationSection/>
        </div>
    )
}

export default About