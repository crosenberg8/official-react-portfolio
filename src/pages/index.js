import React from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import Separator from '../components/Separator'
import { aboutObj, projectsObj, extracurricularsObj, contactObj } from '../components/Separator/Data'
import ProjectSection from '../components/ProjectSection'
import { firstWebsite } from '../components/ProjectSection/Data'
import AboutMe from '../components/AboutMe'

const Home = () => {
    return (
        <>
            <Navbar />
            <IntroSection />
            <Separator {...aboutObj}/>
            <AboutMe />
            <Separator {...projectsObj}/>
            <ProjectSection {...firstWebsite}/>
            <Separator {...extracurricularsObj}/>
            <Separator {...contactObj}/>
        </>
    )
}

export default Home
