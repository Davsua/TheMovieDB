import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Moviecard = ({ movie, movies }) => {
  return (
    <>
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
          <Link
            to={`/details/${movie.id}`}
            style={{
              color: "white",
              border: "solid 1px white",
              width: "100px",
              alignSelf: "center",
              textDecoration: "none",
              boxShadow: "2px 2px 2px gray",
              padding: "2px 3px 2px 3px",
            }}
          >
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Moviecard;
