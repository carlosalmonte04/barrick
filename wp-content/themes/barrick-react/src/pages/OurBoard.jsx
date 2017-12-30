import React from 'react'
import PropTypes from 'prop-types'
import Header from '../containers/Header'
import Footer from '../containers/Footer'

import AnimatedWrapper from '../HOCs/AnimatedWrapper'

const OurBoard = (props) => {
  console.log("BOARD EHWAT")
  return (
    <div className="Our-Board">
      <div style={{height: 500, color: 'black', backgroundColor: 'black'}}>
        <h1>OUR BOARD</h1>
      </div>
    </div>
  )
}

export default AnimatedWrapper(OurBoard)
