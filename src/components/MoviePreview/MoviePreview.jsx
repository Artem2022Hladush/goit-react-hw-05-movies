import {
  Container,
  Genre,
  GenresList,
  Image,
  Info,
  InfoTitle,
  MovieTitle,
  Score,
} from './MoviePreview.styled';

export const MoviePreview = ({ poster, title, vote, overview, release, genres }) => {
	return(
		<Container>
      <Image
      	src={`https://image.tmdb.org/t/p/w500${poster}`}
      	alt={title}
      />
      <div>
      	<MovieTitle>
         	{title} {release}
      	</MovieTitle>
      	<InfoTitle>User score: </InfoTitle>
        <Score>{Math.floor(vote * 10)} %</Score>
      	<InfoTitle>Overview</InfoTitle>
      	{overview && <Info>{overview}</Info>}
      	<InfoTitle>Genres</InfoTitle>
      	<GenresList>
         	{genres.map(({id, name}) => {
            return <Genre key={id}>{name}</Genre>;
         	})}
      	</GenresList>
      </div>
   	</Container>
	)
}