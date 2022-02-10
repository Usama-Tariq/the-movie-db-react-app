import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const TopRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
const GenreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

const updateSearchResultsUrl = (searchQuery: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
};

const updateGenresUrl = (genreID: number) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&with_genres=${genreID}`;
};

const updateMoviesUrl = (movieID: number) => {
  return `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`;
};

export const fetchTopRatedMovies = axios.get(TopRatedMoviesUrl);

export const fetchGenresList = axios.get(GenreListUrl);

export const fetchMovieDetails = (movieID: number) => {
  return axios.get(updateMoviesUrl(movieID));
};

export const fetchGenreDetails = (genreID: number) => {
  return axios.get(updateGenresUrl(genreID));
};

export const fetchSearchResults = (searchQuery: string) => {
  return axios.get(updateSearchResultsUrl(searchQuery));
};

export const getImage = (imagePath: string) => {
  return `https://image.tmdb.org/t/p/w200/${imagePath}`;
};

export const getImageLarge = (imagePath: string) => {
  return `https://image.tmdb.org/t/p/w500/${imagePath}`;
};
