import React from 'react'

const Search = (input, handleInput, arr) => {
  return (
    <div className="searchBar">
      <div className="searcPanel">
        <input
          type="text"
          id="header-search"
          placeholder="Enter animal name "
          value={input}
          onChange={handleInput}
        ></input>
      </div>

      <div className="searcElemnts">
        <ul>
          {arr.map((el) => {
            return <li>{el.charAt(0).toUpperCase() + el.slice(1)}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Search
