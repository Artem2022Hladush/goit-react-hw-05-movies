import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: Bold;
`;

export const List = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  padding: 5px;
  min-width: 100px;
  height: 40px;
  text-decoration: none;
  text-align: center;
  color: inherit;
  font-size: 24px;
  font-weight: Bold;
  background-color: white;
  border-radius: 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: white;
    background-color: black;
  }
  &.active {
    color: white;
    background-color: black;
  }
`;