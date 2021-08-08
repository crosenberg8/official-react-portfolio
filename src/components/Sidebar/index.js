import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from "./SidebarElements"

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink
                            to="about"
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-90}>About Me</SidebarLink>
                        <SidebarLink
                            to="projects"
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-90}>CS Projects</SidebarLink>
                        <SidebarLink
                            to="extracurriculars"
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-90}>Extracurriculars</SidebarLink>
                        <SidebarLink
                            to="contact"
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-90}>Contact Me</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
