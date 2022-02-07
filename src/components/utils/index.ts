interface moviesListInterface {
  adult: boolean;
  backdrop_path: string;
  comments: [];
  genre_ids: [];
  id: number;
  isLiked: boolean;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface movieDetailInterface {
  poster_path: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  vote_count: number;
  vote_average: number;
  isLiked: boolean;
  comments: [];
}

export interface usersInterface {
  name: string;
  email: string;
  password: string;
}

export const updateMoviesList = (movies: moviesListInterface[]) => {
  movies.map((movie: moviesListInterface) => {
    movie.isLiked = false;
    movie.comments = [];
    return movie;
  });

  return movies;
};

export const updateMovie = (movie: movieDetailInterface) => {
  movie.isLiked = false;
  movie.comments = [];
  return movie;
};

export const toggleLoginLogout = () => {
  let isLogin = JSON.parse(localStorage.getItem("isLogin")!);
  isLogin = !isLogin;
  localStorage.setItem("isLogin", JSON.stringify(isLogin));
};

export const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem("isLogin")!);
};
