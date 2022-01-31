import { Link } from "react-router-dom";

import { getImage } from "../../../api";
// import Like from "./Like";

import "../styles/movies.css";

function MovieCard(props: any) {
  const { movieDetails } = props;

  return (
    <div className="item">
      <img
        src={getImage(movieDetails.poster_path)}
        alt={movieDetails.original_title}
      />
      <Link to={`/movie-detail/${movieDetails.id}`} className="title-link">
        {movieDetails.original_title}
      </Link>
    </div>
  );
}

export default MovieCard;
