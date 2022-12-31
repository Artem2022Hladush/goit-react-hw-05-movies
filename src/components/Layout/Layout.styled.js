import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const Header = styled.header`
display: flex;
`
export const StyledLink = styled(NavLink)`
padding: 5px 10px;
border-radius: 5px;
background-color: white;
text-decoration: none;
`
export const Container = styled.div`
max-width: 1000px;
margin: 0 auto;
padding: 0 16px;
`;