import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>영화 리스트</h1>
      <ul>
        {movies.map((moive) => {
          <li key={movie.id}>
            <h2>{moive.title}</h2>
            <p>{moive.description}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default MovieList;
