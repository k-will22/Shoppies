import './App.css';
import React, {useEffect, useState} from 'react'  

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState([])

  let movieList

  if (movies.Search) {
    movieList = movies.Search.map(movie => {
      return (
        <div key={movie.imdbID}>
          <p>{movie.Title} ({movie.Year})</p>
          {nominees.length < 5 ? <button onClick={handleClick} title={movie.Title} name={movie.Year}>Nominate</button> : <br />}
        </div>
      )
    })
  }

  let nominations
  
  if (nominees.length > 0) {
    nominations = nominees.map(nom => {
    return (
      <div key={nom.Title}>
        <p>{nom.Title} ({nom.Year})</p>
        <button onClick={handleRemove} value={nom.Title}>Remove</button>
      </div>
    )
  })
}

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=78013faa`)
    .then(response => response.json())
    .then(setMovies)
  }, [search])


  function handleChange(event) {
    setSearch(event.target.value)
  }

  function handleClick(event) {
    const newNom = {
      Title: event.target.title,
      Year: event.target.name
    }

    setNominees([...nominees, newNom])
  }

  function handleRemove(event) {
    const updatedNoms = nominees.filter(nom => nom.Title !== event.target.value)

    setNominees(updatedNoms)
  }

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      {nominees.length < 5 ? <h2>Choose 5 Nominations!</h2> : null}
      <h3>Nominations</h3>
      {nominations}
      <hr style={{width:500}}/>
      {nominees.length < 5 ? null : <h2 style={{color: "red"}}>All Nominations Chosen!</h2>}
      <h3>Search</h3>
      <input onChange={handleChange}></input>
      {movies.Error ? <p>{movies.Error}</p> : <p>{movieList}</p>}
    </div>
  );
}

export default App;
