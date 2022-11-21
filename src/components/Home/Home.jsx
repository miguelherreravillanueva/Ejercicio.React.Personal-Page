import React from 'react'
import "./Home.css"

const Home = (props) => {
    console.log(props.user)
  return (
    <p className='home'> Welcome to my page. I'm {props.user.name} {props.user.surname}, a {props.user.age} years old guy from Valencia, Spain, who's learning web development.</p>
  )
}
    export default Home