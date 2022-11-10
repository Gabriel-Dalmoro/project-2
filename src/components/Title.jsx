import React from 'react'

function Title() {
  return (
    <>
      {/* <script src="https://kit.fontawesome.com/83f09b8128.js" crossOrigin="anonymous"></script> */}
      <header>
        <h3>Search</h3>
        <div className='icon-title'>
          {/* <FontAwesomeIcon id='icon' icon="fa-solid fa-person-snowboarding" /> */}
          <h1 id='main-title'>Calgary Activity App</h1>
        </div>
        <h3>Login</h3>
      </header>
      <p id='subtitle'>
        What would you like to do today?
      </p>
    </>
  )
}

export default Title