import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  list-style: none;
`;

export const ListItem = styled.li`
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled.div`
  padding: 5px;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: Bold;
  color: white;
`;

export const Character = styled.p`
  color: black;
`;