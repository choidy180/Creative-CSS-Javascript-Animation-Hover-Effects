import * as React from 'react';
import styled from 'styled-components';
import Boundary from '../../components/boundary';
import Container from "../../components/container";

export default function touchExample() {
    const boundaryRef = React.useRef<HTMLDivElement>(null);
    const boxRef = React.useRef<HTMLDivElement>(null);
    const [{x, y}, setPosition] = React.useState({
        x: 0,
        y: 0,
    });
    return (
        <Container>
            <Wrapper>
                <h1>Darg Boundary</h1>
                <span>with boundary bounce.</span>
                <span>x: {x} y: {y}</span>
            </Wrapper>
            <Boundary ref={boundaryRef}>

            </Boundary>
        </Container>
    )
}

const Wrapper = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1{
        font-size: 18px;
    }
    span{
        font-size: 16px;
        margin-top: 4px;
    }
`