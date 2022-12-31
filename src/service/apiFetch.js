import axios from "axios";

const KEY = 'ee94c28793e897f5ab3e42b6b141640f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const axiosParams = {
	params: {
		language: 'en-US',
	},
};

export async function getTrendinMovies()  {
	const trendUrl = `trending/movie/day?api_key=${KEY}`;
	const {data} = await axios.get(trendUrl);
	return data;
};

export async function searchMovie(value) {
	const searchUrl = `search/movie?api_key=${KEY}&query=${value}`;
	const { data } = await axios.get(searchUrl, axiosParams);
	return data;
};

export async function movieDeteils(movieId) {
	const deteilUrl = `movie/${movieId}?api_key=${KEY}`;
	const {data} = await axios.get(deteilUrl, axiosParams)
	return data;
};

export async function creditsMovie(movieId) {
	const creditsUrl = `movie/${movieId}/credits?api_key=${KEY}`;
	const {data} = await axios.get(creditsUrl, axiosParams);
	return data;
}

export async function reviewsMovie(movieId) {
	const reviewsUrl = `review/${movieId}?api_key=${KEY}`;
	const {data} = await axios.get(reviewsUrl, axiosParams);
	return data;
}
