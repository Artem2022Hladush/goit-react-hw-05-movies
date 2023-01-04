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

export const MoviePreview = ({ movie }) => {
	const {
		poster_path,
		original_title,
		vote_average,
		overview,
		release_date,
		genres,
	} = movie;

	return (
		<Container>
			<Image
				src={poster_path}
				alt={original_title}
			/>
			<div>
				<MovieTitle>
					{original_title} {release_date}
				</MovieTitle>
				<InfoTitle>User score: </InfoTitle>
				<Score>{Math.floor(vote_average * 10)} %</Score>
				<InfoTitle>Overview</InfoTitle>
				{overview && <Info>{overview}</Info>}
				<InfoTitle>Genres</InfoTitle>
				{genres && <GenresList>
					{genres.map(({ id, name }) => {
						return <Genre key={id}>{name}</Genre>;
					})}
				</GenresList>}
			</div>
		</Container>
	)
}
