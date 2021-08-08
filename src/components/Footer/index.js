import React from 'react'
import {
    FooterContainer,
    ContentContainer,
    ContactContainer,
    ContactHeader,
    ContactInfo,
    CopyrightContainer,
    CopyrightSymbol,
    SocialMediaContainer,
    SocialMediaSymbol
} from "./FooterElements"

import EMAIL_ICON from "../../images/email.svg"
import LINKEDIN_ICON from "../../images/linkedin.svg"
import INSTAGRAM_ICON from "../../images/instagram.svg"


const Footer = () => {

    const currDate = new Date();
    const currYear = currDate.getFullYear();

    return (
        <>
            <FooterContainer>
                <ContentContainer>
                    <ContactContainer>
                        <ContactHeader>Contact me at:</ContactHeader>
                        <ContactInfo href="mailto:crosenberg8@gatech.edu?subject=Portfolio Website Message">Email: crosenberg8@gatech.edu</ContactInfo>
                    </ContactContainer>
                    <CopyrightContainer>
                        <CopyrightSymbol>&#169; {currYear}</CopyrightSymbol>
                    </CopyrightContainer>
                    <SocialMediaContainer>
                        <a href="mailto:crosenberg8@gatech.edu?subject=Portfolio Website Message">
                            <SocialMediaSymbol src={EMAIL_ICON}/>
                        </a>
                        <a href="https://www.linkedin.com/in/connorrosenberg/">
                            <SocialMediaSymbol src={LINKEDIN_ICON} />
                        </a>
                        <a href="https://www.instagram.com/connor_rosenberg/">
                            <SocialMediaSymbol src={INSTAGRAM_ICON}/>
                        </a>
                    </SocialMediaContainer>
                </ContentContainer>
            </FooterContainer>
        </>
    )
}

export default Footer
