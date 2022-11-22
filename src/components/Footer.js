import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Footer({ page, setPage }) {
  return (
    <div className="footer">
      <div className="footContent">
        <div>
          <h1 onClick={() => setPage(2)}>about</h1>
          <h1 onClick={() => setPage(3)}>contact</h1>
        </div>

        <div className="footerIcons">
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
}

export default Footer;
