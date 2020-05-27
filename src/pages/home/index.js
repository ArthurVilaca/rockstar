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

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div>
      <SearchBar />
      <List movies={movies}/>
    </div>
  )
}

export default Home;