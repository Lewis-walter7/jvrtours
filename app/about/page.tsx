'use client'

import React from 'react'
import About from './components/About'
import GetQuote from '../components/modal/getQuote'
import AboutModal from './components/modal/aboutModal'
import OurMissionModal from './components/modal/ourMissionModal'
import WhyChooseUsModal from './components/modal/whyChooseUsModal'

const AboutPage = () => {
  return (
    <div>
        <About />
        <GetQuote />
        <AboutModal />
        <OurMissionModal/>
        <WhyChooseUsModal/>
    </div>
  )
}

export default AboutPage