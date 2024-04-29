import * as React from "react"
import styled from "styled-components"

const ColumnStyled = styled.div`
    flex: ${props => props.flex}
`;

const Column = (props) => {
    return (
        <ColumnStyled {...props}>
            {props.children}
        </ColumnStyled>
    )
}

export default Column