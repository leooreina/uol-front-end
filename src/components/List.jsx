import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { filters } from '../utils/utils'
import '../css/list.css'
let sortBy = require('sort-by')

class List extends Component {

  state = {
    clicks: false,
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

  active = (e) => {
    const { clicks } = this.state
    if (clicks === true) {
      let elementActive = document.getElementsByClassName('active')
      elementActive[0].classList.remove('active')
      this.setState({ clicks: false})
    }
    e.target.classList.add('active')
    this.setState({ clicks: true })
  }

  render() {
    const { filteredData, filterOne, filterTwo } = this.state
    return (
      <React.Fragment>

        <div className='filters'>
          <h3>Filter Options: </h3>
          {filters.map(button => (
            <button id={button.id} className="filter-options" key={button.id} onClick={() => {
              this.changeFilter(button.filterOne, button.filterTwo)
            }} onFocus={this.active}>
              {button.filterName}
            </button>
          ))}
        </div>

        {filteredData.sort(sortBy(filterOne, filterTwo))
          .map((person) =>
          <div className="appearances" key={person.id}>
            <span className="person-name">{person.name}</span> | { person.films.length > 1 ? `${person.films.length} Appearances` : `${person.films.length} Appearance` }

            <div className="movies">
            Movies: {person.films.map((item, index) => (

                <div className="episode-list">
                  <Link key={index} to={`/episode/${item}`} style={{textDecoration: 'none', color: '#69b2ca'}}>
                    <span className="episode-item">Episode {item}</span>
                  </Link>
                </div>

            ))}
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default List
