import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails, getImage } from "../../../api";

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
};

function MovieDetail(props: any) {
  const { movieId } = useParams<string>();
  const [movieDetail, setMovieDetail] = useState<movieDetails>(
    movieDetailsInitialState
  );

  useEffect(() => {
    //@ts-ignore
    const id: number = parseInt(movieId);
    getMovieDetails(id).then(
      (response: { data: React.SetStateAction<movieDetails> }) => {
        setMovieDetail(response.data);
      }
    );
  });

  return (
    <>
      <div className="MovieDetail">
        <div className="flex-container">
          <div className="col-4">
            <img
              src={getImage(movieDetail.poster_path)}
              alt={movieDetail.original_title}
            />
          </div>
          <div className="col-6">
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
        </div>
      </div>
    </>
  );
}

export default MovieDetail;