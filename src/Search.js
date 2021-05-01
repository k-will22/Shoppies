import React from 'react'
import ls from 'local-storage'
 
function Search({term, setTerm, movies, nominees, setNominees}) {

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
        movieList = movies.Search.slice(0, 3).map(movie => {
          return (
            <div key={movie.imdbID}>
                 <hr style={{width:300}}/> 
              <p>{movie.Title} ({movie.Year})</p>
              {nominees.find(mov => mov.Title === movie.Title) || nominees.length > 4 ? <button style={{color: "grey"}}>Nominate</button> :
              <button onClick={handleClick} title={movie.Title} name={movie.Year}>Nominate</button>}
              <br />
              <br />
             
            </div>
          )
        })
    }

    return (
    <div>
    <h1 className="Title2" style={{color: "green"}}>Search Movies by Title</h1>
    <input onChange={handleChange}></input>
    <br />
    <br />
    {term.length > 0 ? <h2>Results for "{term}"</h2> : null}
    {movies.Error ? null : <p>{movieList}</p>}
    </div>
    )
}

export default Search