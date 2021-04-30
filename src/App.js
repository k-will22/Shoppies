import './App.css';
import React, {useEffect, useState} from 'react'
import Nominations from './Nominations.js'
import Search from './Search.js'
import ls from 'local-storage'

function App() {
  const [term, setTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState([])

  useEffect(() => {
    let savedNoms = ls.get('noms')
    setNominees(savedNoms)
  }, [])

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${term}&apikey=78013faa`)
    .then(response => response.json())
    .then(setMovies)
  }, [term])

  return (
    <div className="App">
      <h1 className="Title">The Shoppies</h1>
      <div className="grid-container">
      <div className="One">
      <Nominations nominees={nominees} setNominees={setNominees}/>
      </div>
      <div className="Two">
      <Search 
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
