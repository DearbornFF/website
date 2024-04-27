import * as React from "react"
import styled from "styled-components"

import Header from "../header"
import HuckleImage from "../../assets/graphx/huckleberries.png"
import PumpImage from "../../assets/graphx/pumpkins.png"


const HeroStyled = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    height:60vh;
    background-color: rgba(0,30,45,1.0);
    .bg {
        opacity: 0.5;
        position: absolute;
        margin-top:0;
        width: 100%;
        height: auto;
        z-index:0;
    }
    h1{
        display: block;
        align-content: center;
        margin:0;
        padding:0;
        font-family: "Atteron";
        font-size: var(--fontSizeHero1200);
        color:azure;
        text-shadow: var(--shadow28Brand);
        z-index:1;
    }
`;

const Hero = (props) => {
  return (
    <>
    <HeroStyled>
        <h1>{props.title}</h1>
        <img src={props.background} className="bg" />
    </HeroStyled>
    </>
  )
}

export default Hero