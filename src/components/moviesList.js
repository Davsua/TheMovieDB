import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
//import PopularMovies from "./moviesInfo";

const MovieList = ({ search }) => {
  const [popularMovie, setPopularMovie] = useState([]);
  //const [starFilter, setStarFilter] = useState(3);

  // get movies in order (popularity)
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f32ca194fb15866374a953d3b171f6d0&language=es-ES&sort_by=popularity.desc"
      )
      .then((res) => {
        setPopularMovie(res.data?.results);
        //console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {search === false ? (
        <>
          <h1 className="title">
            <b>Popular movies</b>
          </h1>
          <div className="movieCard-list">
            {popularMovie?.map((movie) => (
              <div className="movieCard" key={movie.id}>
                <img
                  className="movieCard-img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movieCard-content">
                  <h3 className="movieCard-title">{movie.title}</h3>
                  <p className="movieCard-date">
                    <b>Release date: </b>
                    {movie.release_date}
                  </p>
                  <div className="movieCard-star">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      edit={false}
                      value={(movie.vote_average * 5) / 10}
                      isHalf={true}
                    />
                  </div>

                  <div className="movieCard-link">
                    <Link
                      to={`/details/${movie.id}`}
                      style={{
                        color: "white",
                        border: "solid 1px white",
                        width: "80px",
                        alignSelf: "center",
                        textDecoration: "none",
                        boxShadow: "2px 2px 2px gray",
                      }}
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieList;
