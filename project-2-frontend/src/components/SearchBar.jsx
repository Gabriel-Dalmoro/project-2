import React from 'react';

function SearchBar() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Search Activity............</button>
      <div className="dropdown-content">
        <a href="">BasketBall</a>
        <a href="#">Volleyball</a>
        <a href="#">Cycling</a>
        <a href="#">Hiking</a>
        <a href="#">Ski/Snowboard</a>
        <a href="#">Golf</a>
        <a href="#">Bball</a>
      </div>
    </div>
  );
}

export default SearchBar;
