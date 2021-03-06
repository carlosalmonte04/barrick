import React, { Component } from 'react'
import * as Animated from 'animated/lib/targets/react-dom'

const AnimatedWrapper = WrappedComponent => class AnimatedWrapper
  extends Component {
    state = {
      animate: new Animated.Value(0)
    }

    componentDidMount() {
      this.componentWillEnter(this.componentWillAppear)
    }

    componentWillUnmount() {
      this.componentWillLeave(() => {})
    }

    componentWillLeave = (cb) => {
      Animated.spring(this.state.animate, { toValue: 0 }).start()
      setTimeout(() => cb(), 175)
    }

    componentWillEnter = (cb) => {
      setTimeout(
        () => Animated.spring(this.state.animate, { toValue: 1 }).start(),
        250
      )
      cb()
    }

    componentWillAppear = (cb) => {
      Animated.spring(this.state.animate, { toValue: 1 }).start()
    }

    render() {
      const style = {
        opacity: Animated.template`${this.state.animate}`
      }
      return (
        <Animated.div style={style} className="animated-page-wrapper">
          <WrappedComponent {...this.props} />
        </Animated.div>
      )
    }
}

export default AnimatedWrapper
