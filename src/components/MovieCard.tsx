import React, { useState, useEffect } from "react";
import { getMovieById, getImage } from "../api-tmdb/api";

function MovieCard(props: any) {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    const movie_id = 550;
    getMovieById(movie_id).then((response) => {
      console.log(response.data);
      setMovieDetail(response.data);
    });
  }, []);

  return (
    <div key={props.id} className="item">
      <img src={getImage(props.poster_path)} />
      <p>{props.original_title}</p>
    </div>
  );
}

export default MovieCard;
