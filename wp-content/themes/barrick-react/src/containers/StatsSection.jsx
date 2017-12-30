import React from 'react'
import StatItem from '../components/StatItem'
import Waypoint from 'react-waypoint'

const StatsSection = (props) => {
  return (
    <section className="stats">
      <h1 className="stats-header">We Executed on All Our 2016 Priorities</h1>
      <div className="stats-items-container">
        <StatItem
          title="Maximized Free Cash Flow"
          number="1.51"
          subtitle="Billion"
          cash
          subtitleSmall="Generated in Free Cash Flow"
          chartHeader="Since last year, we more than tripled our free cash flow:"
          chart="one"
        />
        <div className="stat-item-divider" />
        <StatItem
          title="Strengthened The Balance Sheet"
          number="2"
          subtitle="Billion"
          cash
          subtitleSmall="Debt reduction target achieved"
          chartHeader="Since the end of 2014, we have reduced our total debt by 40%:"
          chart="two"
        />
        <div className="stat-item-divider" />
        <StatItem
          title="Achieved Operational Exellence"
          subtitleSmall="Implemented Best-in-Class operations and launched our digital reinvention with Cisco"
          chartHeader="In 2016 we reduced our cost of sales and AISC to $798/oz and $730/oz, respectively:"
          chart="three"
        />
        {<div className="stat-item-divider last" />}
      </div>
      <Waypoint onEnter={props.animateLearnMoreItems} />
    </section>
  )
}

export default StatsSection
