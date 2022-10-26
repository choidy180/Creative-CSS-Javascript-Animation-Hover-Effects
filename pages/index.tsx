import type { NextPage } from 'next'
import styled from 'styled-components';
import Container from '../components/container'

const Home: NextPage = () => {
    return (
        <Container>
            <Wrapper>
                <label>
                    <input type={'checkbox'}/>
                    <span><i/></span>
                </label>
            </Wrapper>
        </Container>
    )
}

export default Home;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    label{
        position: relative;
        width: 160px;
        height: 80px;
        cursor: pointer;
        input{
            position: relative;
            z-index: 1;
            appearance: none;
            &:checked ~ span{
              background: #05be05;
              box-shadow: 0 15px 25px #05be0566;
              i{
                left: 84px;
                &::before{
                  background: #05be05;
                  box-shadow: 35px 0 0 #05be05;
                }
                &::after{
                  bottom: 12px;
                  height: 15px;
                  background: #05be05;
                  border-bottom-left-radius: 15px;
                  border-bottom-right-radius: 15px;
                  background: #05be05;
                }
              }
            }
        }
        span{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fe0000;
            border-radius: 80px;
            transition: 0.5s;
            box-shadow: 0 15px 25px #fe000066;
            i{
              position: absolute;
              top: 4px;
              left: 4px;
              width: 72px;
              height: 72px;
              background: #fff;
              border-radius: 50%;
              transition: 0.5s;
              &::before{
                content: '';
                position: absolute;
                top: 22px;
                left: 12px;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                transition: 0.5s;
                background: #fe0000;
                box-shadow: 35px 0 0 #fe0000;
              }
              &::after{
                content: '';
                position: absolute;
                transition: 0.5s;
                bottom: 15px;
                left: calc(50% - 15px);
                width: 30px;
                height: 6px;
                border-radius: 6px;
                background-color: #fe0000;
              }
            }
        }
    }
`
