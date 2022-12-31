import { useEffect, useState } from "react"
import { getTrendinMovies } from "service/apiFetch";
import { MoviesList } from "components/MoviesList/MoviesList";

export const Home = () => {
	const [movies, setMovies] = useState([]);
	const [ isLoading, setIsLoading] = useState(false);
	console.log(movies)

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
			{movies && <MoviesList movies={movies}/>}
		</main>
	)
}