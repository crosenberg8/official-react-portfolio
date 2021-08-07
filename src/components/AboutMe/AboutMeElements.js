import styled from "styled-components";

export const AboutMeContainer = styled.div`
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
    height: 50%;
    width: 50%;
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
    margin-bottom: 50px;

    @media screen and (max-width: 960px) {
        margin-top: 0px;
        font-size: 15px;
    }
`

export const Summary = styled.p`
`

export const SubHeader = styled.h2`
    text-align: center;
    color: #fff;
`

export const TestamentContainer = styled.div`
    margin-top: 80px;
    margin-bottom: 80px;
`

export const FriendName = styled.h2`
    color: #fff;
    font-size: 32px;
    text-decoration: underline;
`

export const FriendQuote = styled.p`
    color: #fff;
    font-size: 25px;
    font-style: italic;
    margin-bottom: 50px;
`

export const GridContainer = styled.div`
    display: grid;
    margin-left: 30px;
    grid-template-rows: 0.3fr 0.3fr 0.3fr;
    grid-template-areas: "content content content";

    @media screen and (max-width: 960px) {
        margin-left: 0px;
        grid-template-rows: 0.5fr;
        grid-template-areas: "content";
    }
`