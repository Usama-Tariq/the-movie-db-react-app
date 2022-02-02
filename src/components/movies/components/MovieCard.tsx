import { useState } from "react";
import { Link } from "react-router-dom";

import { getImage } from "../../../api";
import Like from "./features/Like";

import "../styles/movies.css";

interface props {
  movieDetails: {
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
  };
}

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

function MovieCard(props: props) {
  const { movieDetails } = props;
  const [liked, setLiked] = useState(false);

  const handleLike = (movie: movieDetails) => {
    movie.isLiked = !movie.isLiked;
    setLiked(movie.isLiked);
  };

  return (
    <>
      <div className="grid-container">
        <div>
          <img
            src={getImage(movieDetails.poster_path)}
            alt={movieDetails.original_title}
          />
          <Link to={`/movie-detail/${movieDetails.id}`} className="title-link">
            {movieDetails.original_title}
          </Link>
        </div>
        <div className="container">
          <Like isLiked={liked} handleLike={() => handleLike(movieDetails)} />
        </div>
      </div>
    </>
  );
}

export default MovieCard;
