import styled from "styled-components";

export const GridItemContainer = styled.a`
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
        border: 5px solid #000;
        cursor: pointer;
        filter: invert();
    }
`

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;
    margin-left: 20px;
    background-color: #7ddfff;
    
`

export const GridText = styled.h1`
    color: #000;
    font-size: 14px;
    background-color: #7ddfff; 
    align-self: center;
    // stroke-color: #000;
`

export const GridImg = styled.img`
    background-color: #7ddfff;
    fill: #fff;
    height: 40%;
    width: 40%;
    margin: 15px;
    align-self: center;
`