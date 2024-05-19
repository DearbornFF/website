import * as React from "react"
import styled from "styled-components"

const HeroStyled = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    padding: 0 var(--spacingHorizontalM);
    justify-content: center;
    min-height:280px;
    height: 30vh;
    &.small{
      height: 30vh;
    }
    background-color: rgba(0,30,45,1.0);
    .bg {
        opacity: 0.5;
        position: absolute;
        margin-top: ${(props) => props.position};
        width: 100%;
        height: auto;
        z-index:0;
        @media (orientation: portrait) and (max-width: 640px)  {
          margin-top:0;
          width: auto;
          height: 100%;
        }
    }
    h1{
        display: block;
        align-content: center;
        margin:0;
        padding:0;
        font-family: "Atteron";
        font-size: var(--fontSize700);
        color:white;
        text-align:center;
        text-shadow: var(--shadow28Brand);
        z-index:1;
    }
    @media screen and (min-width: 821px) {
      height: ${(props) => props.height};
      padding: 0 var(--spacingHorizontalXXL);
      h1{
        font-size: var(--fontSize1100);
      }
      &.small{
        height: 40vh;
        h1{
          font-size: var(--fontSize1000);
        }
      }
      
    }
`;

const Hero = (props) => {
  return (
    <HeroStyled position={props.position} height={props.height} className={props.className}>
        <h1>{props.title}</h1>
        <img src={props.background} className="bg" alt="" />
    </HeroStyled>
  )
}

export default Hero