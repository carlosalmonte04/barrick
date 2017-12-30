import React from 'react'
import RightArrow from './RightArrow'

const AdditionInfoItem = (props) => {
  return (
    <div className="additional-info-item">
      <div className="additional-info-item-overlay" />
      <span className="additional-info-item-text">{props.text}<RightArrow /></span>
    </div>
  )
}

export default AdditionInfoItem
