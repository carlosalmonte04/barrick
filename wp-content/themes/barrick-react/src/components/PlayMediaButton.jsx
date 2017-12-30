import React from 'react'

const PlayMediaButton = (props) => {
  return (
    <div
      className="play-container"
      style={{
        maxHeight: props.hero ? '' : 56,
        maxWidth: props.hero ? '' : 56,
        minHeight: props.hero ? 63 : '',
        minWidth: props.hero ? 63 : '' 
      }}
    >
      <div
        className="play-triangle"
        style={{ borderWidth: props.hero ? '14px 0 14px 21px' : '11px 0 11px 18px' }}/>
    </div>
  )
}

export default PlayMediaButton
