import React from 'react'
import { SeparatorContainer, Heading } from './SeparatorElements'

const Separator = ({headerText, id}) => {
    return (
        <>
            <SeparatorContainer id={id}>
                <Heading className="header-text">{headerText}</Heading>
            </SeparatorContainer>
        </>
    )
}

export default Separator
