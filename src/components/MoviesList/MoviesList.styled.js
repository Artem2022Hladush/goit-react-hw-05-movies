import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink=styled(NavLink)`
padding: 5px 10px;
border-radius: 5px;
background-color: white;
text-decoration: none;
`;

export const List=styled.ul`
list-style: none;
display: flex;
flex-direction: column;
`