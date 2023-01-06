import { useEffect, useState } from "react"
import { getTrendinMovies } from "service/apiFetch";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useLocation } from "react-router-dom";

 const Home = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const location = useLocation();

	useEffect(() => {
		setError(null)
  
		const getMovies = async () => {
		  try {
			 const data = await getTrendinMovies();
  
			 const fetchedMovies = data.results.map(({ id, original_title }) => {
				return { id, original_title };
			 });
  
			 setMovies(fetchedMovies);
		  } catch {
			 setError('Something went wrong')
		  }
		};
		getMovies();
	 }, [])

	return (
		<main>
			<h1>Trending Today</h1>
			{error && 'Error'}
			{movies.length > 0 && <MoviesList movies={movies} location={location}/>}
		</main>
	)
}

export default Home;