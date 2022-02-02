import React, { useState, useEffect } from "react";
import { getGenreDetails } from "../../../api/index";
import MovieCard from "./MovieCard";
import { updateMoviesList } from "../../utils/index";
import "../styles/movies.css";

interface props {
  genreDetails: { id: number; name: string };
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

function GenreFilteredMovies(props: props) {
  const { id, name } = props.genreDetails;

  const [genreMovies, setGenreMovies] = useState<movieDetails[]>([]);

  useEffect(() => {
    getGenreDetails(id).then((response) => {
      setGenreMovies(updateMoviesList(response.data.results));
    });
  }, []);

  return (
    <>
      <h4>{name}</h4>
      <div className="flex-container">
        {genreMovies.map((movie) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div>
    </>
  );
}

export default GenreFilteredMovies;
