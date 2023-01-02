import { searchMovie } from "service/apiFetch";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchForm } from "components/SearchBox/SearchBox";
import {useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Movies=()=> {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const movieName = searchParams?.get('query') ?? '';

	useEffect(() => {
   	setIsLoading(true)

   	if (movieName === '') {
      return;
   }

   const getMovie = async () => {
      try {
      	setIsLoading(true);

      	const movies = await searchMovie(movieName);

      	const fetchedMovies = movies.results;

      	setMovies(fetchedMovies);

      	if (movies.total_results === 0) {
         	alert('We did not find anything');
      }
      } catch {
      	alert('Something went wrong');
      } finally {
      	setIsLoading(false);
      }
   	};

   	getMovie();
	}, [isLoading, movieName]);

	const searchHandler = e => {
   	e.preventDefault();

   	const movieSearch = e.target.search.value;
   	if (movieSearch.trim() === '') {
      alert("No results");
   	}

   	setSearchParams({ query: movieSearch.toLowerCase() });
   	e.currentTarget.reset();
	};
	return(
		<main>
		<SearchForm onSubmit={searchHandler}/>
		{isLoading && <p>Loading...</p>}
		{movies.length > 0 && <MoviesList movies={movies}/>}
		</main>
	)
}
