import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { movieDeteils } from "service/apiFetch";
import { BackLink } from "components/BackLink/BackLink";
import { MoviePreview } from "components/MoviePreview/MoviePreview";
import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";

const MovieDatail = () => {
	const [movie, setMovie] = useState([]);
	const [error, setError] = useState(null);
	const {movieId} = useParams();
	const location = useLocation();
	const backLinkHref = location.state?.from ?? '/';

	useEffect(() => {
		setError(null);
  
		const getDetail = async () => {
		  try {
			 const {
				poster_path,
				original_title,
				vote_average,
				overview,
				release_date,
				genres,
			 } = await movieDeteils(movieId);
  
			 const fetchedDetails = {
				poster_path,
				original_title,
				vote_average,
				overview,
				release_date,
				genres,
			 };
			 setMovie(fetchedDetails);
		  } catch {
			 setError('Something went wrong');
		  }
		};
		getDetail();
	 }, [movieId]);
  
	 if (!movie) {
		return;
	 }
  
	 const {
		poster_path,
		original_title,
		vote_average,
		overview,
		release_date,
		genres,
	 } = movie;

	return(
		<main>
			{error && {error}}
		<BackLink to={backLinkHref}>Back</BackLink>
		{movie !== {} && (
        <MoviePreview
          poster={poster_path}
          title={original_title}
          vote={vote_average}
          overview={overview}
          release={release_date}
          genres={genres}
        />
      )}
		<AdditionalInfo location={backLinkHref}/>
		<Suspense>
			<Outlet/>
		</Suspense>
		</main>
	)
}

export default MovieDatail;