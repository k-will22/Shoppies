import React from 'react'
// import ls from 'local-storage'

function Nominations({nominees, setNominees}) {

    function handleRemove(event) {
        const updatedNoms = nominees.filter(nom => nom.Title !== event.target.value)
    
        setNominees(updatedNoms)
        // ls.set('noms', updatedNoms)
      }

      console.log(nominees)
      let nominations = nominees.map(nom => {
        return (
          <div key={nom.Title}>
            <hr style={{width:300}}/>
            <p>{nom.Title} ({nom.Year})</p>
            <button onClick={handleRemove} value={nom.Title}>Remove</button>
            <br />
            <br />
          </div>
        )
      })

    return (
        <div>
            {nominees.length < 5 ? <h1 className="Title2" style={{color: "green"}}>Choose 5 Nominations!</h1> : 
            <h1 className="Title2 anim" style={{color: "red"}}>All Nominations Chosen!</h1>}
            <div className="border">
            <h1 className="Title2" style={{color: "slategrey"}}>Nominations</h1>
            {nominations.length === 0 ? <h3>No Nominations Chosen</h3> : null}
            {nominations.slice(0, 4)}
            </div>
        </div>
    )
}

export default Nominations