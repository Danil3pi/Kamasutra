import React from 'react';
import styled from 'styled-components';

const FunctionsContainer = styled.div`
    grid-area: functions;
`

const Functions = () => {
    return (
        <FunctionsContainer>
            <ul>
                <li>Settings</li>
                <li>Hello</li>
                <li>PArt 3</li>
                <li>Head Shoulders</li>
            </ul>
        </FunctionsContainer>
    )
}

export default Functions
