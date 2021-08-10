import React from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import Separator from '../components/Separator'
import { aboutObj, projectsObj, extracurricularsObj, contactObj } from '../components/Separator/Data'
import ProjectSection from '../components/ProjectSection'
import ProjectSectionWVideo from '../components/ProjectSectionWVideo'
import { reactPortfolioWebsite, firstWebsite, javascriptJournalWebsite, theAgency, mutrTransportation, resgt } from '../components/ProjectSection/Data'
import { javaFxProject } from '../components/ProjectSectionWVideo/Data'
import AboutMe from '../components/AboutMe'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import ContactMe from '../ContactMe'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <IntroSection />
            <Separator {...aboutObj} />
            <AboutMe />
            <Separator {...projectsObj} />
            <ProjectSection {...reactPortfolioWebsite} />
            <ProjectSection {...firstWebsite} />
            <ProjectSection {...javascriptJournalWebsite} />
            <ProjectSectionWVideo {...javaFxProject} />
            <Separator {...extracurricularsObj} />
            <ProjectSection {...theAgency} />
            <ProjectSection {...mutrTransportation} />
            <ProjectSection {...resgt} />
            <Separator {...contactObj} />
            <ContactMe />
            <Footer />
        </>
    )
}

export default Home
