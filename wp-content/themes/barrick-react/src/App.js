import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { debounce } from 'underscore'
import Header from './containers/Header'
import Home from './pages/Home'
import OurBoard from './pages/OurBoard'
import Footer from './containers/Footer'
import { fadeInUp, fadeIn } from './helpers/animators'
import './App.css'

import getPagesAndFields from './actions/getPagesAndFields'

const DEV = process.env.NODE_ENV === 'development'
const REACT_SERVER = process.env.REACT_APP_REACT_SERVER

class App extends Component {

  state = {
    DOMMounted: false,
    learnMoreAnimated: false,
    lettersAnimated: false,
    headerShrink: false
  }

  componentDidMount() {
    this.props.getPagesAndFields()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.DOMMounted && nextProps.dataReady) {
      const heroDomImg = new Image()
      console.log("GOT", this.props.pagesAndFields)
      heroDomImg.src = nextProps.pagesAndFields["/"]["hero-background-image"]
      heroDomImg.onload = this.fadeInWelcome // wait for hero image to load before showing page
    }
  }

  handleAnimateHeader = (waypoint) => { // debounce header animation for added smoothness
    debounce(this.animateHeader.bind(this, waypoint), 300, true)()
  }

  animateHeader = (waypoint) => {
    if (waypoint.currentPosition === 'above' && !this.state.headerShrink) {
      this.setState({ headerShrink: true })
    }
    else if (this.state.headerShrink !== '') {
      this.setState({ headerShrink: false })
    }
  }

  animateLearnMoreItems = () => {
    return null
    if (!this.state.learnMoreAnimated) {
      fadeInUp('learn-more-item', 1.5, 0.2)
      this.setState({ learnMoreAnimated: true })
    }
  }

  animateLetters = () => {
    return null
    if (!this.state.lettersAnimated) {
      fadeIn('letter-item-boss-man', 1, 0.1)
      this.setState({ lettersAnimated: true })
    }
  }

  fadeInWelcome = () => {
    fadeInUp('hero-post-header::after', 1, 0.1) // animate line under 'welcome' @ hero
    fadeInUp(
      'header-link',
      1,
      0.1,
      this.setState({
        headerShrink: window.pageYOffset > 570,
        DOMMounted: true
      })
    )
  }

  renderApp = (homeFields) => (
    <div>
      <Route
        exact path={DEV && !REACT_SERVER ? "/barrick" : "/"}
        render={(locationProps) => (
          <Home
            {...locationProps}
            start={!!this.state.DOMMounted}
            homeFields={homeFields}
            animateLearnMoreItems={this.animateLearnMoreItems}
            animateLetters={this.animateLetters}
            animateHeader={this.handleAnimateHeader}
            headerShrink={this.state.headerShrink}
          />
        )}
      />
      <Route exact path="/our-board" component={OurBoard} />
    </div>
  )

  render() {
    const isAppReady = !!this.state.DOMMounted
    const { // deconstruct and rename
      "/" : homeFields,
      "header" : headerFields
    } = this.props.pagesAndFields
    return (
      <div className={`App start ${isAppReady ? 'start' : ''}`}>
        <Header headerShrink={this.state.headerShrink} headerFields={headerFields} loading={!isAppReady} />
        { isAppReady ? this.renderApp(homeFields) : null }
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pagesAndFields : state.pagesAndFields,
    dataReady: state.dataReady,
    error : state.error
  }
}

export default withRouter(connect(mapStateToProps, { getPagesAndFields })(App))
