interface movieDetails {
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

interface movieDetail {
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

export const updatedMovies = (movies: movieDetails[]) => {
  movies.map((movie: movieDetails) => {
    movie.isLiked = false;
    movie.comments = [];
    return movie;
  });

  return movies;
};

export const updatedMovie = (movie: movieDetail) => {
  movie.isLiked = false;
  movie.comments = [];
  return movie;
};
