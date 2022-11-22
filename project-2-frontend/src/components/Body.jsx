import React from 'react';
// import ActivityCards from './ActivityCards.jsx';
// import activities from '../activities.js';
import MUIcards from './MUIcards.jsx';


function Body() {
  return (
    <div className="mainBody">
      {/* {activities.map(activityItem => (
        <ActivityCards
          name={activityItem.name}
          maxTemp={activityItem.maxTemp}
          minTemp={activityItem.minTemp}
          wind={activityItem.maxWind}
        />
      ))} */}
      <MUIcards />

    </div>
  );
}

export default Body;
