import React from 'react'
import ls from 'local-storage'

function Nominations({nominees, setNominees}) {

    function handleRemove(event) {
        const updatedNoms = nominees.filter(nom => nom.Title !== event.target.value)
    
        setNominees(updatedNoms)
        ls.set('noms', updatedNoms)
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
            {nominees.length < 5 ? <h2 className="Title2" style={{color: "green"}}>Choose 5 Nominations!</h2> : 
            <h2 className="Title2" style={{color: "red"}}>All Nominations Chosen!</h2>}
            {nominations}
        </div>
    )
}

export default Nominations