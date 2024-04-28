import * as React from "react"
import styled from 'styled-components'
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { Link } from "gatsby"

const FooterStyled = styled.footer`
  display:flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: var(--spacingVerticalXL) 0 var(--spacingVerticalXL);
  max-width: var(--maxWidth);
  color: var(--colorNeutral3);
  font-size: var(--fontSizeBase400);
  a{
    color: var(--colorNeutral3);
  }
  div.left{
    text-align:left;
    width:50%;
  }
  div.right{
    text-align:right;
    width:50%;
  }
  z-index:1;
`;

const Footer = (props) => {
  const { siteName} = useSiteMetadata();
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterStyled>
        <div className="left">&copy; {year} {siteName}</div>
        <div className="right"><Link to="https://130public.net">Designed with 🫐</Link></div>
    </FooterStyled>
  )
}

export default Footer