import React from 'react';
import { Link } from 'react-router-dom';
import activities from '../activities.js';

function Footer() {
  return (
    <div>
      <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic">About us</div>
              <p>
                Funactive is an app that provides information about the fun
                activities within Calgary.
              </p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone">
                <a href="#">
                  <i className="fas fa-phone-volume" />
                  527 239 6705
                </a>
              </div>
              <div className="email">
                <a href="#">
                  <i className="fas fa-envelope" />
                  funactive@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">Activities</div>
            {activities.map(props => (
            <div>
              <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
            </div>))}
          </div>
          <div className="media-icons">
            <a
              href="https://www.instagram.com/inceptionu_ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a 
              href="https://twitter.com/_inceptionu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
            <a 
              href="https://www.youtube.com/@inceptionultd6615"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube" />
            </a>
            <a 
              href="https://www.linkedin.com/company/inceptionultd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="bottom">
          <p>
            Copyright © 2022 <Link to="/">FunActive</Link> All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
