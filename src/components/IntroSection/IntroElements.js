import styled from "styled-components";

export const IntroContainer = styled.div`
    height: 100%;
    width: 100%;
`

export const ImgWrapper = styled.div`
    margin: 50px;
    display: flex;
    justify-content: center;
`

export const Img = styled.img`
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 0px;
    margin-top: -10px;
    height: 250px;
    width: 250px;

    @media screen and (max-width: 960px) {
        height: 200px;
        width: 200px;
    }
`

export const AboutMeWrapper = styled.div`
    margin-top: -10px;
    display: flex;
    justify-content: center;
    text-align: center;
`

export const AboutMe = styled.p`
    font-size: 25px;
    max-width: 960px;
    text-align: left;
    color: #fff;

    @media screen and (max-width: 960px) {
        margin-top: -10px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 15px;
    }
`

export const ResumeContainer = styled.div`
    margin: 15px;
    text-align: center;

    @media screen and (max-width: 960px) {
        margin-bottom: -100px;
        font-size: 15px;
    }
`

export const ResumeLink = styled.a`
    font-weight: 600;
    font-size: 20px;
    vertical-align: center;
    color: #7ddfff;
    text-decoration: none;
`

export const Heading = styled.h1`
    margin-top: 160px;
    text-align: center;
    color: #fff;
    margin-bottom: 700px;

    @media screen and (max-width: 960px) {
        margin-left: 10px;
        margin-right: 10px;
        font-size: 15px;
        margin-bottom: 700px;
    }
`