import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

export const Image = styled.img`
  display: block;
  margin-bottom: 5px;
  width: 300px;
  height: auto;
  object-fit: cover;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const MovieTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 10px;
  font-weight: Bold;
  @media (min-width: 768px) {
    font-size: 10px;
  }
`;

export const Score = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  width: 70px;
  height: 40px;
  font-size: 20pxpx;
  font-weight: Bold;
  color: white;
  background-color: black;
  border-radius: 5px;
`;

export const Info = styled.p`
  margin-bottom: 10px;
`;

export const InfoTitle = styled.h3`
  margin-bottom: 10pxpx;
  font-size: 10px;
  font-weight: Bold;
`;

export const GenresList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const Genre = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 40px;
  background-color: white;
  border-radius: 5px;
`;