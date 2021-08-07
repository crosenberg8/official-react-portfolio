import React from 'react';
import {
    GridItemContainer,
    ContentContainer,
    GridText,
    GridImg
} from './GridItemElements';

const GridItemWLogo = ({ id, itemText, itemSVG, mediaLink }) => {
    function goToPage() {
        window.location = mediaLink;
    }

    return (
        <>
            <GridItemContainer id={id} onClick={goToPage}>
                <ContentContainer>
                    <GridText>{itemText}</GridText>
                    <GridImg src={itemSVG} />
                </ContentContainer>
            </GridItemContainer>
        </>
    )
}

export default GridItemWLogo;