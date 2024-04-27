import * as React from "react"
import styled from "styled-components"

import Header from "../header"
import Footer from "../footer"
import HuckleImage from "../../assets/graphx/huckleberries.png"
import PumpImage from "../../assets/graphx/pumpkins.png"


const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: var(--maxWidth);
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`;
const Content = styled.main`
  position: relative;
  margin: 0 auto var(--spacingVerticalL);
  padding: 0;
  text-align: center;
  min-height: 100vh;
  min-width: var(--maxWidth);
  background: rgba(255,255,255,0.75);
  border-width: 1px;
  border-color: rgba(0,0,0,0.1);
  border-style: solid;
  z-index: 1;
`;
const Huckle = styled.div`
  position: fixed;
  top: -32px;
  right: -120px;
  opacity:0.5;
  z-index: 0;
`;

const Pump = styled.div`
  position: fixed;
  bottom: -120px;
  left: -120px;
  opacity:1;
  z-index: 0;
`;

const Layout = (props) => {
  return (
    <Container>
        <Content>
            <Header />
            {props.children}
        </Content>
        <Footer />
        <Huckle>
            <img src={HuckleImage} width="500"/>
        </Huckle>
        <Pump>
            <img src={PumpImage} width="600"/>
        </Pump>
    </Container>
  )
}

export default Layout