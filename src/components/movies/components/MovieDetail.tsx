import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails, getImageLarge } from "../../../api/index";
import Comment from "./features/Comment";
import Like from "./features/Like";
import { updateMovie } from "../../utils";

import "../styles/movies.css";

interface movieDetails {
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
  comments: commentsObject[];
}

const movieDetailsInitialState = {
  poster_path: "",
  original_title: "",
  overview: "",
  popularity: 0,
  release_date: "",
  revenue: 0,
  runtime: 0,
  tagline: "",
  vote_count: 0,
  vote_average: 0,
  isLiked: false,
  comments: [],
};

interface commentsObject {
  name: string;
  comment: string;
}

function MovieDetail() {
  const { movieId } = useParams<string>();
  const [movieDetail, setMovieDetail] = useState<movieDetails>(
    movieDetailsInitialState
  );
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState<commentsObject[]>([]);

  useEffect(() => {
    const id: number = parseInt(movieId!);
    getMovieDetails(id).then((response) => {
      setMovieDetail(updateMovie(response.data));
    });
  }, []);

  const handleLike = (movie: movieDetails) => {
    movie.isLiked = !movie.isLiked;
    setLiked(movie.isLiked);
  };

  const handleComment = (values: commentsObject) => {
    movieDetail.comments.push(values);
    setComment(movieDetail.comments);
  };

  return (
    <>
      <div className="MovieDetail">
        <div className="flex-container">
          <div className="col-4">
            <img
              src={getImageLarge(movieDetail.poster_path)}
              alt={movieDetail.original_title}
            />
          </div>
          <div className="col-6">
            <div className="grid-container">
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Title:</td>
                      <td>{movieDetail.original_title}</td>
                    </tr>
                    <tr>
                      <td>Overview:</td>
                      <td>{movieDetail.overview}</td>
                    </tr>
                    <tr>
                      <td>Popularity:</td>
                      <td>{movieDetail.popularity}</td>
                    </tr>
                    <tr>
                      <td>Release_Date:</td>
                      <td>{movieDetail.release_date}</td>
                    </tr>
                    <tr>
                      <td>Revenue:</td>
                      <td>{movieDetail.revenue}</td>
                    </tr>
                    <tr>
                      <td>Run Time:</td>
                      <td>{movieDetail.runtime}</td>
                    </tr>
                    <tr>
                      <td>Tagline:</td>
                      <td>{movieDetail.tagline}</td>
                    </tr>
                    <tr>
                      <td>Vote Count:</td>
                      <td>{movieDetail.vote_count}</td>
                    </tr>
                    <tr>
                      <td>Vote Average:</td>
                      <td>{movieDetail.vote_average}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <Like
                  isLiked={liked}
                  handleLike={() => handleLike(movieDetail)}
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <Comment handleComment={handleComment} />
        <div className="grid-container">
          {comment.map((c, index) => (
            <div key={index}>
              <div className="col-4">
                <h5>Name</h5>
                <span>{c.name}</span>
              </div>
              <div className="col-6">
                <h5>Comment</h5>
                <span>{c.comment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
