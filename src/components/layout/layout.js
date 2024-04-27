import * as React from "react"
import styled from "styled-components"

import Header from "../header"
import HuckleImage from "../../assets/graphx/huckleberries.png"
import PumpImage from "../../assets/graphx/pumpkins.png"


const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-drection: row;
`;
const Content = styled.main`
  padding: 0;
  text-align: center;
  width: 90vw;
  background: rgba(255;255;255;0.75);
  border-width: 0 1px 0 1px;
  border-color: rgba(0;0;0;0.1);
  border-style: solid;
  z-index: 1;
`;
const Huckle = styled.div`
  position: fixed;
  top: -32px;
  right: -120px;
  z-index: 0;
`;

const Pump = styled.div`
  position: fixed;
  bottom: -120px;
  left: -120px;
  z-index: 0;
`;

const Layout = (props) => {
  return (
    <Container>
        <Content>
            <Header />
              {props.children}
        </Content>
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