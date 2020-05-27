import React, { useState, useEffect } from 'react';

import List from '../../components/list'
import SearchBar from '../../components/searchbar'
import Service from '../../service'

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    Service.get('https://api.themoviedb.org/3/discover/movie?')
      .then((response) => {
        setMovies(response.data.results)
      })
  }

  const fetchSearch = async (search) => {
    Service.get(`https://api.themoviedb.org/3/search/movie?query=${search}`)
      .then((response) => {
        setMovies(response.data.results)
      })
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  const updateSeach = (search) => {
    if (search !== '') return fetchSearch(search)
    fetchMovies()
  }

  const ratingRange = (rating) => {
    switch(rating) {
      case 1:
        return [ 0, 2 ]
      case 2:
        return [ 2, 4 ]
      case 3:
        return [ 4, 6 ]
      case 4:
        return [ 6, 8 ]
      case 5:
        return [ 8, 10 ]
      default:
        return [ 8, 10 ]
    }

  }

  const updateRating = (rating) => {
    if (!rating) return fetchMovies()
    const [min, max] = ratingRange(rating)
    setMovies(
      movies.filter((movie) => {
        return movie.vote_average >= min && movie.vote_average < max
      })
    )
  }

  return (
    <div>
      <SearchBar searchUpdated={updateSeach} ratingUpdated={updateRating} />
      <List movies={movies}/>
    </div>
  )
}

export default Home;