import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLink = (props) => {
  if (props.children) {
    return (
      <div className={props.className} style={props.style}>
        {props.text}
          {props.children}
      </div>
    )
  } else if (props.link) {
    return (
      <li className={props.className} style={props.style}>
        <Link to={"/" + props.link.split('/').slice(-2,-1)[0]}>{getLinkText(props.link)}</Link>
      </li>
    )
  } else {
    return (
      <li className={props.className} style={props.style}>
        <Link to="/">{props.text}</Link>
      </li>
    )
  }
}

const getLinkText = (link) => {
  console.log("I AM LINK", link)
  return (
  link
    .split("/")
    .slice(-2, -1)[0]
    .split('-')
    .map(word => {
      const wordArr = word.split('')
      return wordArr[0].toUpperCase() + wordArr.slice(1).join('')
    })
    .join(' ')
    )
}


export default HeaderLink
