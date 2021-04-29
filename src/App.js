import './App.css';
import React, {useEffect, useState} from 'react'
import Nominations from './Nominations.js'
import Search from './Search.js'
import ls from 'local-storage'

function App() {
  const [term, setTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState([])

  console.log(nominees)

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
      <h1>The Shoppies</h1>
      <Nominations nominees={nominees} setNominees={setNominees}/>
      <hr style={{width:500}}/>
      {nominees.length < 5 ? null : <h2 style={{color: "red"}}>All Nominations Chosen!</h2>}
      <Search 
        setTerm={setTerm} 
        movies={movies} 
        nominees={nominees}
        setNominees={setNominees}/>
    </div>
  );
}

export default App;
