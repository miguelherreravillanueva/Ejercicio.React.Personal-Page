import React from 'react'
import "./Header.css"

const Header = (props) => {
    console.log(props.user)
  return (
    <h1 className="header"> The {props.user.name} {props.user.surname}'s blog page</h1>
  )
}
    export default Header