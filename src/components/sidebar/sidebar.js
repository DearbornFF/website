import * as React from "react"
import styled from "styled-components"

const SidebarStyled = styled.div`
  flex: 1 0 0;
  font-size: var(--fontSizeBase300);
  padding: var(--spacingHorizontalXXL) var(--spacingHorizontalXL) 0 var(--spacingHorizontalXXL);
  border-left: var(--strokeWidthThin) solid var(--colorNeutral1);
  p{
    margin: 0 0 var(--spacingHorizontalXXXL);
    padding:0;
  }
  strong{
    display:block;
    padding-bottom: var(--spacingHorizontalS);
    color: var(--themeMedium);
    font-size: var(--fontSizeBase600);
    font-family: var(--fontFamilyHeading);
    font-weight:400;
  }
`;

const Sidebar = (props) => {
    return (
        <SidebarStyled {...props}>
            {props.children}
        </SidebarStyled>
    )
}

export default Sidebar