import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const urlMoviesTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;
const urlGenreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

const setMovieBaseURL = (movieID: number) => {
  return `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`;
};

export const getMoviesTopRated = axios.get(urlMoviesTopRated);

export const getGenresList = axios.get(urlGenreList);

export const getMovieById = (movieID: number) => {
  return axios.get(setMovieBaseURL(movieID));
};

export const getImage = (image_path: string) => {
  return `https://image.tmdb.org/t/p/w500/${image_path}`;
};
