import React from 'react'

function Nominations({nominees, setNominees}) {

    function handleRemove(event) {
        const updatedNoms = nominees.filter(nom => nom.Title !== event.target.value)
    
        setNominees(updatedNoms)
      }

      let  nominations = nominees.map(nom => {
        return (
          <div key={nom.Title}>
            <p>{nom.Title} ({nom.Year})</p>
            <button onClick={handleRemove} value={nom.Title}>Remove</button>
          </div>
        )
      })

    return (
        <div>
            {nominees.length < 5 ? <h2>Choose 5 Nominations!</h2> : null}
            <h3>Nominations</h3>
            {nominations}
        </div>
    )
}

export default Nominations