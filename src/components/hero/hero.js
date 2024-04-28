import * as React from "react"
import styled from "styled-components"


const HeroStyled = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    height: 30vh;
    &.small{
      height: 30vh;
    }
    background-color: rgba(0,30,45,1.0);
    .bg {
        opacity: 0.5;
        position: absolute;
        margin-top: 0;
        width: auto;
        height: 100%;
        z-index:0;
        @media screen and (min-width: 821px) {
          width: 100%;
          height: auto;
          margin-top: ${(props) => props.position};
        }
    }
    h1{
        display: block;
        align-content: center;
        margin:0;
        padding:0;
        font-family: "Atteron";
        font-size: var(--fontSizeHero700);
        color:white;
        text-align:center;
        text-shadow: var(--shadow28Brand);
        z-index:1;
    }
    @media screen and (min-width: 821px) {
      height: ${(props) => props.height};
      h1{
        font-size: var(--fontSizeHero1200);
      }
      &.small{
        height: 40vh;
        h1{
          font-size: var(--fontSizeHero1000);
        }
      }
      
    }
`;

const Hero = (props) => {
  return (
    <HeroStyled position={props.position} height={props.height} className={props.className}>
        <h1>{props.title}</h1>
        <img src={props.background} className="bg" />
    </HeroStyled>
  )
}

export default Hero