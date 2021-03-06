import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        summary,
        poster,
        genres
      }
    }}>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <h3 className="movie_title">{title}</h3>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie_genre">{genre}</li>  
          ))}
        </ul>
        <h5 className="movie_year">{year}</h5>
        <p className="movie_summary">{summary}</p>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;