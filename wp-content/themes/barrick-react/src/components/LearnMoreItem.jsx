import React from 'react'
import PlayMediaButton from './PlayMediaButton'
import { Link } from 'react-router-dom'


const LearnMoreItem = (props) => {
  return (
    <div className={`learn-more-item ${props.main ? 'main' : ''}`} style={{backgroundImage: `url('${props.bgUrl}')`, flex: props.flex}}>
      <div className="learn-more-item-content-wrapper">
        <PlayMediaButton size={60} />
        <h2 className="learn-more-item-title">{props.title}</h2>
        <button className="learn-more-item-button" value="Learn More">Learn More</button>
        <div className="learn-more-item-play-learn-small">
          <button className="learn-more-item-button small" value="Play Media">Play Media</button>
          <button className="learn-more-item-button small" value="Learn More">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default LearnMoreItem
