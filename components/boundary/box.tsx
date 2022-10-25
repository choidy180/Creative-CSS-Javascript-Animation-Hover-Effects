import * as React from 'react';
import styled from 'styled-components';

export default React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(function Box(
    props,
    ref,
){
    return (
        <DivBox
            {...props}
            ref={ref}
        />
    )
})

const DivBox = styled.div`
    width: 100%;
    height: 100%;
    cursor: move;
    border-radius: 8px;
    &:active{
        scale: 95%;
        box-shadow: rgba(255, 255, 255, 0.982) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
`