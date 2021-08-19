import React, {useState} from "react"

function Search() {
    const [record, setRecord] = useState()

    function handleClick() {
      fetch("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=animal-control-inventory-register&q=&rows=2000&sort=dateimpounded&facet=breed&facet=sex&facet=dateimpounded&facet=approxweight&facet=source&facet=status")
        .then(response => response.json())
        .then(data => {
          setRecord(data.records)
        })
    }

    return (
      <div className='contact'>
        <h1>Search</h1>
        <p>Please click on the search category to get started.</p>
        <div>
          <button onClick={handleClick}>Animals in Custody</button>
          <button>Animals Found Deceased</button>
          <button>Pets Reported Lost</button>
        </div>
        <div>        

        </div>
      </div>
    )
}

export default Search