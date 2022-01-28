import { Link } from "react-router-dom";
import { getImage } from "../api-tmdb/api";
import Like from "./Like";
import "./Movies.css";

function MovieCard(props: any) {
  const { id, poster_path, original_title } = props.movieDetails;

  return (
    <div className="item">
      <img src={getImage(poster_path)} alt={original_title} />
      <Link to={`/movie-detail/${id}`} className="title-link">
        {original_title}
      </Link>
    </div>
  );
}

export default MovieCard;
