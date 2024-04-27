import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const FooterStyled = styled.footer`
display:block;
    margin: var(--spacingVerticalXXL) 0 var(--spacingVerticalXXXL);
    max-width: var(--maxWidth);
`;

const Footer = (props) => {
  return (
    <FooterStyled>
        Footer
    </FooterStyled>
  )
}

export default Footer