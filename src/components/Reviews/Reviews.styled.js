import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 5px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
`;

export const CommentatorName = styled.p`
  margin-bottom: 5px;
  padding: 10px 0;
  font-size: 24px;
  font-weight: Bold;
  border-bottom: 1px solid black;
`;