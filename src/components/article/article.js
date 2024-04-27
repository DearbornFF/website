import * as React from "react"
import styled from "styled-components"

const ArticleStyled = styled.article`
  margin: 0 auto;
  padding: var(--spacingHorizontalXXL) var(--spacingHorizontalXXXL);
  width: 90%;
`;

const Article = (props) => {
    return (
    <ArticleStyled>
        {props.children}
    </ArticleStyled>
  )
}

export default Article