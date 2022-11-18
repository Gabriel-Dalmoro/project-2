import React from 'react';
import ActivityCards from './ActivityCards.jsx';

function Body() {
  return (
    <div className="mainBody">
      <p id="subtitle">What would you like to do today?</p>

      <ActivityCards />
    </div>
  );
}

export default Body;
