import React from 'react'


const StatItem = (props) => {
  return (
    <div className="stat-item">
      <div className="stat-item-words-container">
        <div className={`stat-item-title ${props.chart}`}>
          <h2>{props.title}</h2>
          <div className={`stat-item-icon ${props.chart}`} />
        </div>
        <div className="stat-item-line" />
          {props.cash
            ? <div className={`stat-item-subtitle ${props.chart}`}>
                <span className="stat-item-subtitle-number">{props.number}</span>
                <span>{props.subtitle}</span>
                <span>{props.subtitleSmall}</span>
              </div>
            : <div className="stat-item-subtitle no-cash">
                <span>{props.subtitleSmall}</span>
              </div>
          }
      </div>
      <div className="stat-item-chart-container">
        <span className={`stat-item-chart-header ${props.chart}`}>{props.chartHeader}</span>
        <div className={`stat-item-chart ${props.chart}`}></div>
      </div>
      <button className="stat-item-button">See chart</button>
    </div>
  )
}

export default StatItem
