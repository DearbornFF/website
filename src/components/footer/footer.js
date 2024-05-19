import * as React from "react"
import styled from 'styled-components'
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const FooterStyled = styled.footer`
  display:flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: var(--spacingVerticalXL) 0 var(--spacingVerticalXL);
  max-width: var(--maxWidth);
  color: var(--colorNeutral3);
  font-size: var(--fontSize400);
  a{
    color: var(--colorNeutral4);
  }
  z-index:1;
`;

const Footer = (props) => {
  const { siteName} = useSiteMetadata();
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterStyled>
        &copy; {year} {siteName}
    </FooterStyled>
  )
}

export default Footer