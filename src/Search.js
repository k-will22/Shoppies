import React from 'react'
import ls from 'local-storage'
 
function Search({setTerm, movies, nominees, setNominees}) {

    function handleChange(event) {
        setTerm(event.target.value)
    }

    function handleClick(event) {
        const newNom = {
          Title: event.target.title,
          Year: event.target.name
        }
    
        setNominees([...nominees, newNom])
        ls.set('noms', [...nominees, newNom])
    }

    let movieList 
    if (movies.Search) {
        movieList = movies.Search.map(movie => {
          return (
            <div key={movie.imdbID}>
              <p>{movie.Title} ({movie.Year})</p>
              {nominees.find(mov => mov.Title === movie.Title) || nominees.length > 4 ? <button style={{color: "grey"}}>Nominate</button> :
              <button onClick={handleClick} title={movie.Title} name={movie.Year}>Nominate</button>}
            </div>
          )
        })
    }

    return (
    <div>
    <h3>Search</h3>
    <input onChange={handleChange}></input>
    {movies.Error ? <p>{movies.Error}</p> : <p>{movieList}</p>}
    </div>
    )
}

export default Search