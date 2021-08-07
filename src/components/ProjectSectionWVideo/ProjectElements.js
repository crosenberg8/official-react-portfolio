import styled from "styled-components";

export const ProjectsContainer = styled.div`
    margin: auto;
    margin-top: 10px;
    width: 65%;
`

export const HeaderContainer = styled.div`
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    border: 3px solid #fff;
    border-padding: 10px;
    align-items: center;

    @media screen and (max-width: 960px) {
        margin-bottom: 30px;
    }
`

export const Header = styled.h1`
    margin-left: 20px;
    margin-right: 20px;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Img = styled.img`
    @media screen and (max-width: 960px) {
        height: 75%;
        width: 75%;
    }
`

export const SummaryContainer = styled.div`
    color: #fff;
    font-size: 25px;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    @media screen and (max-width: 960px) {
        margin-top: 0px;
        font-size: 15px;
    }
`

export const Summary = styled.p`

`

export const SkillsContainer = styled.div`
`

export const SkillsUsed = styled.h2`
    font-size: 25px;
    color: #fff;

    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
`

export const SkillsList = styled.ul`
    font-size: 25px;
    color: #fff;

    @media screen and (max-width: 960px) {
        font-size: 12px;
    }
`

export const Skill = styled.li`

`

export const ProjectLinkContainer = styled.div`
    jsutify-content: center;
    text-align: center;
    margin-bottom: 60px;
    margin-top: 60px;
`

export const ProjectLink = styled.a`
    text-decoration: none;
    font-weight: 600;
    font-size: 30px;
    color: #7ddfff;
    justify-content: center;

    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
`

export const VideoContainer = styled.div`
    justify-content: center;

`

export const VideoHeader = styled.h1`
    margin-left: 20px;
    margin-right: 20px;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
`

export const Video = styled.div`
    display: flex;
    justify-content: center;
`