import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { filters } from '../utils/utils'
let sortBy = require('sort-by')

class List extends Component {

  state = {
    jsonData: [],
    filteredData: [],
    filterOne: '-films.length',
    filterTwo: 'name'
  }

  componentDidMount() {
    this.receiveData()
  }

  receiveData = () => {
    fetch('https://raw.githubusercontent.com/leooreina/uol-front-end/master/src/data/people.json')
    .then(response => {
      response.json()
      .then(data => {
        this.setState({
          jsonData: data.results,
          filteredData: data.results
        })
      })
    })
    .catch( err => {
      console.log(`Failed retrieving information ${err}`)
    })
  }

  changeFilter = (propOnePassed, propTwoPassed) => {
    this.setState({
      filterOne: propOnePassed,
      filterTwo: propTwoPassed
    })
  }

  render() {
    const { filteredData, filterOne, filterTwo } = this.state
    return (
      <React.Fragment>

        {filters.map(button => (
          <button key={button.id} onClick={() => {this.changeFilter(button.filterOne, button.filterTwo)}}>
            {button.filterName}
          </button>
        ))}

        {filteredData.sort(sortBy(filterOne, filterTwo))
          .map((person) =>
          <div key={person.id}>
            {person.name} | { person.films.length > 1 ? `${person.films.length} Participações` : `${person.films.length} Participação` } |

            <div style={{marginTop: '20px', marginBottom: '20px'}}>
            Filmes: {person.films.map((item, index) => (
              <Link key={index} to={`/episode/${item}`} style={{textDecoration: 'none'}}>
                <div style={{marginLeft: '10px', fontSize: '14pt'}}>
                  Episódio {item}
                </div>
              </Link>
            ))}
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default List
