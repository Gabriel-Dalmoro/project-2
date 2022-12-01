import React, { useEffect, useState } from 'react';
import activities from '../activities.js';
import MUIcards from './MUIcards.jsx';

function Body({ weatherData, user }) {
  // console.log(weatherData);
  // console.log(activities);

  const [filteredActivities, setFilterActivities] = useState(
    activities.filter(el => el.minTemp <= weatherData.temp)
  );
  console.log(filteredActivities);
  useEffect(() => {
    if (user) {
      console.log(user);
      setFilterActivities(
        activities.filter(
          a => a.minTemp <= weatherData.temp || user.bookmarks.includes(a.id)
        )
      );
    } else {
      setFilterActivities(
        activities.filter(el => el.minTemp <= weatherData.temperature)
      );
    }
  }, [user, weatherData]);

  console.log(weatherData);
  return (
    <div className="mainBody">
      <h1 className="weatherRecTitle">
        Based on the weather, these activities are recommended:
      </h1>
      <div className="filteredCards">
        {filteredActivities.map(activityItem => (
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
