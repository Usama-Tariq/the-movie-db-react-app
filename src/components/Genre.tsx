import React, { useState, useEffect } from "react";
import { getGenresList, getMoviesTopRated } from "../api-tmdb/api";
import GenreFiltering from "./GenreFiltering";
import "./Movies.css";

interface moviesByGenre {
  id: number;
  name: string;
  movies: [];
}

// var arr1 = [1, 2, 3, 4],
//   arr2 = [2, 4],
//   res = arr1.filter((item) => arr2.includes(item));
// console.log(res); // [2, 4]

const moviesByGenreType = [];

function Genre() {
  const [genreList, setGenreList] = useState<any[]>([]);
  //   const [genreMoviesById, setGenreMoviesById] = useState<any[]>([]);
  //   const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);

  //   useEffect(() => {
  //     getMoviesTopRated.then((response) => {
  //       setTopRatedMovies(response.data.results);
  //     });
  //   }, [topRatedMovies]);

  useEffect(() => {
    getGenresList.then((response) => {
      setGenreList(response.data.genres);
    });
  }, [genreList]);

  //   const genreById = () => {
  //     genreList.map((genre) => {
  //       useEffect(() => {
  //         //@ts-ignore
  //         const id: number = +movieId;
  //         getMovieById(id).then((response) => {
  //           setMovieDetail(response.data);
  //         });
  //       }, [movieId]);
  //     });
  //   };

  return (
    <React.Fragment>
      <ul>
        {genreList.map((genre) => (
          <GenreFiltering key={genre.id} genreDetails={genre} />
          //   <li key={genre.id}>
          //     {genre.id}: {genre.name}
          //   </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Genre;

// https://api.themoviedb.org/3/discover/movie?api_key=4a8207f5684c757b2a75932083409217&with_genres=28
