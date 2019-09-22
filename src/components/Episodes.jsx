import React, { Component } from 'react'

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
        <div>
          {movies.map(movie => (
            this.props.match.params.episode == movie.episode_id &&
            <div key={movie.episode_id}>
              <h2>{movie.title} | Episode {this.props.match.params.episode}</h2>
              <p>{movie.opening_crawl}</p>
            </div>
          ))}
        </div>
    )
  }
}

export default Episodes
