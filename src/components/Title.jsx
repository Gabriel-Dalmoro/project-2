import React from 'react'
import { Link } from 'react-router-dom'

function Title() {
  return (
    <>
      <header>
        <h1 id='main-title'><Link to='/'>FunActive</Link></h1>
        <h3>Search</h3>
        <h3><Link to='/about'>About</Link></h3>
        <h3><Link to='/login'>Login</Link></h3>
      </header>
    </>
  )
}

export default Title