import { Spotify } from 'react-spotify-embed';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Me.css';
import Mustang from './mustang.JPG';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import ThreeDMustang from './mustang10.glb';
import Cs from './cs2.jpg';
import Ror from './ror.jpg';
import Terraria from './t1.png';

function Hobbies() {
  return (
    <div>
      <div className="meText">What I'm currently interested in</div>
      <div className="meParagraph">
        I love anything that I can work on with my hands. This culminates in a
        love for cars, and I'm currently building and driving a 1966 Ford
        Mustang. When I'm not in the garage or writing code, I'm spending time
        with my friends, family, or border collie, Chief.
      </div>
      <img className="carImg" src={Mustang} alt="car" />
    </div>
  );
}
function Games() {
  return (
    <div>
      <div className="meText">What I'm currently playing</div>
      <div className="meParagraph">
        As a tech involved as I am, it's no surprise that I like to spend free
        time gaming with my brothers and friends. I love Terraria, Risk of Rain
        2, and Counter Strike.
      </div>
      <div className="gameImgs">
        <a
          href="https://store.steampowered.com/app/730/CounterStrike_2/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="gameImg" src={Cs} alt="cs" />
        </a>
        <a
          href="https://store.steampowered.com/app/105600/Terraria/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="gameImg" src={Terraria} alt="terraria" />
        </a>
        <a
          href="https://store.steampowered.com/app/632360/Risk_of_Rain_2/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="gameImg" src={Ror} alt="ror" />
        </a>
      </div>
    </div>
  );
}
function Music() {
  return (
    <div>
      <div className="meText">What I'm currently listening to</div>
      <div className="meParagraph">
        Music is a huge part of my life. I always have an AirPod in or the car
        speakers blasting. I love a little bit from all genres, but my favorites
        are Pink Floyd, $uicideBoy$, and Kanye West.
      </div>
      <Spotify
        className="spotify"
        link="https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1?si=67873bae01b943e0"
      />
    </div>
  );
}
function Model(props) {
  const { scene } = useGLTF(ThreeDMustang);
  return <primitive object={scene} {...props} />;
}
function Car() {
  return (
    <div>
      <Canvas
        className="canvas"
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '600px',
          height: '600px',
          zIndex: '-1',
        }}
        touch-action="none"
      >
        <color attach="background" args={['#d9e5d6']} />
        <PresentationControls
          speed={0.4}
          global
          polar={[-0.1, Math.PI / 4]}
          touch-action="none"
        >
          <Stage environment={'warehouse'} touch-action="none" intensity={0}>
            <Model
              scale={0.1}
              touchaction="manipulation"
              position={[1, 1, 1]}
            />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
function Working() {
  return (
    <div>
      <div className="meText">What I'm currently working on</div>
      <div className="meParagraph">
        3D animation and Blender and how it can accentuate and amplify a
        website's UX has been my focus recently. Take a look at this 3D model of
        my car I created in Blender.
      </div>
    </div>
  );
}

export default function Me() {
  const [current, setCurrent] = useState(0);
  function scrollUp() {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  }
  function scrollDown() {
    if (current !== 3) {
      setCurrent(current + 1);
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Me}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className="downArrow"
          onClick={() => scrollDown()}
          style={{
            color: current === 3 ? 'lightgray' : 'gray',
            cursor: current === 3 ? 'default' : 'pointer',
          }}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className="upArrow"
          onClick={() => scrollUp()}
          style={{
            color: current === 0 ? 'lightgray' : 'gray',
            cursor: current === 0 ? 'default' : 'pointer',
          }}
        />

        {current === 0 && (
          <motion.div
            key={Hobbies}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Hobbies />
          </motion.div>
        )}
        {current === 1 && (
          <motion.div
            key={Working}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Working />
            <div className="carWrapper">
              <Car />
            </div>
          </motion.div>
        )}
        {current === 2 && (
          <motion.div
            key={Music}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Music />
          </motion.div>
        )}
        {current === 3 && (
          <motion.div
            key={Games}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Games />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
