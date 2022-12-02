import React from 'react';
import activities from '../activities.js';
import MUIcards from './MUIcards.jsx';

function Body({ weatherData, user }) {

  const userActivities = activities.filter(el => user?.bookmarkActivityIds?.includes(el.id))
  const weatherFilteredActivities = activities.filter(el => el.minTemp <= weatherData.temperature)

  return (
    <div className="mainBody">
      { user && <h1 className="weatherRecTitle">These are your favorite activities:</h1> }
      { user && <div className="filteredCards">
          {userActivities.map(activityItem => (
            <MUIcards
              key={activityItem.id}
              name={activityItem.name}
              season={activityItem.season}
              maxTemp={activityItem.maxTemp}
              minTemp={activityItem.minTemp}
              wind={activityItem.maxWind}
              icon={activityItem.icon}
              url={activityItem.url}
            />
          ))}
      </div>}
      <h1 className="weatherRecTitle">
        Based on the weather, these activities are recommended:
      </h1>
      <div className="filteredCards">
        {weatherFilteredActivities.map(activityItem => (
          <MUIcards
            key={activityItem.id}
            name={activityItem.name}
            season={activityItem.season}
            maxTemp={activityItem.maxTemp}
            minTemp={activityItem.minTemp}
            wind={activityItem.maxWind}
            icon={activityItem.icon}
            url={activityItem.url}
          />
        ))}
      </div>
    </div>
  );
}
export default Body;
