import { useEffect, useState } from "react"
import { getTrendinMovies } from "service/apiFetch";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useLocation } from "react-router-dom";

export const Home = () => {
	const [movies, setMovies] = useState([]);
	const [ isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsLoading(true);
			getTrendinMovies()
			.then(data =>{setMovies(data.results)})
			.catch(error => console.log(error))
			.finally(setIsLoading(false))
	}, [])

	return (
		<main>
			<h1>Trending Today</h1>
			{isLoading && <p>Loading...</p>}
			{movies.length > 0 && <MoviesList movies={movies} location={location}/>}
		</main>
	)
}