import React, { useState } from "react";
import axios from "axios";
import Moviecard from "./movieCard";
import ReactStars from "react-rating-stars-component";
import MovieList from "./moviesList";

const SearchBox = ({ setSearch }) => {
  const [query, setQuery] = useState(""); // query is the search input (Almacenamos el valor del input en el state)
  const [movies, setMovies] = useState([]); // movies is the array of movies (Almacenamos el array de peliculas que coinciden con la busqeuda en el state)
  const [starFilter, setStarFilter] = useState(3);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f32ca194fb15866374a953d3b171f6d0&language=es-ES&query=${query}&page=1&include_adult=false`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const starChange = (value) => {
    setStarFilter(value);
  };

  return (
    <div className="search_box">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Movie name..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

        <button onClick={handleChange}>Search</button>
        <div className="star">
          <ReactStars
            count={5}
            value={3}
            size={24}
            activeColor="#ffd700"
            edit={true}
            isHalf={true}
            onChange={starChange}
          />
        </div>
      </form>
      {movies.length > 1 ? (
        <p className="searching">Busquedas relacionadas con: {query}</p>
      ) : null}
      <div className="movieCard-list">
        {movies
          .filter((movie) => {
            if (
              movie.vote_average >= starFilter * 2 - 2 &&
              movie.vote_average <= starFilter * 2
            ) {
              return movie;
            }
          })
          .map((movie) => (
            <>
              <Moviecard movie={movie} key={movie.id} movies={movies} />
            </>
          ))}
      </div>
      <MovieList starFilter={starFilter} setStarFilter={setStarFilter} />
    </div>
  );
};

export default SearchBox;
