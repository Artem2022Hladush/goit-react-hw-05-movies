import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { movieDeteils } from "service/apiFetch";
import { BackLink } from "components/BackLink/BackLink";
import { MoviePreview } from "components/MoviePreview/MoviePreview";
import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";

const MovieDatail = () => {
	const [movie, setMovie] = useState([ ]);
	const [isLoading, setIsLoading] = useState(false)
	const {movieId} = useParams();
	const location = useLocation();
	const backLinkHref = location.state?.from ?? '/';

	useEffect(() => {
		setIsLoading(true);
		movieDeteils(movieId)
			.then(data => {
				setMovie(data.results);
			})
			.catch(error => console.log(error))
			.finally(setIsLoading(false));
		}, [movieId]);

		if (!movie) {
		return;
		}

	return(
		<main>
			{isLoading && 'Error'}
		<BackLink to={backLinkHref}>Back</BackLink>
        <MoviePreview
         movie={movie}
        />
		<AdditionalInfo location={backLinkHref}/>
		<Suspense>
			<Outlet/>
		</Suspense>
		</main>
	)
}

export default MovieDatail;