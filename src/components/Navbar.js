import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContent">
        <h1 className="logo" draggable="true">
          <a href="/">cm</a>
        </h1>
        <h1>
          <a href="/about">about</a>
        </h1>
        <h1>
          <a href="/contact">contact</a>
        </h1>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/cameron-meiners-07b271185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/CamMeiners"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/cammeiners/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
