import * as React from "react"
import styled from "styled-components"

const ArticleStyled = styled.article`
  padding:24px 32px;
`;

const Article = (props) => {
    return (
    <ArticleStyled>
        {props.children}
    </ArticleStyled>
  )
}

export default Article