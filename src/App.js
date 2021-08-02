import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    console.log("componentDidMount 작동")
    this.getMovies();
  }

  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    // const temp = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");  // line 11 과 동일
    console.log('movies = ', movies);
    // console.log('temp = ', temp); 
    this.setState({ movies, isLoading: false })
  }

  render() {
    const { isLoading , movies } = this.state;
    return <div>{isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
    ) : (
    <div className="movies">
      {movies.map(movie => {
      console.log(movie);
      return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}/>
      })}
    </div>
    )}</div>
  }
}

export default App;
