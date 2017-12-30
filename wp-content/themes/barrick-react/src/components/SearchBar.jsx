import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="search-bar-container">
      <input className="search-bar" type="text" placeholder="Search Proxy"/>
      <i className="fa fa-search"></i>
    </div>
  )
}

export default SearchBar
