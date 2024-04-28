import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import NameImage from "../../assets/graphx/name.png"

const HeaderStyled = styled.header`
    padding: 0;
    background:rgba(255,255,255,0.75);
    @media screen and (min-width: 821px) {
      padding: var(--spacingVerticalXL) 0 0;
    }
`;
const NavStyled = styled.header`
    padding:0 var(--spacingHorizontalM) var(--spacingVerticalXXL);
    ul{
      margin:0;
      padding:0;
      width:100%;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      list-style:none;
    }
    li{
      margin:0;
      padding:0;
      text-align: center;
      flex: 1 1 160px;
    }
    li:nth-child(1) { 
      flex: 2 2 100%;
    }
    @media screen and (min-width: 1280px) {
      padding:0 var(--spacingHorizonalXXXL) var(--spacingVerticalXXL);
      ul{
        flex-direction: row wrap;
      }
      li{
        margin: 0 var(--spacingHorizonalXXXL);
      }
      li:nth-child(1) { 
        padding:0 72px;
        flex: 0 0 auto;
      }
      li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5){
        padding-top:78px;
        flex: 0 0 auto;
      }
      li:nth-child(1) { order: 3; }
      li:nth-child(2) { order: 1; }
      li:nth-child(3) { order: 2; }
      li:nth-child(4) { order: 4; }
      li:nth-child(5) { order: 5; }
    }
    a{
      display: inline-block;
      padding: var(--spacingVerticalS) var(--spacingHorizontalS);
      color: var(--colorNeutral5);
      font-size: var(--fontSizeBase500);
      letter-spacing: 0.05rem;
      cursor: pointer;
      text-decoration:none;
      @media screen and (min-width: 821px) {
        padding: var(--spacingVerticalM) var(--spacingHorizontalM);
      }
    }
    a:hover{
        color:var(--colorNeutral5);
        text-decoration:none;
    }
    a:visited{
      color:var(--colorNeutral5);
      text-decoration:none;
    }
    a:focus-visible{
      box-shadow: 0 0 0 1px var(--colorNeutral2);
    }
    a[aria-current="page"],
    a[aria-current="page"]:hover,
    a:hover{
      // color:var(--themeMedium);
      box-shadow: none;
      span{
        box-shadow: inset 0 var(--underlineLight) 0 0 var(--themeLight);
      }
      &:focus{
        box-shadow: 0 0 0 1px var(--colorNeutral2);
        span{
          box-shadow:none;
        }
      }
    }
    .logo{
      img{width:18rem;}
      a,a[aria-current="page"]{
        span{
          box-shadow:none;
        }
        &:focus{
          box-shadow: 0 0 0 1px var(--colorNeutral2);
        }
      }
      
    }
`;

const Header = (props) => {
  return (
    <HeaderStyled>
        <NavStyled>
            <ul>
                <li className="logo"><Link to="/"><span><img src={NameImage}/></span></Link></li>
                <li><Link to="/about"><span>About the farm</span></Link></li>
                <li><Link to="/directions"><span>Contact & directions</span></Link></li>
                <li><Link to="/events"><span>Upcoming events</span></Link></li>
                <li><Link to="/education"><span>Education program</span></Link></li>
            </ul>
        </NavStyled>
    </HeaderStyled>
  )
}

export default Header