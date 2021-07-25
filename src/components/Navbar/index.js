import React from 'react'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'



const Navbar = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Connor Rosenberg</NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-90}>
                                About Me
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-90}>
                                CS Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="extracurriculars"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-90}>
                                Extracurriculars
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-90}>
                                Contact Me
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
