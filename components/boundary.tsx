import * as React from 'react';
import styled from 'styled-components';

export default React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(function Boundary(
    props,
    ref,
){
    return (
        <Wrapper
            {...props}
            ref={ref}
        />
    )
})

const Wrapper = styled.div`
    position: relative;
    height: 500px;
    overflow: hidden;
    background-color: #404040;
    display: grid;
    justify-content: center;
    align-items: center;
`