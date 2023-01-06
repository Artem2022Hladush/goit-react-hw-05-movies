import { useEffect, useState } from "react"
import { getTrendinMovies } from "service/apiFetch";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useLocation } from "react-router-dom";

 const Home = () => {
	const [movies, setMovies] = useState([]);
	const [ isLoading, setIsLoading] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsLoading(true)
  
		const getMovies = async () => {
		  try {
			 const data = await getTrendinMovies();
  
			 const fetchedMovies = data.results.map(({ id, original_title }) => {
				return { id, original_title };
			 });
  
			 setMovies(fetchedMovies);
		  } catch {
			 setIsLoading(false)
		  }
		};
		getMovies();
	 }, [])

	return (
		<main>
			<h1>Trending Today</h1>
			{movies && <MoviesList movies={movies} location={location}/>}
			{isLoading && <p>Loading...</p>}
		</main>
	)
}

export default Home;