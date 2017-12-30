import { TweenMax } from 'gsap'

export function fadeInUp(className, totalDuration, inBetweenDuration, callback) {
  TweenMax.staggerFromTo(
    document.getElementsByClassName(className), 
    totalDuration, 
    { opacity: 0.2, transform: 'translateY(10px)' }, 
    { opacity: 1, transform: 'translateY(0px)' }, 
    inBetweenDuration,
    callback
  )
  }

export function fadeIn(className, totalDuration, inBetweenDuration, callback) {
  TweenMax.staggerFromTo(
    document.getElementsByClassName(className), 
    totalDuration,
    { opacity: 0 }, 
    { opacity: 1 }, 
    inBetweenDuration,
    callback
  )
}