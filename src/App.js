import './App.css';
import React, {useEffect, useState} from 'react'
import Nominations from './Nominations.js'
import Search from './Search.js'

function App() {
  const [term, setTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState([])
  const MY_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${term}&apikey=${MY_KEY}`)
    .then(response => response.json())
    .then(setMovies)
  }, [term, MY_KEY])

  return (
    <div className="App">
      <h1 className="Title">The Shoppies</h1>
      <div className="grid-container">
      <div className="One"> 
      <Nominations nominees={nominees} setNominees={setNominees}/>
      </div>
      <div className="Two">
      <Search 
        term={term}
        setTerm={setTerm} 
        movies={movies} 
        nominees={nominees}
        setNominees={setNominees}/>
        </div>
        </div>
    </div>
  );
}

export default App;
