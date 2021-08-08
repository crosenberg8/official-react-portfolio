import React from 'react';
import {
    ContactMeWrapper,
    MediaWrapper,
    MediaLink,
    MediaName,
    MediaIcon,
    MediaNameWrapper
} from "./ContactMeElements"

import EMAIL_ICON from "../images/email.svg"
import LINKEDIN_ICON from "../images/linkedin.svg"
import INSTAGRAM_ICON from "../images/instagram.svg"

const ContactMeForm = () => {
    return (
        <>
            <>
                <ContactMeWrapper>
                    <MediaWrapper>
                        <MediaNameWrapper>
                            <MediaName>Email</MediaName>
                            <MediaIcon src={EMAIL_ICON}/>
                        </MediaNameWrapper>
                        <MediaLink href="mailto:crosenberg8@gatech.edu?subject=Portfolio Website Message">crosenberg8@gatech.edu</MediaLink>
                    </MediaWrapper>
                    <MediaWrapper>
                        <MediaNameWrapper>
                            <MediaName>linkedin</MediaName>
                            <MediaIcon src={LINKEDIN_ICON}/>
                        </MediaNameWrapper>
                        <MediaLink href="https://www.linkedin.com/in/connorrosenberg/">https://www.linkedin.com/in/connorrosenberg/</MediaLink>
                    </MediaWrapper>
                    <MediaWrapper>
                        <MediaNameWrapper>
                            <MediaName>Instagram</MediaName>
                            <MediaIcon src={INSTAGRAM_ICON}/>
                        </MediaNameWrapper>
                        <MediaLink href="https://www.instagram.com/connor_rosenberg/">connor_rosenberg</MediaLink>
                    </MediaWrapper>
                </ContactMeWrapper>
            </>
        </>
    )
}

export default ContactMeForm;
