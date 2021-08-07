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
                        I'm an undergraduate student at the Georgia Institute of Technology, majoring in Computer Science, with focuses/threads in Artificial Intelligence and Media. Outside of my passion for coding, I have a variety of interests! I am a ………………..
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
