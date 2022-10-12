import styled from 'styled-components';
import React from 'react'

//let {className, children} = props;
// export const Link1 = (props) =>{
//     return <a className={props.className}>
//         {props.children}
//     </a>
// }

export const Link = ({ className, children, ...restProps }) => (
    <a className={className}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
  background-color: red;
  font-weight: bold;
    `
