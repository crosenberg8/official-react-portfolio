import React from 'react'
import {
    IntroContainer,
    ImgWrapper,
    Img,
    AboutMe,
    ResumeLink,
    Heading,
    ResumeContainer,
    AboutMeWrapper
} from './IntroElements'
import Image from "../../images/avatar.png"

const IntroSection = () => {
    return (
        <>
            <IntroContainer>
                <ImgWrapper>
                    <Img src={Image} />
                </ImgWrapper>
                <AboutMeWrapper>
                    <AboutMe>
                        My name is Connor Rosenberg, and I am an undergraduate student in the Georgia Institute of Technology's College of Computing. I am a Computer Science major, with focuses/threads in Artificial Intelligence and Media. Outside of the classroom, I am involved in a variety of different clubs and activities which I showcase throughout this website! Navigate through this website too see all the fun things I'm up to, from cool website development projects, to rock climbing with my friends! I hope you enjoy!
                    </AboutMe>
                </AboutMeWrapper>
                <ResumeContainer>
                    <ResumeLink href="https://docs.google.com/document/d/137XwAqDK5AXGfj5C4cOzD1RzqqItXdKOvsNrJXCplq8/edit?usp=sharing">Click here to view my resume!</ResumeLink>
                </ResumeContainer>
                <Heading>SCROLL DOWN, OR CLICK THE LINKS AT THE TOP TO SEE MORE!</Heading>
            </IntroContainer>
        </>
    )
}

export default IntroSection
