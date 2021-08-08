import styled from "styled-components";

export const ContactMeWrapper = styled.div`
    display: block;
    justify-content: center-left;
    margin: auto;
    margin-top: 10px;
    width: 65%;
    margin-bottom: 200px;
    padding: 10px;

    @media screen and (max-width: 960px) {
        width: auto;
    }
`
export const MediaWrapper = styled.div`

`

export const MediaName = styled.h1`
    color: #fff;

    @media screen and (max-width: 960px) {
        font-size: 25px;
    }
`

export const MediaLink = styled.a`
    font-size: 20px;
    color: #7ddfff;
    text-decoration: none;

    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
`

export const MediaIcon = styled.img`
    height: 40px;
    width: 40px;
    margin-left: 30px;
    margin-top: 4px;

    @media screen and (max-width: 960px) {
        height: 30px;
        width: 30px;
        margin-left: 15px;
        margin-top: 4px;
    }
`

export const MediaNameWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
`