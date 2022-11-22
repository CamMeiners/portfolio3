import './App.css';
import Home from './components/Home';
import Helmet from 'react-helmet';
import Turtle from './components/pics/turtle.png';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Contact from './components/Contact';
function App() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Helmet>
        <title>Cam's Portfolio</title>
        <link rel="icon" href={Turtle}></link>
      </Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
      <Navbar page={page} setPage={setPage} />
      {page === 1 && <Home />}
      {page === 2 && <About />}
      {page === 3 && <Contact />}
      <Footer page={page} setPage={setPage} />
    </div>
  );
}

export default App;
