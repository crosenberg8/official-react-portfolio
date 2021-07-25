import styled from "styled-components";

export const SeparatorContainer = styled.div`
    margin-top: 700px;
    display: flex;
    justify-content: center;

`

export const Heading = styled.h1`
    font-size: 100px;
    font-family: 'Raleway';
    font-weight: 900;
    color: #808080;

    @media screen and (max-width: 960px) {
        font-size: 25px;
        margin-left: 10px;
        margin-right: 10px;
    }

    @media screen and (max-width: 1300px) {
        font-size: 70px;
        margin-left: 10px;
        margin-right: 10px;
    }
`