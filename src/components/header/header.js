import * as React from "react"
import styled from 'styled-components'

import NameImage from "../../assets/graphx/name.png"

const HeaderStyled = styled.header`
    padding:24px 0 0;
    background:rgba(255,255,255,0.75);
`;
const NavStyled = styled.header`
    padding:0 32px 32px;
    ul{
      margin:0;
      padding:0;
      display: flex;
      justify-content: center;
      flex-direction: row wrap;
      list-style:none;
    }
    li{
      margin: 0 16px;
      padding:0;
      display: flex;
      text-align: center;
    }
    li:nth-child(1) { order: 3; }
    li:nth-child(2) { order: 1; }
    li:nth-child(3) { order: 2; }
    li:nth-child(4) { order: 4; }
    li:nth-child(5) { order: 5; }
    li:nth-child(1) { 
      padding:0 48px;
      flex: 0 0 auto;
    }
    li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5){
      padding-top:76px;
      flex: 0 0 auto;
    }
    a{
      font-size:1.5rem;
      cursor: pointer;
    }
    a:hover{
        color:var(--color-fall);
    }
    .logo{
      width:20vw;
    }
`;

const Header = (props) => {
  return (
    <HeaderStyled>
        <NavStyled>
            <ul>
                <li><a><img class="logo" src={NameImage}/></a></li>
                <li><a>About the farm</a></li>
                <li><a>Contact & directions</a></li>
                <li><a>Upcoming events</a></li>
                <li><a>Education program</a></li>
            </ul>
        </NavStyled>
    </HeaderStyled>
  )
}

export default Header