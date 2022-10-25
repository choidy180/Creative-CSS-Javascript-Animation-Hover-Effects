import * as React from 'react';
import styled from 'styled-components';
import Boundary from '../components/boundary';
import Box from '../components/boundary/box';
import Container from '../components/container';
import { inrange } from '../utils';

export const isTouchScreen =
    typeof window !== 'undefined' 
    && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

export default function DragBouceExample() {
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
                <BoundaryBox
                    style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
                    onMouseDown={(e) => {
                        const initX = e.pageX;
                        const initY = e.pageY;

                        const mouseMoveHandler = (e: MouseEvent) => {
                            if(boundaryRef.current && boxRef.current){
                                const boundary = boundaryRef.current.getBoundingClientRect();
                                const box = boxRef.current.getBoundingClientRect();
                                const BOUNDARY_MARGIN = 12;

                                const deltaX = e.pageX - initX;
                                const deltaY = e.pageY - initY;

                                setPosition({
                                    x: inrange(
                                        x + deltaX,
                                        Math.floor(-boundary.width / 2 + box.width / 2 + BOUNDARY_MARGIN),
                                        Math.floor(boundary.width / 2 - box.width / 2 - BOUNDARY_MARGIN),
                                    ),
                                    y: inrange(
                                        y + deltaY,
                                        Math.floor(-boundary.height / 2 + box.height / 2 + BOUNDARY_MARGIN),
                                        Math.floor(boundary.height / 2 - box.height / 2 - BOUNDARY_MARGIN),
                                    ),
                                });
                            }
                        };
                        const mouseUpHandler = () => {
                            document.removeEventListener('mousemove', mouseMoveHandler);
                        };
                        document.addEventListener('mousemove', mouseMoveHandler);
                        document.addEventListener('mouseup', mouseUpHandler, { once: true });
                    }}
                    onTouchStart={(touchEvent)=>{
                        const touchMoveHandler = (moveEvent: TouchEvent) => {
                            setPosition({
                                x: moveEvent.touches[0].pageX - touchEvent.touches[0].pageX,
                                y: moveEvent.touches[0].pageY - touchEvent.touches[0].pageY,
                            });
                        };
                        const touchEndHandler = () => {
                            document.removeEventListener('touchmove', touchMoveHandler);
                        };
                        document.addEventListener('touchmove', touchMoveHandler);
                        document.addEventListener('touchend', touchEndHandler, { once: true });

                    }}
                >
                    <Box ref={boxRef}/>
                </BoundaryBox>
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

const BoundaryBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 8px;
    background-color: #909090;
`