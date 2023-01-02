import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { movieDeteils } from "service/apiFetch";
import { BackLink } from "components/BackLink/BackLink";
import { MoviePreview } from "components/MoviePreview/MoviePreview";

export const MovieDatail = () => {
	const [movie, setMovie] = useState([]);
	const [error, setError] = useState(null);
	const {movieId} = useParams();
	const location = useLocation();
	const backLinkHref = location.state?.from ?? '/';

	useEffect(() => {
		setError(null);

		const getDeteil = async () => {
			try{
				const dataMovie = await movieDeteils(movieId);
				setMovie(dataMovie)
			} catch {
				setError('Error')
			}
		}
		getDeteil();
	}, [movieId])

	return(
		<main>
			{error && {error}}
		<BackLink to={backLinkHref}>Back</BackLink>
		<MoviePreview movie={movie}/>
		<Suspense>
			<Outlet/>
		</Suspense>
		</main>
	)
}