import React from 'react'
import PropTypes from 'prop-types'

function Movie({ year, title, summary, poster, genres }) {
    return (
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