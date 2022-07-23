import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then((res) => { return res.json() })
      .then((json) => { setMovies(json.data.movies) })
  }, [])

  console.log('movies: ', movies)

  const render = movies.map((item) => {
    return (
      <div className='movie' key={item.title}>
        <img className='movieImage' src={item.large_cover_image} alt={item.title}></img>
        <a className='movieTitle' href={item.url}>
          {item.rating >= 8 && '🔥'} {item.title}
          <div className='movieRank'> &nbsp;
            (평점 : <span className={item.rating >= 8 ? 'good' : item.rating >= 6 ? 'soso' : 'bad'}>{item.rating}</span> / 10)
          </div>
        </a>
        <div className='movieYear'>{item.year}</div>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>무비 리스트</h1>
      {render}
    </div>
  )
}

export default App
