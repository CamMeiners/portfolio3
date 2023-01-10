import React from 'react';
import Headshot from './pics/headshot.jpg';
import CoderHeroes from './pics/coderheros.PNG';
import Portfolio from './pics/portfolio.PNG';
import './MobileHome.css';
import Starwars from './pics/starwars.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function MobileHome() {
  return (
    <div className="mobileHome">
      <section>
        <div className="main">
          <div draggable className="selfie">
            <img className="headshot" src={Headshot} alt="headshot" />
          </div>
        </div>
      </section>
      <section className="techStack">
        <div draggable className="coder">
          <h1>&#60;coder/&#62;</h1>
          <div className="coderContent">
            <div className="coderContent1">
              <p>react</p>
              <p>sql</p>

              <p>javascript</p>
              <p>html/css</p>
            </div>
            <div className="coderContent2">
              <p>git/github</p>
              <p>typescript</p>
              <p>node</p>
              <p>angular</p>
            </div>
          </div>
        </div>
        <div draggable className="creator">
          <h1>creator</h1>
          <div className="creatorContent">
            <p>figma</p>
            <p>canva</p>
            <p>wordpress</p>
            <p>material ui</p>
          </div>
        </div>
      </section>
      <section>
        <div className="bottom">
          <div className="bottomHeader">
            <h1 draggable>my recents</h1>
          </div>
          <div className="bottomContent">
            <div className="piece1">
              <ul className="ul">
                <li>
                  <i className="">
                    <a
                      href="https://github.com/CamMeiners/technical-interview"
                      target="blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </i>
                  <i>
                    <a
                      href="https://technical-interview.vercel.app/worlds/1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </i>
                </li>
              </ul>
              <img className="piece1Img" src={Starwars} alt="coderheroes" />
              <div className="p1Context">
                <h2 draggable>SWAPI App</h2>
                <p draggable>
                  I had the opportunity to utilize the widely known Star Wars
                  API to build a project for a technical interview, honing my
                  React skills in a professional setting.
                </p>
              </div>
            </div>

            <div className="piece1">
              <ul className="ul">
                <li>
                  <i className="">
                    <a
                      href="https://github.com/BloomTech-Labs/coder-heroes-be"
                      target="blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </i>
                  <i>
                    <a
                      href="https://www.coderheroes.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </i>
                </li>
              </ul>
              <img className="piece1Img" src={CoderHeroes} alt="coderheroes" />
              <div className="p1Context">
                <h2 draggable>Coder Heroes</h2>
                <p draggable>
                  During my experience at Bloomtech, I was the back-end
                  engineer, writing more than 70 Express tests and building the
                  backend of the login API.
                </p>
              </div>
            </div>

            <div className="piece1">
              <ul className="ul">
                <li>
                  <i className="">
                    <a
                      href="https://github.com/CamMeiners/portfolio3"
                      target="blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </i>
                  <i>
                    <a
                      href="https://www.cammeiners.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </i>
                </li>
              </ul>
              <img className="piece1Img" src={Portfolio} alt="portfolio" />
              <div className="p1Context">
                <h2 draggable>This Portfolio</h2>
                <p draggable>
                  As my favorite thing to work on, my portfolio lets me showcase
                  my own skills, experiences, and projects. It encompasses
                  everything I am as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileHome;
