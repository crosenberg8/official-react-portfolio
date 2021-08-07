import React from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import Separator from '../components/Separator'
import { aboutObj, projectsObj, extracurricularsObj, contactObj } from '../components/Separator/Data'
import ProjectSection from '../components/ProjectSection'
import ProjectSectionWVideo from '../components/ProjectSectionWVideo'
import { firstWebsite, javascriptJournalWebsite, theAgency, mutrTransportation, resgt } from '../components/ProjectSection/Data'
import { javaFxProject } from '../components/ProjectSectionWVideo/Data'
import AboutMe from '../components/AboutMe'

const Home = () => {
    return (
        <>
            <Navbar />
            <IntroSection />
            <Separator {...aboutObj} />
            <AboutMe />
            <Separator {...projectsObj} />
            <ProjectSection {...firstWebsite} />
            <ProjectSection {...javascriptJournalWebsite} />
            <ProjectSectionWVideo {...javaFxProject} />
            <Separator {...extracurricularsObj} />
            <ProjectSection {...theAgency} />
            <ProjectSection {...mutrTransportation} />
            <ProjectSection {...resgt} />
            <Separator {...contactObj} />
        </>
    )
}

export default Home
