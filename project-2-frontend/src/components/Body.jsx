import React from 'react';
// import ActivityCards from './ActivityCards.jsx';
import activities from '../activities.js';
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
      {/* <MUIcards /> */}

      {activities.map(activityItem => (
        <MUIcards
          key={activityItem.id}
          name={activityItem.name}
          season={activityItem.season}
          maxTemp={activityItem.maxTemp}
          minTemp={activityItem.minTemp}
          wind={activityItem.maxWind}
        />
      ))}
    </div>
  );
}

export default Body;
