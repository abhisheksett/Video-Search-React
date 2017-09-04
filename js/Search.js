
import React from 'react'
import preLoad from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preLoad.shows.map((show) => {
          return (
            <div className='show-card'>
              <img src={`/public/img/posters/${show.poster}`} />
              <div>
                <h3>{show.title}</h3>
                <h4>({show.year})</h4>
                <p>{show.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
})

export default Search
