import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const TopRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;
const GenreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

const setSearchMoviesUrl = (search_query: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search_query}`;
};

const setGenreBaseURL = (genreID: number) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreID}`;
};

const setMovieBaseURL = (movieID: number) => {
  return `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`;
};

export const getMoviesTopRated = axios.get(TopRatedMoviesUrl);

export const getGenresList = axios.get(GenreListUrl);

export const getMovieDetails = (movieID: number) => {
  return axios.get(setMovieBaseURL(movieID));
};

export const getGenreById = (genreID: number) => {
  return axios.get(setGenreBaseURL(genreID));
};

export const getSearchMovies = (search_query: string) => {
  return axios.get(setSearchMoviesUrl(search_query));
};

export const getImage = (image_path: string) => {
  return `https://image.tmdb.org/t/p/w500/${image_path}`;
};
