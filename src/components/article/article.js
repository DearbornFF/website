import * as React from "react"
import styled from "styled-components"

const ArticleStyled = styled.article`
  display:flex;
  flex-flow: row wrap;
  gap: var(--spacingHorizontalXXXL);
  margin: 0 var(--spacingHorizontalXXXL) var(--spacingHorizontalXXXL);
  padding: var(--spacingHorizontalXXL) var(--spacingHorizontalXXXL) var(--spacingHorizontalXXXL);
  h2{
      font-size: var(--fontSizeHero1000);
      margin-top: var(--spacingVerticalXL);
      font-weight: 100;
      text-align:center;
  }
  p+h2{
    margin-top: var(--spacingVerticalXXXL);
  }
  h2+p{
    margin-top: var(--spacingVerticalL);
  }
  h3{
    position:relative;
    font-size: var(--fontSizeHero900);
    margin-top: var(--spacingVerticalL);
    font-weight: 400;
    text-align:center;
    color: var(--themeMedium);
  }
  h3+p{
      margin-top: var(--spacingVerticalXXXL);
  }
  h3+h4{
    margin: var(--spacingVerticalXXXL) 0 0;
  }
  h4{
    margin: var(--spacingVerticalXXL) 0 0;
    padding: var(--spacingVerticalXXL) 0 0;
    font-size: var(--fontSizeHero800);
    font-weight: 400;
    color: var(--colorNeutral4);
    text-align: left;
    border-top: var(--strokeWidthThin) solid var(--colorNeutral1);
  }
  h4+p{
      margin-top: var(--spacingVerticalXL);
      margin-bottom: 0;
  }
  p{margin-top: var(--spacingVerticalL);}
  blockquote{
    margin: var(--spacingVerticalXXXL) 0 0;
    padding:0;
    p{
      margin: 0;
      padding: 0;
      color: var(--themeMedium);
      font-size: var(--fontSizeHero700);
      text-align: center;
    }
  }
  hr{
    margin: 3rem auto;
    height: 1px;
    width:70%;
    border: 0;
    color: var(--colorNeutral1);
    background-color: var(--colorNeutral1);
  }
  ul{}
  li{}
`;

const Article = (props) => {
    return (
    <ArticleStyled>
        {props.children}
    </ArticleStyled>
  )
}

export default Article