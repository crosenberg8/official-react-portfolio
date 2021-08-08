import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
  background: #121212;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
      height: 80px;
  }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1700px;

    @media screen and (max-width: 960px) {
        padding: 0px;
        margin-bottom: 10px;
    }
`

export const NavLogo = styled(LinkR)`
    color: #7ddfff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;

    @media screen and (max-width: 960px) {
        font-size: 1.4rem;
        margin-top: 24px;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 960px) {
        display: none;
    }
`

export const NavItem = styled.li`
    
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;
    font-weight: 600;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        color: white;
        margin-top: 10px;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;

    }
`