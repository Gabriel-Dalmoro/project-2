import React from 'react'
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <>
      {/* <script src="https://kit.fontawesome.com/83f09b8128.js" crossOrigin="anonymous"></script> */}
      <header>
        <h1 id='main-title'><NavLink to='/'>FunActive</NavLink></h1>
        <h3>Search</h3>
        <h3><NavLink to='/about'>About</NavLink></h3>
        <h3><NavLink to='/login'>Login</NavLink></h3>
      </header>
      <p id='subtitle'>
        What would you like to do today?
      </p>
    </>
  )
}

export default Title