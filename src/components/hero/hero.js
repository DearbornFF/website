import * as React from "react"
import styled from "styled-components"


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
        font-size: var(--fontSizeHero800);
        color:white;
        text-shadow: var(--shadow28Brand);
        z-index:1;
        @media screen and (min-width: 821px) {
          font-size: var(--fontSizeHero1200);
        }
    }
`;

const Hero = (props) => {
  return (
    <HeroStyled>
        <h1>{props.title}</h1>
        <img src={props.background} style={{marginTop:props.position}} className="bg" />
    </HeroStyled>
  )
}

export default Hero