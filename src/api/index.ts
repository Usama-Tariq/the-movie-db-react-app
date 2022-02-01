import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const TopRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;
const GenreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

const updateSearchResultsUrl = (searchQuery: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}`;
};

const updateGenresUrl = (genreID: number) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreID}`;
};

const updateMoviesUrl = (movieID: number) => {
  return `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`;
};

export const getTopRatedMovies = axios.get(TopRatedMoviesUrl);

export const getGenresList = axios.get(GenreListUrl);

export const getMovieDetails = (movieID: number) => {
  return axios.get(updateMoviesUrl(movieID));
};

export const getGenreDetails = (genreID: number) => {
  return axios.get(updateGenresUrl(genreID));
};

export const getSearchResults = (searchQuery: string) => {
  return axios.get(updateSearchResultsUrl(searchQuery));
};

export const getImage = (image_path: string) => {
  return `https://image.tmdb.org/t/p/w500/${image_path}`;
};
