import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 150px;
    padding: 40px;

    @media screen and (max-width: 960px) {
        padding: 10px;
    }
`

export const ContentContainer = styled.div`
    margin: auto;
    padding: 10px;;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 960px) {
        padding: 0px;
        grid-template-columns: 1fr;
    }
`

export const ContactContainer = styled.div`
    justify-self: start;

    @media screen and (max-width: 960px) {
        margin-top: 20px;
        justify-self: center;
        margin-bottom: 20px;
    }
`

export const ContactHeader = styled.h1`
    color: #7ddfff;
    font-size: 15px;

    @media screen and (max-width: 960px) {
        text-align: center;
        font-size: 15px;
    }
`

export const ContactInfo = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 15px;
`

export const CopyrightContainer = styled.div`
    justify-self: center;
`

export const CopyrightSymbol = styled.p`
    color: #fff;
`

export const SocialMediaContainer = styled.div`
    justify-self: end;

    @media screen and (max-width: 960px) {
        margin-top: 15px;
        justify-self: center;
        margin-bottom: 20px;
    }
`

export const SocialMediaSymbol = styled.img`
    height: 30px;
    width: 30px;
    margin: 20px;

    @media screen and (max-width: 960px) {
        height: 35px;
        width: 35px;
        margin: 15px;
    }
`