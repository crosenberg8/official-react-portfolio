import React from 'react';
import {
    GridItemContainer,
    ContentContainer,
    GridText
} from './GridItemElements';

const GridItemWOLogo = ({ id, itemText }) => {
    return (
        <>
            <GridItemContainer id={id}>
                <ContentContainer>
                    <GridText>{itemText}</GridText>
                </ContentContainer>
            </GridItemContainer>
        </>
    )
}

export default GridItemWOLogo;