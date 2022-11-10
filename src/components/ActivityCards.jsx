import React from 'react'

function ActivityCards() {
  return (
    <>
    <p>Based on the current weather, these activities are recommended:</p>
    <div className="activityCards">
        <div className="cards">Tennis</div>
        <div className="cards">Biking</div>
        <div className="cards">Skiing</div>
        <div className="cards">Ice Skating</div>
        <div className="cards">Soccer</div>
    </div>
    </>
  )
}

export default ActivityCards