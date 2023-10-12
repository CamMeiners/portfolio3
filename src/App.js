import './App.css';
import { useState } from 'react';
import Home from './Components/Home';
import Helmet from 'react-helmet';
import Me from './Components/Me';
import Project from './Components/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Turtle from './Components/turtle.png';
function App() {
  const [current, setCurrent] = useState('home');
  return (
    <div className="App">
      <Helmet>
        <title>Cam's Portfolio</title>
        <link rel="icon" href={Turtle}></link>
      </Helmet>
      <div className="main">
        <h1 className="title">I'm Cam</h1>
        <div className="items">
          <p onClick={() => setCurrent('home')}>home</p>
          <p onClick={() => setCurrent('project')}>projects</p>
          <p onClick={() => setCurrent('me')}>about me</p>
        </div>
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com/in/cameronmeiners/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/CamMeiners"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="socialIcon" icon={faGithub} />
          </a>
        </div>
        <div className="contentBox">
          <div className="content">
            {(current === 'home' && <Home />) ||
              (current === 'project' && <Project />) ||
              (current === 'me' && <Me />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
