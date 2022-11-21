import React from 'react';

function ActivityCards(props) {
  return (
    <div className="activity">
      <h1>{props.name}</h1>
      <p>Max Temperature: {props.maxTemp}</p>
      <p>Min Temperature: {props.minTemp}</p>
      <p>Highest Wind speed: {props.wind}</p>
      <p>🌶️</p>
      <p>🚀</p>
      <p>😁</p>
    </div>

    // <>
    // <p>Based on the current weather, these activities are recommended:</p>
    // <div className="activityCards">
    // <div className="cards">
    //     <div className="cardContent">Tennis</div>
    // </div>
    // <div className="cards">
    //     <div className="cardContent">Soccer</div>
    // </div>
    // <div className="cards">
    //         <div className="cardContent">Swimming
    //         </div>
    //     </div><div className="cards">
    //         <div className="cardContent">Ice Skating
    //         </div>
    //     </div><div className="cards">
    //         <div className="cardContent">Basketball
    //         </div>
    //     </div><div className="cards">
    //         <div className="cardContent">X-Country Ski
    //         </div>
    //     </div><div className="cards">
    //         <div className="cardContent">Tennis
    //         </div>
    //     </div><div className="cards">
    //         <div className="cardContent">Basketball
    //         </div>
    //     </div><div className="cards">
    //         <div className="cardContent">Soccer
    //         </div>
    //     </div><div className="cards">
    //         <div className="cardContent">Tennis
    //         </div>
    //     </div><div className="cards">
    //         <div className="cardContent">Tennis
    //         </div>
    //     </div>
    //     </div>
    // </>
  );
}

export default ActivityCards;
