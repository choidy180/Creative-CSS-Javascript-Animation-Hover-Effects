import styled from "styled-components"

export default function Container({children}:any){
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #141414;
`