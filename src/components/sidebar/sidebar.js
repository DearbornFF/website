import * as React from "react"
import styled from "styled-components"

const SidebarStyled = styled.div`
  flex: 1 0 0;
  font-size: var(--fontSize400);
  padding: var(--spacingHorizontalXXL) 0 0 0;
  border-left: 0;
  @media screen and (min-width: 821px) {
    font-size: var(--fontSize300);
    padding: var(--spacingHorizontalXXL) var(--spacingHorizontalXL) 0 var(--spacingHorizontalXXL);
    border-left: var(--strokeWidthThin) solid var(--colorNeutral1);
  }
  p{
    margin: 0 0 var(--spacingHorizontalXXXL);
    padding:0;
  }
  strong{
    display:block;
    padding-bottom: var(--spacingHorizontalS);
    color: var(--themeMedium);
    font-size: var(--fontSize500);
    font-family: var(--fontFamilyHeading);
    font-weight:400;
    @media screen and (min-width: 821px) {
      font-size: var(--fontSize600);
    }
  }
`;
export const SidebarSection = styled.div`
  margin:0 0 var(--spacingHorizontalXL);
  h5{
    margin:0;
    padding:0 0 var(--spacingHorizontalXS);
    color:var(--themeMedium);
    font-size:var(--fontSize600);
    font-weight:400;
    font-family:var(--fontFamilyHeading);
  }
  ul{
    margin:0 0 0 var(--spacingVerticalXL);
    padding:0;
  }
  p,li{
    margin:var(--spacingVerticalXS) 0 0;
    padding:0;
    font-size:var(--fontSize400);
    b,strong{
      font-weight:800;
    }
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