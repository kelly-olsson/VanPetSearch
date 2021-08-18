import React from "react"

// function handleClick() {
//     fetch("")
// }

function Search() {
    return (
      <div className='contact'>
        <h1>Search</h1>
        <p>Please click on the search category to get started.</p>
        <div>
          <button onClick={handleClick}>Animals in Custody</button>
          <button>Animals Found Deceased</button>
          <button>Pets Reported Lost</button>
        </div>
      </div>
    )
}

export default Search