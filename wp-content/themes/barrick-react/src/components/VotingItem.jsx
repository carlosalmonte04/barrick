import React from 'react'
import CheckMark from './CheckMark'

const VotingItem = (props) => {
  return (
    <div className={`voting-item ${props.number}`}>
      <CheckMark className="checkmark"/>
      <div className="voting-item-content">
        <h1 className="voting-item-title">{props.title}</h1>
        <p className={`voting-item-text ${props.number}`}>{props.text}</p>
        <button className="voting-item-button" value="Read More">Read More</button>
      </div>
    </div>
  )
}

export default VotingItem
