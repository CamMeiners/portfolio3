import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spotify } from 'react-spotify-embed';
export default function Project() {
  const [active, setActive] = useState(0);
  const projects = [
    {
      title: 'Coder Heroes',
      date: '02/2022',
      github: 'https://github.com/BloomTech-Labs/coder-heroes-be',
      live: 'https://www.coderheroes.com/',
      desc: 'I did backend work for a non profit organization, writing over 70 unit tests in order to maximize end to end testing with an emphasis on test driven development.',
      tech: 'Jest, SQL, JS, Express, Node.js',
    },
    {
      index: 1,
      title: 'Star Wars API',
      date: '03/2022',
      github: 'https://github.com/CamMeiners/technical-interview',
      live: 'https://technical-interview.vercel.app/worlds/1',
      desc: 'I built a simple website for fetching data from the commonly known Star Wars API as part of a technical interview.',
      tech: 'JS, HTML/CSS, React, Axios',
    },
    {
      index: 2,
      title: 'Filmstack',
      date: '03/2023',
      github: 'https://github.com/CamMeiners/filmstack',
      desc: 'Filmstack aims to help users rate and organize movies. It utilizes the iMDB movie database and allows users to save rankings to their profile.',
      tech: 'TypeScript, HTML/CSS, React, Axios, SQL, Express, Node.js',
    },
    {
      index: 3,
      title: 'Anywhere Fitness',
      date: '11/2022',
      github: 'https://github.com/ft-anywhere-fitness-7/back-end',
      desc: 'An application done through my schooling, I built the backend user login systems along with my classmates.',
      tech: 'JS, Express, SQL, Axios',
    },
    {
      index: 4,
      title: 'Widgets',
      date: '06/2023',
      github: '',
      live: '',
      desc: "This is my playground site, it hosts a few of my smaller bits of code that don't warrant their own full website.",
      tech: 'JS, TS, Axios, HTML/CSS, React',
    },
  ];

  function toggle(index) {
    setActive(index);
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={projects}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="projectText">
          <div className="projectHeaders">
            {projects.map((p, index) => (
              <div key={p.title}>
                <div className="projects" onClick={() => toggle(index)}>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={active === index ? 'caretActive' : 'caret'}
                  />
                  <h1>{p.title}</h1>
                </div>
                {active === index ? (
                  <div className="dropdownBox">
                    <div className="dropdown">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={p.index}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h1>{p.title}</h1>
                          <p className="dropDesc">{p.desc}</p>
                          <p className="dropTech">Techstack: {p.tech}</p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                ) : null}

                <div className="details">
                  <p>{p.date}</p>
                  <a href={p.github} target="blank">
                    Github
                  </a>
                  {p.live && <a href={p.live}>Live Site</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
