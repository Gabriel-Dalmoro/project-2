import React from 'react'
import activities from '../activities.js'

function SearchBar() {
  return (
    <div className="dropdown">
  <button className="dropbtn">Search Activity...</button>
  <div class="dropdown-content">
  {activities.map(props => (
    <div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
    </div>))}
  </div>
</div>
  )
}

export default SearchBar;
