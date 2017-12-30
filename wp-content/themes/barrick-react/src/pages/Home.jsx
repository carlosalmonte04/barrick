import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeroSection from '../containers/HeroSection'
import LearnMoreSection from '../containers/LearnMoreSection'
import StatsSection from '../containers/StatsSection'
import LettersSection from '../containers/LettersSection'
import AdditionalInfoSection from '../containers/AdditionalInfoSection'
import VotingItemsSection from '../containers/VotingItemsSection'
import AnnualMeetingSection from '../containers/AnnualMeetingSection'
import AnimatedWrapper from '../HOCs/AnimatedWrapper'
import Waypoint from 'react-waypoint'

class Home extends Component {

  render() {
    const {
      'hero-welcome-text'  : heroWelcomeText,
      'featured-post-title'  : heroFeaturedPostTitle,
      'play-button-caption'  : heroPlayCaption,
      'hero-background-image': heroBgImage
    } = this.props.homeFields
    const heroProps = { heroWelcomeText, heroFeaturedPostTitle, heroPlayCaption, heroBgImage }
    return (
      <div className={`Home ${this.props.start ? 'start' : ''}`}>
        <HeroSection
          { ...heroProps }
          animateHeader={this.props.animateHeader}
        />
        <Waypoint onEnter={this.props.animateLearnMoreItems} />
        <LearnMoreSection animateLearnMoreItems={this.props.animateLearnMoreItems} />
        <StatsSection />
        <LettersSection animateLetters={this.props.animateLetters} />
        <AdditionalInfoSection />
        <VotingItemsSection />
        <AnnualMeetingSection />
      </div>
    )
  }
}

Home.defaultProps = {
  homeFields: {}
}

export default AnimatedWrapper(Home)