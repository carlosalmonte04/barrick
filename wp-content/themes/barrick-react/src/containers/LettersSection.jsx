import React from 'react'
import LetterItem from '../components/LetterItem'
import chairman from '../assets/Chairman.png'
import director from '../assets/director.png'
import Waypoint from 'react-waypoint'

const LettersSection = (props) => {
  return (
    <section className="letters">
      <Waypoint onEnter={props.animateLetters}>
        <div className="letters-content-wrapper">
          <LetterItem 
            title="Letter from the Executive Chairman"
            intro="At this time last year, we told you what we planned to do in 2016. 
                  Then, we did it. We met our overarching 
                  objective: to grow free cash flow per share."
            iconPos="right"
            imageUrl={chairman}
          />
          <LetterItem
            title="Letter from the Lead Director" 
            intro="At this time last year, we told you what we planned to do in 2016. 
                  Then, we did it. We met our overarching 
                  objective: to grow free cash flow per share."
            iconPos="left"
            imageUrl={director}
            reversed
          />
        </div>
      </Waypoint>
    </section>
  )
}

export default LettersSection