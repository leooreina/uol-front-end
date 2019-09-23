import React, { Component } from 'react'
import '../css/episodes.css'

class Episodes extends Component {
  state = {
    movies: [],
    moviesFiltered: []
  }

  componentDidMount() {
    this.receiveMoviesInfo()
  }

  receiveMoviesInfo = () => {
    fetch('https://raw.githubusercontent.com/leooreina/uol-front-end/master/src/data/films.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          movies: data.results
        })
      })
    })
    .catch(err => {
      console.log(`Failed retrieving information ${err}`)
    })
  }

  render() {
    const { movies } = this.state
    return (
        <React.Fragment>
          <div class="fade"></div>
          <div className="episodes">
            {movies.map(movie => (
              this.props.match.params.episode == movie.episode_id &&
              <div className="crawl" key={movie.episode_id}>
                <h2 className="movie-title">{movie.title} | Episode {this.props.match.params.episode}</h2>
                <p className="movie-opening">{movie.opening_crawl}</p>
                <p className="movie-opening">Directed By: {movie.director}</p>
                <p className="movie-opening">Produced By: {movie.producer}</p>
              </div>
            ))}
          </div>
        </React.Fragment>
    )
  }
}

export default Episodes
