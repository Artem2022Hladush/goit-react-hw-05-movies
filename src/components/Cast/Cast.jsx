import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { creditsMovie } from 'service/apiFetch';
import { Character, Image, List, ListItem, Name, Wrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const details = await creditsMovie(movieId);

        const fetchedDetails = details.cast.map(
          ({ id, name, character, profile_path }) => {
            return { id, name, character, profile_path };
          }
        );
        setCast(fetchedDetails);
      } catch {
        setError('Something went wrong');
      }
    };

    getDetails();
  }, [movieId]);

  return (
    <>
      {error && "Error"}
      {cast ? (
        <List>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <ListItem key={id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
                <Wrapper>
                  <Name>{name}</Name>
                  <Character>
                    <b>Character:</b> {character}
                  </Character>
                </Wrapper>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>We don`t have the cast information for this movie.</p>
      )}
    </>
  );
};

export default Cast;