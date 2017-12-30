import React from 'react'

const AnnualMeetingItem = (props) => {
  return (
    <div className="annual-meeting-item">
      <div className="annual-meeting-item-when">
        <span>When</span>
        <p>{props.when}</p>
      </div>
      <div className="annual-meeting-item-where">
        <span>Where</span>
        <p>{props.where.placeName}</p>
        {props.where.placeAddr.split("\n").map(addr => <p key={addr.slice(0, 4)}>{addr}</p>)}
      </div>
    </div>
  )
}

export default AnnualMeetingItem
