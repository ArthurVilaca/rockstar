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

  return (
    <div>
      <SearchBar searchUpdated={updateSeach} />
      <List movies={movies}/>
    </div>
  )
}

export default Home;