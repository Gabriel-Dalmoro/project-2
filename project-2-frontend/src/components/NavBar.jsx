import React from 'react';
import { Link } from 'react-router-dom';

function Body() {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
          <Link to='/'>FunActive</Link>
          </div>
          <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/login'>Login</Link>  
                </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Body;
