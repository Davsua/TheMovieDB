import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f32ca194fb15866374a953d3b171f6d0&language=en-US`
      )
      .then((res) => setMovie(res.data));
  }, [id]);

  console.log(movie);

  return (
    <div className="movieDetails">
      <h1 className="movieDetails-title">{movie?.title}</h1>
      <div className="block">
        <img
          className="movieDetails-img"
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
        />
        <h3 className="movieDetails-overview">{movie?.overview}</h3>
      </div>
      <div className="inline">
        <div className="movieDetails-list">
          <h4 className="info">
            <b>Genre: </b> {movie?.genres[0]?.name}, {movie?.genres[1]?.name},{" "}
            {movie?.genres[2]?.name}
          </h4>
        </div>
        <div className="movieDetails-list">
          <h4 className="info">
            <b>Lenguages: </b> {movie?.spoken_languages[0]?.iso_639_1},{" "}
            {movie?.spoken_languages[1]?.iso_639_1},{" "}
            {movie?.spoken_languages[2]?.iso_639_1}
          </h4>{" "}
        </div>
      </div>
      <h3 className="movieDetails-duration">Duration : {movie?.runtime} Min</h3>
    </div>
  );
};

export default MovieDetails;
