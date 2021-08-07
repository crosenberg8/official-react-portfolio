import styled from "styled-components";

export const GridItemContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #7ddfff;
    height: 100px;
    width: 200px;
    padding: 15px;
    border-radius: 30px;
    margin: 50px;   

    &:hover {
        padding: 10px;
        border: 5px solid #fff;
        // cursor: pointer;
        // filter: invert();
    }
`

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #7ddfff;
`

export const GridText = styled.h1`
    color: #000;
    font-size: 20px;
    background-color: #7ddfff; 
    align-self: center;
    text-align: center;
    // stroke-color: #000;
`