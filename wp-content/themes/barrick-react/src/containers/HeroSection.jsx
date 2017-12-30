import React from 'react'
import PropTypes from 'prop-types'
import PlayMediaButton from '../components/PlayMediaButton'
import Waypoint from 'react-waypoint'


const HeroSection = (props) => {
  const { heroBgImage, heroFeaturedPostTitle, heroPlayCaption, heroWelcomeText } = props

  return (
    <section className="hero" style={{ backgroundImage: `url( '${heroBgImage}' )` }}>
      <div className="hero-post-container">
        <h4 className="hero-post-header">{heroWelcomeText}</h4>
        <h1 className="hero-post-title">{heroFeaturedPostTitle}</h1>
        <Waypoint onEnter={props.animateHeader} onLeave={props.animateHeader}>
          <div className="hero-post-play">
            <PlayMediaButton size={73} hero/>
            <span>{ heroPlayCaption } </span>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}

const { shape } = PropTypes

HeroSection.defaultProps = {
  heroBgImage: '../assets/2xhero-image.jpg',
  heroFeaturedPostTitle: 'Barrick: Delivering For Shareholders old',
  heroPlayCaption: '2018 Proxy' 
}

export default HeroSection
