import * as React from "react"
import styled from "styled-components"

const ArticleStyled = styled.article`
  display:flex;
  flex-flow: row wrap;
  gap: var(--spacingHorizontalXXXL);
  margin: 0 var(--spacingHorizontalL) var(--spacingHorizontalXXXL);
  padding: var(--spacingHorizontalXXL) 0 var(--spacingHorizontalXXXL);
  @media screen and (min-width: 821px) {
    margin: 0 var(--spacingHorizontalXXXL) var(--spacingHorizontalXXXL);
    padding: var(--spacingHorizontalXXL) var(--spacingHorizontalXXXL) var(--spacingHorizontalXXXL);
  }
  h2{
      font-size: var(--fontSize700);
      margin-top: var(--spacingVerticalXL);
      font-weight: 100;
      text-align:center;
      @media screen and (min-width: 821px) {
        font-size: var(--fontSize900);
      }
  }
  p+h2{
    margin-top: var(--spacingVerticalXXXL);
  }
  h2+p{
    margin-top: var(--spacingVerticalL);
  }
  h3{
    position:relative;
    font-size: var(--fontSize600);
    margin-top: var(--spacingVerticalL);
    font-weight: 400;
    text-align:center;
    color: var(--themeMedium);
    @media screen and (min-width: 821px) {
      font-size: var(--fontSize800);
    }
  }
  p+h3{
    margin-top: var(--spacingVerticalXXXL);
  }
  h3+p{
      margin-top: var(--spacingVerticalXXXL);
  }
  h3+h4{
    margin: var(--spacingVerticalXXXL) 0 0;
  }
  h4{
    margin: 0 0 0;
    padding: 0 0 0;
    font-size: var(--fontSize600);
    font-weight: 400;
    color: var(--colorNeutral4);
    text-align: left;
    @media screen and (min-width: 821px) {
      font-size: var(--fontSize700);
    }
  }
  h4+p{
      margin-top: var(--spacingVerticalXL);
      margin-bottom: 0;
  }
  p{
    margin-top: var(--spacingVerticalL);
    font-size: var(--fontSize400);
    @media screen and (min-width: 821px) {
      font-size: var(--fontSize500);
    }
  }
  blockquote{
    margin: var(--spacingVerticalXXL) 0 0;
    padding:0;
    p{
      margin: 0;
      padding: 0;
      color: var(--themeMedium);
      font-size: var(--fontSize400);
      text-align: center;
    }
    @media screen and (min-width: 821px) {
      margin: var(--spacingVerticalXXXL) 0 0;
      p{
        font-size: var(--fontSize600);
      }
    }
  }
  hr{
    margin: 2rem auto 1.5rem;
    height: 1px;
    border: 0;
    color: var(--colorNeutral1);
    background-color: var(--colorNeutral1);
  }
  ul{
    padding-left:var(--spacingVerticalM);
  }
  li{

  }
  a,a:visited{
    box-shadow: inset 0 var(--underlineHeavy) 0 0 var(--themeLight);
  }
  a:hover{
    box-shadow: inset 0 var(--underlineHeavy) 0 0 var(--themeDark);
  }
`;

const Article = (props) => {
    return (
    <ArticleStyled>
        {props.children}
    </ArticleStyled>
  )
}

export default Article